import Image from "next/image";

const screenshots = [
  {
    title: "Coach chat",
    src: "/screenshots/coach-chat.png",
    alt: "RaceIQ coach chat screenshot showing tired runner guidance",
  },
  {
    title: "Adaptive plan change",
    src: "/screenshots/adaptive-plan-change.png",
    alt: "RaceIQ adaptive plan change screenshot moving a tempo workout",
  },
  {
    title: "Training plan",
    src: "/screenshots/training-plan.png",
    alt: "RaceIQ training plan screenshot for a marathon build week",
  },
  {
    title: "Race dashboard",
    src: "/screenshots/dashboard-score.png",
    alt: "RaceIQ dashboard screenshot with RaceIQ Score and race countdown",
  },
  {
    title: "Profile and HealthKit",
    src: "/screenshots/profile-healthkit.png",
    alt: "RaceIQ profile screenshot showing Apple Health connected",
  },
];

export function ProductVisuals() {
  return (
    <section className="section product-visuals-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Product preview</span>
          <h2>RaceIQ is built around the decisions runners actually face.</h2>
          <p>
            These placeholder screens show the core product promise: chat with the coach, adjust the
            plan, understand the week, and keep the race goal visible.
          </p>
        </div>
        <div className="product-visual-grid real-screenshot-grid">
          {screenshots.map((screenshot) => (
            <div className="product-phone real-screenshot-phone" key={screenshot.title}>
              <div className="product-phone-screen image-screen">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={430}
                  height={932}
                  sizes="(min-width: 980px) 18vw, (min-width: 720px) 28vw, 78vw"
                />
              </div>
              <p>{screenshot.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
