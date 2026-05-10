import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/mock-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — русский портал про GTA 6`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — русский портал про GTA 6`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/public/images/home/hero-main.png", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — русский портал про GTA 6`,
    description: site.description,
    images: ["/public/images/home/hero-main.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <div className="pointer-events-none fixed inset-0 -z-10 grid-glow opacity-15" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
