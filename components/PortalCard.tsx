import Link from "next/link";
import type { ReactNode } from "react";

type PortalCardProps = {
  href?: string;
  title: string;
  description?: string;
  eyebrow?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function PortalCard({ href, title, description, eyebrow, icon, children, className = "" }: PortalCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p> : null}
          <h3 className="mt-1 text-lg font-black text-white sm:text-xl">{title}</h3>
        </div>
        {icon ? <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-xl shadow-[0_0_26px_rgba(34,211,238,0.12)]">{icon}</span> : null}
      </div>
      {description ? <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p> : null}
      {children}
    </>
  );

  const classes = `neon-card group relative overflow-hidden rounded-3xl p-5 transition duration-300 before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-200/70 before:to-transparent hover:-translate-y-1 hover:border-cyan-200/35 hover:shadow-[0_22px_70px_rgba(34,211,238,0.14)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
