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
      <section className="container py-10 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,46,196,0.24),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(6,8,28,0.92))] p-6 shadow-[0_35px_110px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
          <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,196,0.1)_1px,transparent_1px)] bg-[size:34px_34px] opacity-50 [mask-image:linear-gradient(to_top,black,transparent)]" />
          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">Community</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Присоединяйся к нашему сообществу</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">Новости, разборы трейлеров, обсуждения карты, Online и RP-серверов — в быстрых каналах без форм регистрации и сбора персональных данных.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
              <NeonButton href="https://t.me/" external variant="secondary">Telegram</NeonButton>
              <NeonButton href="https://vk.com/" external variant="primary">VK</NeonButton>
              <NeonButton href="https://discord.com/" external variant="ghost">Discord</NeonButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
