import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get RaceIQ support at ${site.supportEmail}.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <section className="page-hero">
      <div className="container article">
        <span className="eyebrow">Support</span>
        <h1>Need help with RaceIQ?</h1>
        <p>
          For app support, launch questions, billing questions once subscriptions are live, or help
          understanding RaceIQ features, email{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        </p>
        <div className="article-callout">
          <strong>Coach support</strong>
          <p>
            Send the context that matters: your device, the issue you hit, and what you expected
            RaceIQ to do next.
          </p>
        </div>
      </div>
    </section>
  );
}
