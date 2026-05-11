export type ApplicantType = {
  title: string;
  description: string;
  tag: string;
  href: string;
};

export const applicantTypes: ApplicantType[] = [
  {
    title: "Robotics startups",
    description:
      "Teams building robots, automation systems, embodied AI products, or robotics-enabled services that need Shenzhen execution speed.",
    tag: "Robotics",
    href: "/apply/robotics-startups",
  },
  {
    title: "AI hardware teams",
    description:
      "Founders combining models, sensors, edge devices, cameras, actuators, chips, or physical interfaces.",
    tag: "AI Hardware",
    href: "/apply/ai-hardware",
  },
  {
    title: "Overseas founders",
    description:
      "Global entrepreneurs who want a structured path to understand Shenzhen and start operating locally.",
    tag: "Landing",
    href: "/apply/overseas-founders",
  },
  {
    title: "Cross-border business teams",
    description:
      "Teams designing in one market, building in Shenzhen, and selling into global or China-based customers.",
    tag: "Cross-border",
    href: "/apply/cross-border",
  },
  {
    title: "Shenzhen builders",
    description:
      "Local or incoming technical founders who need the right people, places, partners, and context.",
    tag: "Builder",
    href: "/apply/shenzhen-builders",
  },
];
