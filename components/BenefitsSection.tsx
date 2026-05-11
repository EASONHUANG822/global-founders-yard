import Link from "next/link";
import { benefits } from "@/data/programBenefits";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BenefitsSection() {
  return (
    <section
      id="support"
      className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-8 lg:py-36"
    >
      <span id="resources" className="absolute -top-24" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 radial-spotlight opacity-70" />
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-white/[0.48]">
                Program support
              </p>
              <h2 className="text-balance text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                What applicants can get
              </h2>
              <p className="mt-7 text-lg leading-8 text-white/[0.58]">
                Support is designed around practical landing outcomes: local
                presence, trusted context, warm introductions, and
                higher-quality conversations.
              </p>
            </div>
            <div className="hidden h-px w-32 bg-gradient-to-r from-white/20 to-transparent lg:block" />
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80} className="h-full">
              <Link href={item.href} className="block h-full">
              <article className="group relative flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-white/[0.64] transition group-hover:border-white/[0.35] group-hover:bg-white group-hover:text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 ml-4 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.58]">
                  {item.description}
                </p>
              </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
