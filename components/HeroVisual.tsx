import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="vice-visual pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/images/home/hero-main.png"
        alt="Неоновый фон GTA 6 Portal"
        fill
        priority
        sizes="(min-width: 1480px) 1480px, 100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(255,46,196,0.18),transparent_24rem),linear-gradient(180deg,rgba(3,4,10,0.1),rgba(3,4,10,0.34)_68%,rgba(3,4,10,0.78))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,10,0.22),transparent_46%,rgba(3,4,10,0.12))]" />
    </div>
  );
}
