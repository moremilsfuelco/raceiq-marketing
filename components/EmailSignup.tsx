export function EmailSignup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "email-capture compact" : "email-capture"}>
      <div>
        <span className="eyebrow">RaceIQ notes</span>
        <h2>Get the real-life training email.</h2>
        <p>
          Get real-life training tips, RaceIQ updates, and honest running advice from a runner
          building her own coach app.
        </p>
      </div>
      <form action="#" className="email-form">
        <input aria-label="Email address" name="email" placeholder="Email address" type="email" />
        <button className="button" type="submit">
          Join the list
        </button>
      </form>
    </div>
  );
}
