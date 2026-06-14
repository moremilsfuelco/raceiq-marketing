import Link from "next/link";
import { AppCta } from "@/components/AppCta";
import { JsonLd } from "@/components/JsonLd";
import { articleBySlug, articleUrl, type Article } from "@/lib/articles";
import { site } from "@/lib/site";

export function ArticlePage({ article }: { article: Article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: articleUrl(article.slug),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">RaceIQ runner guide</span>
          <h1>{article.title}</h1>
          <p className="lead">{article.intro}</p>
          <p className="meta-note">
            This guide is general training education, not medical advice. If pain, illness, or a
            health concern is involved, talk with a qualified professional.
          </p>
        </div>
      </section>
      <section className="section">
        <article className="container article">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="cta-panel">
            <span className="eyebrow">Try RaceIQ</span>
            <h2>The plan should adapt when the week changes.</h2>
            <p>{article.cta}</p>
            <div className="cta-row">
              <Link className="button" href="/">See RaceIQ</Link>
              <Link className="button secondary" href="/why-raceiq">Why it is different</Link>
            </div>
          </div>
          <h2>Related RaceIQ guides</h2>
          <ul>
            {article.related.map((slug) => {
              const related = articleBySlug.get(slug);
              if (!related) return null;
              return (
                <li key={slug}>
                  <Link href={`/${slug}`}>{related.title}</Link>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
      <AppCta />
    </>
  );
}
