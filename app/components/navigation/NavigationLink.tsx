import { NavLink } from "@remix-run/react";
import type { NavLinkProps } from "@remix-run/react";

interface NavigationLinkProps extends NavLinkProps {
  text: string;
  className?: string;
}

export default function NavigationLink({
  to,
  text,
  className = "",
}: NavigationLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `hover:text-secondary-300 text-secondary-200 ${className}`
          : `text-primary-10 hover:text-secondary-300 ${className}`
      }
    >
      {text}
    </NavLink>
  );
}
