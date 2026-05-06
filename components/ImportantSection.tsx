import { PortalCard } from "@/components/PortalCard";
import { importantSections } from "@/lib/mock-data";

export function ImportantSection() {
  return (
    <section className="container py-8 sm:py-14">
      <div className="mb-7 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Важно</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Ключевые разделы портала</h2>
        <p className="mt-3 leading-7 text-slate-300">Четыре больших направления, которые будут развиваться по мере появления официальных материалов, трейлеров и деталей комьюнити.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {importantSections.map((item) => <PortalCard key={item.title} item={item} />)}
      </div>
    </section>
  );
}
