import Link from "next/link";

export const metadata = {
  title: "Office and Landing Support | Global Founders Yard",
  description:
    "Practical support for workspace, arrival planning, founder setup, and the first operating steps in Shenzhen.",
};

export default function OfficeLandingPage() {
  return (
    <main className="min-h-screen bg-yard-black px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="text-sm font-black uppercase tracking-[0.18em]">
            Global Founders Yard
          </Link>
          <Link href="/apply" className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:bg-white/90">
            Apply
          </Link>
        </nav>

        <section className="py-20 lg:py-28">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/[0.42]">
            Support &mdash; Office and Landing
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            Land in Shenzhen ready to build.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/[0.62]">
            The first weeks set the tone. Global Founders Yard provides workspace at Nanshan Sci-Tech Innovation Center, arrival logistics support, and local operating context so founders can focus on building from day one — not navigating bureaucracy.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Workspace",
              description: "Ready-to-use office space at Nanshan Sci-Tech Innovation Center with meeting rooms, collaboration areas, and prototyping access.",
            },
            {
              title: "Arrival logistics",
              description: "Support with visa guidance, accommodation recommendations, local transportation setup, and essential services onboarding.",
            },
            {
              title: "Local orientation",
              description: "Guidance on Shenzhen's business culture, communication norms, payment systems, and day-to-day operations for international founders.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
              <h2 className="text-2xl font-black tracking-[-0.04em]">{card.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/[0.58]">{card.description}</p>
            </article>
          ))}
        </section>

        <section className="py-16">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/apply" className="rounded-full bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-white/90">Start application</Link>
            <Link href="/" className="rounded-full border border-white/[0.14] bg-white/[0.035] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.07]">Back home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
