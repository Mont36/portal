import type { ReactNode } from "react";

type SidebarCardProps = {
  label: string;
  title: string;
  children: ReactNode;
  accent?: "pink" | "cyan" | "violet";
};

const accents = {
  pink: "text-pink-200 border-pink-300/20",
  cyan: "text-cyan-200 border-cyan-300/20",
  violet: "text-violet-200 border-violet-300/20",
};

export function SidebarCard({ label, title, children, accent = "cyan" }: SidebarCardProps) {
  return (
    <aside className={`neon-card rounded-3xl border p-5 ${accents[accent]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{label}</p>
      <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
      <div className="mt-4 text-sm leading-6 text-slate-300">{children}</div>
    </aside>
  );
}
