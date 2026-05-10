import Link from "next/link";
import { navItems } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-slate-950/70 py-10">
      <div className="container grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <Link href="/" className="text-xl font-black uppercase tracking-[0.2em]">GTA6PORTAL.RU</Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">© 2026 GTA6Portal.ru. Неофициальный фан-портал.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {navItems.map((item) => (
            <Link key={`${item.href}-${item.title}`} href={item.href} className="text-sm font-semibold text-slate-300 hover:text-white">{item.title}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
