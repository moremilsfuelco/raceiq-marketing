import { ArticlePage } from "@/components/ArticlePage";
import { articleBySlug } from "@/lib/articles";
import { articleMetadata } from "@/lib/metadata";

const article = articleBySlug.get("training-for-a-marathon-while-working-full-time")!;

export const metadata = articleMetadata(article);

export default function Page() {
  return <ArticlePage article={article} />;
}
