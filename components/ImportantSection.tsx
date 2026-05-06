import Link from "next/link";
import { NeonButton } from "@/components/NeonButton";
import { importantSections } from "@/lib/mock-data";

const visualTone = {
  pink: "from-[#21101b] via-[#4f1d35] to-[#03040a]",
  cyan: "from-[#102633] via-[#17364c] to-[#03040a]",
  violet: "from-[#171229] via-[#35204a] to-[#03040a]",
};

const visualPattern = ["map-card", "people-card", "online-card", "rp-card"];
const cardRhythm = ["xl:translate-y-3", "xl:-translate-y-1", "xl:translate-y-5", "xl:translate-y-1"];
const contentAccent = [
  "Полный обзор",
  "Досье героев",
  "Мультиплеер",
  "Каталог",
];

export function ImportantSection() {
  return (
    <section className="container py-5 sm:py-7">
      <div className="rounded-[1.35rem] border border-white/[0.045] bg-[#050711]/68 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-pink-200/65">Редакционный гид</p>
            <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-2xl">Важное</h2>
          </div>
          <span className="hidden max-w-sm text-right text-xs font-semibold leading-5 text-slate-500 md:block">Ключевые разделы без шума: факты, ожидания и удобные точки входа.</span>
        </div>
        <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
          {importantSections.map((item, index) => {
            const isQuietAction = index === 1 || index === 2;

            return (
              <article key={item.title} className={`group relative min-h-[246px] overflow-hidden rounded-[1.15rem] border border-white/[0.055] bg-slate-950 shadow-[0_18px_48px_rgba(0,0,0,0.32)] ${cardRhythm[index]}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${visualTone[item.accent]}`} />
                <div className={`important-visual ${visualPattern[index]} absolute inset-0 opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_12%,rgba(255,255,255,0.12),transparent_7rem),linear-gradient(to_top,rgba(3,4,10,0.98)_0%,rgba(3,4,10,0.82)_42%,rgba(3,4,10,0.16)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="mb-3 text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/50">{contentAccent[index]}</p>
                  <h3 className="max-w-[13rem] text-[1.05rem] font-black uppercase leading-tight tracking-[-0.02em] text-white sm:text-xl">{item.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm font-medium leading-6 text-slate-200/82">{item.description}</p>
                  {isQuietAction ? (
                    <Link href={item.href} className="mt-4 inline-flex text-xs font-black uppercase tracking-[0.12em] text-pink-200/85 transition hover:text-white">
                      {item.cta} →
                    </Link>
                  ) : (
                    <NeonButton href={item.href} variant="ghost" className="mt-4 rounded-lg border-white/12 bg-white/[0.035] px-3.5 py-2 text-[0.66rem] text-slate-100 shadow-none">
                      {item.cta}
                    </NeonButton>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
