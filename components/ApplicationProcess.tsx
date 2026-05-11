const steps = [
  {
    title: "Submit your project",
    description:
      "Share the company, product, stage, and Shenzhen-related needs that matter most.",
  },
  {
    title: "Tell us what you're building",
    description:
      "Help us understand your robotics, AI hardware, component, or manufacturing direction.",
  },
  {
    title: "Get matched with relevant resources",
    description:
      "We identify practical ecosystem entry points, guides, contacts, events, and landing context.",
  },
  {
    title: "Join the Shenzhen builder network",
    description:
      "Start meeting founders, operators, engineers, and local partners who can help you move.",
  },
];

export function ApplicationProcess() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-ink/46">
            Application Process
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            How the application works
          </h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.5rem] border border-ink/10 bg-white/62 p-6 shadow-soft-line"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sm font-black text-signal">
                {index + 1}
              </span>
              <h3 className="mt-10 text-2xl font-black tracking-normal">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-ink/62">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
