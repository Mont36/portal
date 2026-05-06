import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { NewsCard } from "@/components/NewsCard";
import { ServersSection } from "@/components/ServersSection";
import { latestNews, pageContents, site } from "@/lib/mock-data";

type ContentPageProps = {
  slug: keyof typeof pageContents;
};

export function ContentPage({ slug }: ContentPageProps) {
  const content = pageContents[slug];

  return (
    <>
      <section className="container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">{content.eyebrow}</p>
            <h1 className="neon-text text-4xl font-black tracking-tight sm:text-6xl">{content.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{content.heroText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200">{item}</span>
              ))}
            </div>
          </div>
          <Image src="/placeholders/vice-city-grid.svg" alt="Неоновый placeholder раздела GTA 6" width={1200} height={675} className="rounded-[2rem] border border-white/10 object-cover shadow-2xl" />
        </div>
      </section>

      {slug === "gta-6-data-vyhoda" && (
        <section className="container pb-8 sm:pb-12">
          <div className="neon-card rounded-[2rem] p-6 sm:p-8">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-pink-200">До {site.releaseDateLabel}</p>
            <Countdown targetDate={site.releaseDateIso} />
          </div>
        </section>
      )}

      <section className="container py-8 sm:py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {content.sections.map((section) => (
            <article key={section.title} className="neon-card rounded-3xl p-6">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      {slug === "servera" || slug === "rp" ? <ServersSection /> : null}

      <section className="container py-8 sm:py-12">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-200">Материалы</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Связанные новости</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestNews.map((item) => <NewsCard key={item.id} item={item} />)}
        </div>
      </section>
    </>
  );
}
