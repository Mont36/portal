import Image from "next/image";
import { NeonButton } from "@/components/NeonButton";
import type { ServerItem } from "@/lib/mock-data";

type ServerCardProps = {
  server: ServerItem;
};

export function ServerCard({ server }: ServerCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.15rem] bg-[#050711] shadow-[0_20px_58px_rgba(0,0,0,0.36)] ring-1 ring-white/[0.055] transition hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(0,0,0,0.42),0_0_34px_rgba(255,46,196,0.08)]">
      <div className="relative h-36 overflow-hidden bg-slate-950">
        <Image src={server.image} alt={server.name} fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover transition duration-700 group-hover:scale-[1.05]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,10,0.06),rgba(3,4,10,0.74))]" />
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-slate-100 backdrop-blur-md ring-1 ring-white/[0.08]">{server.language}</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-black text-white">{server.name}</h3>
        <p className="mt-1 text-xs font-medium text-slate-500">{server.mode}</p>
        <p className="mt-4 text-sm font-medium text-slate-300"><span className="text-pink-300">◉</span> Онлайн: {server.online}</p>
        <p className="mt-2 text-sm font-medium text-slate-400">Статус: {server.status}</p>
        <div className="mt-5">
          <NeonButton href="/servera" variant="ghost" className="rounded-xl border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs text-pink-100 hover:border-pink-300/35">
            Подробнее
          </NeonButton>
        </div>
      </div>
    </article>
  );
}
