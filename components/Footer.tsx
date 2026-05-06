import Link from "next/link";
import { site } from "@/lib/mock-data";

const footerGroups = [
  {
    title: "О портале",
    links: [
      { title: "Новости", href: "/news" },
      { title: "GTA 6", href: "/gta-6-data-vyhoda" },
      { title: "Гайды", href: "/news" },
    ],
  },
  {
    title: "Разделы",
    links: [
      { title: "Карта", href: "/karta" },
      { title: "Персонажи", href: "/personazhi" },
      { title: "RP сервера", href: "/rp" },
    ],
  },
  {
    title: "Сообщество",
    links: [
      { title: "О проекте", href: "/news" },
      { title: "Реклама", href: "/news" },
      { title: "Контакты", href: "/servera" },
    ],
  },
  {
    title: "Информация",
    links: [
      { title: "Политика конфиденциальности", href: "/news" },
      { title: "GTA 6 Online", href: "/online" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/[0.055] bg-[#03040a]/92">
      <div className="container py-8 sm:py-9">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_1.7fr] lg:items-start">
          <div>
            <Link href="/" className="inline-flex text-lg font-black uppercase tracking-[0.2em] text-white">GTA6Portal.ru</Link>
            <p className="mt-3 max-w-md text-sm font-medium leading-6 text-slate-500">{site.description} Неофициальный фанатский портал без official GTA/Rockstar assets.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-400">{group.title}</h3>
                <div className="mt-3 grid gap-2.5">
                  {group.links.map((item) => (
                    <Link key={`${group.title}-${item.title}`} href={item.href} className="text-sm font-medium text-slate-500 transition hover:text-pink-100">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.055] pt-5 text-xs font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GTA6Portal.ru. Неофициальный фанатский медиа-портал.</p>
          <p>GTA и Rockstar Games являются товарными знаками их правообладателей.</p>
        </div>
      </div>
    </footer>
  );
}
