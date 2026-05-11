import type { CSSProperties, ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  split?: boolean;
};

type EditorialCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  split = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        split
          ? "flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          : "max-w-4xl",
        className,
      )}
    >
      <div>
        <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-white/[0.48]">
          {eyebrow}
        </p>
        <h2 className="max-w-5xl text-balance text-4xl font-black leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "text-base leading-7 text-white/[0.58] sm:text-lg sm:leading-8",
            split ? "max-w-xl" : "mt-7 max-w-3xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function EditorialCard({
  children,
  className,
  style,
}: EditorialCardProps) {
  return (
    <article
      className={cn(
        "group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:p-7",
        className,
      )}
      style={style}
    >
      {children}
    </article>
  );
}

export function NumberBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-white/[0.76] transition group-hover:border-white/[0.35] group-hover:bg-white group-hover:text-ink">
      {children}
    </span>
  );
}
