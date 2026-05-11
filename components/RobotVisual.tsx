"use client";

import Image from "next/image";
import { cn } from "@/components/LandingPrimitives";

type RobotStage = {
  label: string;
  technicalLabels: [string, string, string];
};

type RobotVisualProps = {
  activeStage: number;
  stages: RobotStage[];
};

type RobotImageLayer = {
  src: string;
  stageIndex: number;
  opacity: string;
  transform: string;
};

const stageImageMap = [
  {
    src: "/images/robot-vitruvian-front.png",
    opacity: "opacity-[0.56]",
    transform: "scale-[0.965] translate-y-2",
  },
  {
    src: "/images/robot-vitruvian-three-quarter.png",
    opacity: "opacity-[0.88]",
    transform: "scale-[1.01] -translate-y-1",
  },
  {
    src: "/images/robot-vitruvian-side.png",
    opacity: "opacity-[0.82]",
    transform: "scale-[0.995] translate-x-1",
  },
  {
    src: "/images/robot-vitruvian-front.png",
    opacity: "opacity-100",
    transform: "scale-[1.035] -translate-y-2",
  },
];

function clampStage(activeStage: number, maxStage: number) {
  if (!Number.isFinite(activeStage)) {
    return 0;
  }

  return Math.min(Math.max(Math.round(activeStage), 0), maxStage);
}

export function RobotVisual({ activeStage, stages }: RobotVisualProps) {
  const maxStage = Math.max(stages.length - 1, 0);
  const clampedStage = clampStage(activeStage, maxStage);
  const stage = stages[clampedStage] ?? stages[0];
  const progress = maxStage > 0 ? clampedStage / maxStage : 0;
  const overlayOpacity = 0.24 + clampedStage * 0.16;

  const imageLayers: RobotImageLayer[] = stageImageMap.map((image, index) => ({
    ...image,
    stageIndex: index,
  }));

  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] p-5 shadow-[0_30px_120px_rgba(255,255,255,0.08)] sm:p-6 lg:min-h-[720px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.11),transparent_24rem)]" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white/[0.32]">
            Vitruvian robot study
          </p>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white/[0.72]">
            {stage?.label}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {stages.map((item, index) => (
            <span
              key={item.label}
              className={cn(
                "rounded-full transition-all duration-500",
                index === clampedStage
                  ? "h-2.5 w-8 bg-white"
                  : "h-2.5 w-2.5 bg-white/[0.18]",
              )}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-36 right-6 top-32 z-20 hidden w-7 flex-col items-center lg:flex">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/[0.3] [writing-mode:vertical-rl]">
          scroll
        </span>
        <div className="mt-5 h-full w-px overflow-hidden bg-white/10">
          <div
            className="w-px bg-white transition-all duration-700"
            style={{ height: `${18 + progress * 82}%` }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 aspect-[4/5] w-full max-w-[560px] lg:mt-10">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 800 1000"
          fill="none"
        >
          <defs>
            <pattern
              id="robot-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="800" height="1000" fill="url(#robot-grid)" opacity="0.18" />
          <circle
            cx="400"
            cy="505"
            r="330"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
          <circle
            cx="400"
            cy="505"
            r="258"
            stroke="rgba(255,255,255,0.14)"
            strokeDasharray="10 14"
            strokeWidth="1"
            opacity={0.64 + overlayOpacity}
          />
          <rect
            x="118"
            y="178"
            width="564"
            height="654"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.2"
          />
          <path
            d="M400 132V884M88 505H712"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
          <path
            d="M170 265H630M176 728H624M246 188L554 822M554 188L246 822"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
            opacity={overlayOpacity}
          />
          <g opacity={clampedStage >= 1 ? 0.48 : 0.18}>
            <path
              d="M192 382H288M512 382H608M205 626H300M500 626H595"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1"
            />
            <circle cx="288" cy="382" r="5" stroke="rgba(255,255,255,0.5)" />
            <circle cx="512" cy="382" r="5" stroke="rgba(255,255,255,0.5)" />
            <circle cx="300" cy="626" r="5" stroke="rgba(255,255,255,0.5)" />
            <circle cx="500" cy="626" r="5" stroke="rgba(255,255,255,0.5)" />
          </g>
          <g opacity={clampedStage >= 2 ? 0.56 : 0.16}>
            <path
              d="M635 290H702M635 430H725M620 690H704"
              stroke="rgba(255,255,255,0.48)"
              strokeWidth="1"
            />
            <text
              x="710"
              y="294"
              fill="rgba(255,255,255,0.42)"
              fontSize="18"
              letterSpacing="3"
            >
              AXIS
            </text>
            <text
              x="733"
              y="434"
              fill="rgba(255,255,255,0.42)"
              fontSize="18"
              letterSpacing="3"
            >
              FRAME
            </text>
            <text
              x="712"
              y="694"
              fill="rgba(255,255,255,0.42)"
              fontSize="18"
              letterSpacing="3"
            >
              GAIT
            </text>
          </g>
          <g opacity={clampedStage === 3 ? 0.52 : 0.2}>
            <path
              d="M110 212H196M102 802H205M596 212H690M596 802H698"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            />
          </g>
        </svg>

        <div className="absolute inset-x-[8%] inset-y-[5%]">
          {imageLayers.map((image) => {
            const isActive = image.stageIndex === clampedStage;
            const isScaleBlend =
              clampedStage === 3 &&
              image.src === "/images/robot-vitruvian-three-quarter.png";

            return (
              <Image
                key={`${image.src}-${image.stageIndex}`}
                src={image.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                draggable={false}
                className={cn(
                  "pointer-events-none absolute inset-0 h-full w-full select-none object-contain transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none",
                  isActive
                    ? cn("z-10", image.opacity, image.transform)
                    : isScaleBlend
                      ? "z-0 scale-[1.01] opacity-[0.18]"
                      : "z-0 scale-[0.985] opacity-0",
                )}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
        <svg
          aria-hidden="true"
          className="absolute left-0 top-0 h-px w-full"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0 0.5H100" stroke="rgba(255,255,255,0.14)" />
          <path
            d="M0 0.5H100"
            stroke="rgba(255,255,255,0.86)"
            strokeDasharray={`${progress * 100} ${100 - progress * 100}`}
          />
        </svg>
        <div className="grid grid-cols-4 gap-3">
          {stages.map((item, index) => (
            <div key={item.label} className="min-w-0">
              <span
                className={cn(
                  "mb-3 block h-2 rounded-full transition-all duration-500",
                  index === clampedStage ? "bg-white" : "bg-white/[0.18]",
                )}
              />
              <p
                className={cn(
                  "truncate text-[10px] font-black uppercase tracking-[0.18em] transition duration-500",
                  index === clampedStage ? "text-white" : "text-white/[0.36]",
                )}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
