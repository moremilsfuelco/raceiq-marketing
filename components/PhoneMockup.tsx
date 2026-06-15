import Image from "next/image";

export function PhoneMockup() {
  return (
    <div className="phone-wrap app-stage" aria-label="RaceIQ app preview">
      <div className="phone">
        <div className="phone-screen hero-screenshot-screen">
          <Image
            src="/screenshots/dashboard-score.png"
            alt="RaceIQ dashboard screenshot showing RaceIQ Score, race countdown, and next best move"
            width={430}
            height={932}
            priority
            sizes="(min-width: 980px) 330px, 86vw"
          />
        </div>
      </div>
    </div>
  );
}
