import Link from "next/link";

export const metadata = {
  title: "Partner Context | Global Founders Yard",
  description:
    "Identify the builders, operators, technical communities, and local partners that can help a team move faster in Shenzhen.",
};

export default function PartnerContextPage() {
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
            Ecosystem &mdash; Partner Context
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            The right partners change everything.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/[0.62]">
            ROBOTUO&apos;s open-source community, SZ RoboX, brings together
            builders, operators, and technical communities across Shenzhen.
            Founded by a serial entrepreneur with a decade of US experience, the
            network connects international founders with local partners who
            understand both the technology and the market.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Technical communities",
              description:
                "Join SZ RoboX, China's first AI hardware and robotics open-source community, connecting developers and industry resources globally.",
            },
            {
              title: "Local operators",
              description:
                "Work with people who understand Shenzhen's manufacturing landscape, from factory floors to testing facilities to logistics networks.",
            },
            {
              title: "Global builder network",
              description:
                "Connect with international founders, technical peers, and cross-border teams building robotics companies from Shenzhen.",
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
              href="/ecosystem"
              className="rounded-full border border-white/[0.14] bg-white/[0.035] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.07]"
            >
              Back to ecosystem
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
