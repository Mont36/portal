import { Countdown } from "@/components/Countdown";
import { HeroVisual } from "@/components/HeroVisual";
import { NeonButton } from "@/components/NeonButton";
import { site } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="container pt-5 sm:pt-7">
      <div className="hero-scene relative min-h-[620px] overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#03040a] shadow-[0_36px_120px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(255,255,255,0.06)] sm:min-h-[640px] lg:min-h-[610px]">
        <HeroVisual />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,4,10,0.96)_0%,rgba(3,4,10,0.9)_26%,rgba(3,4,10,0.52)_48%,rgba(3,4,10,0.12)_72%,rgba(3,4,10,0.28)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,4,10,0.72)_0%,transparent_24%,transparent_62%,rgba(3,4,10,0.88)_100%)]" />
        <div className="absolute inset-0 z-10 shadow-[inset_0_0_150px_rgba(0,0,0,0.88)]" />

        <div className="relative z-20 flex min-h-[620px] items-start px-5 py-10 sm:min-h-[640px] sm:px-9 sm:py-12 lg:min-h-[610px] lg:items-center lg:px-14 xl:px-16">
          <div className="max-w-[545px] pt-6 sm:pt-8 lg:pt-0">
            <p className="mb-5 inline-flex rounded-full border border-white/[0.12] bg-black/35 px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.22em] text-pink-100/90 shadow-[0_0_26px_rgba(255,46,196,0.12)] backdrop-blur-md">
              GTA6Portal.ru / Главная
            </p>
            <h1 className="text-[2.45rem] font-black leading-[1.05] tracking-[-0.045em] text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.84)] sm:text-[3.45rem] lg:text-[3.55rem] xl:text-[4.05rem]">
              GTA 6 — всё, что известно на данный момент
            </h1>
            <p className="mt-5 max-w-[520px] text-base font-semibold leading-[1.65] text-slate-200/86 sm:text-lg">
              Новости, дата выхода, карта, персонажи и GTA 6 Online — в одном тёмном медиа-портале без лишнего шума.
            </p>
            <div className="mt-8 max-w-[500px] rounded-2xl border border-white/[0.09] bg-black/30 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-5">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-slate-300">До выхода GTA 6 осталось</p>
              <Countdown targetDate={site.releaseDateIso} compact />
            </div>
            <div className="mt-7">
              <p className="text-[2rem] font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-[2.45rem]">19 ноября 2026</p>
              <p className="mt-2 text-sm font-semibold text-slate-300/95">Официальная дата выхода на PS5 и Xbox Series X|S</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <NeonButton href={site.trailerUrl} external className="rounded-xl border-pink-200/35 bg-gradient-to-r from-pink-500/85 to-fuchsia-500/80 px-5 py-3 text-xs shadow-[0_0_26px_rgba(255,46,196,0.28)]">
                Смотреть трейлер
              </NeonButton>
              <NeonButton href="/gta-6-data-vyhoda" variant="ghost" className="rounded-xl border-white/15 bg-white/[0.045] px-6 py-3 text-xs text-slate-100 shadow-[0_0_24px_rgba(255,255,255,0.06)] hover:border-pink-200/35">
                Подробнее об игре
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
