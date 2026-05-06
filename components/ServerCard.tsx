import Link from "next/link";
import type { ServerItem } from "@/lib/mock-data";

export function ServerCard({ server }: { server: ServerItem }) {
  return (
    <article className="group neon-card relative overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
      <div className="absolute -right-14 -top-14 size-32 rounded-full bg-pink-500/20 blur-2xl transition group-hover:bg-cyan-400/20" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{server.mode}</p>
          <h3 className="mt-2 text-xl font-black text-white">{server.name}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white">{server.language}</span>
      </div>
      <p className="relative mt-4 min-h-16 text-sm leading-6 text-slate-300">{server.description}</p>
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Онлайн</p>
          <p className="mt-1 font-black text-cyan-100">{server.online}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Статус</p>
          <p className="mt-1 font-black text-pink-100">{server.status}</p>
        </div>
      </div>
      <div className="relative mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">#{server.tag}</span>
        <Link href={server.href} className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:bg-cyan-100">Подробнее</Link>
      </div>
    </article>
  );
}
