import Link from "next/link";
import { DiscussionsPreview } from "@/components/NewsSection";
import { ServerCard } from "@/components/ServerCard";
import { servers } from "@/lib/mock-data";

export function ServersSection() {
  return (
    <section className="container py-5 sm:py-7">
      <div className="grid items-start gap-4 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px]">
        <div className="rounded-[1.35rem] border border-white/[0.045] bg-[#050711]/78 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-6">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-cyan-200/55">Каталог сообщества</p>
              <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-2xl">Популярные RP-серверы</h2>
            </div>
            <Link href="/servera" className="shrink-0 text-xs font-black uppercase tracking-[0.12em] text-pink-300/85 transition hover:text-pink-100">Все сервера</Link>
          </div>
          <div className="grid gap-3.5 md:grid-cols-2 xl:grid-cols-4">
            {servers.map((server) => (
              <ServerCard key={server.name} server={server} />
            ))}
          </div>
        </div>
        <DiscussionsPreview />
      </div>
    </section>
  );
}
