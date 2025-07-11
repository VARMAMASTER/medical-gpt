import * as React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";

const testimonials = [
  { name: "Alex Neal", avatar: "A", text: "AI Tool transformed my workflow. The writing feels effortless and creative!" },
  { name: "Mia Burton", avatar: "M", text: "Grammar and style checks are spot on. My blog posts are now flawless." },
  { name: "Ben Carter", avatar: "B", text: "Plagiarism detection gives me peace of mind for my academic work." },
  { name: "Nina Chen", avatar: "N", text: "Tone adjustment is a game changer for my marketing emails." },
  { name: "Raj Kapoor", avatar: "R", text: "Context awareness makes every article relevant and engaging." },
  { name: "Sara Lopez", avatar: "S", text: "The UI is beautiful and the features are truly futuristic!" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">What Our User Says</h2>
        <p className="text-muted text-lg">Our AI writing tool is designed to empower your content creation experience, making writing smarter, faster, and more enjoyable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <TooltipProvider key={t.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 border border-border hover:scale-105 transition-all cursor-pointer animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-2 shadow-lg">{t.avatar}</div>
                  <h4 className="font-semibold text-lg text-text mb-1">{t.name}</h4>
                  <p className="text-muted text-center text-base">{t.text}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-card text-muted border border-border rounded shadow-lg p-2">
                {t.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
}
