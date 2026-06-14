import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";

const article = articleBySlug.get("adaptive-marathon-training-plan")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/adaptive-marathon-training-plan" },
};

export default function Page() {
  return <ArticlePage article={article} />;
}
