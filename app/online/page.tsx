import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pageContents, site } from "@/lib/mock-data";

const content = pageContents.online;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: "/online" },
  openGraph: {
    title: content.title,
    description: content.description,
    url: `${site.url}/online`,
    images: [{ url: "/placeholders/vice-city-grid.svg", width: 1200, height: 675 }],
  },
};

export default function OnlinePage() {
  return <ContentPage slug="online" />;
}
