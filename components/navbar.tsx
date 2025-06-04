import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "./active-link";

const navItems: Array<{
  path: string;
  label: string;
}> = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/pricing",
    label: "Pricing",
  },
];

export function NavBar() {
  return (
    <nav className="flex border-b 0 mx-auto px-6 py-4 shadow-sm gap-4">
      <Link href="/" className="flex gap-2 items-center">
        <HomeIcon className="w-6 h-6" />

        <span>Home</span>
      </Link>

      <div className="flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.path} path={item.path} label={item.label} />
      ))}
    </nav>
  );
}
