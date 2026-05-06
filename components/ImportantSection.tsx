import { importantItems } from "@/lib/mock-data";

export function ImportantSection() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="neon-card rounded-[2rem] p-6 sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Важно</p>
        <h2 className="mt-2 text-2xl font-black sm:text-3xl">Что нужно знать сейчас</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {importantItems.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
              <span className="mr-2 text-pink-300">◆</span>{item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
