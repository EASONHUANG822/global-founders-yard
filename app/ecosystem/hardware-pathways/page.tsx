import Link from "next/link";

export const metadata = {
  title: "Hardware Pathways | Global Founders Yard",
  description:
    "Understand how components, suppliers, labs, manufacturers, and testing partners shape physical product execution in Shenzhen.",
};

export default function HardwarePathwaysPage() {
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
            Ecosystem &mdash; Hardware Pathways
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            From component sourcing to production-ready hardware.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/[0.62]">
            Shenzhen&apos;s hardware ecosystem offers unmatched density of
            component suppliers, prototyping labs, contract manufacturers, and
            testing partners. ROBOTUO helps founders navigate this landscape by
            connecting them with vetted supply chain partners across the Greater
            Bay Area, turning months of supplier discovery into targeted
            introductions.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Component sourcing",
              description:
                "Access a curated network of component suppliers for sensors, actuators, controllers, and custom parts required for robotics builds.",
            },
            {
              title: "Prototyping and testing",
              description:
                "Work with local labs and rapid prototyping facilities to iterate hardware designs quickly and validate before production.",
            },
            {
              title: "Manufacturing partners",
              description:
                "Connect with contract manufacturers experienced in low-to-mid volume robotics production, from PCB assembly to full system integration.",
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
