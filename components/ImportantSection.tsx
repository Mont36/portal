import Image from "next/image";
import { NeonButton } from "@/components/NeonButton";
import { importantSections } from "@/lib/mock-data";

export function ImportantSection() {
  return (
    <section className="container py-4 sm:py-7">
      <div>
        <h2 className="mb-5 text-xl font-black tracking-[-0.02em] text-white sm:text-2xl">Важное</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {importantSections.map((item) => (
            <article key={item.title} className="group relative min-h-[320px] overflow-hidden rounded-[1.25rem] bg-slate-950 shadow-[0_26px_70px_rgba(0,0,0,0.42)] ring-1 ring-white/[0.055]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,10,0.08)_0%,rgba(3,4,10,0.18)_38%,rgba(3,4,10,0.94)_100%)]" />
              <div className="absolute inset-0 shadow-[inset_0_0_95px_rgba(0,0,0,0.58)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-slate-200/90">{item.description}</p>
                <NeonButton href={item.href} variant="ghost" className="mt-5 rounded-xl border-white/10 bg-black/24 px-4 py-2.5 text-xs hover:border-pink-300/35">
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
