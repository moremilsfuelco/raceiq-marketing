import { siteUrl } from "./site";

export type Article = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  cta: string;
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "adaptive-marathon-training-plan",
    title: "Adaptive Marathon Training Plans for Real Life",
    description:
      "Learn how an adaptive marathon training plan can adjust around fatigue, missed workouts, cross-training, travel, and busy weeks.",
    intro:
      "A marathon plan should give you structure without pretending every week will go perfectly. Work gets loud. Kids get sick. Legs feel flat. A smart plan helps you protect the big picture instead of panicking over one messy day.",
    sections: [
      {
        heading: "What makes a plan adaptive?",
        body: [
          "A static plan says what should happen. An adaptive plan pays attention to what actually happened: missed miles, hard cross-training, poor sleep, heat, travel, and how your body is responding.",
          "The goal is not to make every day easier. The goal is to preserve the right stress at the right time so you can keep building without forcing workouts that no longer fit the week.",
        ],
      },
      {
        heading: "When your week changes, the plan should change too",
        body: [
          "If Tuesday's workout becomes impossible, the answer is rarely to cram every missed mile into Wednesday. A better adjustment looks at the long run, workout spacing, recent fatigue, and upcoming recovery.",
          "RaceIQ is designed for that exact moment: the gap between the plan you wrote and the life you are actually living.",
        ],
      },
      {
        heading: "How to think about missed workouts",
        body: [
          "Missed easy runs are often less important than missed key sessions, but context matters. A missed run after a terrible night of sleep may be useful recovery. A missed workout during a high-stress week may need a lighter replacement.",
          "When in doubt, protect consistency, avoid stacking hard efforts, and keep your long-term goal bigger than one entry on the calendar.",
        ],
      },
    ],
    cta:
      "RaceIQ helps runners adjust marathon training plans around real schedules, missed days, fatigue, and cross-training.",
    related: ["can-i-move-my-long-run", "marathon-training-full-time-job", "running-when-tired"],
  },
  {
    slug: "can-i-move-my-long-run",
    title: "Can I Move My Long Run?",
    description:
      "Yes, often you can move your long run. Learn how to shift it without stacking too much stress or losing the purpose of the week.",
    intro:
      "Long runs matter, but they do not have to live on one sacred day. The useful question is not simply whether you can move it. It is how to move it while keeping the week balanced.",
    sections: [
      {
        heading: "The safest move is usually the simplest one",
        body: [
          "If you move a long run by a day, keep an eye on the hard sessions around it. Avoid placing a speed workout, heavy strength day, or another long effort directly before or after it unless your plan already accounts for that load.",
          "Moving the run is usually better than forcing it when you are exhausted, rushed, overheated, or under-fueled.",
        ],
      },
      {
        heading: "Do not repay missed miles all at once",
        body: [
          "If the move means the week gets compressed, resist the urge to stuff every mile back into the schedule. A slightly shorter long run done well can be more useful than a full-distance run done in a hole.",
          "Look at the total week: sleep, stress, cross-training, heat, strength work, and what the next few days require.",
        ],
      },
      {
        heading: "What RaceIQ would look at",
        body: [
          "RaceIQ treats the long run as part of a living week, not an isolated checkbox. It can help you decide whether to shift, shorten, or change the surrounding days so the training still makes sense.",
        ],
      },
    ],
    cta: "RaceIQ is built for runners who need to move long runs without derailing the whole plan.",
    related: ["adaptive-marathon-training-plan", "heavy-legs-running", "running-after-poor-sleep"],
  },
  {
    slug: "cycling-instead-of-running",
    title: "Does Cycling Instead of Running Count?",
    description:
      "Cycling can support running fitness, but it should be counted differently than running. Learn how to fit Peloton or bike rides into training.",
    intro:
      "Cycling is not the same as running, but it is not nothing. A Peloton ride, outdoor bike session, or spin class can add aerobic work, leg fatigue, and recovery cost to your week.",
    sections: [
      {
        heading: "Cycling can support your aerobic engine",
        body: [
          "Easy to moderate cycling can build aerobic volume with less impact than running. That can be useful during recovery days, injury-sensitive periods, travel, or weeks where running more is not realistic.",
          "The catch is that your muscles, tendons, and bones do not receive the same running-specific impact. It should inform the plan, not automatically replace every run one-for-one.",
        ],
      },
      {
        heading: "Hard rides still count as stress",
        body: [
          "A tough Peloton ride before a speed workout can leave your legs heavy. RaceIQ treats cross-training as part of the full training picture so a hard ride does not disappear from the week.",
          "That matters because the plan should adapt to total load, not just running mileage.",
        ],
      },
      {
        heading: "How to use cycling well",
        body: [
          "Use easier cycling to support recovery or add low-impact volume. Be more cautious with intense rides near key workouts, long runs, and heavy strength sessions.",
        ],
      },
    ],
    cta: "RaceIQ helps runners account for Peloton rides, cycling, and other cross-training when adjusting the week.",
    related: ["running-when-tired", "heavy-legs-running", "adaptive-marathon-training-plan"],
  },
  {
    slug: "running-when-tired",
    title: "Should You Run When You Are Tired?",
    description:
      "A practical guide to running when tired, including when to go easy, adjust the workout, or prioritize recovery.",
    intro:
      "Tired is not one thing. There is normal training fatigue, life stress, poor sleep, heavy legs, and the deep warning-light feeling that says today is not the day to force it.",
    sections: [
      {
        heading: "First, name the kind of tired",
        body: [
          "If you are a little sluggish but otherwise okay, an easy run may help you loosen up. If you are underslept, unusually sore, mentally drained, or carrying several hard days in a row, the workout may need to change.",
          "RaceIQ is built around this reality: the same planned run can be right on one day and wrong on another.",
        ],
      },
      {
        heading: "Easy effort is often the bridge",
        body: [
          "When fatigue is moderate, shifting a hard workout to an easy run can preserve consistency without adding the wrong kind of stress. You still get movement, rhythm, and habit without pretending your body is fresh.",
        ],
      },
      {
        heading: "Watch the stack",
        body: [
          "One tired day is normal. Several tired days plus bad sleep, hard cross-training, heat, and a looming long run is a different story. Plans should adapt when stress stacks up.",
        ],
      },
    ],
    cta: "RaceIQ helps runners adjust the day's training when fatigue changes what makes sense.",
    related: ["running-after-poor-sleep", "heavy-legs-running", "running-in-heat-humidity"],
  },
  {
    slug: "heavy-legs-running",
    title: "Heavy Legs While Running: What to Do",
    description:
      "Heavy legs can come from fatigue, strength work, poor sleep, heat, or hard training. Learn how to adjust without overreacting.",
    intro:
      "Heavy legs are one of the most common signals runners feel during a training block. They can be normal. They can also be a hint that the week needs a smarter adjustment.",
    sections: [
      {
        heading: "Common reasons your legs feel heavy",
        body: [
          "Heavy legs can follow a long run, hill session, strength workout, hard ride, poor sleep, travel day, or hot weather. The cause matters because the adjustment should match the reason.",
          "If you lifted heavy yesterday, the answer may be different than if you have been sleeping poorly for four nights.",
        ],
      },
      {
        heading: "Adjust the goal of the run",
        body: [
          "For an easy day, keep it truly easy and let the run be circulation and consistency. For a workout day, consider shifting the hard session, reducing the intensity, or converting it to easy mileage.",
        ],
      },
      {
        heading: "Do not let one bad run define your fitness",
        body: [
          "Heavy legs do not mean you are losing fitness. They usually mean the plan needs context. RaceIQ helps make that context visible so you can make the next right move.",
        ],
      },
    ],
    cta: "RaceIQ helps interpret heavy-leg days in the context of your full training week.",
    related: ["running-when-tired", "cycling-instead-of-running", "can-i-move-my-long-run"],
  },
  {
    slug: "marathon-training-full-time-job",
    title: "Marathon Training With a Full-Time Job",
    description:
      "Marathon training with a demanding job requires flexible planning. Learn how to protect key workouts while adapting around work and stress.",
    intro:
      "Training for a marathon while working full time is not just a scheduling puzzle. It is a stress puzzle. Meetings, late nights, commutes, travel, and family responsibilities all affect the body doing the training.",
    sections: [
      {
        heading: "Build around your real week",
        body: [
          "The best plan is not the most impressive spreadsheet. It is the plan you can repeat while staying healthy enough to train next week too.",
          "That often means placing demanding sessions where your life actually has room for them and using easy days as pressure valves.",
        ],
      },
      {
        heading: "Late work nights should count",
        body: [
          "If you worked late, slept poorly, and missed dinner, tomorrow's workout does not exist in a vacuum. A life-aware plan should notice that and adjust the training ask.",
        ],
      },
      {
        heading: "Protect the important work",
        body: [
          "Most weeks have a few sessions that matter most. RaceIQ helps runners make tradeoffs: what to keep, what to move, what to shorten, and what to let go.",
        ],
      },
    ],
    cta: "RaceIQ helps marathon training fit around full-time work instead of assuming perfect weeks.",
    related: ["adaptive-marathon-training-plan", "can-i-move-my-long-run", "running-after-poor-sleep"],
  },
  {
    slug: "running-after-poor-sleep",
    title: "Running After Poor Sleep",
    description:
      "Poor sleep can change how a run should be approached. Learn when to go easy, move the workout, or shorten the day.",
    intro:
      "One bad night does not ruin your training. But sleep changes recovery, focus, and how hard a workout may feel. Good plans leave room for that.",
    sections: [
      {
        heading: "Separate easy runs from key workouts",
        body: [
          "After poor sleep, an easy run may still be reasonable if you feel steady and keep the effort relaxed. A hard interval workout or long run deserves more caution.",
          "The more demanding the session, the more sleep should factor into the decision.",
        ],
      },
      {
        heading: "Look at the pattern",
        body: [
          "One rough night is different from a week of short sleep. If poor sleep is stacking with stress, soreness, heat, and hard training, the plan should back off sooner.",
        ],
      },
      {
        heading: "Keep the long view",
        body: [
          "Adjusting after poor sleep is not weakness. It is how consistent runners stay consistent. RaceIQ helps make those adjustments without turning every change into a crisis.",
        ],
      },
    ],
    cta: "RaceIQ helps runners adapt training after poor sleep while keeping the long-term plan moving.",
    related: ["running-when-tired", "heavy-legs-running", "marathon-training-full-time-job"],
  },
  {
    slug: "running-in-heat-humidity",
    title: "Running in Heat and Humidity",
    description:
      "Heat and humidity can make normal paces feel harder. Learn how to adjust effort, expectations, and training plans.",
    intro:
      "Hot, humid running changes the cost of a workout. A pace that felt controlled in cool weather can become a grind when the air is heavy.",
    sections: [
      {
        heading: "Effort matters more than ego pace",
        body: [
          "In heat and humidity, pace often needs to slow down for the same effort. That does not mean fitness disappeared. It means the environment changed the cost.",
          "A smarter training plan should account for conditions rather than punishing you for being human.",
        ],
      },
      {
        heading: "Move or modify key sessions",
        body: [
          "Early runs, shaded routes, easier effort targets, shorter reps, or moving a workout can all be reasonable. The right call depends on the day, the workout, and the rest of the week.",
        ],
      },
      {
        heading: "Heat stress is still stress",
        body: [
          "A hard run in humidity may deserve more recovery even if the mileage looks normal. RaceIQ is designed to consider that fuller picture when adjusting training.",
        ],
      },
    ],
    cta: "RaceIQ helps runners adapt training when heat and humidity make the planned workout unrealistic.",
    related: ["running-when-tired", "adaptive-marathon-training-plan", "can-i-move-my-long-run"],
  },
];

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

export function articleUrl(slug: string) {
  return `${siteUrl}/${slug}`;
}
