import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";

const article = articleBySlug.get("running-in-heat-humidity")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/running-in-heat-humidity" },
};

export default function Page() {
  return <ArticlePage article={article} />;
}
