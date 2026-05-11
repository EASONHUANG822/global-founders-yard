"use client";

import Link from "next/link";
import { cn } from "@/components/LandingPrimitives";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";

const painPoints = [
  {
    title: "You don't know which suppliers to trust",
    href: "/pain-points/suppliers-trust",
  },
  {
    title: "You lack local founder and investor networks",
    href: "/pain-points/local-networks",
  },
  {
    title: "Hardware iteration is slow without the right partners",
    href: "/pain-points/hardware-iteration",
  },
  {
    title: "Overseas teams struggle with local setup and market entry",
    href: "/pain-points/local-setup",
  },
];

export function PainPointsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="pain-points"
      className="relative border-y border-white/10 bg-yard-panel px-5 py-24 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="absolute inset-0 z-0 dark-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <ScrollReveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="max-w-4xl">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-white/[0.48]">
                The founder problem
              </p>
              <h2 className="max-w-5xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Building in Shenzhen is powerful. Entering it alone is hard.
              </h2>
            </div>
            <p className="mt-7 max-w-3xl text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
              As you scroll, the bottleneck changes: trust, network, iteration
              speed, landing friction, and access to real customers.
            </p>
          </div>
          <div className="mt-10 hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-white/[0.56] lg:block">
            The goal is not more noise. The goal is fewer, sharper routes into
            the right local context.
          </div>
          <div className="mt-8 hidden items-center gap-2 lg:flex">
            {painPoints.map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  index === active ? "w-8 bg-white" : "w-1.5 bg-white/20",
                )}
              />
            ))}
          </div>
        </ScrollReveal>

        <div
          className="grid gap-4 sm:grid-cols-2"
          onMouseLeave={() => setActive(0)}
        >
          {painPoints.map((point, index) => (
            <article
              key={point.title}
              onMouseEnter={() => setActive(index)}
              className={cn(
                "transition-all duration-500",
                index === active ? "opacity-100" : "opacity-30 lg:opacity-20",
              )}
            >
              <Link href={point.href} className="block h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:p-8">
                  <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/10 transition duration-500 group-hover:scale-110 group-hover:border-white/25" />
                  <div className="relative flex flex-1 flex-col">
                    <span className="mb-6 inline-flex self-start rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/[0.5] transition group-hover:border-white/[0.35] group-hover:bg-white group-hover:text-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-3xl">
                      {point.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
