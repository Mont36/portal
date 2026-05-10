import Link from "next/link";
import { quickLinks } from "@/lib/mock-data";

const iconColor = {
  pink: "text-pink-200/90 shadow-[0_0_18px_rgba(255,46,196,0.12)] ring-1 ring-pink-300/10",
  cyan: "text-cyan-100/90 shadow-[0_0_18px_rgba(34,211,238,0.1)] ring-1 ring-cyan-200/10",
  violet: "text-violet-100/90 shadow-[0_0_18px_rgba(139,92,246,0.1)] ring-1 ring-violet-200/10",
};

export function QuickLinks() {
  return (
    <section className="container relative z-30 -mt-6 pb-7 sm:-mt-7">
      <div className="grid overflow-hidden rounded-2xl bg-[#050711]/78 shadow-[0_18px_70px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.035)] ring-1 ring-white/[0.035] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group flex min-h-[72px] items-center gap-3 px-4 py-3 transition duration-300 hover:bg-white/[0.04] hover:shadow-[inset_0_0_28px_rgba(255,46,196,0.055)]">
            <span className={`grid size-9 shrink-0 place-items-center rounded-xl bg-black/22 text-lg font-black ${iconColor[link.accent]}`}>{link.icon}</span>
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
