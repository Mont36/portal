import Link from "next/link";
import { navItems } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-3" aria-label="На главную GTA6Portal.ru">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-violet-600 to-cyan-400 font-black shadow-[0_0_32px_rgba(255,46,196,0.45)]">6</span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.24em] text-white">GTA6</span>
            <span className="block text-xs font-semibold text-cyan-200">Portal.ru</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item.title}
            </Link>
          ))}
        </nav>
        <Link href="/news" className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] transition hover:bg-cyan-300/20">
          Войти в портал
        </Link>
      </div>
      <nav className="container flex gap-2 overflow-x-auto pb-3 lg:hidden" aria-label="Мобильная навигация">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200">
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
