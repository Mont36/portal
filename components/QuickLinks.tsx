import { PortalCard } from "@/components/PortalCard";
import { quickLinks } from "@/lib/mock-data";

const accentClasses = {
  pink: "hover:shadow-[0_18px_55px_rgba(255,46,196,0.14)]",
  cyan: "hover:shadow-[0_18px_55px_rgba(34,211,238,0.14)]",
  violet: "hover:shadow-[0_18px_55px_rgba(139,92,246,0.14)]",
};

export function QuickLinks() {
  return (
    <section className="container -mt-10 relative z-10 pb-8 sm:pb-12">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {quickLinks.map((link) => (
          <PortalCard key={link.href} href={link.href} title={link.title} description={link.description} icon={link.icon} className={`min-h-36 p-4 ${accentClasses[link.accent]}`} />
        ))}
      </div>
    </section>
  );
}
