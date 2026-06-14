import { appStorePlaceholder } from "@/lib/site";

export function AppCta() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-panel">
          <span className="eyebrow">Early access</span>
          <h2>Keep training when life gets messy.</h2>
          <p className="lead">
            Join the RaceIQ launch list for App Store updates, training notes, and the first public release.
          </p>
          <div className="cta-row">
            <a className="button" href={appStorePlaceholder}>
              App Store placeholder
            </a>
            <a className="button secondary" href="mailto:hello@runraceiq.com">
              Contact RaceIQ
            </a>
          </div>
          <form className="email-form">
            <input aria-label="Email address" placeholder="Email address" type="email" />
            <button className="button" type="button">
              Get launch updates
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
