import { NeonButton } from "@/components/NeonButton";
import type { ServerItem } from "@/lib/mock-data";

const tone = {
  pink: "from-[#21101b] via-[#51213e] to-[#03040a]",
  cyan: "from-[#102733] via-[#17314f] to-[#03040a]",
  violet: "from-[#17142a] via-[#3b2840] to-[#03040a]",
};

const serverMood: Record<string, string> = {
  vice: "Ночной криминал",
  leonida: "Городские роли",
  sunshine: "Открытый мир",
  project: "Community-first",
};

type ServerCardProps = {
  server: ServerItem;
};

export function ServerCard({ server }: ServerCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.1rem] border border-white/[0.055] bg-[#060813]/92 shadow-[0_16px_42px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-pink-200/25 hover:bg-[#080a16]">
      <div className={`server-visual relative h-28 bg-gradient-to-br ${tone[server.accent]}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_10%,rgba(255,224,166,.26),transparent_4rem),radial-gradient(circle_at_78%_16%,rgba(34,211,238,.13),transparent_5rem),linear-gradient(to_top,rgba(3,7,18,.84),transparent)]" />
        <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/28 px-2.5 py-1 text-[0.58rem] font-black uppercase tracking-[0.16em] text-white/72 backdrop-blur">
          {server.language}
        </div>
        <div className="absolute bottom-3 right-3 rounded-full bg-emerald-300/10 px-2.5 py-1 text-[0.58rem] font-black uppercase tracking-[0.14em] text-emerald-200/85">
          {server.status}
        </div>
      </div>
      <div className="p-4 pt-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-slate-500">{serverMood[server.tag]}</p>
            <h3 className="mt-1 text-base font-black leading-tight text-white">{server.name}</h3>
          </div>
          <span className="rounded-md bg-white/[0.045] px-2 py-1 text-[0.62rem] font-bold text-slate-300">{server.mode}</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm font-medium leading-5 text-slate-400">{server.description}</p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-white/[0.055] pt-3">
          <div>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-slate-600">Онлайн</p>
            <p className="mt-1 text-sm font-black text-slate-100"><span className="text-pink-300/80">●</span> {server.online}</p>
          </div>
          <NeonButton href="/servera" variant="ghost" className="rounded-lg border-white/12 bg-white/[0.035] px-3 py-2 text-[0.62rem] text-pink-100 shadow-none">
            Подробнее
          </NeonButton>
        </div>
      </div>
    </article>
  );
}
