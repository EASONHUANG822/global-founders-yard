import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CtaSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 text-white shadow-glow backdrop-blur sm:p-8 lg:p-10">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-yard-panel p-7 sm:p-10 lg:p-14">
            <div className="absolute inset-0 dark-grid opacity-20" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-white/[0.42]">
                  Final call
                </p>
                <h2 className="max-w-4xl text-balance text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                  Ready to build from Shenzhen?
                </h2>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-white/[0.62]">
                  Share what you are building and where Shenzhen could unlock
                  speed, context, partners, customers, or capital.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/apply"
                  className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-ink shadow-[0_18px_60px_rgba(255,255,255,0.13)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Start your application
                </Link>
                <Link
                  href="/ecosystem"
                  className="rounded-full border border-white/[0.14] bg-white/[0.035] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.07]"
                >
                  View ecosystem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
