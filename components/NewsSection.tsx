import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { SidebarCard } from "@/components/SidebarCard";
import { discussions, latestNews, site } from "@/lib/mock-data";

export function NewsSection() {
  const [featured, ...items] = latestNews;

  return (
    <section className="container py-8 sm:py-12">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-200">Портал</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Последние новости</h2>
            </div>
            <Link href="/news" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/10 sm:inline-flex">Все новости</Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="group neon-card relative min-h-[420px] overflow-hidden rounded-[2rem] p-6 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,46,196,0.22),transparent_30%),linear-gradient(180deg,transparent,#050816_76%)]" />
              <div className="absolute inset-x-0 top-0 h-52 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,196,0.1)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60" />
              <div className="relative flex h-full min-h-[368px] flex-col justify-end">
                <div className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">{featured.category}</span>
                  <time>{featured.date}</time>
                </div>
                <h3 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">{featured.title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">{featured.excerpt}</p>
                <Link href={featured.href} className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-100">Читать материал</Link>
              </div>
            </article>
            <div className="grid gap-4">
              {items.slice(0, 4).map((item) => (
                <Link key={item.id} href={item.href} className="neon-card group rounded-3xl p-4 transition hover:-translate-y-0.5 hover:border-pink-200/25">
                  <div className="mb-2 flex items-center justify-between gap-3 text-[11px] font-black uppercase tracking-[0.16em] text-cyan-200">
                    <span>{item.category}</span>
                    <time className="text-slate-400">{item.date}</time>
                  </div>
                  <h3 className="text-base font-black leading-snug text-white group-hover:text-cyan-100">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:pt-[78px]">
          <SidebarCard label="Release" title="Дата выхода" accent="pink">
            <p>Главная дата портала — <strong className="text-white">{site.releaseDateLabel}</strong>. Следим за платформами, переносами, предзаказами и изданиями.</p>
            <NeonButton href="/gta-6-data-vyhoda" variant="secondary" className="mt-4 w-full py-2.5">Открыть таймер</NeonButton>
          </SidebarCard>
          <SidebarCard label="Updates" title="Подписаться на обновления" accent="cyan">
            <p>Без форм и сбора данных: подключайтесь к соцсетям портала, чтобы следить за новостями, RP и гайдами.</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <NeonButton href="https://t.me/" external variant="secondary" className="py-2.5">Telegram</NeonButton>
              <NeonButton href="https://vk.com/" external variant="ghost" className="py-2.5">VK</NeonButton>
            </div>
          </SidebarCard>
          <SidebarCard label="Hot topics" title="Сейчас обсуждают" accent="violet">
            <div className="grid gap-3">
              {discussions.slice(0, 4).map((item) => (
                <Link key={item.title} href={item.href} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.08]">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-pink-200">{item.tag}</span>
                  <span className="mt-1 block font-bold leading-5 text-white">{item.title}</span>
                  <span className="mt-1 block text-xs font-bold text-slate-400">{item.comments} комментариев</span>
                </Link>
              ))}
            </div>
          </SidebarCard>
        </div>
      </div>
    </section>
  );
}
