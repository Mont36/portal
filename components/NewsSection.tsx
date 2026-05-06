import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { SidebarCard } from "@/components/SidebarCard";
import { discussions, latestNews, site } from "@/lib/mock-data";

const visualAccent = {
  pink: "from-pink-500/35 via-violet-500/20 to-slate-950",
  cyan: "from-cyan-400/35 via-blue-500/15 to-slate-950",
  violet: "from-violet-500/35 via-pink-500/15 to-slate-950",
};

export function NewsSection() {
  const featured = latestNews[0]!;
  const secondaryNews = latestNews.slice(1);

  return (
    <section className="container py-8 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-200">Лента портала</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">Последние новости</h2>
            </div>
            <Link href="/news" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/10 sm:inline-flex">Все новости</Link>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <Link href={featured.href} className="neon-card group relative min-h-[420px] overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-pink-200/35">
              <div className={`absolute inset-0 bg-gradient-to-br ${visualAccent[featured.accent]}`} />
              <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white">{featured.category}</span>
                  <span className="text-sm font-bold text-slate-200">{featured.date}</span>
                </div>
                <div>
                  <h3 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">{featured.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">{featured.excerpt}</p>
                </div>
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {secondaryNews.slice(0, 4).map((item) => (
                <Link key={item.id} href={item.href} className="neon-card group overflow-hidden rounded-3xl p-4 transition hover:-translate-y-1 hover:border-cyan-200/35">
                  <div className="flex gap-4">
                    <div className={`h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br ${visualAccent[item.accent]} shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]`} />
                    <div>
                      <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-400">
                        <span className="text-cyan-200">{item.category}</span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="mt-2 font-black leading-snug text-white">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{item.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <SidebarCard title="Дата выхода" eyebrow="Release">
            <p className="text-3xl font-black text-white">{site.releaseDateLabel}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">Следим за платформами, версиями, переносами и важными объявлениями до запуска.</p>
            <NeonButton href="/gta-6-data-vyhoda" variant="secondary" className="mt-5 w-full py-2.5 text-xs">Открыть таймер</NeonButton>
          </SidebarCard>

          <SidebarCard title="Подписаться на обновления" eyebrow="Updates">
            <p className="text-sm leading-6 text-slate-300">Без форм и персональных данных: быстрые ссылки на публичные каналы портала.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <NeonButton href="https://t.me/" external variant="secondary" className="py-2.5 text-xs">Telegram</NeonButton>
              <NeonButton href="https://vk.com/" external variant="ghost" className="py-2.5 text-xs">VK</NeonButton>
            </div>
          </SidebarCard>

          <SidebarCard title="Сейчас обсуждают" eyebrow="Forum pulse">
            <div className="grid gap-3">
              {discussions.slice(0, 3).map((item) => (
                <Link key={item.title} href={item.href} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.08]">
                  <span className="text-sm font-bold leading-5 text-slate-100">{item.title}</span>
                  <span className="shrink-0 rounded-full bg-pink-500/15 px-2.5 py-1 text-xs font-black text-pink-100">{item.comments}</span>
                </Link>
              ))}
            </div>
          </SidebarCard>
        </div>
      </div>
    </section>
  );
}
