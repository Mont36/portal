export function HeroVisual() {
  return (
    <div className="vice-visual relative min-h-[430px] overflow-hidden lg:min-h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_22%,rgba(255,190,84,0.7),transparent_9rem),linear-gradient(180deg,#32105f_0%,#c51f7a_28%,#ea515e_46%,#181231_78%,#050711_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(110deg,transparent_0_48%,rgba(255,255,255,.18)_49%,transparent_50%),linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:120px_100%,44px_44px]" />
      <div className="sun-disc absolute left-[17%] top-[14%] size-40 rounded-full bg-gradient-to-b from-amber-200 via-pink-400 to-fuchsia-700 opacity-90 blur-[1px]" />
      <div className="city-skyline absolute inset-x-0 bottom-[18%] h-56 opacity-95" />
      <div className="palm palm-left absolute bottom-[13%] left-[7%] h-80 w-36" />
      <div className="palm palm-mid absolute bottom-[18%] left-[29%] h-64 w-28 opacity-90" />
      <div className="palm palm-right absolute bottom-[20%] right-[16%] h-72 w-32 opacity-75" />
      <div className="absolute bottom-[17%] right-[2%] h-64 w-28 border-l-4 border-r-4 border-pink-400/75 bg-fuchsia-950/25 shadow-[0_0_40px_rgba(255,46,196,0.45)]">
        <div className="absolute inset-x-3 top-8 flex flex-col items-center gap-2 text-4xl font-black text-pink-100 drop-shadow-[0_0_12px_rgba(255,46,196,0.9)]">
          <span>V</span><span>I</span><span>C</span><span>E</span>
        </div>
      </div>
      <div className="car-silhouette absolute bottom-[8%] right-[7%] h-36 w-[430px] max-w-[58vw]" />
      <div className="absolute right-[17%] top-[18%] z-20 text-right font-black uppercase leading-[0.78] tracking-[-0.08em] text-white drop-shadow-[0_6px_0_rgba(0,0,0,0.95),0_0_24px_rgba(255,255,255,0.3)]">
        <div className="text-[4.2rem] sm:text-[5.4rem] lg:text-[5rem] xl:text-[6.5rem]">GTA 6</div>
        <div className="mt-5 text-[2.1rem] tracking-[-0.04em] text-transparent [-webkit-text-stroke:2px_#fff] drop-shadow-[0_0_22px_rgba(255,46,196,0.9)] sm:text-[3rem] xl:text-[3.7rem]">PORTAL</div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050711] via-[#050711]/78 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050711] to-transparent" />
    </div>
  );
}
