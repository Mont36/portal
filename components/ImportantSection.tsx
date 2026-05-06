import { NeonButton } from "@/components/NeonButton";
import { importantSections } from "@/lib/mock-data";

const visualTone = {
  pink: "from-pink-500/80 via-rose-400/40 to-slate-950",
  cyan: "from-cyan-300/75 via-sky-500/35 to-slate-950",
  violet: "from-violet-500/75 via-fuchsia-500/40 to-slate-950",
};

const visualPattern = ["map-card", "people-card", "online-card", "rp-card"];

export function ImportantSection() {
  return (
    <section className="container py-4 sm:py-6">
      <div className="rounded-lg border border-white/[0.06] bg-[#070c16]/70 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.26)]">
        <h2 className="mb-5 text-xl font-black uppercase text-white sm:text-2xl">Важное</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {importantSections.map((item, index) => (
            <article key={item.title} className="group relative min-h-[274px] overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-[0_20px_55px_rgba(0,0,0,0.34)]">
              <div className={`absolute inset-0 bg-gradient-to-br ${visualTone[item.accent]}`} />
              <div className={`important-visual ${visualPattern[index]} absolute inset-0 opacity-95`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/58 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 min-h-12 text-sm font-semibold leading-6 text-slate-200/90">{item.description}</p>
                <NeonButton href={item.href} variant="ghost" className="mt-5 rounded-md border-pink-400/60 px-4 py-2.5 text-xs">
                  {item.cta}
                </NeonButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
