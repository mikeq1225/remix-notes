export default function AddNote() {
  return (
    <form
      method={"post"}
      id={"note-form"}
      className={
        "flex flex-col items-center p-8 max-w-md my-10 mx-auto rounded-md bg-primary-100 shadow-md"
      }
    >
      <label htmlFor={"title"} className={"text-primary-500 font-bold"}>
        Title
      </label>
      <input
        type={"text"}
        name={"title"}
        required
        className={
          "block  w-full py-2 px-1 bg-primary-200 border-none rounded-sm text-primary-800"
        }
      />
      <label htmlFor={"content"} className={"mt-2 text-primary-500 font-bold"}>
        Content
      </label>
      <textarea
        name={"content"}
        rows={5}
        required
        className={
          "block  w-full py-2 px-1 bg-primary-200 border-none rounded-sm text-primary-800"
        }
      />
      <button
        type={"submit"}
        className={
          "mt-4 cursor-pointer px-8 py-3 border-none rounded-3xl bg-primary-200 text-primary-700 font-bold hover:bg-primary-300 disabled:bg-primary-100 disabled:text-primary-300 disabled:cursor-not-allowed"
        }
      >
        Add Note
      </button>
    </form>
  );
}
