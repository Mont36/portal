"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  targetDate: string;
  compact?: boolean;
};

const units = [
  ["days", "дней"],
  ["hours", "часов"],
  ["minutes", "минут"],
  ["seconds", "секунд"],
] as const;

function getTimeLeft(targetDate: string) {
  const distance = Math.max(new Date(targetDate).getTime() - Date.now(), 0);
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export function Countdown({ targetDate, compact = false }: CountdownProps) {
  const initial = useMemo(() => getTimeLeft(targetDate), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(initial);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={compact ? "grid max-w-[440px] grid-cols-4 gap-2" : "grid grid-cols-2 gap-3 sm:grid-cols-4"} aria-label="Таймер до выхода GTA 6">
      {units.map(([key, label]) => (
        <div key={key} className={compact ? "rounded-md border border-white/10 bg-[#080d19]/82 p-3 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_0_28px_rgba(0,0,0,0.28)]" : "neon-card rounded-2xl p-4 text-center"}>
          <div className={compact ? "text-2xl font-black leading-none text-white sm:text-3xl" : "text-3xl font-black text-white sm:text-4xl"}>{String(timeLeft[key]).padStart(2, "0")}</div>
          <div className={compact ? "mt-1 text-[0.62rem] font-black uppercase leading-none tracking-[0.08em] text-slate-300" : "mt-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200"}>{label}</div>
        </div>
      ))}
    </div>
  );
}
