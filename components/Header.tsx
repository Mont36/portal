import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { navItems } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/72 backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="container flex min-h-18 items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="На главную GTA6Portal.ru">
          <span className="relative flex size-12 items-center justify-center rounded-[1.35rem] border border-white/15 bg-slate-950 font-black shadow-[0_0_34px_rgba(255,46,196,0.38)]">
            <span className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-pink-500/80 via-violet-600/70 to-cyan-400/80 opacity-75 blur-sm transition group-hover:opacity-100" />
            <span className="relative text-lg text-white">6</span>
          </span>
          <span className="leading-none">
            <span className="block text-base font-black uppercase tracking-[0.22em] text-white neon-text">GTA 6</span>
            <span className="mt-1 block text-xs font-black uppercase tracking-[0.28em] text-cyan-200">Portal.ru</span>
          </span>
        </Link>
        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3.5 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white xl:px-4">
              {item.title}
            </Link>
          ))}
        </nav>
        <NeonButton href="/news" variant="secondary" className="hidden px-4 py-2.5 sm:inline-flex">
          Войти в портал
        </NeonButton>
      </div>
      <nav className="container flex gap-2 overflow-x-auto pb-3 lg:hidden" aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-bold text-slate-200 shadow-[0_0_18px_rgba(34,211,238,0.08)]">
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
