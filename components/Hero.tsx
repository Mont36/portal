import { Countdown } from "@/components/Countdown";
import { HeroVisual } from "@/components/HeroVisual";
import { NeonButton } from "@/components/NeonButton";
import { site } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="container pt-5">
      <div className="hero-scene relative min-h-[540px] overflow-hidden rounded-[0.55rem] border border-white/[0.06] bg-[#050711] shadow-[0_32px_95px_rgba(0,0,0,0.56)] lg:min-h-[585px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_21%,rgba(255,46,196,0.22),transparent_28rem),linear-gradient(90deg,rgba(2,4,12,0.98)_0%,rgba(2,4,12,0.88)_28%,rgba(2,4,12,0.3)_50%,rgba(2,4,12,0.04)_100%)]" />
        <div className="relative grid min-h-[540px] lg:min-h-[585px] lg:grid-cols-[0.38fr_0.62fr]">
          <div className="z-10 flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-5 xl:px-7">
            <h1 className="max-w-[560px] text-[2.25rem] font-black leading-[1.1] tracking-[-0.045em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.7)] sm:text-5xl lg:text-[2.65rem] xl:text-[3.15rem]">
              GTA 6 — всё, что известно на данный момент
            </h1>
            <p className="mt-5 max-w-[430px] text-base font-semibold leading-7 text-slate-200/90">
              Новости, дата выхода, карта, персонажи, трейлеры, GTA 6 Online и будущие RP-серверы.
            </p>
            <div className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.08em] text-white">До выхода GTA 6 осталось</p>
              <Countdown targetDate={site.releaseDateIso} compact />
            </div>
            <div className="mt-7">
              <p className="text-[2rem] font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-[2.35rem]">19 ноября 2026</p>
              <p className="mt-2 text-sm font-semibold text-slate-200/90">Официальная дата выхода на PS5 и Xbox Series X|S</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <NeonButton href={site.trailerUrl} external className="rounded-lg px-5 py-3 text-xs">
                Смотреть трейлер
              </NeonButton>
              <NeonButton href="/gta-6-data-vyhoda" variant="ghost" className="rounded-full border-pink-400/55 bg-black/25 px-6 py-3 text-xs shadow-[0_0_24px_rgba(255,46,196,0.16)]">
                Подробнее об игре
              </NeonButton>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
