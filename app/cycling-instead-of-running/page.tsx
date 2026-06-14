import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";

const article = articleBySlug.get("cycling-instead-of-running")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/cycling-instead-of-running" },
};

export default function Page() {
  return <ArticlePage article={article} />;
}
