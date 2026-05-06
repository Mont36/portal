import { servers } from "@/lib/mock-data";

export function ServersSection() {
  return (
    <section className="container py-8 sm:py-12">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-200">Community</p>
        <h2 className="mt-2 text-2xl font-black sm:text-3xl">Популярные RP-серверы</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {servers.map((server) => (
          <article key={server.name} className="neon-card rounded-3xl p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-black">{server.name}</h3>
                <p className="mt-1 text-sm font-bold text-cyan-200">{server.mode}</p>
              </div>
              <span className="rounded-full bg-pink-500/15 px-3 py-1 text-xs font-black text-pink-100">{server.online}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{server.description}</p>
            <p className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">#{server.tag}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
