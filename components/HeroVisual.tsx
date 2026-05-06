export function HeroVisual() {
  return (
    <div className="hero-poster relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 shadow-[0_34px_110px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(255,46,196,0.45),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(34,211,238,0.42),transparent_30%),linear-gradient(180deg,#140727_0%,#07142d_44%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(34,211,238,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,196,.12)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_72%,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(2,6,23,.96),rgba(2,6,23,.28),transparent)]" />

      <svg viewBox="0 0 520 650" className="absolute inset-0 h-full w-full" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="sunset" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff2ec4" stopOpacity="0.95" />
            <stop offset="48%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.88" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="262" cy="185" r="96" fill="url(#sunset)" opacity="0.86" filter="url(#glow)" />
        <g opacity="0.92" fill="#06111f">
          <path d="M72 390h38v-84h34v84h28V255h46v135h33v-98h42v98h33V235h58v155h24v-72h36v72h35v118H72z" />
          <path d="M0 430c88-28 155-38 242-32 99 7 168 41 278 12v128H0z" opacity="0.88" />
        </g>

        <g stroke="#19d3ee" strokeWidth="3" strokeLinecap="round" opacity="0.75" filter="url(#glow)">
          <path d="M48 508c104-34 186-40 281-22 42 8 77 10 140-2" />
          <path d="M92 548c119-28 201-25 307-4" opacity="0.5" />
        </g>

        <g fill="#030712">
          <path d="M120 374c-6-70 0-130 19-188" stroke="#030712" strokeWidth="12" strokeLinecap="round" />
          <path d="M132 194c-38 0-70 12-92 41 43-10 72-8 95 3-35 11-59 31-75 62 38-24 69-34 92-30-16 24-25 51-25 82 26-34 44-66 55-96" />
          <path d="M411 374c8-84 2-148-18-205" stroke="#030712" strokeWidth="12" strokeLinecap="round" />
          <path d="M394 178c42-4 79 7 108 36-43-6-76-3-101 10 37 8 66 27 87 58-42-20-76-27-102-21 19 22 31 50 35 83-31-33-53-65-66-97" />
        </g>

        <g transform="translate(120 476)" filter="url(#glow)">
          <path d="M37 51h210c18 0 32-10 39-26l12-28c4-9-3-19-13-19H196l-34-34H88L45-19H18C6-19-3-8 0 4l13 47c3 12 13 20 24 20z" fill="#070b18" stroke="#ff2ec4" strokeWidth="4" />
          <circle cx="74" cy="59" r="23" fill="#020617" stroke="#22d3ee" strokeWidth="5" />
          <circle cx="236" cy="59" r="23" fill="#020617" stroke="#22d3ee" strokeWidth="5" />
          <path d="M78-22h78l27 27H51z" fill="#101a34" stroke="#22d3ee" strokeWidth="3" opacity="0.9" />
        </g>
      </svg>

      <div className="absolute left-6 top-6 rounded-2xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-md">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-100">Fan Portal</p>
        <p className="mt-1 text-2xl font-black text-white neon-text">VICE NEON</p>
      </div>
      <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-slate-950/55 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Обложка портала</p>
            <p className="mt-1 text-lg font-black text-white">Город, скорость, ночной океан</p>
          </div>
          <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-black text-pink-100">2026</span>
        </div>
      </div>
    </div>
  );
}
