import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/AppCta";

export const metadata: Metadata = {
  title: "Why RaceIQ",
  description:
    "Most running apps assume perfect conditions. RaceIQ is built for runners with real lives, real fatigue, and changing schedules.",
  alternates: { canonical: "/why-raceiq" },
};

export default function WhyRaceIQ() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Why RaceIQ</span>
          <h1>Most running apps assume perfect conditions.</h1>
          <p className="lead">
            RaceIQ is built for runners with real lives: full-time jobs, family logistics, missed
            workouts, bad sleep, hot days, strength sessions, travel, and cross-training that still counts.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <div className="card">
            <span className="tag">The old way</span>
            <h2>A plan that punishes reality.</h2>
            <p>
              Traditional plans are useful until the first messy week. Miss a run and the calendar
              keeps marching. Ride instead of run and the plan ignores the load. Sleep badly and the
              workout still expects a fresh body.
            </p>
          </div>
          <div className="card">
            <span className="tag">RaceIQ</span>
            <h2>A plan that listens.</h2>
            <p>
              RaceIQ helps turn real-life signals into better training choices: move the long run,
              count the Peloton ride, reduce the workout, preserve recovery, or protect the key session.
            </p>
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container article">
          <h2>RaceIQ is not about doing less.</h2>
          <p>
            It is about doing the right work at the right time. Serious runners do not need guilt
            from a static calendar. They need a plan that understands the difference between
            discipline and forcing the wrong workout on the wrong day.
          </p>
          <p>
            That is why RaceIQ focuses on context. A missed easy run, a hard bike ride, a terrible
            night of sleep, and a humid long run all affect the next decision differently.
          </p>
          <p>
            Start with the <Link href="/adaptive-marathon-training-plan">adaptive training guide</Link> or
            read about <Link href="/can-i-move-my-long-run">moving your long run</Link>.
          </p>
        </div>
      </section>
      <AppCta />
    </>
  );
}
