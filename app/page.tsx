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
      <section className="container py-8 sm:py-14">
        <div className="neon-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-0 size-80 rounded-full bg-cyan-400/18 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Сообщество</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Присоединяйся к нашему сообществу</h2>
              <p className="mt-3 max-w-2xl text-slate-300">Новости, разборы трейлеров, обсуждения карты, Online и RP-серверов — в публичных каналах без форм сбора персональных данных.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <NeonButton href="https://t.me/" external variant="secondary">Telegram</NeonButton>
              <NeonButton href="https://vk.com/" external variant="ghost">VK</NeonButton>
              <NeonButton href="https://discord.com/" external>Discord</NeonButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
