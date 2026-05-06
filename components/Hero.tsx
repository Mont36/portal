import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { site } from "@/lib/mock-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-pink-300/30 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-pink-100">Русский портал GTA 6</p>
          <h1 className="neon-text text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">GTA 6 — всё, что известно на данный момент</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Новости, дата выхода, карта, персонажи, Online, RP и будущие серверы в одном премиальном портале с атмосферой neon Vice City.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.trailerUrl} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 text-center font-black text-white shadow-[0_0_34px_rgba(255,46,196,0.42)] transition hover:scale-[1.02]">Смотреть трейлер</a>
            <Link href="/gta-6-data-vyhoda" className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-center font-black text-cyan-100 transition hover:bg-cyan-300/20">Подробнее об игре</Link>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-sm font-bold text-slate-300">До релиза {site.releaseDateLabel}</p>
            <Countdown targetDate={site.releaseDateIso} />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-pink-500/30 via-violet-500/20 to-cyan-400/30 blur-2xl" />
          <Image src="/placeholders/vice-city-grid.svg" alt="Неоновый placeholder GTA 6 Portal" width={1200} height={675} priority className="relative rounded-[2rem] border border-white/10 object-cover shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
