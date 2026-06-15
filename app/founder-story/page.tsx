import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/AppCta";

export const metadata: Metadata = {
  title: "Founder Story",
  description:
    "RaceIQ was built by a runner who started at 210 lbs and now trains for marathons, trails, ultras, and real-life chaos.",
  alternates: { canonical: "/founder-story" },
};

export default function FounderStory() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Founder story</span>
          <h1>Built by a runner who needed a plan that could bend.</h1>
          <p className="lead">
            RaceIQ was built by a runner who started at 210 lbs and now trains for marathons,
            trails, ultras, and the ordinary chaos that makes training hard to keep.
          </p>
        </div>
      </section>
      <section className="section">
        <article className="container article">
          <p>
            The story behind RaceIQ is not a polished corporate origin story. It starts with someone
            trying to change their life, one run at a time, from a body that did not yet feel like a
            runner&apos;s body.
          </p>
          <p>
            At 210 lbs, running was not romantic. It was humbling. A few minutes could feel like a
            negotiation. Progress came slowly, then unevenly, then all at once in little moments:
            another mile, another week, another race signed up for before doubt could talk too loudly.
          </p>
          <p>
            Over time, running became bigger. Marathons. Trails. Ultras. Long runs that started in
            the dark. Workouts squeezed between work, travel, bad sleep, and days where the plan on
            paper had no idea what real life had already taken out of the body.
          </p>
          <p>
            That gap became the reason for RaceIQ. Most training plans can tell you what an ideal
            runner should do on an ideal Tuesday. Far fewer can help when you worked late Monday,
            rode Peloton instead of running, woke up tired, and still care deeply about the race
            you are training for.
          </p>
          <p>
            RaceIQ exists for that runner. The one who is serious, but not perfect. Ambitious, but
            human. The one trying to keep moving forward without pretending life is clean.
          </p>
          <p>
            Read <Link href="/why-raceiq">why RaceIQ is different</Link> or start with the guide to
            an <Link href="/adaptive-marathon-training-plan">adaptive marathon training plan</Link>.
          </p>
          <div className="coach-takeaway">
            <span>More founder story</span>
            <p>
              Read <Link href="/why-i-started-running">why I started running</Link>,{" "}
              <Link href="/how-i-lost-80-pounds-and-became-a-runner">
                how I lost 80 pounds and became a runner
              </Link>
              , or the full story of <Link href="/why-i-built-raceiq">why I built RaceIQ</Link>.
            </p>
          </div>
        </article>
      </section>
      <AppCta />
    </>
  );
}
