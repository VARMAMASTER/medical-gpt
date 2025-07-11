import * as React from "react";

export default function HighlightFeature() {
  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/30 to-background flex items-center justify-center shadow-2xl">
          <svg width="120" height="120" className="absolute inset-0 m-auto" style={{zIndex:1}}>
            <circle cx="60" cy="60" r="50" stroke="#6C63FF55" strokeWidth="4" fill="none" />
            <circle cx="60" cy="60" r="35" stroke="#8D85FF55" strokeWidth="3" fill="none" />
            <circle cx="60" cy="60" r="20" stroke="#6C63FF33" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-text mb-4">Intelligent Writing Assistance</h3>
      <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-all">Learn More</button>
    </section>
  );
}
