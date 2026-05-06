import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageContents, site } from "@/lib/mock-data";

const content = pageContents["gta-6-na-pk"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: "/gta-6-na-pk" },
  openGraph: {
    title: content.title,
    description: content.description,
    url: `${site.url}/gta-6-na-pk`,
    images: [{ url: "/placeholders/vice-city-grid.svg", width: 1200, height: 675 }],
  },
};

export default function PcPage() {
  return <ContentPage slug="gta-6-na-pk" />;
}
