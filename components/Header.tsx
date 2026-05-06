import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { navItems } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
      <div className="container flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="На главную GTA6Portal.ru">
          <span className="relative grid size-11 place-items-center rounded-[1.15rem] border border-white/15 bg-gradient-to-br from-pink-500 via-violet-600 to-cyan-400 font-black text-white shadow-[0_0_36px_rgba(255,46,196,0.5)] transition group-hover:scale-105">
            <span className="absolute inset-0 rounded-[1.15rem] bg-white/10 blur-md" />
            <span className="relative">6</span>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.24em] text-white drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]">GTA 6</span>
            <span className="block bg-gradient-to-r from-pink-200 via-white to-cyan-200 bg-clip-text text-sm font-black text-transparent">Portal.ru</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 xl:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item.title}
            </Link>
          ))}
        </nav>
        <NeonButton href="/news" variant="secondary" className="hidden px-4 py-2 text-xs sm:inline-flex">
          Войти в портал
        </NeonButton>
      </div>
      <nav className="container flex gap-2 overflow-x-auto pb-3 xl:hidden" aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-cyan-200/40 hover:bg-cyan-300/10">
            {item.title}
          </Link>
        ))}
        <Link href="/news" className="shrink-0 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100 sm:hidden">
          Войти
        </Link>
      </nav>
    </header>
  );
}
