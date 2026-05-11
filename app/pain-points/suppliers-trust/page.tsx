import Link from "next/link";

export const metadata = {
  title: "Supplier Trust | Global Founders Yard",
  description:
    "How ROBOTUO helps founders identify and connect with trusted suppliers in Shenzhen's robotics ecosystem.",
};

export default function SuppliersTrustPage() {
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
            Friction Layer &mdash; Supplier Trust
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            You don&apos;t know which suppliers to trust.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/[0.62]">
            Shenzhen has thousands of suppliers, but quality and reliability vary
            wildly. Without local knowledge, founders waste months on trial and
            error. ROBOTUO&apos;s supply chain integration model connects you
            with vetted partners — suppliers, manufacturers, and component
            sources that have been evaluated by people who understand your
            technical requirements.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Vetted partner network",
              description:
                "Access suppliers and manufacturers evaluated by the ROBOTUO community based on quality, reliability, and communication standards.",
            },
            {
              title: "Supply chain integration",
              description:
                "Our integrated model combines supply chain curation with open deployment standards, reducing the risk of choosing the wrong partner.",
            },
            {
              title: "Community signals",
              description:
                "Leverage founder reviews and community feedback from SZ RoboX to make informed decisions about supplier partnerships.",
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
              href="/"
              className="rounded-full border border-white/[0.14] bg-white/[0.035] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-white/[0.32] hover:bg-white/[0.07]"
            >
              Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
