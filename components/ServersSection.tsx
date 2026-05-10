import Link from "next/link";
import { DiscussionsPreview } from "@/components/NewsSection";
import { ServerCard } from "@/components/ServerCard";
import { servers } from "@/lib/mock-data";

export function ServersSection() {
  return (
    <section className="container py-4 sm:py-7">
      <div className="grid gap-5 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-black tracking-[-0.02em] text-white sm:text-2xl">Популярные RP-серверы</h2>
            <Link href="/servera" className="text-xs font-bold text-pink-300/90 transition hover:text-pink-100">Все сервера</Link>
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
