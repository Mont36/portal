import Link from "next/link";
import { quickLinks } from "@/lib/mock-data";

const accentClasses = {
  pink: "border-pink-300/25 from-pink-500/18 hover:border-pink-200/55 hover:shadow-pink-500/20",
  cyan: "border-cyan-300/25 from-cyan-400/18 hover:border-cyan-200/55 hover:shadow-cyan-400/20",
  violet: "border-violet-300/25 from-violet-500/18 hover:border-violet-200/55 hover:shadow-violet-500/20",
  blue: "border-blue-300/25 from-blue-500/18 hover:border-blue-200/55 hover:shadow-blue-500/20",
};

export function QuickLinks() {
  return (
    <section className="container relative z-20 -mt-5 pb-8 sm:-mt-8 sm:pb-12">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className={`group rounded-3xl border bg-gradient-to-br to-slate-950/75 p-4 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${accentClasses[link.accent]}`}>
            <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg text-white transition group-hover:scale-110">{link.icon}</span>
            <span className="mt-4 block text-base font-black text-white">{link.title}</span>
            <span className="mt-1 block text-xs leading-5 text-slate-300">{link.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
