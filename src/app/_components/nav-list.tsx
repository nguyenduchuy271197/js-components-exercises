import { ROUTES } from "@/constants";
import NavLink from "./nav-link";

export default function NavList() {
  return (
    <ul className="flex flex-col gap-2 items-start">
      {ROUTES.map((route) => (
        <NavLink key={route.label} {...route} />
      ))}
    </ul>
  );
}
