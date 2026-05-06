import { NeonButton } from "@/components/NeonButton";
import type { ServerItem } from "@/lib/mock-data";

type ServerCardProps = {
  server: ServerItem;
};

export function ServerCard({ server }: ServerCardProps) {
  return (
    <article className="neon-card group relative overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-pink-200/35">
      <div className="absolute -right-12 -top-12 size-36 rounded-full bg-pink-500/15 blur-3xl transition group-hover:bg-cyan-400/20" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{server.mode}</p>
          <h3 className="mt-2 text-xl font-black text-white">{server.name}</h3>
        </div>
        <span className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">{server.status}</span>
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Язык</p>
          <p className="mt-1 font-black text-white">{server.language}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Онлайн</p>
          <p className="mt-1 font-black text-cyan-100">{server.online}</p>
        </div>
      </div>
      <p className="relative mt-4 text-sm leading-6 text-slate-300">{server.description}</p>
      <div className="relative mt-5 flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">#{server.tag}</span>
        <NeonButton href="/servera" variant="secondary" className="px-4 py-2 text-xs">
          Подробнее
        </NeonButton>
      </div>
    </article>
  );
}
