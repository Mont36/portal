export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none" aria-label="Неоновая медиа-обложка GTA 6 Portal">
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.35),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(255,46,196,0.42),transparent_34%),radial-gradient(circle_at_50%_95%,rgba(139,92,246,0.35),transparent_42%)] blur-2xl" />
      <div className="relative min-h-[430px] overflow-hidden rounded-[2.25rem] border border-white/15 bg-[#060817] shadow-[0_35px_90px_rgba(0,0,0,0.55)] sm:min-h-[560px] lg:min-h-[620px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,46,196,0.38),transparent_30%),radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.28),transparent_26%),linear-gradient(180deg,rgba(7,10,31,0.25),#050816_70%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(115deg,rgba(34,211,238,0.18),transparent_38%,rgba(255,46,196,0.18)_70%,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(rgba(34,211,238,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,196,0.14)_1px,transparent_1px)] bg-[size:38px_38px] [transform:perspective(450px)_rotateX(62deg)] [transform-origin:bottom]" />

        <div className="absolute left-8 top-8 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">Fan portal cover</div>
        <div className="absolute right-8 top-8 size-20 rounded-full bg-gradient-to-br from-pink-300 via-orange-300 to-violet-500 opacity-90 shadow-[0_0_70px_rgba(255,46,196,0.55)]" />

        <div className="absolute inset-x-0 bottom-28 h-40">
          <div className="absolute bottom-0 left-0 h-24 w-16 bg-slate-950/90" />
          <div className="absolute bottom-0 left-16 h-36 w-20 bg-slate-950/95" />
          <div className="absolute bottom-0 left-36 h-28 w-14 bg-slate-950/90" />
          <div className="absolute bottom-0 left-52 h-44 w-24 bg-slate-950/95" />
          <div className="absolute bottom-0 right-44 h-32 w-20 bg-slate-950/90" />
          <div className="absolute bottom-0 right-24 h-48 w-24 bg-slate-950/95" />
          <div className="absolute bottom-0 right-0 h-28 w-24 bg-slate-950/90" />
          <div className="absolute bottom-0 inset-x-0 h-1 bg-cyan-300/60 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
        </div>

        <div className="absolute bottom-28 left-10 h-48 w-24">
          <div className="absolute bottom-0 left-11 h-40 w-2 rounded-full bg-slate-950" />
          <div className="absolute left-0 top-0 h-24 w-28 rounded-[60%] border-l-[14px] border-t-[8px] border-slate-950 [transform:rotate(-25deg)]" />
          <div className="absolute left-8 top-4 h-24 w-28 rounded-[60%] border-r-[14px] border-t-[8px] border-slate-950 [transform:rotate(20deg)]" />
        </div>
        <div className="absolute bottom-32 right-14 h-56 w-28 scale-110">
          <div className="absolute bottom-0 left-12 h-44 w-2 rounded-full bg-slate-950" />
          <div className="absolute left-0 top-0 h-28 w-32 rounded-[60%] border-l-[16px] border-t-[9px] border-slate-950 [transform:rotate(-24deg)]" />
          <div className="absolute left-8 top-8 h-24 w-32 rounded-[60%] border-r-[16px] border-t-[9px] border-slate-950 [transform:rotate(20deg)]" />
        </div>

        <div className="absolute bottom-20 left-1/2 h-20 w-72 -translate-x-1/2 rounded-t-[54px] rounded-b-2xl bg-slate-950 shadow-[0_0_36px_rgba(255,46,196,0.22)] sm:w-80">
          <div className="absolute left-12 top-4 h-8 w-24 skew-x-[-24deg] rounded-t-xl bg-cyan-200/20" />
          <div className="absolute right-14 top-4 h-8 w-24 skew-x-[24deg] rounded-t-xl bg-pink-200/20" />
          <div className="absolute -bottom-3 left-10 size-12 rounded-full border-4 border-slate-800 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
          <div className="absolute -bottom-3 right-10 size-12 rounded-full border-4 border-slate-800 bg-slate-950 shadow-[0_0_18px_rgba(255,46,196,0.35)]" />
          <div className="absolute bottom-3 left-4 h-3 w-12 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.85)]" />
          <div className="absolute bottom-3 right-4 h-3 w-12 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(255,46,196,0.85)]" />
        </div>

        <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-pink-200">Vice City mood</p>
            <p className="mt-1 text-3xl font-black text-white sm:text-4xl">Neon Files</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right backdrop-blur-md">
            <p className="text-xs font-bold text-slate-300">Релиз</p>
            <p className="text-sm font-black text-cyan-100">19.11.2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
