import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteUrl } from "@/lib/site";

const staticRoutes = ["", "/why-raceiq", "/founder-story", "/faq", "/privacy", "/terms", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
