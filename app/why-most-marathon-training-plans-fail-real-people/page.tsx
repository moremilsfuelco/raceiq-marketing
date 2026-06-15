import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";
import { articleMetadata } from "@/lib/metadata";

const article = articleBySlug.get("why-most-marathon-training-plans-fail-real-people")!;

export const metadata = articleMetadata(article);

export default function Page() {
  return <ArticlePage article={article} />;
}
