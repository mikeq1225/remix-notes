// import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

// export const meta: V2_MetaFunction = () => {
//   return [{ title: "New Remix App" }];
// };

export default function Index() {
  return (
    <main className={"text-center text-primary-10"}>
      <h1 className={"text-4xl font-semibold mb-5"}>
        A better way of keeping track of your notes
      </h1>
      <p>Try our early beta and never loose track of you notes again!</p>
      <Link
        to={"/notes"}
        className={
          "inline-block mt-8 bg-secondary-100 text-primary-800 py-2 px-8 rounded text-2xl hover:bg-secondary-200"
        }
      >
        Try Now!
      </Link>
    </main>
  );
}
