import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RaceIQ privacy policy placeholder for runraceiq.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="page-hero">
      <div className="container article">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p>
          This is a placeholder privacy policy for RaceIQ. Replace this page before launch with the
          final policy covering analytics, email signup, Apple Health usage, app data handling, and
          support contact workflows.
        </p>
      </div>
    </section>
  );
}
