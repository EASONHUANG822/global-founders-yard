import {
  EditorialCard,
  NumberBadge,
  SectionHeader,
} from "@/components/LandingPrimitives";
import { ScrollReveal } from "@/components/ScrollReveal";

const proofPoints = [
  {
    title: "Shenzhen-based network",
    description:
      "Built around local ecosystem access, founder conversations, supply chain context, and on-the-ground Shenzhen relationships.",
  },
  {
    title: "Robotics and AI hardware focus",
    description:
      "Designed for physical-product teams where suppliers, manufacturers, pilots, and technical partners shape execution speed.",
  },
  {
    title: "Founder-first application process",
    description:
      "The application starts with what you are building, where you are blocked, and how Shenzhen can create leverage.",
  },
];

export function ProofSection() {
  return (
    <section
      id="proof"
      className="border-y border-white/10 bg-yard-panel px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Proof points"
            title="Credibility without fake numbers"
            description="Global Founders Yard is presented with neutral proof signals until real outcomes can be shown. No invented traction, no inflated claims."
          />
        </ScrollReveal>

        <div className="grid gap-4">
          {proofPoints.map((point, index) => (
            <ScrollReveal key={point.title} delay={index * 80}>
              <EditorialCard>
                <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
                  <NumberBadge>0{index + 1}</NumberBadge>
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                      {point.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/[0.58]">
                      {point.description}
                    </p>
                  </div>
                </div>
              </EditorialCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
