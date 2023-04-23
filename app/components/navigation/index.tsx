import NavigationLink from "~/components/navigation/NavigationLink";

export default function MainNavigation() {
  return (
    <nav className={"py-8 px-[15%] flex justify-center gap-7"}>
      <NavigationLink text={"Home"} to={"/"} />
      <NavigationLink text={"My Notes"} to={"/notes"} />
    </nav>
  );
}
