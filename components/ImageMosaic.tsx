const mosaicItems = [
  {
    title: "Hardware lab",
    label: "Bench tests",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Founder meetup",
    label: "Community",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Factory visit",
    label: "Manufacturing",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Shenzhen skyline",
    label: "City",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Robotics demo",
    label: "Demo day",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Workspace",
    label: "Landing",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function ImageMosaic() {
  return (
    <section className="px-5 py-10 sm:px-6 lg:px-8" aria-label="Campus grid">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[210px] gap-4 md:grid-cols-4">
          {mosaicItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink p-5 text-paper ${item.className}`}
            >
              <div
                className={`absolute inset-0 opacity-70 ${
                  index % 2 === 0 ? "grid-field" : "hardware-trace"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-paper/12 via-transparent to-signal/20" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-paper px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink">
                  {item.label}
                </span>
                <div>
                  <div className="mb-5 h-px w-full bg-paper/18" />
                  <h2 className="text-2xl font-black tracking-normal">
                    {item.title}
                  </h2>
                </div>
              </div>
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-paper/25 transition group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
