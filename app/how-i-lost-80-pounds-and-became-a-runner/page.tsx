import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";
import { articleMetadata } from "@/lib/metadata";

const article = articleBySlug.get("how-i-lost-80-pounds-and-became-a-runner")!;

export const metadata = articleMetadata(article);

export default function Page() {
  return <ArticlePage article={article} />;
}
