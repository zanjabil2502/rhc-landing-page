"use client";

import { Menu, X } from "lucide-react";

// ponytail: native <details> dropdown; client only to close it after a link click
export function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  return (
    <details className="group relative xl:hidden">
      <summary
        aria-label="Buka menu"
        className="grid size-11 cursor-pointer list-none place-items-center rounded-full border-2 border-navy/15 bg-white text-navy [&::-webkit-details-marker]:hidden"
      >
        <Menu className="size-5 group-open:hidden" />
        <X className="hidden size-5 group-open:block" />
      </summary>
      <nav
        aria-label="Navigasi utama"
        className="absolute right-0 mt-3 w-[min(16rem,calc(100vw-2rem))] rounded-3xl border-2 border-line bg-white p-2 shadow-card"
      >
        {items.map((n) => (
          <a
            key={n.href}
            href={n.href}
            onClick={(e) => e.currentTarget.closest("details")?.removeAttribute("open")}
            className="block rounded-2xl px-4 py-3 font-bold text-navy hover:bg-cream-deep"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
