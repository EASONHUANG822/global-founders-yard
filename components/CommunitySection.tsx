"use client";

const reviews = [
  {
    name: "Alex Chen",
    role: "CEO, RoboFlow",
    rating: 5,
    text: "GFY connected us with three suppliers in the first week. That alone saved us two months of cold outreach.",
  },
  {
    name: "Sarah Kim",
    role: "CTO, EdgeBot",
    rating: 5,
    text: "The local network is real. Not just intros — people who actually pick up the phone when you have a manufacturing emergency.",
  },
  {
    name: "Marcus Liu",
    role: "Founder, SenseAI",
    rating: 5,
    text: "Landing in Shenzhen without GFY would have been chaos. Workspace, supplier intros, founder community — all from day one.",
  },
  {
    name: "Elena Torres",
    role: "COO, DroneX",
    rating: 5,
    text: "We went from prototype to production in four months. The supplier matching was surgical — exactly what we needed.",
  },
  {
    name: "James Park",
    role: "Founder, Actuator Labs",
    rating: 5,
    text: "The diagnosis session alone was worth it. They identified three bottlenecks we didn't even know we had.",
  },
  {
    name: "Wei Zhang",
    role: "CEO, AutoNav",
    rating: 5,
    text: "SZ RoboX community is where the real value is. Found our lead engineer and first pilot customer through GFY events.",
  },
  {
    name: "David Müller",
    role: "Founder, RoboGrip",
    rating: 5,
    text: "Cross-border founders need a local anchor. GFY was ours. Factory visits, supplier intros, investor prep — all structured.",
  },
  {
    name: "Priya Patel",
    role: "CTO, SensorBridge",
    rating: 5,
    text: "The matching process is honest. They said no to three suppliers we were considering — and they were right every time.",
  },
];

const discussions = [
  {
    author: "Alex Chen",
    topic: "Best PCB manufacturers for low-volume robotics?",
    replies: 12,
    category: "Supply Chain",
    time: "2h ago",
  },
  {
    author: "Sarah Kim",
    topic: "Tips for first-time factory visits in Shenzhen",
    replies: 8,
    category: "Landing",
    time: "4h ago",
  },
  {
    author: "Marcus Liu",
    topic: "Comparing Shenzhen vs Dongguan for hardware prototyping",
    replies: 15,
    category: "Ecosystem",
    time: "6h ago",
  },
  {
    author: "Elena Torres",
    topic: "How to handle IP protection with local suppliers",
    replies: 21,
    category: "Legal",
    time: "1d ago",
  },
  {
    author: "James Park",
    topic: "Recommended testing labs for environmental compliance",
    replies: 6,
    category: "Manufacturing",
    time: "1d ago",
  },
  {
    author: "Wei Zhang",
    topic: "Shenzhen government subsidies for robotics startups",
    replies: 18,
    category: "Policy",
    time: "2d ago",
  },
];

const firstRow = [...reviews, ...reviews];
const secondRow = [...reviews.slice(4), ...reviews.slice(0, 4), ...reviews.slice(4), ...reviews.slice(0, 4)];

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-24 pb-20">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left { animation: marquee-left 60s linear infinite; }
        .marquee-right { animation: marquee-right 60s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-track:hover .glass-card { opacity: 0.4; filter: blur(1px); }
        .marquee-track .glass-card:hover { opacity: 1; filter: blur(0); transform: scale(1.03); z-index: 10; border-color: rgba(255,255,255,0.2); }
      `}</style>

      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

      <div className="px-6 lg:px-12 mb-12 relative z-10 max-w-7xl mx-auto">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-white/[0.48]">
          Community
        </p>
        <h2 className="text-balance text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
          What builders are saying
        </h2>
      </div>

      {/* Row 1 — scroll left */}
      <div className="w-full overflow-hidden mb-4">
        <div className="marquee-track marquee-left flex gap-6 w-max">
          {firstRow.map((review, i) => (
            <article
              key={`r1-${i}`}
              className="glass-card glass-card w-[380px] shrink-0 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.1] text-xs font-black text-white">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-xs text-white/[0.4]">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-6 text-white/[0.62]">&ldquo;{review.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="w-full overflow-hidden mb-16">
        <div className="marquee-track marquee-right flex gap-6 w-max">
          {secondRow.map((review, i) => (
            <article
              key={`r2-${i}`}
              className="glass-card w-[380px] shrink-0 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.1] text-xs font-black text-white">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-xs text-white/[0.4]">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-6 text-white/[0.62]">&ldquo;{review.text}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>

      {/* Discussions */}
      <div className="px-6 lg:px-12 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end mb-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/[0.48] mb-3">
              SZ RoboX Discussions
            </p>
            <h3 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
              Active conversations
            </h3>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {discussions.map((item, index) => (
            <article
              key={index}
              className="group rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/[0.4]">
                  {item.category}
                </span>
                <span className="text-[10px] text-white/[0.3]">{item.time}</span>
              </div>
              <h4 className="text-sm font-bold leading-snug text-white mb-3">
                {item.topic}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/[0.4]">by {item.author}</span>
                <span className="text-xs text-white/[0.4]">{item.replies} replies</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
