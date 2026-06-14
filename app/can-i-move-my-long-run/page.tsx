import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";

const article = articleBySlug.get("can-i-move-my-long-run")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/can-i-move-my-long-run" },
};

export default function Page() {
  return <ArticlePage article={article} />;
}
