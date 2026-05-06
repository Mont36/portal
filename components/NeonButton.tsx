import Link from "next/link";
import type { ReactNode } from "react";

type NeonButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "border-pink-300/50 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white shadow-[0_0_34px_rgba(255,46,196,0.42)] hover:shadow-[0_0_44px_rgba(34,211,238,0.32)]",
  secondary:
    "border-cyan-300/45 bg-cyan-300/10 text-cyan-50 shadow-[0_0_26px_rgba(34,211,238,0.18)] hover:bg-cyan-300/18 hover:border-cyan-200/70",
  ghost:
    "border-white/15 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08] hover:border-pink-200/35",
};

const baseClass =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-black uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-slate-950";

export function NeonButton({ children, href, variant = "primary", external = false, className = "" }: NeonButtonProps) {
  const classes = `${baseClass} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
