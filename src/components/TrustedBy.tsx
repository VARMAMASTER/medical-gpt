import * as React from "react";

const brands = [
  "Disney", "Canva", "Amazon", "Notion", "Tinder", "Airbnb"
];

export default function TrustedBy() {
  return (
    <section className="py-8 flex items-center justify-center bg-background">
      <div className="flex gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all">
        {brands.map((b) => (
          <div key={b} className="text-2xl md:text-3xl font-bold text-muted hover:text-primary transition-all cursor-pointer">
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
