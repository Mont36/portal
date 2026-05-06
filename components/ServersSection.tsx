import Link from "next/link";
import { DiscussionsPreview } from "@/components/NewsSection";
import { ServerCard } from "@/components/ServerCard";
import { servers } from "@/lib/mock-data";

export function ServersSection() {
  return (
    <section className="container py-4 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_330px]">
        <div className="rounded-lg border border-white/[0.07] bg-[#070c16]/88 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-black uppercase text-white sm:text-2xl">Популярные RP-серверы</h2>
            <Link href="/servera" className="text-xs font-black text-pink-400 transition hover:text-pink-200">Все сервера</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
