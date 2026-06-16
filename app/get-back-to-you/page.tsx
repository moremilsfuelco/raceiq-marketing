import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Back To You | 12-Week Program for Women Rebuilding Confidence",
  description:
    "A 12-week program by Morgan Mitchell for women who want to rebuild confidence, movement, strength, and self-trust after losing themselves.",
  alternates: { canonical: "https://www.runraceiq.com/get-back-to-you" },
  openGraph: {
    type: "article",
    url: "https://www.runraceiq.com/get-back-to-you",
    siteName: site.name,
    title: "Get Back To You | 12-Week Program for Women Rebuilding Confidence",
    description:
      "A personal 12-week program for women who want to feel like themselves again through movement, strength, running or walking, realistic nutrition, and self-trust.",
    images: [{ url: site.ogImage, width: 1024, height: 1024, alt: "RaceIQ app icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Back To You | RaceIQ",
    description:
      "A 12-week program for women who want to rebuild confidence, movement, strength, and self-trust.",
    images: [site.ogImage],
  },
};

const storyBlocks = [
  ["I don't remember exactly when I stopped being myself.", "Maybe it was college."],
  [
    "I had always been athletic growing up. I played softball, ran track, went to the gym, and cared way too much about being thin. I was actually anorexic in high school and probably weighed around 105 pounds. I thought skinny meant happy. I thought if I could just control my body enough, everything else would fall into place.",
    "Then college happened.",
  ],
  [
    "I started partying, eating whatever I wanted, and stopped moving the way I used to. I gained weight. After graduation I lost some of it, then gained it back. Then lost some again. Then gained it back.",
    "The cycle became my life.",
    "And honestly? The worst part wasn't the weight.",
    "The worst part was that I stopped recognizing myself.",
  ],
  [
    "I remember wearing sweatshirts in the summer because I thought they hid my body. They didn't. They just made me sweat and feel miserable.",
    "I remember signing up for a 10K because I used to love running and then skipping it because I was too embarrassed to show up.",
    "Too embarrassed.",
    "I wasn't embarrassed of other people.",
    "I was embarrassed of me.",
  ],
  [
    "I had convinced myself that fitness belonged to some other version of myself. The skinny version. The confident version. The girl I used to be.",
    "And I missed her.",
  ],
  [
    "Then my marriage ended.",
    "I got divorced and one day I looked at myself in the mirror.",
    "I weighed 210 pounds.",
    "And I remember thinking: What happened to me?",
    "Not in a cruel way. Not because I hated myself. Because I genuinely missed myself.",
  ],
  [
    "I missed feeling strong.",
    "I missed moving my body because it was fun.",
    "I missed feeling proud of myself.",
    "I missed believing I could do hard things.",
  ],
  [
    "And that day I decided something.",
    "I didn't want to become skinny.",
    "I didn't want revenge.",
    "I didn't want to punish myself.",
    "I wanted to get back to me.",
  ],
  [
    "So I started. Not perfectly. Not dramatically.",
    "I started going to the gym. I started running again.",
    "At first it sucked. I was slow. I was uncomfortable. I was embarrassed. Some days I walked more than I ran.",
    "But I kept showing up.",
  ],
  [
    "And then something funny happened.",
    "The scale moved, sure.",
    "But more importantly, I changed.",
    "I stopped making promises to myself that I immediately broke. I stopped waiting to feel motivated. I stopped believing that one bad meal ruined everything.",
    "I started trusting myself.",
  ],
  [
    "I cleaned up my diet. I learned to enjoy movement again. I started weightlifting with friends and coworkers.",
    "I signed up for races. I actually showed up to them this time.",
    "I trained for half marathons. Then a marathon.",
    "I did a ridiculous challenge where I spent 65 minutes on the Stairmaster for 80 straight days without missing a single day because apparently I enjoy suffering.",
  ],
  [
    "And slowly, over time, my body changed.",
    "But so did my identity.",
    "I became a runner. I became someone who lifts weights. I became someone who takes care of herself. I became someone who shows up.",
  ],
  [
    "Today I weigh around 125 to 130 pounds.",
    "I can run long distances.",
    "I have visible abs. Not as visible as I'd like, because apparently body dysmorphia doesn't magically disappear, but they're there.",
    "I have strong legs. Strong arms. A healthy relationship with movement.",
  ],
  [
    "And honestly?",
    "I still have bad days.",
    "I still sometimes want to be 110 pounds.",
    "I still compare myself to women who are younger, faster, leaner.",
    "I still look in the mirror some days and see the flaws before I see the progress.",
    "I'm human.",
  ],
  [
    "But I know something now that I didn't know at 210 pounds.",
    "I know how to commit to myself.",
    "I know how to show up for myself.",
    "I know that motivation is overrated and consistency is everything.",
    "I know that health isn't punishment.",
    "I know that fitness isn't reserved for people who already have six packs.",
  ],
  [
    "And I know there are women reading this who feel exactly the way I felt.",
    "Maybe you're a mom. Maybe you went through a divorce. Maybe you've spent years putting everyone else first.",
    "Maybe you don't recognize yourself anymore. Maybe you don't even know where to start.",
    "I do. Because I was you.",
  ],
  [
    "And that's why I'm creating Get Back To You.",
    "Not because I have all the answers. Not because I became perfect.",
    "But because I know what it's like to feel lost.",
    "And I know what it's like to slowly, painfully, beautifully find yourself again.",
  ],
];

const phases = [
  {
    weeks: "Weeks 1-2",
    title: "Start Showing Up",
    description: "Stop waiting for motivation. Start keeping small promises to yourself.",
    includes: ["beginner movement", "gym confidence", "walking/running basics", "simple nutrition habits", "self-trust"],
    question: "What parts of myself have I abandoned?",
  },
  {
    weeks: "Weeks 3-4",
    title: "Build Momentum",
    description: "Create routines that survive real life.",
    includes: ["beginner running progression", "strength basics", "meal prep that doesn't suck", "habit stacking", "what to do when motivation disappears"],
    question: "What would happen if I stopped quitting on myself?",
  },
  {
    weeks: "Weeks 5-8",
    title: "Become Strong",
    description: "Shift from chasing skinny to building strength.",
    includes: ["running progression", "strength progression", "recovery", "confidence", "scale mindset"],
    question: "What if my body isn't something to fix, but something to train?",
  },
  {
    weeks: "Weeks 9-12",
    title: "Get Back To You",
    description: "Turn the habits into an identity.",
    includes: ["sustainable lifestyle", "fitness identity", "race or strength goal", "body image support", "long-term plan"],
    question: "Who am I becoming?",
  },
];

const forWomen = [
  "used to be athletic",
  "gained weight and lost confidence",
  "feel embarrassed starting again",
  "are tired of punishment diets",
  "want to run, lift, walk, or move again",
  "want to feel strong",
  "want to stop abandoning themselves",
  "want to become the woman they miss being",
];

export default function GetBackToYouPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Get Back To You",
          description:
            "A 12-week program by Morgan Mitchell for women who want to rebuild confidence, movement, strength, and self-trust after losing themselves.",
          author: { "@type": "Person", name: "Morgan Mitchell" },
          publisher: { "@type": "Organization", name: "RaceIQ" },
          mainEntityOfPage: "https://www.runraceiq.com/get-back-to-you",
        }}
      />
      <section className="gbty-hero">
        <div className="route-grid" aria-hidden="true" />
        <div className="container gbty-hero-grid">
          <div>
            <span className="eyebrow">Get Back To You</span>
            <h1>Get Back To You</h1>
            <p className="lead">A 12-week program for women who want to feel like themselves again.</p>
            <p>
              I lost 80 pounds. I got divorced. I skipped races because I was embarrassed. Then I
              decided to stop waiting to become someone else and start becoming myself again.
            </p>
            <div className="cta-row">
              <a className="button" href="#waitlist">Join the Waitlist</a>
              <a className="button secondary" href="#story">Read My Story</a>
            </div>
          </div>
          <div className="gbty-photo-placeholder" aria-label="Photo placeholder for Morgan">
            <span>Morgan</span>
            <strong>Started at 210 lbs. Still showing up.</strong>
          </div>
        </div>
      </section>

      <section className="section gbty-not-section">
        <div className="container gbty-not-grid">
          <div>
            <span className="eyebrow">This is not punishment</span>
            <h2>Not a crash diet. Not a shred challenge. Not revenge.</h2>
          </div>
          <div className="gbty-word-stack">
            <span>self-trust</span>
            <span>movement</span>
            <span>strength</span>
            <span>running/walking</span>
            <span>realistic nutrition</span>
            <span>confidence</span>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <article className="container gbty-story">
          <span className="eyebrow">Morgan's story</span>
          <h2>I Didn’t Lose 80 Pounds. I Just Wanted to Be Myself Again.</h2>
          {storyBlocks.map((block, index) => (
            <div className="gbty-story-block" key={index}>
              {block.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <div className="coach-takeaway">
            <span>What is Get Back To You?</span>
            <p>
              It is not a crash diet, a shred challenge, or punishment. It is a 12-week program
              built around one simple goal: become the woman you miss being.
            </p>
          </div>
        </article>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Program framework</span>
            <h2>The 12-Week Get Back To You Framework</h2>
          </div>
          <div className="gbty-phase-list">
            {phases.map((phase) => (
              <section className="gbty-phase" key={phase.title}>
                <div>
                  <span>{phase.weeks}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
                <ul>
                  {phase.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="gbty-question">{phase.question}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section gbty-honest">
        <div className="container gbty-honest-inner">
          <span className="eyebrow">The honest part</span>
          <h2>I’m not pretending I’m perfect.</h2>
          <p>
            I still compare myself sometimes. I still have days where I want to be 110 pounds. I
            still wish my abs looked better. I still don’t always recognize my own progress.
          </p>
          <p>
            But I know how to show up for myself now. And that changed my life more than any number
            on the scale ever did.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container gbty-for-grid">
          <div>
            <span className="eyebrow">Who it is for</span>
            <h2>This is for women who want to stop abandoning themselves.</h2>
          </div>
          <ul className="gbty-for-list">
            {forWomen.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="waitlist">
        <div className="container">
          <div className="gbty-waitlist">
            <div>
              <span className="eyebrow">Waitlist</span>
              <h2>Join the Get Back To You waitlist</h2>
              <p>
                Be first to hear when the 12-week program opens, what is included, and how to join
                the first group.
              </p>
            </div>
            {/* TODO: Connect this static form to ConvertKit, Mailchimp, Tally, or Supabase before launch. */}
            <form action="#" className="gbty-form">
              <label>
                Name
                <input name="name" placeholder="Your name" type="text" />
              </label>
              <label>
                Email
                <input name="email" placeholder="you@example.com" type="email" />
              </label>
              <label>
                What are you struggling with most right now?
                <textarea name="struggle" placeholder="Tell me what feels hardest right now." rows={5} />
              </label>
              <button className="button" type="submit">Join the Waitlist</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section gbty-social">
        <div className="container gbty-social-inner">
          <span className="eyebrow">Follow along</span>
          <h2>Want the real-time version of this journey?</h2>
          <p>
            I’m sharing the process of building RaceIQ, training, running, lifting, and creating Get
            Back To You in real time.
          </p>
          <a className="button secondary" href={site.social.instagram}>Instagram placeholder</a>
        </div>
      </section>

      <section className="section">
        <div className="container article">
          <p>
            If you want the RaceIQ side of the story, read{" "}
            <Link href="/why-i-built-raceiq">why I built RaceIQ</Link>. If you want the weight-loss
            and running chapter, start with{" "}
            <Link href="/how-i-lost-80-pounds-and-became-a-runner">
              how I lost 80 pounds and became a runner
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
