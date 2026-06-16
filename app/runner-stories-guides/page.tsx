import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { EmailSignup } from "@/components/EmailSignup";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Runner Stories and Guides",
  description:
    "RaceIQ founder stories and practical running guides for marathon training, trail running, busy weeks, and real-life adjustments.",
  alternates: { canonical: "/runner-stories-guides" },
  openGraph: {
    type: "website",
    url: `${site.url}/runner-stories-guides`,
    title: "Runner Stories and Guides | RaceIQ",
    description:
      "Helpful RaceIQ stories and running guides for real-life training, marathon plans, trail running, and busy schedules.",
    images: [{ url: site.ogImage, width: 1024, height: 1024, alt: "RaceIQ app icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Runner Stories and Guides | RaceIQ",
    description:
      "Helpful RaceIQ stories and running guides for real-life training, marathon plans, trail running, and busy schedules.",
    images: [site.ogImage],
  },
};

const storySlugs = [
  "why-i-started-running",
  "how-i-lost-80-pounds-and-became-a-runner",
  "why-i-built-raceiq",
];

const practicalSlugs = [
  "why-most-marathon-training-plans-fail-real-people",
  "training-for-a-marathon-while-working-full-time",
  "trail-running-for-beginners",
  "why-running-feels-so-hard-at-first",
  "how-to-adjust-marathon-training-when-life-gets-busy",
];

function bySlug(slugs: string[]) {
  return slugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
}

export default function RunnerStoriesGuidesPage() {
  return (
    <>
      <section className="page-hero article-hero">
        <div className="container">
          <span className="eyebrow">Runner Stories / Guides</span>
          <h1>Real-life running stories and useful training guides.</h1>
          <p className="lead">
            Honest founder-story pages and practical running advice for busy runners, newer
            runners, marathoners, trail-curious runners, and anyone training around real life.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Founder stories</span>
            <h2>The human reason RaceIQ exists.</h2>
          </div>
          <div className="article-grid">
            {bySlug(storySlugs).map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section founder-feature">
        <div className="container founder-grid">
          <div className="founder-kicker">Get Back To You</div>
          <div>
            <span className="eyebrow">Future program</span>
            <h2>A 12-week program for women who want to feel like themselves again.</h2>
            <p>
              Morgan&apos;s personal story, the 12-week framework, and the waitlist for the first
              Get Back To You group.
            </p>
            <Link className="button secondary" href="/get-back-to-you">Read the story and join the waitlist</Link>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Running guides</span>
            <h2>Useful answers for imperfect training weeks.</h2>
          </div>
          <div className="article-grid">
            {bySlug(practicalSlugs).map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <EmailSignup />
        </div>
      </section>
    </>
  );
}
