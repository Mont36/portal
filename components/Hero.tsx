import { Countdown } from "@/components/Countdown";
import { HeroVisual } from "@/components/HeroVisual";
import { NeonButton } from "@/components/NeonButton";
import { site } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 grid-glow opacity-70" />
      <div className="absolute left-[-10%] top-24 size-[34rem] rounded-full bg-pink-500/20 blur-[120px]" />
      <div className="absolute right-[-8%] top-20 size-[32rem] rounded-full bg-cyan-400/18 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="container relative grid min-h-[720px] gap-10 py-12 sm:py-16 lg:min-h-[780px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-pink-300/35 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-pink-100 shadow-[0_0_30px_rgba(255,46,196,0.18)]">Русский fan portal • Vice City mood</p>
          <h1 className="neon-text text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">GTA 6 — всё, что известно на данный момент</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Плотная база новостей, даты выхода, карты, персонажей, Online, RP-серверов и гайдов — в тёмной неоновой атмосфере современного игрового портала.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NeonButton href={site.trailerUrl} external>
              Смотреть трейлер
            </NeonButton>
            <NeonButton href="/gta-6-data-vyhoda" variant="secondary">
              Подробнее об игре
            </NeonButton>
          </div>
          <div className="mt-8 max-w-2xl rounded-3xl border border-white/10 bg-slate-950/40 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-slate-300">До релиза {site.releaseDateLabel}</p>
              <span className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-cyan-100">Live timer</span>
            </div>
            <Countdown targetDate={site.releaseDateIso} />
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
