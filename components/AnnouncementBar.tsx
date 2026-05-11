import Link from "next/link";

export function AnnouncementBar() {
  return (
    <Link
      href="/apply"
      className="group block border-b border-white/10 bg-yard-black px-4 py-3 text-center text-sm font-semibold text-white/[0.72] transition hover:bg-yard-panel hover:text-white"
    >
      <span className="inline-flex items-center gap-2">
        <span className="text-white">Founder intake now open</span>
        Robotics, AI hardware, and cross-border teams landing in Shenzhen
        <span className="transition group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
