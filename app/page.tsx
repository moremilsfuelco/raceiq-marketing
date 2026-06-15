import type { Metadata } from "next";
import Image from "next/image";
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
  ["Tell RaceIQ what happened.", "Worked late, rode hard, slept badly, missed the workout, or ran in heat."],
  ["It reads the whole week.", "Runs, cross-training, fatigue, strength, recovery, and what still needs to happen."],
  ["You get the next right move.", "Move it, shorten it, go easy, protect the long run, or take the recovery win."],
];

const examples = [
  ["Worked late", "Move the hard workout, keep an easy run, and protect the long run."],
  ["Rode Peloton instead", "Count the aerobic work and leg fatigue instead of pretending it did not happen."],
  ["Slept terribly", "Lower the ask for today so consistency survives the week."],
  ["Travel day", "Rebuild the week around the workouts that still fit."],
];

const storySlugs = [
  "why-i-started-running",
  "how-i-lost-80-pounds-and-became-a-runner",
  "why-i-built-raceiq",
  "why-most-marathon-training-plans-fail-real-people",
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
        <div className="route-grid" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-brand-lockup">
              <Image className="hero-icon" src={site.icon} alt="RaceIQ app icon" width={78} height={78} priority />
              <div>
                <span className="eyebrow">RaceIQ for iPhone</span>
                <p>Adaptive run coaching for the week you actually lived.</p>
              </div>
            </div>
            <h1>The running coach that adapts to real life.</h1>
            <p className="lead">
              Worked late? Rode Peloton instead? Slept terribly? RaceIQ helps adjust your training
              so you can keep moving forward.
            </p>
            <div className="hero-actions">
              <a className="button" href="#app-store">App Store placeholder</a>
              <Link className="button secondary" href="/why-raceiq">Read why RaceIQ exists</Link>
            </div>
            <div className="race-countdown">
              <span>Race day in 83 days</span>
              <strong>Today changed. The goal did not.</strong>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="section manifesto">
        <div className="container manifesto-grid">
          <div>
            <span className="eyebrow">The RaceIQ premise</span>
            <h2>Most plans assume you&apos;re a robot.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              RaceIQ was built for runners with jobs, stress, missed workouts, bad sleep, Peloton
              rides, and big goals.
            </p>
            <p>
              A real plan should know when to push, when to bend, and when the smartest training
              choice is protecting tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="section coach-flow">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Tell RaceIQ what happened</span>
            <h2>It helps you decide what to do next.</h2>
          </div>
          <div className="training-timeline">
            {howItWorks.map(([title, copy], index) => (
              <div className="timeline-step" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section training-week-section">
        <div className="container training-week">
          <div>
            <span className="eyebrow">Adaptive week planning</span>
            <h2>The week bends without losing the thread.</h2>
            <p className="lead">
              RaceIQ keeps the race goal in view while adjusting the next few days around fatigue,
              missed sessions, cross-training, heat, and the work your body already absorbed.
            </p>
            <Link className="text-link" href="/adaptive-marathon-training-plan">Read the adaptive plan guide</Link>
          </div>
          <div className="week-board" aria-label="Adaptive training week example">
            {examples.map(([title, copy], index) => (
              <div className="week-day" key={title}>
                <span>{["Mon", "Tue", "Wed", "Thu"][index]}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-feature">
        <div className="container founder-grid">
          <div className="founder-kicker">Founder story</div>
          <div>
            <h2>Built by a runner who started at 210 lbs and still trains around real life.</h2>
            <p className="lead">
              RaceIQ came from the gap between the plan on paper and the runner living the week:
              full-time work, marathon blocks, trail goals, ultra curiosity, bad sleep, travel, and
              the stubborn desire to keep showing up.
            </p>
            <p>
              Rigid plans break the moment life stops being clean. RaceIQ exists because serious
              runners need structure that can bend without making every adjustment feel like failure.
            </p>
            <div className="cta-row">
              <Link className="button secondary" href="/founder-story">Read the full story</Link>
              <Link className="button secondary" href="/why-i-built-raceiq">Why I built RaceIQ</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section signal-section">
        <div className="container signal-grid">
          <div>
            <span className="eyebrow">Apple Health + cross-training</span>
            <h2>Runs are not the only signal.</h2>
            <p>
              Peloton, cycling, strength, walking, sleep, and training context can all change what
              the next best run should be.
            </p>
            <Link className="text-link" href="/cycling-instead-of-running">Does cycling count?</Link>
          </div>
          <div className="coach-bubbles">
            <div className="bubble runner">I rode hard instead of doing the tempo.</div>
            <div className="bubble coach">Count it as load. Move the tempo. Keep tomorrow easy.</div>
            <div className="bubble runner">Long run still on?</div>
            <div className="bubble coach">Yes, but we protect the day before it.</div>
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
      <section className="section band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Runner Stories / Guides</span>
            <h2>The story behind the coach, plus practical help for real-life training.</h2>
            <Link className="text-link" href="/runner-stories-guides">Browse all stories and guides</Link>
          </div>
          <div className="article-grid">
            {articles
              .filter((article) => storySlugs.includes(article.slug))
              .map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
          </div>
        </div>
      </section>
      <AppCta />
    </>
  );
}
