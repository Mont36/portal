import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageContents, site } from "@/lib/mock-data";

const content = pageContents.personazhi;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: "/personazhi" },
  openGraph: {
    title: content.title,
    description: content.description,
    url: `${site.url}/personazhi`,
    images: [{ url: "/placeholders/vice-city-grid.svg", width: 1200, height: 675 }],
  },
};

export default function CharactersPage() {
  return <ContentPage slug="personazhi" />;
}
