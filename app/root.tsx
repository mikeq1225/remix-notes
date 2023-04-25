import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import tailwind from "~/tailwind.css";
import MainNavigation from "~/components/navigation";
import MainError from "~/components/MainError";
import type { LinksFunction } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: `Q's Remix Notes App` },
    { name: "description", content: "Remix app for organizing notes" },
    { property: "og:title", content: `Q's Remix Notes App` },
    { property: "charSet", content: "utf-8" },
    { property: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title></title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          <title>{error.statusText}</title>
        </head>
        <body>
          <header>
            <MainNavigation />
          </header>
          <MainError
            linkText={"Back to Safety"}
            header={"Oops"}
            text={error.data?.message || "Something went wrong"}
            status={error.status}
          />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }

  const defaultErrorMessage = "Unknown error";
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>Error in Q's Remix Notes App</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <MainError
          linkText={"Back to Safety"}
          header={"Oops"}
          text={error instanceof Error ? error.message : defaultErrorMessage}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
