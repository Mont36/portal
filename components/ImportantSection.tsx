import { NeonButton } from "@/components/NeonButton";
import { importantSections } from "@/lib/mock-data";

const accentVisual = {
  pink: "from-pink-500/40 via-fuchsia-500/18 to-slate-950",
  cyan: "from-cyan-400/40 via-blue-500/18 to-slate-950",
  violet: "from-violet-500/40 via-pink-500/18 to-slate-950",
};

export function ImportantSection() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Важное</p>
        <h2 className="mt-2 text-2xl font-black sm:text-3xl">Ключевые разделы портала</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {importantSections.map((item) => (
          <article key={item.title} className="neon-card group overflow-hidden rounded-[2rem]">
            <div className={`relative h-48 bg-gradient-to-br ${accentVisual[item.accent]}`}>
              <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:30px_30px]" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-6 left-6 h-20 w-40 rounded-t-full border-t-4 border-cyan-200/70 opacity-70 shadow-[0_0_32px_rgba(34,211,238,0.22)]" />
              <div className="absolute right-8 top-8 size-24 rounded-full border border-white/20 bg-white/10 blur-[1px]" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              <NeonButton href={item.href} variant="secondary" className="mt-5 py-2.5 text-xs">
                {item.cta}
              </NeonButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
