import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "~/data/notes";
import { json } from "@remix-run/node";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import type { Note } from "~/data/notes";

export const meta: V2_MetaFunction = ({ data }) => {
  return [
    { title: data.title },
    { name: "description", content: "Manage your notes with ease" },
    { property: "og:title", content: data.title },
  ];
};

export async function loader({ params }: LoaderArgs) {
  const allNotes = await getStoredNotes();
  const id = params.noteId;
  const selectedNote = allNotes.find((note) => note.id === id);

  if (!selectedNote) {
    throw json(
      { message: `Couldn't find note for id: ${id}` },
      { status: 404 }
    );
  }

  return json(selectedNote);
}

export default function NoteDetails() {
  const data: Note = useLoaderData<typeof loader>();
  return (
    <main
      className={
        "max-w-2xl my-12 mx-auto p-8 text-center text-primary-50 rounded-3xl "
      }
    >
      <nav className={"mt-4 mb-8"}>
        <Link
          to={"/notes"}
          className={"text-primary-300 p-2 hover:text-primary-500"}
        >
          Back to all Notes
        </Link>
      </nav>
      <h1 className={"text-3xl"}>{data.title}</h1>
      <p className={"text-primary-200 whitespace-pre-wrap text-xl"}>
        {data.content}
      </p>
      <time
        dateTime={data.id}
        className={"text-primary-200 whitespace-pre-wrap text-sm"}
      >
        {new Date(data.id).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </time>
    </main>
  );
}
