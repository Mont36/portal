import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { discussions, latestNews } from "@/lib/mock-data";

const visualClass = {
  pink: "from-pink-500/70 via-orange-400/35 to-slate-950",
  cyan: "from-cyan-300/65 via-blue-500/35 to-slate-950",
  violet: "from-violet-500/65 via-fuchsia-500/35 to-slate-950",
};

function CinematicVisual({ accent, small = false }: { accent: keyof typeof visualClass; small?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${visualClass[accent]} ${small ? "h-full min-h-24 rounded-lg" : "h-[330px] rounded-lg"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(255,244,214,.65),transparent_4rem),linear-gradient(180deg,transparent,rgba(2,6,23,.88))]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(3,7,18,.96),transparent)]" />
      <div className="absolute bottom-0 left-[8%] h-24 w-20 rounded-t-full bg-black/55 blur-[1px]" />
      <div className="absolute bottom-0 left-[24%] h-28 w-24 rounded-t-full bg-black/45 blur-[1px]" />
      <div className="absolute bottom-0 right-[9%] h-20 w-44 rounded-t-[70%] bg-black/50 shadow-[0_-10px_35px_rgba(255,46,196,.18)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,transparent_0_48%,rgba(255,255,255,.35)_49%,transparent_50%)] [background-size:42px_100%]" />
    </div>
  );
}

export function NewsSection() {
  const [featured, ...sideNews] = latestNews;

  return (
    <section className="container pb-4 pt-1 sm:pb-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_330px]">
        <div className="rounded-lg border border-white/[0.07] bg-[#070c16]/88 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-2xl">Последние новости</h2>
            <Link href="/news" className="text-xs font-black text-pink-400 transition hover:text-pink-200">Все новости</Link>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
            <Link href={featured.href} className="group relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 shadow-[0_20px_55px_rgba(0,0,0,0.38)]">
              <CinematicVisual accent={featured.accent} />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="rounded-full bg-white/12 px-3 py-1 text-[0.65rem] font-black uppercase text-white backdrop-blur">{featured.category}</span>
                <h3 className="mt-4 text-xl font-black leading-tight text-white transition group-hover:text-pink-100">{featured.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-slate-200/90">{featured.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>{featured.date}</span>
                  <span>◌ {featured.comments}</span>
                </div>
              </div>
            </Link>

            <div className="grid gap-4">
              {sideNews.slice(0, 3).map((item) => (
                <Link key={item.id} href={item.href} className="group grid grid-cols-[142px_1fr] gap-4 border-b border-white/[0.07] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[160px_1fr] xl:grid-cols-[138px_1fr]">
                  <CinematicVisual accent={item.accent} small />
                  <div className="min-w-0 py-1">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.08em] text-slate-500">{item.category}</p>
                    <h3 className="mt-2 text-base font-black leading-snug text-white transition group-hover:text-pink-200">{item.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>{item.date}</span>
                      <span>◌ {item.comments}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="release-card relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#101124] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h3 className="relative z-10 text-xl font-black uppercase text-white">Дата выхода</h3>
            <div className="relative z-10 mt-24">
              <p className="text-[2rem] font-black uppercase leading-tight tracking-[-0.05em] text-white">19 ноября 2026</p>
              <p className="mt-2 font-semibold text-slate-300">PS5 и Xbox Series X|S</p>
              <NeonButton href="/gta-6-data-vyhoda" className="mt-5 w-full rounded-md py-3 text-xs">Подробнее</NeonButton>
            </div>
          </div>

          <div className="rounded-lg border border-white/[0.08] bg-[#0a0f1d]/95 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
            <h3 className="text-xl font-black uppercase text-white">Подпишись на обновления</h3>
            <p className="mt-2 text-sm font-semibold text-slate-400">Будь в курсе всех новостей GTA 6</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Link href="https://t.me/" className="grid h-11 place-items-center rounded-md bg-sky-500 text-lg font-black text-white shadow-[0_0_24px_rgba(14,165,233,0.25)]">↗</Link>
              <Link href="https://vk.com/" className="grid h-11 place-items-center rounded-md bg-blue-600 text-sm font-black text-white shadow-[0_0_24px_rgba(37,99,235,0.25)]">VK</Link>
              <Link href="https://discord.com/" className="grid h-11 place-items-center rounded-md bg-indigo-500 text-lg font-black text-white shadow-[0_0_24px_rgba(99,102,241,0.25)]">⌁</Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function DiscussionsPreview() {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-[#080d18]/95 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
      <h3 className="text-xl font-black uppercase text-white">Сейчас обсуждают</h3>
      <div className="mt-4 grid gap-1">
        {discussions.map((item) => (
          <Link key={item.title} href={item.href} className="flex items-center justify-between gap-4 border-b border-white/[0.07] py-3 text-sm font-bold text-slate-200 transition last:border-b-0 hover:text-pink-200">
            <span>{item.title}</span>
            <span className="shrink-0 text-slate-500">◌ {item.comments}</span>
          </Link>
        ))}
      </div>
      <NeonButton href="/servera" variant="ghost" className="mt-5 rounded-md px-4 py-2.5 text-xs">Перейти на форум</NeonButton>
    </div>
  );
}
