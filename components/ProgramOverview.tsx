import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const processRows = [
  {
    number: "01",
    title: "Diagnosis",
    description:
      "Clarify your stage, Shenzhen thesis, supply chain gaps, and the highest-leverage local context.",
    href: "/program/diagnosis",
  },
  {
    number: "02",
    title: "Matching",
    description:
      "Map the right suppliers, manufacturers, component sources, and technical iteration partners.",
    href: "/program/matching",
  },
  {
    number: "03",
    title: "Partners",
    description:
      "Connect with operators, founders, service providers, and landing partners who reduce friction.",
    href: "/program/partners",
  },
];

const outcomes = ["Trust", "Speed", "Access"];

export function ProgramOverview() {
  return (
    <section id="system" className="relative px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <span id="program" className="absolute -top-24" aria-hidden="true" />
      <ScrollReveal>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-glow backdrop-blur sm:p-6 lg:p-8">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-yard-panel p-6 sm:p-8 lg:p-12">
            <div className="absolute inset-0 dark-grid opacity-20" />
            <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/[0.58]">
                  Landing Engine
                </span>
                <h2 className="mt-8 max-w-3xl text-balance text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                  From outside uncertainty to local operating context.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.62]">
                  Global Founders Yard is a structured route into Shenzhen:
                  diagnose the founder bottleneck, match the right local
                  resources, and move toward credible partners and pilots.
                </p>
              </div>

              <div>
                <div className="grid gap-4">
                  {processRows.map((row) => (
                    <Link key={row.number} href={row.href} className="block">
                    <article
                      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] sm:p-6"
                    >
                      <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.055] text-sm font-black text-white">
                          {row.number}
                        </span>
                        <div>
                          <h3 className="text-xl font-black uppercase tracking-[0.16em] text-white">
                            {row.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-white/[0.56]">
                            {row.description}
                          </p>
                        </div>
                        <div className="hidden h-14 w-24 items-center justify-center sm:flex">
                          <span className="h-px w-full bg-gradient-to-r from-white/[0.35] to-transparent transition group-hover:from-white/70" />
                        </div>
                      </div>
                    </article>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-5"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-white/[0.38]">
                        Outcome
                      </p>
                      <p className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
