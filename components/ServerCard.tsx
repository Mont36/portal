import Image from "next/image";
import { NeonButton } from "@/components/NeonButton";
import type { ServerItem } from "@/lib/mock-data";

type ServerCardProps = {
  server: ServerItem;
};

export function ServerCard({ server }: ServerCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050711] shadow-[0_18px_50px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-pink-300/40">
      <div className="server-visual relative h-36 bg-[#03040a]">
        <Image src={server.image} alt={server.name} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_12%,rgba(255,224,166,.16),transparent_4rem),linear-gradient(to_top,rgba(3,7,18,.82),rgba(3,7,18,.08))]" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-black leading-tight text-white">{server.name}</h3>
        <span className="mt-2 inline-flex rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-[0.65rem] font-black text-slate-200">{server.description}</span>
        <p className="mt-4 text-sm font-semibold text-slate-300"><span className="text-pink-300">◉</span> Онлайн: {server.online}</p>
        <p className="mt-2 text-sm font-semibold text-slate-400">Статус: {server.status}</p>
        <div className="mt-5">
          <NeonButton href="/servera" variant="ghost" className="rounded-md border-pink-400/45 px-4 py-2.5 text-xs text-pink-200">
            Подробнее
          </NeonButton>
        </div>
      </div>
    </article>
  );
}
