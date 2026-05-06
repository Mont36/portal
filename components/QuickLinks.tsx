import Link from "next/link";
import { quickLinks } from "@/lib/mock-data";

const iconColor = {
  pink: "text-pink-200/90 shadow-[0_0_18px_rgba(255,46,196,0.1)]",
  cyan: "text-cyan-100/90 shadow-[0_0_18px_rgba(34,211,238,0.09)]",
  violet: "text-violet-100/90 shadow-[0_0_18px_rgba(139,92,246,0.09)]",
};

export function QuickLinks() {
  return (
    <section className="container relative z-30 -mt-7 pb-8 sm:-mt-8">
      <div className="grid overflow-hidden rounded-[1.25rem] bg-[#05070f]/72 p-2 shadow-[0_22px_80px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.045)] ring-1 ring-white/[0.055] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group flex min-h-[66px] items-center gap-3 rounded-2xl px-3.5 py-3 transition hover:bg-white/[0.045] hover:shadow-[0_0_30px_rgba(255,46,196,0.08)]">
            <span className={`grid size-8 shrink-0 place-items-center rounded-xl bg-white/[0.045] text-base font-bold ring-1 ring-white/[0.045] ${iconColor[link.accent]}`}>{link.icon}</span>
            <span className="min-w-0">
              <span className="block text-[13px] font-bold text-white">{link.title}</span>
              <span className="mt-0.5 block truncate text-[11px] font-medium leading-4 text-slate-500 group-hover:text-slate-300">{link.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
