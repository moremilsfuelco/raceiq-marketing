import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";
import { articleMetadata } from "@/lib/metadata";

const article = articleBySlug.get("trail-running-for-beginners")!;

export const metadata = articleMetadata(article);

export default function Page() {
  return <ArticlePage article={article} />;
}
