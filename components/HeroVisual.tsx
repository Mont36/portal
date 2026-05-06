export function HeroVisual() {
  return (
    <div className="vice-visual pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,62,169,0.42),transparent_22rem),radial-gradient(circle_at_86%_22%,rgba(255,166,72,0.24),transparent_18rem),radial-gradient(circle_at_63%_58%,rgba(31,201,231,0.18),transparent_20rem),linear-gradient(180deg,#080a12_0%,#15102a_34%,#090916_67%,#03040a_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-[48%] top-[10%] h-52 w-52 rounded-full bg-[radial-gradient(circle,#ffd99d_0%,#f07478_38%,#6b1e72_72%,transparent_73%)] opacity-55 blur-[1px] sun-disc" />
      <div className="city-skyline absolute inset-x-[-3%] bottom-[28%] h-[290px] opacity-90" />
      <div className="distant-lights absolute inset-x-[16%] bottom-[31%] h-20 opacity-65" />
      <div className="palm palm-left absolute bottom-[19%] left-[48%] h-[360px] w-36 opacity-55" />
      <div className="palm palm-mid absolute bottom-[21%] right-[24%] h-[300px] w-28 opacity-45" />
      <div className="palm palm-right absolute bottom-[18%] right-[8%] h-[385px] w-36 opacity-62" />
      <div className="neon-sign absolute right-[17%] top-[25%] h-24 w-36 rounded-sm border border-cyan-200/25 bg-cyan-300/[0.035] shadow-[0_0_35px_rgba(34,211,238,0.16)]" />
      <div className="road-reflection absolute inset-x-0 bottom-0 h-[255px]" />
      <div className="car-silhouette absolute bottom-[13%] right-[9%] h-36 w-[500px] max-w-[58vw] opacity-90" />
      <div className="absolute bottom-[24%] right-[18%] h-px w-64 bg-gradient-to-r from-transparent via-pink-300/70 to-transparent shadow-[0_0_22px_rgba(255,46,196,0.45)]" />
      <div className="absolute right-[6%] top-[10%] rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.28em] text-white/45 backdrop-blur-sm">
        Leonida nights
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.54)_100%)]" />
    </div>
  );
}
