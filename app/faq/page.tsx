import type { Metadata } from "next";
import { AppCta } from "@/components/AppCta";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about RaceIQ training plans, adaptive coaching, cycling, strength training, Apple Health, long runs, beginners, and pricing.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  ["Is RaceIQ for beginners?", "Yes. RaceIQ is designed for runners who want structure that can adapt, whether you are building consistency, training for a first race, or returning after time away."],
  ["Does RaceIQ make training plans?", "RaceIQ is built to create structured running plans and help keep them realistic as your week changes."],
  ["Can RaceIQ adjust my plan?", "Yes. The core idea of RaceIQ is adaptive coaching: missed workouts, fatigue, sleep, heat, travel, and cross-training can all influence the next best move."],
  ["Does cycling count?", "Cycling can count as aerobic work and training stress, but it is not identical to running. RaceIQ is designed to account for rides without treating every mile as the same."],
  ["Does strength training count?", "Strength training can affect fatigue and recovery. RaceIQ considers strength work as part of the broader training picture."],
  ["Can I move my long run?", "Often, yes. RaceIQ helps you think through where the long run fits so you do not stack too much stress or derail the rest of the week."],
  ["Does RaceIQ use Apple Health?", "RaceIQ is designed around Apple Health context such as workouts and health signals so the plan can better reflect real training."],
  ["Is RaceIQ free?", "RaceIQ will include a free path with App Store pricing details to be announced at launch."],
];

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>Questions runners ask before trusting a plan.</h1>
          <p className="lead">
            Straight answers about RaceIQ, adaptive training, long runs, cycling, strength, Apple
            Health, and launch pricing.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          {faqs.map(([question, answer]) => (
            <div className="faq-item" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>
      <AppCta />
    </>
  );
}
