import { Hero } from "@/components/Hero";
import { ImportantSection } from "@/components/ImportantSection";
import { NeonButton } from "@/components/NeonButton";
import { NewsSection } from "@/components/NewsSection";
import { QuickLinks } from "@/components/QuickLinks";
import { ServersSection } from "@/components/ServersSection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <NewsSection />
      <ImportantSection />
      <ServersSection />
      <section className="container pb-8 pt-5 sm:pb-10 sm:pt-7">
        <div className="community-cta relative overflow-hidden rounded-[1.35rem] border border-white/[0.055] bg-[#050711] p-6 shadow-[0_28px_95px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.045)] sm:p-8 lg:p-9">
          <div className="relative z-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-pink-100/70">Community hub</p>
              <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">Собираем русскоязычное комьюнити GTA 6 до релиза</h2>
              <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-slate-300/86">Обсуждай трейлеры, делись теориями, следи за RP-командами и находи игроков для первых сезонов Online.</p>
            </div>
            <NeonButton href="https://discord.com/" external className="rounded-xl border-pink-200/35 bg-gradient-to-r from-pink-500/90 to-fuchsia-500/80 px-6 py-3 text-xs shadow-[0_0_32px_rgba(255,46,196,0.28)] lg:px-8">
              Присоединиться
            </NeonButton>
          </div>
        </div>
      </section>
    </>
  );
}
