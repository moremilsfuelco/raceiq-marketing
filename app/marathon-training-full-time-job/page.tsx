import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";

const article = articleBySlug.get("marathon-training-full-time-job")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/marathon-training-full-time-job" },
};

export default function Page() {
  return <ArticlePage article={article} />;
}
