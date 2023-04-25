import type { NotesType } from "~/data/notes";
import { Link } from "@remix-run/react";

export default function NotesList({ notes }: { notes: NotesType }) {
  return (
    <div
      className={"max-w-5xl flex flex-wrap justify-center gap-4 my-8 mx-auto"}
    >
      {notes.map((note, index) => (
        <Link
          key={note.id}
          to={note.id}
          className={
            "w-[30%] bg-primary-700 drop-shadow-md p-10 rounded-md hover:bg-primary-600 hover:-translate-y-1"
          }
        >
          {/* need animation and transition for article*/}
          <article>
            <header>
              <ul
                className={
                  "flex justify-between items-center text-primary-300 font-bold pb-2 mb-2 border-primary-300 border-0 border-b-2"
                }
              >
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </li>
              </ul>
              <h2 className={"mb-2 text-primary-200"}>{note.title}</h2>
            </header>
            <p
              className={
                "text-primary-100 whitespace-nowrap overflow-hidden overflow-ellipsis w-full"
              }
            >
              {note.content}
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
}
