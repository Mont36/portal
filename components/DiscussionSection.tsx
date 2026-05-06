import Link from "next/link";
import { discussions } from "@/lib/mock-data";

export function DiscussionSection() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-200">Форум</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Сейчас обсуждают</h2>
          <p className="mt-3 text-slate-300">MVP-блок для будущей интеграции с форумом, Telegram и VK-комьюнити.</p>
        </div>
        <div className="grid gap-3">
          {discussions.map((item) => (
            <Link key={item.title} href={item.href} className="neon-card flex items-center justify-between gap-4 rounded-2xl p-4 transition hover:bg-white/10">
              <span className="font-bold text-white">{item.title}</span>
              <span className="shrink-0 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">{item.comments} комм.</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
