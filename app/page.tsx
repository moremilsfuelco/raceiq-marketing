import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/AppCta";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { PhoneMockup } from "@/components/PhoneMockup";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Running Coach That Adapts to Real Life",
  description:
    "RaceIQ adjusts running training around fatigue, missed workouts, Peloton rides, strength sessions, poor sleep, travel, heat, and real schedules.",
  alternates: { canonical: "/" },
};

const howItWorks = [
  ["Connect the real week", "RaceIQ looks at the plan beside what actually happened: runs, cross-training, fatigue, schedule changes, and recovery signals."],
  ["Adjust the next move", "When life changes the training load, RaceIQ helps shift, shorten, swap, or protect the right workout."],
  ["Keep the goal alive", "The plan stays pointed at your race while giving you realistic decisions for today."],
];

const examples = [
  ["Worked late", "Move the hard workout, keep an easy run, and protect the long run."],
  ["Rode Peloton instead", "Count the aerobic work and leg fatigue instead of pretending it did not happen."],
  ["Slept terribly", "Lower the ask for today so consistency survives the week."],
  ["Travel day", "Rebuild the week around the workouts that still fit."],
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "RaceIQ",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS",
          url: site.url,
          description: site.description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Run training for real life</span>
            <h1>The running coach that adapts to real life.</h1>
            <p className="lead">
              RaceIQ helps runners adjust training around fatigue, missed workouts, Peloton rides,
              strength sessions, poor sleep, travel, heat, and real schedules.
            </p>
            <div className="hero-actions">
              <a className="button" href="#app-store">App Store placeholder</a>
              <Link className="button secondary" href="/why-raceiq">Why RaceIQ</Link>
            </div>
            <div className="trust-strip">
              <div className="trust-item"><strong>Missed workout?</strong>Rebuild the week without panic.</div>
              <div className="trust-item"><strong>Cross-trained?</strong>Count the work your body felt.</div>
              <div className="trust-item"><strong>Legs cooked?</strong>Adjust today without quitting the plan.</div>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How RaceIQ works</span>
            <h2>Your plan should know what your week felt like.</h2>
          </div>
          <div className="grid three">
            {howItWorks.map(([title, copy]) => (
              <div className="card" key={title}>
                <span className="tag">Step</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Life-aware coaching examples</span>
            <h2>Because the calendar is rarely clean.</h2>
          </div>
          <div className="scenario">
            {examples.map(([title, copy]) => (
              <div className="scenario-row" key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card">
            <span className="tag">Adaptive training plan</span>
            <h2>Built for the runner you are today.</h2>
            <p>
              RaceIQ keeps the race goal in view while adapting the day-to-day plan around fatigue,
              missed sessions, heavy legs, and the work you actually completed.
            </p>
            <Link className="text-link" href="/adaptive-marathon-training-plan">Read the adaptive plan guide</Link>
          </div>
          <div className="card">
            <span className="tag">Apple Health + cross-training</span>
            <h2>Runs are not the only signal.</h2>
            <p>
              Peloton, cycling, strength, walking, sleep, and training context can all change what the
              next best run should be.
            </p>
            <Link className="text-link" href="/cycling-instead-of-running">Does cycling count?</Link>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container grid two">
          <div>
            <span className="eyebrow">Why RaceIQ is different</span>
            <h2>Most apps assume perfect conditions.</h2>
            <p className="lead">
              RaceIQ is built for the runner with work stress, bad sleep, travel, family obligations,
              summer humidity, and a training plan that still matters.
            </p>
            <Link className="button secondary" href="/why-raceiq">See the difference</Link>
          </div>
          <div className="grid">
            <div className="mini-stat"><strong>Static plan</strong>Missed Tuesday? Good luck.</div>
            <div className="mini-stat"><strong>RaceIQ</strong>Shift the week around the load that remains.</div>
            <div className="mini-stat"><strong>Static plan</strong>Only running miles count.</div>
            <div className="mini-stat"><strong>RaceIQ</strong>Cross-training and fatigue affect the next run.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid two">
          <div className="card">
            <span className="tag">Founder story preview</span>
            <h2>Built by a runner who had to learn the hard way.</h2>
            <p>
              RaceIQ was built by a runner who started at 210 lbs and now trains for marathons,
              trails, ultras, and real-life chaos.
            </p>
            <Link className="text-link" href="/founder-story">Read the founder story</Link>
          </div>
          <div className="card">
            <span className="tag">FAQ preview</span>
            <h2>Questions runners ask before trusting a plan.</h2>
            <p>
              Beginners, long runs, cycling, strength, Apple Health, and whether RaceIQ can make and
              adjust training plans.
            </p>
            <Link className="text-link" href="/faq">Read the FAQ</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Runner guides</span>
            <h2>Helpful answers for messy training weeks.</h2>
          </div>
          <div className="article-grid">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
      <AppCta />
    </>
  );
}
