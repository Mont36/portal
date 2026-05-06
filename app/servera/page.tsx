import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageContents, site } from "@/lib/mock-data";

const content = pageContents.servera;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: "/servera" },
  openGraph: {
    title: content.title,
    description: content.description,
    url: `${site.url}/servera`,
    images: [{ url: "/placeholders/vice-city-grid.svg", width: 1200, height: 675 }],
  },
};

export default function ServersPage() {
  return <ContentPage slug="servera" />;
}
