export function PhoneMockup() {
  return (
    <div className="phone-wrap" aria-label="RaceIQ app preview">
      <div className="phone">
        <div className="phone-screen">
          <div className="screen-top">
            <span>RaceIQ</span>
            <span>Today</span>
          </div>
          <div className="coach-card">
            <b>Coach adjustment</b>
            <p>
              You slept 5h 12m and rode hard yesterday. Today&apos;s threshold workout moves to Friday.
            </p>
          </div>
          <div className="workout-card">
            <b>Today</b>
            <p>35 min easy run + mobility</p>
            <div className="adjustment">
              <span>Long run protected for Sunday</span>
              <span>Peloton counted as aerobic load</span>
              <span>Heat note added to pace target</span>
            </div>
          </div>
          <div className="workout-card">
            <b>This week</b>
            <p>Plan updated around work travel, strength, and fatigue.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
