import * as React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";

const features = [
  { icon: "✨", title: "Intelligent Writing Assistance", desc: "Our AI engine helps you write smarter, faster, and more creatively." },
  { icon: "📚", title: "Grammar & Style Checks", desc: "Deep grammar and style analysis for flawless writing." },
  { icon: "🔍", title: "Plagiarism Detection", desc: "Originality assurance with advanced plagiarism detection." },
  { icon: "🎯", title: "Tone Adjustment", desc: "Tailor your writing tone for any audience or context." },
  { icon: "🎨", title: "Style Adaptation", desc: "Instantly adapt your writing style to fit your needs." },
  { icon: "🧠", title: "Context Awareness", desc: "Hyper-aware of context for truly relevant writing." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">Key Features of Our Tool</h2>
        <p className="text-muted text-lg">Our AI writing tool is designed to empower your content creation experience, making writing smarter, faster, and more enjoyable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <TooltipProvider key={f.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 hover:scale-105 transition-all border border-border cursor-pointer">
                  <span className="text-4xl mb-2">{f.icon}</span>
                  <h3 className="font-semibold text-xl text-text mb-1">{f.title}</h3>
                  <p className="text-muted text-center text-base">{f.desc}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-card text-muted border border-border rounded shadow-lg p-2">
                {f.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
}
