import { ServerCard } from "@/components/ServerCard";
import { servers } from "@/lib/mock-data";

export function ServersSection() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-200">Community</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Популярные RP-серверы</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Концепт будущего каталога серверов: языки, онлайн, статус проекта и быстрый переход к деталям.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {servers.map((server) => (
          <ServerCard key={server.name} server={server} />
        ))}
      </div>
    </section>
  );
}
