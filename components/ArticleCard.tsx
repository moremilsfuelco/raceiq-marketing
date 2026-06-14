import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="article-card" href={`/${article.slug}`}>
      <span className="tag">Runner guide</span>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </Link>
  );
}
