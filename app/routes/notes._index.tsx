import AddNote from "~/components/AddNote";
import { getStoredNotes, storeNotes } from "~/data/notes";
import { json, redirect } from "@remix-run/node";
import NotesList from "~/components/NotesList";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import MainError from "~/components/MainError";
import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import type { NotesType } from "~/data/notes";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "All Notes" },
    { name: "description", content: "Manage your notes with ease" },
    { property: "og:title", content: "All Notes" },
  ];
};

export async function loader() {
  const notes = await getStoredNotes();
  if (notes.length === 0) {
    throw json(
      { message: "No notes were found" },
      { status: 404, statusText: "Not found" }
    );
  }
  return json(notes);
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const { title, content } = Object.fromEntries(formData);
  if (typeof title !== "string" || typeof content !== "string") {
    return json({ error: true, message: `Incorrect format` });
  }

  if (title.trim().length < 5) {
    return json({ error: true, message: `Title is not long enough` });
  }

  // Add more validation..
  const existingNotes: NotesType = await getStoredNotes();
  const allNotes: NotesType = [
    ...existingNotes,
    {
      id: new Date().toISOString(),
      title: title.trim(),
      content: content.trim(),
    },
  ];

  await storeNotes(allNotes);

  return redirect("/notes");
}
export default function Notes() {
  const data: NotesType = useLoaderData<typeof loader>();

  return (
    <main>
      <AddNote />
      <NotesList notes={data} />
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <AddNote />
        <p className={"max-w-5xl mx-auto text-center text-primary-10"}>
          {error.data.message}
        </p>
      </main>
    );
  }

  return (
    <MainError
      linkText={"Back Home"}
      header={"Oops - Notes Error"}
      text={
        error instanceof Error
          ? error.message
          : "Something went wrong with notes"
      }
    />
  );
}
