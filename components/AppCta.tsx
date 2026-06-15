import { appStorePlaceholder, site } from "@/lib/site";

export function AppCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <span className="eyebrow">Early access</span>
          <h2>Keep training when life gets messy.</h2>
          <p className="lead">
            Get real-life training tips, RaceIQ updates, and honest running advice from a runner
            building her own coach app.
          </p>
          <div className="cta-row">
            <a className="button" href={appStorePlaceholder}>
              Download on the App Store
            </a>
            <a className="button secondary" href={`mailto:${site.supportEmail}`}>
              Contact RaceIQ
            </a>
          </div>
          <form action="#" className="email-form">
            <input aria-label="Email address" name="email" placeholder="Email address" type="email" />
            <button className="button" type="submit">
              Get launch updates
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
