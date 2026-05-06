import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { discussions, latestNews } from "@/lib/mock-data";

const visualClass = {
  pink: "from-[#20101b] via-[#592039] to-[#03040a]",
  cyan: "from-[#0d2430] via-[#17304f] to-[#03040a]",
  violet: "from-[#19142c] via-[#32204d] to-[#03040a]",
};

function CinematicVisual({ accent, small = false }: { accent: keyof typeof visualClass; small?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${visualClass[accent]} ${small ? "h-full min-h-24 rounded-xl" : "h-[380px] rounded-2xl"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,214,154,.38),transparent_4.8rem),radial-gradient(circle_at_78%_36%,rgba(255,46,196,.18),transparent_7rem),linear-gradient(180deg,rgba(255,255,255,.025),rgba(2,4,12,.9))]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(3,4,10,.98),rgba(3,4,10,.36),transparent)]" />
      <div className="absolute bottom-[13%] left-[7%] h-28 w-16 bg-black/55 blur-[1px] [clip-path:polygon(42%_0,58%_0,66%_100%,36%_100%)]" />
      <div className="absolute bottom-[13%] left-[18%] h-36 w-28 rounded-t-[18%] bg-black/50 blur-[1px]" />
      <div className="absolute bottom-[12%] right-[7%] h-20 w-48 rounded-t-[70%] bg-black/55 shadow-[0_-12px_36px_rgba(255,46,196,.12)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(100deg,transparent,rgba(255,46,196,.14),transparent),linear-gradient(78deg,transparent,rgba(34,211,238,.11),transparent)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,transparent_0_49%,rgba(255,255,255,.35)_50%,transparent_51%)] [background-size:54px_100%]" />
      <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(0,0,0,.7)]" />
    </div>
  );
}

export function NewsSection() {
  const [featured, ...sideNews] = latestNews;

  return (
    <section className="container pb-4 pt-1 sm:pb-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-white/[0.065] bg-[#050711]/88 p-5 sm:p-6 shadow-[0_22px_70px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-2xl">Последние новости</h2>
            <Link href="/news" className="text-xs font-black text-pink-400 transition hover:text-pink-200">Все новости</Link>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
            <Link href={featured.href} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/70 shadow-[0_20px_55px_rgba(0,0,0,0.38)]">
              <CinematicVisual accent={featured.accent} />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="rounded-full bg-white/12 px-3 py-1 text-[0.65rem] font-black uppercase text-white backdrop-blur">{featured.category}</span>
                <h3 className="mt-4 text-2xl font-black leading-tight text-white transition group-hover:text-pink-100">{featured.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-slate-200/90">{featured.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>{featured.date}</span>
                  <span>◌ {featured.comments}</span>
                </div>
              </div>
            </Link>

            <div className="grid gap-4">
              {sideNews.slice(0, 3).map((item) => (
                <Link key={item.id} href={item.href} className="group grid grid-cols-[128px_1fr] gap-4 border-b border-white/[0.07] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[156px_1fr] xl:grid-cols-[150px_1fr]">
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
          <div className="release-card relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080a12] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <h3 className="relative z-10 text-xl font-black uppercase text-white">Дата выхода</h3>
            <div className="relative z-10 mt-24">
              <p className="text-[2rem] font-black uppercase leading-tight tracking-[-0.05em] text-white">19 ноября 2026</p>
              <p className="mt-2 font-semibold text-slate-300">PS5 и Xbox Series X|S</p>
              <NeonButton href="/gta-6-data-vyhoda" className="mt-5 w-full rounded-md py-3 text-xs">Подробнее</NeonButton>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#050711]/95 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
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
    <aside className="rounded-[1.35rem] border border-white/[0.045] bg-[#050711]/78 p-4 shadow-[0_18px_52px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.64rem] font-black uppercase tracking-[0.2em] text-slate-500">Форум</p>
          <h3 className="mt-1 text-lg font-black uppercase tracking-[-0.02em] text-white">Сейчас обсуждают</h3>
        </div>
        <span className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.14em] text-slate-500">Live</span>
      </div>
      <div className="mt-3 divide-y divide-white/[0.055]">
        {discussions.map((item) => (
          <Link key={item.title} href={item.href} className="group flex items-center justify-between gap-4 py-2.5 text-sm text-slate-300 transition hover:text-pink-100">
            <span className="font-semibold leading-5">{item.title}</span>
            <span className="shrink-0 rounded-full bg-white/[0.025] px-2 py-1 text-[0.68rem] font-bold text-slate-600 transition group-hover:text-slate-400">{item.comments}</span>
          </Link>
        ))}
      </div>
      <NeonButton href="/servera" variant="ghost" className="mt-4 rounded-lg border-white/12 bg-white/[0.035] px-3.5 py-2 text-[0.64rem] text-slate-200 shadow-none">Перейти на форум</NeonButton>
    </aside>
  );
}
