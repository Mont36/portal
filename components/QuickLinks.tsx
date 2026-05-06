import Link from "next/link";
import { quickLinks } from "@/lib/mock-data";

const iconColor = {
  pink: "border-pink-300/25 text-pink-200/90 shadow-[0_0_18px_rgba(255,46,196,0.12)]",
  cyan: "border-cyan-200/25 text-cyan-100/90 shadow-[0_0_18px_rgba(34,211,238,0.1)]",
  violet: "border-violet-200/25 text-violet-100/90 shadow-[0_0_18px_rgba(139,92,246,0.1)]",
};

export function QuickLinks() {
  return (
    <section className="container relative z-30 -mt-6 pb-7 sm:-mt-7">
      <div className="grid overflow-hidden rounded-2xl border border-white/[0.09] bg-[#050711]/82 shadow-[0_18px_70px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(255,255,255,0.055)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group flex min-h-[68px] items-center gap-3 border-b border-r border-white/[0.065] px-4 py-3 transition hover:bg-white/[0.045] hover:shadow-[inset_0_-1px_0_rgba(255,46,196,0.38),0_0_28px_rgba(255,46,196,0.08)] xl:border-b-0">
            <span className={`grid size-9 shrink-0 place-items-center rounded-xl border bg-black/24 text-lg font-black ${iconColor[link.accent]}`}>{link.icon}</span>
            <span className="min-w-0">
              <span className="block text-[13px] font-black text-white">{link.title}</span>
              <span className="mt-0.5 block truncate text-[11px] font-semibold leading-4 text-slate-500 group-hover:text-slate-300">{link.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
