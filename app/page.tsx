import Image from "next/image";
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
      <section className="container pb-8 pt-4 sm:pb-12 sm:pt-6">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[#05050a] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.48)] ring-1 ring-white/[0.055] sm:p-8">
          <Image src="/public/images/home/hero-secondary.png" alt="Сообщество GTA 6" fill sizes="min(100vw, 1480px)" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,10,0.95)_0%,rgba(3,4,10,0.8)_46%,rgba(3,4,10,0.46)_100%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_110px_rgba(0,0,0,0.62)]" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">Присоединяйся к нашему сообществу</h2>
              <p className="mt-2 max-w-2xl text-base font-medium text-slate-300">Обсуждай, делись теориями, находи команду для игры</p>
            </div>
            <NeonButton href="https://discord.com/" external className="rounded-xl px-10 py-3 text-xs">
              Присоединиться
            </NeonButton>
          </div>
        </div>
      </section>
    </>
  );
}
