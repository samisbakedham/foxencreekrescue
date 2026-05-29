"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PawMark } from "./paw-mark";

const links = [
  { href: "/animals", label: "Animals" },
  { href: "/foster", label: "Foster & Volunteer" },
  { href: "/#how-we-work", label: "How We Work" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-terracotta/15 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand text-terracotta">
            <PawMark className="h-6 w-6" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-tight text-bark">
              Foxen Creek
            </span>
            <span className="block text-[0.625rem] font-medium uppercase tracking-[0.4em] text-clay">
              Rescue
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === pathname ||
              (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]) && link.href.startsWith("/animals")) ||
              (link.href.startsWith("/foster") && pathname.startsWith("/foster"));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terracotta ${
                  active ? "text-terracotta" : "text-bark/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/foster"
            className="rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-sand transition-colors hover:bg-clay"
          >
            Get involved
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-bark md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-terracotta/15 bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-bark/85 hover:bg-sand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/foster"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-terracotta px-5 py-2.5 text-center text-sm font-semibold text-sand"
            >
              Get involved
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
