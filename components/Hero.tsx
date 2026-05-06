import { Countdown } from "@/components/Countdown";
import { HeroVisual } from "@/components/HeroVisual";
import { NeonButton } from "@/components/NeonButton";
import { site } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="relative isolate -mt-[1px] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.22),transparent_34rem),radial-gradient(circle_at_78%_12%,rgba(255,46,196,0.24),transparent_34rem),linear-gradient(180deg,#050816_0%,#071026_52%,#030712_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,196,0.1)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70 [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute left-[4%] top-24 -z-10 h-64 w-32 opacity-35 lg:opacity-50">
        <div className="absolute bottom-0 left-14 h-56 w-2 rounded-full bg-slate-950" />
        <div className="absolute left-0 top-0 h-28 w-36 rounded-[60%] border-l-[16px] border-t-[10px] border-slate-950 [transform:rotate(-24deg)]" />
        <div className="absolute left-8 top-8 h-28 w-36 rounded-[60%] border-r-[16px] border-t-[10px] border-slate-950 [transform:rotate(20deg)]" />
      </div>
      <div className="absolute right-[3%] top-32 -z-10 h-72 w-36 opacity-35 lg:opacity-50">
        <div className="absolute bottom-0 left-16 h-64 w-2 rounded-full bg-slate-950" />
        <div className="absolute left-0 top-0 h-32 w-40 rounded-[60%] border-l-[18px] border-t-[10px] border-slate-950 [transform:rotate(-24deg)]" />
        <div className="absolute left-8 top-8 h-32 w-40 rounded-[60%] border-r-[18px] border-t-[10px] border-slate-950 [transform:rotate(20deg)]" />
      </div>

      <div className="container grid min-h-[auto] gap-10 py-12 sm:py-16 lg:min-h-[760px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-0 xl:min-h-[820px]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-pink-100 shadow-[0_0_26px_rgba(255,46,196,0.18)]">Русский fan portal GTA 6</p>
          <h1 className="neon-text text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-[4.35rem] xl:leading-[0.95]">GTA 6 — всё, что известно на данный момент</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Премиальный русскоязычный портал: дата выхода, карта Леониды, персонажи, GTA 6 Online, RP-серверы, новости и гайды без чужих copyrighted assets.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NeonButton href={site.trailerUrl} external>Смотреть трейлер</NeonButton>
            <NeonButton href="/gta-6-data-vyhoda" variant="secondary">Подробнее об игре</NeonButton>
          </div>
          <div className="mt-8 max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/45 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">До релиза</p>
              <p className="text-sm font-bold text-slate-300">{site.releaseDateLabel}</p>
            </div>
            <Countdown targetDate={site.releaseDateIso} />
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
