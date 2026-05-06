import type { ReactNode } from "react";

type SidebarCardProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function SidebarCard({ title, eyebrow, children, className = "" }: SidebarCardProps) {
  return (
    <aside className={`neon-card rounded-3xl p-5 ${className}`}>
      {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.18em] text-pink-200">{eyebrow}</p> : null}
      <h3 className="mt-1 text-xl font-black text-white">{title}</h3>
      <div className="mt-4">{children}</div>
    </aside>
  );
}
