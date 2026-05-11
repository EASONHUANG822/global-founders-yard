import Link from "next/link";
import Image from "next/image";
import { ScrollParallax } from "@/components/ScrollParallax";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 lg:grid lg:min-h-screen lg:grid-cols-1 lg:px-8 lg:pb-0 lg:pt-0">
      <div className="absolute inset-0 -z-20 bg-yard-black" />
      <div className="absolute inset-0 -z-10 radial-spotlight" />
      <div className="absolute inset-0 -z-10 dark-grid opacity-35" />
      <ScrollParallax
        className="pointer-events-none absolute right-[8%] top-24 -z-10 hidden h-72 w-72 rounded-full border border-white/10 bg-white/[0.015] lg:block"
        speed={-18}
      >
        <span className="block h-full w-full rounded-full" />
      </ScrollParallax>

      <div className="mx-auto flex h-full max-w-7xl items-center gap-10 lg:gap-16">
        <ScrollReveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/[0.64] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)]" />
                Shenzhen founder landing system
              </div>
              <h1 className="max-w-xl text-6xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[7rem]" style={{ WebkitTextStroke: "0.5px currentColor" }}>
                Land,
                <br />
                Build, and
                <br />
                Scale in
                <br />
                Shenzhen
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/[0.62] sm:text-lg sm:leading-8">
                Global Founders Yard helps robotics, AI hardware, and
                cross-border founders access Shenzhen&apos;s supply chain, local
                network, pilot customers, and startup resources.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/apply"
                  className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-black uppercase tracking-[0.14em] text-ink shadow-[0_18px_60px_rgba(255,255,255,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Apply now
                </Link>
                <a
                  href="#system"
                  className="rounded-full border border-white/[0.16] bg-white/[0.035] px-7 py-3.5 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.34] hover:bg-white/[0.07]"
                >
                  Explore the program
                </a>
              </div>
            </div>

            <div className="relative hidden overflow-hidden lg:block lg:h-[65vh] lg:max-h-[640px]">
              <div
                className="pointer-events-none absolute inset-x-[-6%] bottom-10 top-0 opacity-70"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 520 620"
                  fill="none"
                >
                  <defs>
                    <pattern
                      id="hero-robot-grid"
                      width="32"
                      height="32"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M32 0H0V32"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="520"
                    height="620"
                    fill="url(#hero-robot-grid)"
                    opacity="0.14"
                  />
                  <circle
                    cx="260"
                    cy="312"
                    r="228"
                    stroke="rgba(255,255,255,0.11)"
                    strokeWidth="1"
                  />
                  <path
                    d="M260 70V554M76 312H444"
                    stroke="rgba(255,255,255,0.09)"
                    strokeWidth="1"
                  />
                  <path
                    d="M112 156H408M112 468H408"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <div
                className="pointer-events-none absolute inset-x-[-10%] bottom-11 top-[-1.5rem] sm:inset-x-[-14%] lg:inset-x-[-12%] lg:bottom-8 lg:top-[-1rem]"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.075),transparent_20rem)]" />
                <Image
                  src="/images/robot-vitruvian-front.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 640px, 92vw"
                  draggable={false}
                  className="pointer-events-none select-none object-contain opacity-[0.9] grayscale"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/[0.06] pt-3 sm:justify-between">
                {["Diagnose", "Match", "Pilot"].map((item, index) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/[0.3]">
                      0{index + 1}
                    </p>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-white/[0.58]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
