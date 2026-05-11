import Link from "next/link";

export const metadata = {
  title: "AI Hardware Teams | Global Founders Yard",
  description:
    "Founders combining models, sensors, edge devices, cameras, actuators, chips, or physical interfaces.",
};

export default function AiHardwarePage() {
  return (
    <main className="min-h-screen bg-yard-black px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="text-sm font-black uppercase tracking-[0.18em]">Global Founders Yard</Link>
          <Link href="/apply" className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-ink transition hover:-translate-y-0.5 hover:bg-white/90">Apply</Link>
        </nav>

        <section className="py-20 lg:py-28">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-white/[0.42]">Founder Fit &mdash; AI Hardware</p>
          <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-8xl">Where AI meets the physical world.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/[0.62]">
            AI hardware sits at the intersection of software intelligence and physical execution. Shenzhen provides the component density, manufacturing capability, and technical talent needed to turn AI models into products that ship — from edge devices to cameras to autonomous systems.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Edge compute and sensors", description: "Access suppliers for cameras, LiDAR, IMUs, microphones, and edge compute modules required for AI-enabled devices." },
            { title: "Rapid prototyping", description: "Work with local labs for PCB fabrication, enclosure design, and system integration to iterate AI hardware quickly." },
            { title: "Manufacturing scale", description: "Connect with contract manufacturers experienced in AI hardware production, from low-volume runs to scaled manufacturing." },
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
