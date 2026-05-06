import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageContents, site } from "@/lib/mock-data";

const content = pageContents.karta;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: "/karta" },
  openGraph: {
    title: content.title,
    description: content.description,
    url: `${site.url}/karta`,
    images: [{ url: "/placeholders/vice-city-grid.svg", width: 1200, height: 675 }],
  },
};

export default function MapPage() {
  return <ContentPage slug="karta" />;
}
