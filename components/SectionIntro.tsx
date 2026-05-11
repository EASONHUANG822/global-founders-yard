import Link from "next/link";
import { cn } from "@/components/LandingPrimitives";

type SectionIntroProps = {
  label: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export function SectionIntro({
  label,
  title,
  description,
  buttonLabel,
  href,
}: SectionIntroProps) {
  return (
    <div>
      <p className="inline-flex rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/[0.52]">
        {label}
      </p>
      <h2 className="mt-7 max-w-3xl text-balance text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      <p className="mt-7 max-w-2xl text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8">
        {description}
      </p>
      <Link
        href={href}
        className={cn(
          "group mt-9 inline-flex items-center gap-4 rounded-full border border-white/[0.16] bg-white/[0.035] px-6 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.36] hover:bg-white/[0.07]",
        )}
      >
        <span>{buttonLabel}</span>
        <span className="transition duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
