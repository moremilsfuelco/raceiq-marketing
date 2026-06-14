import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";

const article = articleBySlug.get("running-when-tired")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/running-when-tired" },
};

export default function Page() {
  return <ArticlePage article={article} />;
}
