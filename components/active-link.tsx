"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink({ path, label }: { path: string; label: string }) {
  const pathname = usePathname();

  return (
    <Link
      className="text-gray-400 hover:text-white transition-colors aria-[current=page]:text-white"
      href={path}
      aria-current={pathname === path ? "page" : undefined}
    >
      <span>{label}</span>
    </Link>
  );
}
