import { NeonButton } from "@/components/NeonButton";
import { ServerCard } from "@/components/ServerCard";
import { servers } from "@/lib/mock-data";

export function ServersSection() {
  return (
    <section className="container py-8 sm:py-14">
      <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-200">Future catalog</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Популярные RP-серверы</h2>
          <p className="mt-3 leading-7 text-slate-300">Визуальный прототип будущего каталога: язык, онлайн, статус, режим и короткое описание проекта.</p>
        </div>
        <NeonButton href="/servera" variant="secondary">Открыть каталог</NeonButton>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {servers.map((server) => <ServerCard key={server.name} server={server} />)}
      </div>
    </section>
  );
}
