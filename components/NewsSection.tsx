import Image from "next/image";
import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { discussions, latestNews, site } from "@/lib/mock-data";

export function NewsSection() {
  const [featured, ...sideNews] = latestNews;

  return (
    <section className="container pb-4 pt-2 sm:pb-7">
      <div className="grid gap-5 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]">
        <div className="rounded-[1.35rem] bg-[#050711]/64 p-4 shadow-[0_26px_85px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.045] backdrop-blur-xl sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-black tracking-[-0.02em] text-white sm:text-2xl">Последние новости</h2>
            <Link href="/news" className="text-xs font-bold text-pink-300/90 transition hover:text-pink-100">Все новости</Link>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.14fr_0.86fr]">
            <Link href={featured.href} className="group relative min-h-[430px] overflow-hidden rounded-[1.2rem] bg-slate-950 shadow-[0_28px_70px_rgba(0,0,0,0.46)] ring-1 ring-white/[0.055]">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1280px) 100vw, 690px" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,10,0.04)_0%,rgba(3,4,10,0.32)_38%,rgba(3,4,10,0.96)_100%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_95px_rgba(0,0,0,0.55)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <span className="rounded-full bg-black/38 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-md ring-1 ring-white/[0.08]">{featured.category}</span>
                <h3 className="mt-4 text-2xl font-black leading-tight text-white transition group-hover:text-pink-100 sm:text-3xl">{featured.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm font-medium leading-6 text-slate-200/88">{featured.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>{featured.date}</span>
                  <span>◌ {featured.comments}</span>
                </div>
              </div>
            </Link>

            <div className="grid content-start gap-4">
              {sideNews.slice(0, 3).map((item) => (
                <Link key={item.id} href={item.href} className="group grid grid-cols-[128px_1fr] gap-4 rounded-2xl p-1 transition hover:bg-white/[0.03] sm:grid-cols-[166px_1fr] xl:grid-cols-[150px_1fr]">
                  <div className="relative min-h-28 overflow-hidden rounded-[0.95rem] bg-slate-950 shadow-[0_16px_38px_rgba(0,0,0,0.34)]">
                    <Image src={item.image} alt={item.title} fill sizes="180px" className="object-cover transition duration-500 group-hover:scale-[1.045]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,10,0.04),rgba(3,4,10,0.58))]" />
                  </div>
                  <div className="min-w-0 py-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.08em] text-slate-500">{item.category}</p>
                    <h3 className="mt-2 text-base font-bold leading-snug text-white transition group-hover:text-pink-200">{item.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-500">
                      <span>{item.date}</span>
                      <span>◌ {item.comments}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="grid content-start gap-4">
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.25rem] bg-[#080a12] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.055]">
            <Image src="/public/images/home/hero-secondary.png" alt="Дата выхода GTA 6" fill sizes="380px" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,10,0.3)_0%,rgba(3,4,10,0.62)_42%,rgba(3,4,10,0.96)_100%)]" />
            <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end">
              <h3 className="text-xl font-black text-white">Дата выхода</h3>
              <p className="mt-3 text-[2rem] font-black uppercase leading-tight tracking-[-0.05em] text-white">{site.releaseDateLabel}</p>
              <p className="mt-2 font-medium text-slate-300">PS5 и Xbox Series X|S</p>
              <NeonButton href="/gta-6-data-vyhoda" className="mt-5 w-full rounded-xl py-3 text-xs">Подробнее</NeonButton>
            </div>
          </div>

          <div className="rounded-[1.25rem] bg-[linear-gradient(145deg,rgba(9,12,24,0.96),rgba(25,9,24,0.76))] p-5 shadow-[0_20px_62px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.055]">
            <h3 className="text-xl font-black text-white">Подпишись на обновления</h3>
            <p className="mt-2 text-sm font-medium text-slate-400">Будь в курсе всех новостей GTA 6</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Link href="https://t.me/" className="grid h-11 place-items-center rounded-xl bg-white/[0.055] text-sm font-bold text-slate-100 ring-1 ring-white/[0.06] transition hover:bg-sky-400/18 hover:text-sky-100">TG</Link>
              <Link href="https://vk.com/" className="grid h-11 place-items-center rounded-xl bg-white/[0.055] text-sm font-bold text-slate-100 ring-1 ring-white/[0.06] transition hover:bg-blue-400/18 hover:text-blue-100">VK</Link>
              <Link href="https://discord.com/" className="grid h-11 place-items-center rounded-xl bg-white/[0.055] text-sm font-bold text-slate-100 ring-1 ring-white/[0.06] transition hover:bg-indigo-400/18 hover:text-indigo-100">DS</Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function DiscussionsPreview() {
  return (
    <div className="rounded-[1.25rem] bg-[#050711]/72 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.05] backdrop-blur-xl">
      <h3 className="text-xl font-black text-white">Сейчас обсуждают</h3>
      <div className="mt-4 grid gap-1">
        {discussions.map((item) => (
          <Link key={item.title} href={item.href} className="flex items-center justify-between gap-4 rounded-xl px-2 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.035] hover:text-pink-200">
            <span>{item.title}</span>
            <span className="shrink-0 text-slate-500">◌ {item.comments}</span>
          </Link>
        ))}
      </div>
      <NeonButton href="/servera" variant="ghost" className="mt-5 rounded-xl px-4 py-2.5 text-xs">Перейти на форум</NeonButton>
    </div>
  );
}
