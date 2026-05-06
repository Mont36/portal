import Link from "next/link";
import type { ImportantSection } from "@/lib/mock-data";

const accents = {
  pink: "from-pink-500/30 via-fuchsia-500/14 to-slate-950 border-pink-300/20 shadow-pink-500/10",
  cyan: "from-cyan-400/30 via-blue-500/14 to-slate-950 border-cyan-300/20 shadow-cyan-400/10",
  violet: "from-violet-500/30 via-purple-500/14 to-slate-950 border-violet-300/20 shadow-violet-500/10",
  blue: "from-blue-500/30 via-cyan-500/14 to-slate-950 border-blue-300/20 shadow-blue-500/10",
};

export function PortalCard({ item }: { item: ImportantSection }) {
  return (
    <article className={`group relative overflow-hidden rounded-[2rem] border bg-gradient-to-br p-6 shadow-2xl ${accents[item.accent]}`}>
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/15" />
      <div className="relative mb-7 h-36 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,196,0.12)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60" />
        <div className="absolute bottom-0 left-0 h-16 w-full bg-slate-950/90" />
        <div className="absolute bottom-12 left-8 h-20 w-12 bg-slate-950" />
        <div className="absolute bottom-12 left-24 h-28 w-14 bg-slate-950" />
        <div className="absolute bottom-12 right-16 h-24 w-16 bg-slate-950" />
        <div className="absolute left-6 top-6 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl text-white shadow-[0_0_28px_rgba(255,255,255,0.12)]">{item.icon}</div>
      </div>
      <h3 className="text-2xl font-black text-white">{item.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-slate-300">{item.description}</p>
      <Link href={item.href} className="mt-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:border-cyan-200/40 hover:bg-cyan-200/10">
        {item.cta}
      </Link>
    </article>
  );
}
