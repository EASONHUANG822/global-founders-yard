import Link from "next/link";

export const metadata = {
  title: "Landing Setup | Global Founders Yard",
  description:
    "Workspace, arrival planning, local operating context, and the first steps required to begin working in Shenzhen.",
};

export default function LandingSetupPage() {
  return (
    <main className="min-h-screen bg-yard-black px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="text-sm font-black uppercase tracking-[0.18em]"
          >
            Global Founders Yard
          </Link>
          <Link
            href="/apply"
            className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Apply
          </Link>
        </nav>

        <section className="py-20 lg:py-28">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/[0.42]">
            Support &mdash; Landing Setup
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            Land in Shenzhen ready to work.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/[0.62]">
            The first weeks in a new city determine your momentum. ROBOTUO
            handles the practical setup — workspace, arrival logistics, local
            operating context — so you can focus on building from day one. Based
            at the Nanshan Sci-Tech Innovation Center, we provide everything you
            need to start working immediately.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Workspace and facilities",
              description:
                "Ready-to-use office space at Nanshan Sci-Tech Innovation Center with meeting rooms, prototyping access, and collaboration areas.",
            },
            {
              title: "Arrival logistics",
              description:
                "Support with visa guidance, accommodation recommendations, local transportation setup, and essential services onboarding.",
            },
            {
              title: "Local operating context",
              description:
                "Orientation on Shenzhen's business culture, communication norms, payment systems, and day-to-day operations.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
            >
              <h2 className="text-2xl font-black tracking-[-0.04em]">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/[0.58]">
                {card.description}
              </p>
            </article>
          ))}
        </section>

        <section className="py-16">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Start application
            </Link>
            <Link
              href="/support"
              className="rounded-full border border-white/[0.14] bg-white/[0.035] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.07]"
            >
              Back to support
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
