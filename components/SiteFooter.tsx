type SiteFooterProps = {
  compact?: boolean;
};

const footerLinks = [
  {
    title: "Program",
    links: [
      { label: "Landing Engine", href: "/#system" },
      { label: "Scroll Story", href: "/#robot-story" },
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Support", href: "/support" },
      { label: "Network", href: "/network" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact", href: "mailto:hello@globalfoundersyard.com" },
      { label: "Pain Points", href: "/#pain-points" },
    ],
  },
];

export function SiteFooter({ compact = false }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-yard-black px-5 py-12 text-white sm:px-6 lg:px-8">
      <div
        className={`mx-auto grid max-w-7xl gap-10 ${
          compact ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1.3fr_1fr]"
        }`}
      >
        <div>
          <p className="text-xl font-black uppercase tracking-[0.14em]">
            Global Founders Yard
          </p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/[0.58]">
            A Shenzhen landing program for robotics, AI hardware, overseas, and
            cross-border founders.
          </p>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-white/[0.36]">
            Shenzhen time UTC+8
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/[0.58] transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
