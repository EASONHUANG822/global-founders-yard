"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/components/LandingPrimitives";
import { RobotVisual } from "@/components/RobotVisual";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionIntro } from "@/components/SectionIntro";

const storyStages = [
  {
    label: "ROBOTICS ECOSYSTEM",
    title: "Powering robotics from strategy to real-world impact.",
    description:
      "Explore the full ecosystem: hardware, software, infrastructure, and partners working together to build capable robotic systems.",
    buttonLabel: "View detailed page",
    href: "/ecosystem",
    robotLabel: "CONCEPT",
    technicalLabels: ["Robotics fit", "AI hardware", "Builder context"] as [
      string,
      string,
      string,
    ],
  },
  {
    label: "PROGRAM SUPPORT",
    title: "Support designed for practical landing outcomes.",
    description:
      "From local setup to supplier introductions, we help founders move from uncertainty to action.",
    buttonLabel: "View support details",
    href: "/support",
    robotLabel: "DEVELOP",
    technicalLabels: ["Landing setup", "Supplier map", "Policy guide"] as [
      string,
      string,
      string,
    ],
  },
  {
    label: "FOUNDER NETWORK",
    title: "Connect with the people who help you move faster.",
    description:
      "Access local builders, operators, partners, and founder communities across Shenzhen.",
    buttonLabel: "Explore network",
    href: "/network",
    robotLabel: "DEPLOY",
    technicalLabels: ["Local builders", "Operators", "Proof signals"] as [
      string,
      string,
      string,
    ],
  },
  {
    label: "APPLICATION PATH",
    title: "A clear path from application to local execution.",
    description:
      "The process helps serious teams understand fit, prepare, and start building with local context.",
    buttonLabel: "Start application",
    href: "/apply",
    robotLabel: "SCALE",
    technicalLabels: ["Apply", "Review", "Execute"] as [
      string,
      string,
      string,
    ],
  },
];

const robotStages = storyStages.map((stage) => ({
  label: stage.robotLabel,
  technicalLabels: stage.technicalLabels,
}));

export function ScrollRobotSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const elements = stageRefs.current.filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const index = Number(
          (visibleEntry.target as HTMLElement).dataset.stageIndex,
        );

        if (!Number.isNaN(index)) {
          setActiveStage(index);
        }
      },
      {
        root: null,
        rootMargin: "-38% 0px -40% 0px",
        threshold: [0.18, 0.36, 0.62],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="robot-story"
      className="relative overflow-visible bg-yard-black px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-4 shadow-glow backdrop-blur sm:p-5 lg:p-6">
          <div className="relative overflow-visible rounded-[1.75rem] border border-white/10 bg-[#050505] p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-80 rounded-t-[1.75rem] bg-gradient-to-b from-white/[0.055] to-transparent" />
            <div className="relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
              <div className="space-y-12 lg:space-y-0">
                {storyStages.map((stage, index) => (
                  <article
                    key={stage.label}
                    ref={(node) => {
                      stageRefs.current[index] = node;
                    }}
                    data-stage-index={index}
                    className="flex min-h-[78vh] items-center py-8 lg:min-h-[86vh] lg:py-16"
                  >
                    <div
                      className={cn(
                        "max-w-3xl transition duration-700",
                        activeStage === index
                          ? "opacity-100"
                          : "opacity-70 lg:opacity-45",
                      )}
                    >
                      <SectionIntro
                        label={stage.label}
                        title={stage.title}
                        description={stage.description}
                        buttonLabel={stage.buttonLabel}
                        href={stage.href}
                      />
                    </div>
                  </article>
                ))}
              </div>

              <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:self-start">
                <RobotVisual activeStage={activeStage} stages={robotStages} />
                <div className="mt-4 grid grid-cols-4 gap-2 lg:hidden">
                  {storyStages.map((stage, index) => (
                    <button
                      key={stage.label}
                      type="button"
                      className={cn(
                        "h-1.5 rounded-full transition",
                        index === activeStage ? "bg-white" : "bg-white/[0.2]",
                      )}
                      aria-label={`View ${stage.label}`}
                      onClick={() => setActiveStage(index)}
                    />
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
