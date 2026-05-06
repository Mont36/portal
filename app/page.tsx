import { DiscussionSection } from "@/components/DiscussionSection";
import { Hero } from "@/components/Hero";
import { ImportantSection } from "@/components/ImportantSection";
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
      <DiscussionSection />
      <section className="container py-8 sm:py-12">
        <div className="neon-card overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Подписка</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">Следите за GTA 6 в Telegram и VK</h2>
              <p className="mt-3 max-w-2xl text-slate-300">Подпишитесь, чтобы получать новости, разборы трейлеров, обновления по RP-серверам и важные материалы портала.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-6 py-3 text-center font-black text-slate-950">Telegram</a>
              <a href="https://vk.com/" target="_blank" rel="noreferrer" className="rounded-full bg-pink-500 px-6 py-3 text-center font-black text-white">VK</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
