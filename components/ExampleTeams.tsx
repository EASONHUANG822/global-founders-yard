import { exampleTeams } from "@/data/exampleTeams";

const statusTone = {
  Applying: "bg-signal text-ink",
  "In Shenzhen": "bg-ink text-paper",
  Visiting: "bg-cobalt text-white",
};

export function ExampleTeams() {
  return (
    <section
      id="community"
      className="border-y border-ink/10 bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-ink/46">
              Example profiles
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Built for ambitious hardware teams
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-ink/56">
            These are illustrative example profiles, not a real portfolio or
            list of admitted companies.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exampleTeams.map((team) => (
            <article
              key={team.name}
              className="rounded-[1.5rem] border border-ink/10 bg-paper p-6 shadow-soft-line"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-ink/15 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink/62">
                  {team.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${statusTone[team.status]}`}
                >
                  {team.status}
                </span>
              </div>
              <h3 className="mt-12 text-3xl font-black tracking-normal">
                {team.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-ink/62">
                {team.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
