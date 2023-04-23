import fs from "fs/promises";

interface Note {
  id: string;
  title: string;
  content: string;
}

export type NotesType = Note[];

export async function getStoredNotes(): Promise<NotesType> {
  const rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  return data.notes || [];
}

export function storeNotes(notes: NotesType) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}
