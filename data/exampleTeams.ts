export type ExampleTeam = {
  name: string;
  category: string;
  description: string;
  status: "Applying" | "In Shenzhen" | "Visiting";
};

export const exampleTeams: ExampleTeam[] = [
  {
    name: "RoboForge",
    category: "Robotics",
    description:
      "A modular field robotics team looking for actuator partners and pilot manufacturing context.",
    status: "Applying",
  },
  {
    name: "VisionArm",
    category: "AI Hardware",
    description:
      "A camera-guided manipulation system exploring local sensing, assembly, and demo partners.",
    status: "Visiting",
  },
  {
    name: "ServoStack",
    category: "Components",
    description:
      "A motion-control component startup mapping suppliers, testing partners, and robotics customers.",
    status: "In Shenzhen",
  },
  {
    name: "BayBotics",
    category: "Cross-border",
    description:
      "An overseas founder team preparing Shenzhen production while selling into North American customers.",
    status: "Applying",
  },
  {
    name: "FactoryOS",
    category: "Manufacturing",
    description:
      "A factory workflow software company learning where hardware operators gather and buy.",
    status: "Visiting",
  },
  {
    name: "ProtoLab SZ",
    category: "AI Hardware",
    description:
      "A prototype studio connecting edge AI devices with small-batch manufacturing resources.",
    status: "In Shenzhen",
  },
];
