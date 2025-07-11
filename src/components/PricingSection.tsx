import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const plans = [
  {
    name: "Starter",
    price: "$10",
    period: "month",
    features: ["AI Assistance", "Advanced Grammar", "Plagiarism Check", "Community Access"],
  },
  {
    name: "Medium",
    price: "$59",
    period: "month",
    features: ["All Starter features", "Style Adaptation", "Context Awareness", "Priority Support"],
  },
  {
    name: "Business",
    price: "$289",
    period: "month",
    features: ["All Medium features", "Enterprise Security", "Custom Integrations", "Dedicated Manager"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">Our Pricing Plan</h2>
        <p className="text-muted text-lg">Our AI writing tool is designed to empower your content creation experience, making writing smarter, faster, and more enjoyable.</p>
      </div>
      <Tabs defaultValue="monthly" className="w-full flex flex-col items-center">
        <TabsList className="flex gap-4 mb-8 bg-card rounded-lg p-2 border border-border">
          <TabsTrigger value="monthly" className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:scale-105 transition">Monthly</TabsTrigger>
          <TabsTrigger value="yearly" className="px-4 py-2 rounded bg-secondary text-white font-semibold shadow hover:scale-105 transition">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 border border-border">
                <h3 className="font-bold text-xl text-text mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}<span className="text-muted text-base font-normal">/mo</span></div>
                <ul className="mb-4 text-muted text-sm list-disc list-inside">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-all">Get Started</button>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 border border-border">
                <h3 className="font-bold text-xl text-text mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price === "$10" ? "$100" : plan.price === "$59" ? "$590" : "$2890"}<span className="text-muted text-base font-normal">/yr</span></div>
                <ul className="mb-4 text-muted text-sm list-disc list-inside">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:scale-105 transition-all">Get Started</button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
