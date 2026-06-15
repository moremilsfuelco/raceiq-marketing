import type { Metadata } from "next";
import type { Article } from "@/lib/articles";
import { site } from "@/lib/site";

export function articleMetadata(article: Article): Metadata {
  const path = `/${article.slug}`;
  const title = article.title;

  return {
    title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: `${site.url}${path}`,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description: article.description,
      images: [
        {
          url: site.ogImage,
          width: 1024,
          height: 1024,
          alt: "RaceIQ app icon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description: article.description,
      images: [site.ogImage],
    },
  };
}
