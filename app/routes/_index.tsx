import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <main>
      <h1>A better way to track notes</h1>
      <p>Try our early beta and never loose track of you notes again!</p>
      <Link to={"/notes"} className={"text-blue-700"}>
        Try Now!
      </Link>
    </main>
  );
}
