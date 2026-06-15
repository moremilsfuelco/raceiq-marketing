import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";
import { articleMetadata } from "@/lib/metadata";

const article = articleBySlug.get("why-running-feels-so-hard-at-first")!;

export const metadata = articleMetadata(article);

export default function Page() {
  return <ArticlePage article={article} />;
}
