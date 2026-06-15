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
  {
    slug: "why-i-started-running",
    title: "Why I Started Running",
    description:
      "A human founder story about starting running at 210 lbs, learning patience, and building a life around forward motion.",
    intro:
      "Running did not begin as a brand, a training block, or a perfect morning routine. It began as a small decision to become someone who kept showing up, even when the first miles felt awkward and slow.",
    sections: [
      {
        heading: "It started before running felt good",
        body: [
          "At 210 lbs, running was not instantly freeing. It was uncomfortable, exposed, and humbling. A few minutes could feel like a long conversation with every doubt in the room.",
          "But there was something honest about it. You could not fake a run. You either put your shoes on and moved, or you did not. That simplicity made running feel possible before it felt enjoyable.",
        ],
      },
      {
        heading: "The first win was becoming consistent",
        body: [
          "The early goal was not speed. It was not a marathon. It was learning how to return after a hard day, how to start again after missing a workout, and how to let small progress count.",
          "That lesson still sits underneath RaceIQ: the plan only matters if it helps a real person keep coming back.",
        ],
      },
      {
        heading: "Running became a way to trust the process",
        body: [
          "Eventually the short runs became longer runs. The runner who once wondered whether she belonged started thinking about marathons, trails, and ultras.",
          "The transformation was not clean or dramatic every week. It was built through work, fatigue, heat, moved long runs, and a lot of imperfect consistency.",
        ],
      },
    ],
    cta:
      "RaceIQ is built for the runner trying to keep becoming someone new without needing every week to go perfectly.",
    related: ["how-i-lost-80-pounds-and-became-a-runner", "why-i-built-raceiq", "why-running-feels-so-hard-at-first"],
  },
  {
    slug: "how-i-lost-80-pounds-and-became-a-runner",
    title: "How I Lost 80 Pounds and Became a Runner",
    description:
      "An honest story about losing 80 pounds, becoming a runner, and learning that progress is built through imperfect consistency.",
    intro:
      "Losing 80 pounds was not a straight line, and becoming a runner did not happen because every run felt strong. It happened because enough ordinary days stacked up into a different life.",
    sections: [
      {
        heading: "The change was built in small decisions",
        body: [
          "The beginning was not cinematic. It was deciding to move when it would have been easier not to. It was choosing a walk, then a jog, then a little more time on tired legs.",
          "Weight loss and running both demanded patience. The body changed slowly. Confidence changed slowly too. The real shift was learning that slow progress still counts.",
        ],
      },
      {
        heading: "Running taught a different kind of discipline",
        body: [
          "Discipline was not pretending life was easy. It was learning how to keep going through full-time work, low-energy days, bad sleep, and schedules that did not care about the training plan.",
          "Some weeks were strong. Some weeks were survival. The lesson was to adjust without quitting.",
        ],
      },
      {
        heading: "Becoming a runner is not a finish line",
        body: [
          "The story did not end at a number on the scale. Running opened the door to marathons, trail running, ultra goals, and a deeper respect for what consistent training can do.",
          "That is part of why RaceIQ exists. Real runners are not made by perfect calendars. They are made by adapting, returning, and doing the next right thing.",
        ],
      },
    ],
    cta:
      "RaceIQ helps runners protect momentum when real life interrupts the version of the plan that looked perfect on paper.",
    related: ["why-i-started-running", "why-i-built-raceiq", "why-running-feels-so-hard-at-first"],
  },
  {
    slug: "why-i-built-raceiq",
    title: "Why I Built RaceIQ",
    description:
      "RaceIQ was built because rigid marathon training plans do not work for runners with jobs, fatigue, cross-training, heat, travel, and real life.",
    intro:
      "RaceIQ came from a simple frustration: most running plans are written like life is quiet. Mine was not. Most runners' lives are not.",
    sections: [
      {
        heading: "The plan on paper kept missing the point",
        body: [
          "A spreadsheet can tell you what Tuesday should look like. It cannot always tell you what to do when Monday ran late, you slept badly, your legs are heavy, and the long run still matters.",
          "After starting at 210 lbs and learning to run while working full time, I knew the hard part was not just doing the work. It was knowing how to adjust when life changed the work.",
        ],
      },
      {
        heading: "Rigid plans make normal runners feel like they failed",
        body: [
          "Miss a workout and the plan keeps moving. Ride Peloton instead and the training load disappears from the calendar. Move a long run and suddenly the whole week feels broken.",
          "That is not coaching. Coaching should help you understand the tradeoff and keep building.",
        ],
      },
      {
        heading: "RaceIQ is the coach I wanted in the messy middle",
        body: [
          "RaceIQ exists for runners with full-time jobs, stress, bad sleep, heat, strength work, cycling, marathon goals, trail goals, and ultra dreams.",
          "It is not about making training soft. It is about making training smarter, so the goal survives the actual week.",
        ],
      },
    ],
    cta:
      "RaceIQ was built to help runners adjust training around the life they actually have, not the life a static plan assumes.",
    related: ["why-most-marathon-training-plans-fail-real-people", "training-for-a-marathon-while-working-full-time", "how-to-adjust-marathon-training-when-life-gets-busy"],
  },
  {
    slug: "why-most-marathon-training-plans-fail-real-people",
    title: "Why Most Marathon Training Plans Fail Real People",
    description:
      "Most marathon plans assume perfect weeks. Learn why real runners need adaptive training around fatigue, work, missed runs, and life.",
    intro:
      "Most marathon plans are not useless. They fail because they are incomplete. They tell you what to do if the week behaves. Real weeks rarely behave.",
    sections: [
      {
        heading: "Static plans assume stable lives",
        body: [
          "A traditional marathon plan can be helpful for structure: long runs, workouts, recovery days, mileage build, taper. The problem is what happens when the runner is not living inside ideal conditions.",
          "Full-time work, family obligations, poor sleep, heat, travel, strength training, and cross-training all change how much stress a runner can absorb.",
        ],
      },
      {
        heading: "The failure point is usually adjustment",
        body: [
          "When a workout is missed, many runners either cram it in, skip it with guilt, or stack too many hard days together. None of those decisions are coaching.",
          "A better plan helps decide what matters most this week, what can move, what should be easier, and what can be left alone.",
        ],
      },
      {
        heading: "Real runners need structure and flexibility",
        body: [
          "Flexibility does not mean random training. It means the plan has priorities. It knows the long run matters, recovery matters, and the body only adapts to stress it can actually recover from.",
          "That is the reason to read the story of why RaceIQ was built: the product exists for the gap between ambition and real life.",
        ],
      },
    ],
    cta:
      "RaceIQ helps runners keep the structure of marathon training while adapting the week when real life changes the plan.",
    related: ["why-i-built-raceiq", "adaptive-marathon-training-plan", "how-to-adjust-marathon-training-when-life-gets-busy"],
  },
  {
    slug: "training-for-a-marathon-while-working-full-time",
    title: "Training for a Marathon While Working Full Time",
    description:
      "Practical advice for marathon training with a full-time job, including schedule stress, long runs, missed workouts, and recovery.",
    intro:
      "Training for a marathon while working full time is not just about finding hours. It is about managing total stress so the training can actually land.",
    sections: [
      {
        heading: "Your job is part of the training environment",
        body: [
          "A late meeting, commute, deadline, or work trip can affect a workout even if it does not show up in your mileage. Stress is not the same as running, but it still changes recovery.",
          "The best plan is built around the week you can repeat, not the fantasy week you wish you had.",
        ],
      },
      {
        heading: "Protect the few workouts that matter most",
        body: [
          "Most marathon weeks have a few anchors: a long run, one quality session, and enough easy running to stay consistent. When work gets busy, protect the anchors before chasing filler miles.",
          "If you miss a run, do not automatically repay it. Look at what is coming next and keep the week balanced.",
        ],
      },
      {
        heading: "Use flexibility as a skill",
        body: [
          "Move the long run when you need to. Run easy when sleep is poor. Count the bike ride as work your body did. Adjusting is not failure; it is how adult runners keep training.",
          "RaceIQ was built from that exact experience of training around full-time work and still wanting big goals.",
        ],
      },
    ],
    cta:
      "RaceIQ helps marathon training fit around work stress, late nights, missed workouts, and the real schedule in front of you.",
    related: ["why-i-built-raceiq", "marathon-training-full-time-job", "can-i-move-my-long-run"],
  },
  {
    slug: "trail-running-for-beginners",
    title: "Trail Running for Beginners",
    description:
      "A beginner-friendly guide to trail running: effort, pacing, hills, walking, safety, and how trail miles differ from road miles.",
    intro:
      "Trail running can feel like a different sport at first. That is part of the point. The ground changes, pace matters less, hills ask for patience, and walking can be smart training.",
    sections: [
      {
        heading: "Let effort lead before pace",
        body: [
          "On trails, pace can swing wildly because of hills, footing, turns, mud, rocks, and heat. A road pace that feels easy may be impossible on a technical trail.",
          "Begin by running by effort. If breathing and form stay controlled, you are doing useful work even if the watch looks slower than usual.",
        ],
      },
      {
        heading: "Walking hills is allowed",
        body: [
          "Many beginner trail runners waste energy trying to run every climb. Power hiking can be faster, calmer, and smarter, especially on long or steep trails.",
          "Trails reward rhythm and patience more than ego. The goal is to keep moving efficiently.",
        ],
      },
      {
        heading: "Trail miles count differently",
        body: [
          "A six-mile trail run may take more time and create more muscular fatigue than six road miles. That matters when you are also training for road races, marathons, or longer trail goals.",
          "RaceIQ is built around this kind of context: the training effect is more than the distance line on the calendar.",
        ],
      },
    ],
    cta:
      "RaceIQ helps runners account for trail effort, hills, fatigue, and mixed training when deciding what to do next.",
    related: ["why-i-built-raceiq", "heavy-legs-running", "running-in-heat-humidity"],
  },
  {
    slug: "why-running-feels-so-hard-at-first",
    title: "Why Running Feels So Hard at First",
    description:
      "Running often feels hard at first because your body, pacing, breathing, and confidence are all adapting. Here is how to keep going.",
    intro:
      "If running feels hard at first, that does not mean you are bad at it. It means your body is learning a new kind of work, and your brain has not yet collected enough proof that you can handle it.",
    sections: [
      {
        heading: "Your easy pace may need to be easier than you think",
        body: [
          "Many new runners accidentally run too fast because the pace that feels like running also feels like work. Slowing down, adding walk breaks, and building time on feet can make training more sustainable.",
          "Early running is less about proving toughness and more about teaching your body that you will come back again.",
        ],
      },
      {
        heading: "Confidence adapts too",
        body: [
          "The first weeks can feel awkward because every run is new information. Breathing, shoes, clothes, routes, soreness, weather, and self-talk all take energy.",
          "With consistency, the unfamiliar becomes less loud. That is one reason small wins matter so much.",
        ],
      },
      {
        heading: "Hard does not mean impossible",
        body: [
          "The runner behind RaceIQ started at 210 lbs and did not begin with effortless miles. Running became possible through repetition, patience, and learning how to adjust instead of quitting.",
          "If the run feels hard, the next move may be to slow down, shorten it, walk, recover, or try again tomorrow. That still counts.",
        ],
      },
    ],
    cta:
      "RaceIQ is built for runners who need encouragement and smarter adjustments while they build consistency.",
    related: ["why-i-started-running", "how-i-lost-80-pounds-and-became-a-runner", "why-i-built-raceiq"],
  },
  {
    slug: "how-to-adjust-marathon-training-when-life-gets-busy",
    title: "How to Adjust Marathon Training When Life Gets Busy",
    description:
      "Learn how to adjust marathon training around busy weeks, missed workouts, long runs, fatigue, work, travel, and poor sleep.",
    intro:
      "Busy weeks do not automatically ruin marathon training. The danger is pretending nothing changed, then forcing the original plan into a body and schedule that no longer match it.",
    sections: [
      {
        heading: "Start by identifying the anchor workouts",
        body: [
          "When life gets busy, look for the sessions that matter most: usually the long run, one workout, and enough easy movement to keep consistency alive.",
          "Everything else should be judged by whether it supports those anchors or just adds pressure.",
        ],
      },
      {
        heading: "Avoid stacking stress",
        body: [
          "Do not cram a missed workout, hard strength session, and long run into three days just because the calendar says those boxes still exist.",
          "Training works when stress and recovery are paired. If work, travel, heat, or poor sleep already added stress, your running plan should notice.",
        ],
      },
      {
        heading: "Make the next decision, not the perfect decision",
        body: [
          "Sometimes the right adjustment is moving the long run. Sometimes it is shortening an easy day. Sometimes it is letting one missed run stay missed.",
          "RaceIQ was built for these exact tradeoffs because rigid plans rarely explain what to do when real life gets loud.",
        ],
      },
    ],
    cta:
      "RaceIQ helps runners adjust marathon training around busy weeks without turning one missed workout into a spiral.",
    related: ["why-i-built-raceiq", "adaptive-marathon-training-plan", "training-for-a-marathon-while-working-full-time"],
  },
];

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

export function articleUrl(slug: string) {
  return `${siteUrl}/${slug}`;
}
