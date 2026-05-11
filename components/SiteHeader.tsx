"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Pain points", href: "/#pain-points" },
  { label: "Engine", href: "/#system" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Support", href: "/support" },
  { label: "Network", href: "/network" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-yard-black/[0.78] text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-sm font-black uppercase tracking-[0.16em]"
          aria-label="Global Founders Yard home"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-xs text-ink shadow-[0_0_34px_rgba(255,255,255,0.16)]">
            GFY
          </span>
          <span className="truncate">Global Founders Yard</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/[0.58] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/apply"
            className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.15] text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-white transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-yard-black px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-white/[0.72] transition hover:bg-white/[0.08] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/apply"
              className="mt-2 rounded-full bg-white px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-ink"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
