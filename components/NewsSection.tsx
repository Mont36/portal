import Link from "next/link";
import { NewsCard } from "@/components/NewsCard";
import { latestNews } from "@/lib/mock-data";

export function NewsSection() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-pink-200">Лента</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Последние новости</h2>
        </div>
        <Link href="/news" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/10 sm:inline-flex">Все новости</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {latestNews.map((item) => <NewsCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
