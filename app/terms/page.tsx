import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "RaceIQ terms placeholder for runraceiq.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="page-hero">
      <div className="container article">
        <span className="eyebrow">Legal</span>
        <h1>Terms</h1>
        <p>
          This is a placeholder terms page for RaceIQ. Replace this page before launch with final
          terms covering acceptable use, subscriptions, app behavior, disclaimers, and support.
        </p>
        <p>
          Terms and support questions can be sent to{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        </p>
      </div>
    </section>
  );
}
