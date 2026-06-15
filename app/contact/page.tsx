import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact RaceIQ at ${site.supportEmail}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container article">
        <span className="eyebrow">Contact</span>
        <h1>Talk to RaceIQ.</h1>
        <p>
          For launch updates, support, partnerships, or press, email{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        </p>
      </div>
    </section>
  );
}
