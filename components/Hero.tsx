import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { NeonButton } from "@/components/NeonButton";
import { site } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="pt-4 sm:pt-6">
      <div className="hero-scene relative mx-auto mt-0 h-auto min-h-[640px] w-[calc(100%_-_24px)] max-w-[1480px] overflow-hidden rounded-[22px] bg-[#05050a] shadow-[0_42px_130px_rgba(0,0,0,0.72),0_0_90px_rgba(255,46,196,0.08)] sm:w-[calc(100%_-_48px)] lg:h-[620px] lg:min-h-0">
        <Image
          src="/public/images/home/hero-main.png"
          alt="Cinematic GTA 6 inspired city cover"
          fill
          priority
          sizes="(max-width: 768px) calc(100vw - 24px), min(calc(100vw - 48px), 1480px)"
          className="object-cover object-center lg:object-[center_right]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,10,0.96)_0%,rgba(3,4,10,0.9)_24%,rgba(3,4,10,0.58)_47%,rgba(3,4,10,0.16)_73%,rgba(3,4,10,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,10,0.62)_0%,rgba(3,4,10,0.06)_28%,rgba(3,4,10,0.1)_58%,rgba(3,4,10,0.92)_100%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.78),inset_0_-120px_130px_rgba(0,0,0,0.72)]" />
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />

        <div className="relative z-10 flex min-h-[640px] items-end px-5 py-9 sm:px-9 sm:py-12 lg:h-[620px] lg:min-h-0 lg:items-center lg:px-14 xl:px-16">
          <div className="max-w-[540px]">
            <p className="mb-5 inline-flex rounded-full bg-black/34 px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-pink-100/90 shadow-[0_0_28px_rgba(255,46,196,0.12)] backdrop-blur-md ring-1 ring-white/[0.07]">
              GTA6Portal.ru / Главная
            </p>
            <h1 className="text-[2.55rem] font-black leading-[1.02] tracking-[-0.045em] text-white drop-shadow-[0_12px_38px_rgba(0,0,0,0.82)] sm:text-[3.55rem] lg:text-[3.85rem] xl:text-[4.35rem]">
              GTA 6 — всё, что известно на данный момент
            </h1>
            <p className="mt-5 max-w-[520px] text-base font-medium leading-7 text-slate-200/88 sm:text-lg">
              Новости, дата выхода, карта, персонажи, трейлеры, GTA 6 Online и будущие RP-серверы.
            </p>
            <div className="mt-8 max-w-[500px] rounded-2xl bg-black/32 p-4 shadow-[0_22px_70px_rgba(0,0,0,0.36)] backdrop-blur-md ring-1 ring-white/[0.06] sm:p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-300">До выхода GTA 6 осталось</p>
              <Countdown targetDate={site.releaseDateIso} compact />
            </div>
            <div className="mt-7">
              <p className="text-[2rem] font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-[2.45rem]">{site.releaseDateLabel}</p>
              <p className="mt-2 text-sm font-medium text-slate-300/95">Официальная дата выхода на PS5 и Xbox Series X|S</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <NeonButton href={site.trailerUrl} external className="rounded-xl border-pink-200/25 bg-gradient-to-r from-pink-500/82 to-fuchsia-500/72 px-5 py-3 text-xs shadow-[0_0_30px_rgba(255,46,196,0.24)]">
                Смотреть трейлер
              </NeonButton>
              <NeonButton href="/gta-6-data-vyhoda" variant="ghost" className="rounded-xl border-white/10 bg-white/[0.045] px-6 py-3 text-xs text-slate-100 shadow-[0_0_24px_rgba(255,255,255,0.04)] hover:border-pink-200/28">
                Подробнее об игре
              </NeonButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
