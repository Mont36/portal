import { NeonButton } from "@/components/NeonButton";
import { importantSections } from "@/lib/mock-data";

const visualTone = {
  pink: "from-[#21101b] via-[#4f1d35] to-[#03040a]",
  cyan: "from-[#102633] via-[#17364c] to-[#03040a]",
  violet: "from-[#171229] via-[#35204a] to-[#03040a]",
};

const visualPattern = ["map-card", "people-card", "online-card", "rp-card"];

export function ImportantSection() {
  return (
    <section className="container py-4 sm:py-6">
      <div className="rounded-2xl bg-[#050711]/68 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.025] sm:p-6">
        <h2 className="mb-5 text-xl font-black uppercase text-white sm:text-2xl">Важное</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {importantSections.map((item, index) => (
            <article key={item.title} className="group relative min-h-[284px] overflow-hidden rounded-2xl bg-slate-950 shadow-[0_20px_58px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.025] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(0,0,0,0.42),0_0_34px_rgba(255,46,196,0.08)]">
              <div className={`absolute inset-0 bg-gradient-to-br transition duration-700 ease-out group-hover:scale-[1.035] ${visualTone[item.accent]}`} />
              <div className={`important-visual ${visualPattern[index]} absolute inset-0 opacity-95 transition duration-700 ease-out group-hover:scale-[1.045]`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03040a] via-[#03040a]/68 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 min-h-12 text-sm font-semibold leading-6 text-slate-200/90">{item.description}</p>
                <NeonButton href={item.href} variant="ghost" className="mt-5 rounded-md border-pink-400/35 px-4 py-2.5 text-xs">
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
