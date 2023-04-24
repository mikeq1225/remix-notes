import { Link } from "@remix-run/react";

interface MainErrorProps {
  linkText: string;
  header: string;
  text: string;
  status?: number;
}
export default function MainError({
  linkText,
  header,
  text,
  status,
}: MainErrorProps) {
  return (
    <main
      className={
        "max-w-sm my-10 mx-auto p-8 text-center bg-secondary-100 drop-shadow-md rounded-xl"
      }
    >
      <h1>{header}</h1>
      {status && <p>{`Status: ${status}`}</p>}
      <p>{text}</p>
      <Link
        to={"/"}
        className={
          "inline-block mt-4 p-2 rounded bg-secondary-500 text-primary-10 cursor-pointer"
        }
      >
        {linkText}
      </Link>
    </main>
  );
}
