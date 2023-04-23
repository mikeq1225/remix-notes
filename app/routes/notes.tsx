import AddNote from "~/components/AddNote";
import { getStoredNotes, storeNotes } from "~/data/notes";
import { json, redirect } from "@remix-run/node";
import type { NotesType } from "~/data/notes";
import type { ActionArgs } from "@remix-run/node";
import NotesList from "~/components/NotesList";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const notes = await getStoredNotes();
  return json(notes);
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const { title, content } = Object.fromEntries(formData);
  if (typeof title !== "string" || typeof content !== "string") return null;

  // Add more validation..
  const existingNotes: NotesType = await getStoredNotes();
  const allNotes: NotesType = [
    ...existingNotes,
    { id: new Date().toISOString(), title, content },
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
