import Link from "next/link";
import { applicantTypes } from "@/data/applicantTypes";
import {
  EditorialCard,
  NumberBadge,
  SectionHeader,
} from "@/components/LandingPrimitives";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WhoShouldApply() {
  return (
    <section
      id="who-should-apply"
      className="border-y border-white/10 bg-yard-panel px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Founder fit"
            title="Who it is for"
            description="A focused path for teams whose next bottleneck is not inspiration, but access, context, and local execution."
            split
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {applicantTypes.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 70}>
              <Link href={item.href} className="block h-full">
              <EditorialCard className="h-full">
                <div className="flex h-full min-h-72 flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <NumberBadge>0{index + 1}</NumberBadge>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white/[0.52]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-12 text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/[0.58]">
                    {item.description}
                  </p>
                </div>
              </EditorialCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
