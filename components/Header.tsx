import Link from "next/link";
import { navItems } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.065] bg-[#03040a]/82 shadow-[0_18px_70px_rgba(0,0,0,0.52)] backdrop-blur-2xl">
      <div className="container flex min-h-[74px] items-center justify-between gap-5">
        <Link href="/" className="group flex min-w-max items-end gap-1.5 leading-none" aria-label="На главную GTA6Portal.ru">
          <span className="text-[2rem] font-black uppercase tracking-[-0.08em] text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.18)] sm:text-[2.35rem]">GTA6</span>
          <span className="-mb-1 -ml-1 rotate-[-8deg] font-black italic tracking-[-0.08em] text-pink-300/90 drop-shadow-[0_0_11px_rgba(255,46,196,0.5)] transition group-hover:text-pink-100">Portal</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={`${item.href}-${item.title}`} href={item.href} className="rounded-xl px-3.5 py-2 text-[13px] font-extrabold text-slate-300/90 transition hover:bg-white/[0.045] hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]">
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/news" aria-label="Поиск" className="grid size-10 place-items-center rounded-full border border-white/[0.07] bg-white/[0.025] text-slate-300 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="m21 21-4.2-4.2" />
              <circle cx="11" cy="11" r="6.5" />
            </svg>
          </Link>
          <Link href="/news" className="rounded-xl border border-pink-300/28 bg-pink-400/[0.09] px-6 py-3 text-sm font-black text-pink-50 shadow-[0_0_24px_rgba(255,46,196,0.16)] transition hover:-translate-y-0.5 hover:border-pink-200/45 hover:bg-pink-400/[0.14]">
            Войти
          </Link>
        </div>
      </div>
      <nav className="container flex gap-2 overflow-x-auto pb-3 xl:hidden" aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <Link key={`${item.href}-${item.title}-mobile`} href={item.href} className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-pink-200/30 hover:bg-pink-300/[0.08]">
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
