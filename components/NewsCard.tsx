import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/mock-data";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="neon-card group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1">
      <Link href={item.href} className="block">
        <div className="overflow-hidden"><Image src={item.image} alt="Градиентный preview новости GTA 6" width={800} height={450} className="aspect-video w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" /></div>
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
            <span>{item.category}</span>
            <time>{item.date}</time>
          </div>
          <h3 className="text-xl font-black leading-tight text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
