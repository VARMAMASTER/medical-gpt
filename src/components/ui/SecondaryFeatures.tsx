import * as React from "react";

const cards = [
  {
    icon: "🚀",
    title: "Empowering Writing Excellence",
    desc: "Our advanced engine helps you reach peak writing excellence with style and clarity.",
  },
  {
    icon: "📝",
    title: "Grammar and Spell Check",
    desc: "AI-powered grammar and spell check for error-free writing.",
  },
];

export default function SecondaryFeatures() {
  return (
    <section className="py-12 flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
      {cards.map((c) => (
        <div key={c.title} className="flex-1 bg-card rounded-2xl shadow-xl p-8 flex flex-col items-start gap-4 border border-border">
          <span className="text-3xl mb-2">{c.icon}</span>
          <h4 className="font-semibold text-lg text-text mb-1">{c.title}</h4>
          <p className="text-muted text-base">{c.desc}</p>
        </div>
      ))}
    </section>
  );
}
