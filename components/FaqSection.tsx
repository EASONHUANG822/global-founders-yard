"use client";

import { faqs } from "@/data/faqs";
import { cn } from "@/components/LandingPrimitives";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useEffect, useRef, useState } from "react";

export function FaqSection() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = faqs.length;

  function prev() {
    setActive((i) => (i - 1 + total) % total);
  }

  function next() {
    setActive((i) => (i + 1) % total);
  }

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.children[active] as HTMLElement;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - el.offsetLeft,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <section
      id="faq"
      className="border-y border-white/10 bg-yard-panel px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-white/[0.48]">
                FAQ
              </p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Common questions
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-black tabular-nums text-white/[0.42]">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                aria-label="Previous question"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                aria-label="Next question"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative mt-10">
          <div
            ref={containerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {faqs.map((item, index) => (
              <article
                key={item.question}
                className={cn(
                  "min-w-[85%] shrink-0 snap-center rounded-[1.5rem] border p-6 transition duration-300 sm:min-w-[60%] lg:min-w-[45%]",
                  index === active
                    ? "border-white/25 bg-white/[0.07]"
                    : "border-white/10 bg-white/[0.045] opacity-60",
                )}
                onClick={() => setActive(index)}
              >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-white/[0.32]">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-black tracking-[-0.02em] text-white">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/[0.58]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {faqs.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === active
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/20 hover:bg-white/40",
                )}
                aria-label={`Go to question ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
