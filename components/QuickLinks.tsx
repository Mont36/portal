import Link from "next/link";
import { quickLinks } from "@/lib/mock-data";

const accentClasses = {
  pink: "from-pink-500/20 to-pink-500/5 text-pink-100 border-pink-300/20",
  cyan: "from-cyan-400/20 to-cyan-400/5 text-cyan-100 border-cyan-300/20",
  violet: "from-violet-500/20 to-violet-500/5 text-violet-100 border-violet-300/20",
};

export function QuickLinks() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Навигация</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Быстрые разделы</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className={`rounded-3xl border bg-gradient-to-br p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(34,211,238,0.12)] ${accentClasses[link.accent]}`}>
            <span className="text-lg font-black">{link.title}</span>
            <span className="mt-2 block text-sm leading-6 text-slate-300">{link.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
