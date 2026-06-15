export function PhoneMockup() {
  return (
    <div className="phone-wrap app-stage" aria-label="RaceIQ app preview">
      <div className="phone">
        <div className="phone-screen">
          <div className="screen-top">
            <span>RaceIQ Coach</span>
            <span>83 days</span>
          </div>
          <div className="app-hero-card">
            <span>Today changed</span>
            <strong>Move tempo to Friday</strong>
            <p>Sleep was low and yesterday&apos;s ride was hard. Keep the engine warm.</p>
          </div>
          <div className="coach-card">
            <b>Coach note</b>
            <p>You slept 5h 12m and rode hard yesterday. Today becomes 35 min easy + mobility.</p>
          </div>
          <div className="workout-card">
            <b>Training week</b>
            <div className="pace-lines">
              <span style={{ width: "72%" }} />
              <span style={{ width: "48%" }} />
              <span style={{ width: "84%" }} />
              <span style={{ width: "58%" }} />
            </div>
            <div className="adjustment">
              <span>Long run protected for Sunday</span>
              <span>Peloton counted as aerobic load</span>
              <span>Heat note added to pace target</span>
            </div>
          </div>
          <div className="workout-card">
            <b>Next best move</b>
            <p>Easy effort. No makeup miles. Recheck Friday.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
