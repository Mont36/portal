import Link from "next/link";
import { navItems } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050712]/78 shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
      <div className="container flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="group flex min-w-max items-end gap-1.5 leading-none" aria-label="На главную GTA6Portal.ru">
          <span className="text-[2rem] font-black uppercase tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] sm:text-[2.35rem]">GTA6</span>
          <span className="-mb-1 -ml-1 rotate-[-8deg] font-black italic tracking-[-0.08em] text-pink-400 drop-shadow-[0_0_13px_rgba(255,46,196,0.85)] transition group-hover:text-pink-200">Portal</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 xl:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={`${item.href}-${item.title}`} href={item.href} className="rounded-xl px-3.5 py-2 text-[13px] font-extrabold text-slate-200/90 transition hover:bg-white/[0.06] hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,46,196,0.18),0_0_24px_rgba(255,46,196,0.12)]">
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/news" aria-label="Поиск" className="grid size-10 place-items-center rounded-full border border-transparent text-slate-200 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="m21 21-4.2-4.2" />
              <circle cx="11" cy="11" r="6.5" />
            </svg>
          </Link>
          <Link href="/news" className="rounded-lg border border-pink-300/35 bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-black text-white shadow-[0_0_26px_rgba(255,46,196,0.38)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,46,196,0.52)]">
            Войти
          </Link>
        </div>
      </div>
      <nav className="container flex gap-2 overflow-x-auto pb-3 xl:hidden" aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <Link key={`${item.href}-${item.title}-mobile`} href={item.href} className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-pink-200/40 hover:bg-pink-300/10">
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
