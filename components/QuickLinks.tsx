import Link from "next/link";
import { quickLinks } from "@/lib/mock-data";

const iconColor = {
  pink: "border-pink-400/35 text-pink-300 shadow-[0_0_24px_rgba(255,46,196,0.2)]",
  cyan: "border-cyan-300/35 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.16)]",
  violet: "border-violet-300/35 text-violet-200 shadow-[0_0_24px_rgba(139,92,246,0.18)]",
};

export function QuickLinks() {
  return (
    <section className="container relative z-20 -mt-2 pb-7">
      <div className="grid overflow-hidden rounded-lg border border-white/10 bg-[#070d18]/90 shadow-[0_20px_70px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group flex min-h-[86px] items-center gap-4 border-b border-r border-white/[0.07] px-5 py-4 transition hover:bg-white/[0.055] hover:shadow-[inset_0_-2px_0_rgba(255,46,196,0.5),0_0_34px_rgba(255,46,196,0.12)] xl:border-b-0">
            <span className={`grid size-11 shrink-0 place-items-center rounded-full border bg-black/20 text-2xl font-black ${iconColor[link.accent]}`}>{link.icon}</span>
            <span>
              <span className="block text-sm font-black text-white">{link.title}</span>
              <span className="mt-1 block text-xs font-semibold leading-4 text-slate-400 group-hover:text-slate-200">{link.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
