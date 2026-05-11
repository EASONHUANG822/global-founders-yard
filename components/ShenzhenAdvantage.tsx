const advantages = [
  "Global hardware supply chain",
  "Robotics industry cluster",
  "Fast prototyping loops",
  "Dense component ecosystem",
  "Cross-border trade capability",
  "Builder-friendly founder community",
  "Short distance between factories, suppliers, engineers, and founders",
];

const metrics = [
  { value: "Fast", label: "prototype-to-production feedback" },
  { value: "Dense", label: "supplier and component context" },
  { value: "Close", label: "factory, engineer, and founder proximity" },
];

export function ShenzhenAdvantage() {
  return (
    <section
      id="why-shenzhen"
      className="relative overflow-hidden border-y border-ink/10 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/2 grid-field opacity-50 lg:block" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-ink/46">
            Why Shenzhen
          </p>
          <h2 className="text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">
            Why Shenzhen?
          </h2>
          <p className="mt-8 text-lg leading-8 text-ink/68">
            Shenzhen is useful because the distance between idea, part, factory,
            engineer, operator, and global shipping pathway can be unusually
            short. For hardware founders, that means faster learning loops,
            fewer abstract guesses, and more direct contact with the people who
            can help a product become real.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-[1.5rem] border border-ink/10 bg-paper p-6 shadow-soft-line"
              >
                <p className="text-4xl font-black tracking-normal">
                  {metric.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-ink/58">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper/78 px-5 py-4"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-ink" />
                <p className="font-semibold text-ink/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
