import * as React from "react";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Revolution in Content Creation and Communication",
    meta: "AI Team • 10th July 2025 • 5 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "How AI Writing Tools Empower Writers to Shape the World",
    meta: "AI Team • 8th July 2025 • 6 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Revolution in Content Creation and Communication",
    meta: "AI Team • 5th July 2025 • 4 min read",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">Latest Blogs & News</h2>
        <p className="text-muted text-lg">Our AI writing tool is designed to empower your content creation experience, making writing smarter, faster, and more enjoyable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {blogs.map((b) => (
          <div key={b.title} className="bg-card rounded-xl shadow-lg p-0 flex flex-col items-center gap-4 border border-border hover:scale-105 transition-all cursor-pointer overflow-hidden">
            <img src={b.image} alt={b.title} className="w-full h-40 object-cover rounded-t-xl" />
            <div className="p-6 w-full flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-text mb-1">{b.title}</h4>
              <p className="text-muted text-sm mb-2">{b.meta}</p>
              <button className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:scale-105 transition">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
