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
      <section className="container pb-8 pt-3 sm:pb-10">
        <div className="community-cta relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050711] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.36)] sm:p-8">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">Присоединяйся к нашему сообществу</h2>
              <p className="mt-2 max-w-2xl text-base font-semibold text-slate-300">Обсуждай новости, делись теориями и находи команду для игры.</p>
            </div>
            <NeonButton href="https://discord.com/" external className="rounded-md px-10 py-3 text-xs">
              Присоединиться
            </NeonButton>
          </div>
        </div>
      </section>
    </>
  );
}
