import * as React from "react";

export default function Footer() {
  return (
    <footer className="bg-card py-12 mt-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="font-bold text-primary text-lg mb-2">AI Tool</div>
          <p className="text-muted text-sm">AI writing tool empowering your growth and exceptional content.</p>
        </div>
        <div>
          <h4 className="font-semibold text-text mb-2">Navigation</h4>
          <ul className="text-muted text-sm flex flex-col gap-1">
            <li><a href="#features" className="hover:text-primary transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
            <li><a href="#blog" className="hover:text-primary transition">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text mb-2">Company</h4>
          <ul className="text-muted text-sm flex flex-col gap-1">
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            <li><a href="#careers" className="hover:text-primary transition">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-text mb-2">Legal</h4>
          <ul className="text-muted text-sm flex flex-col gap-1">
            <li><a href="#privacy" className="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-primary transition">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6">
        <div className="text-muted text-xs">© AI Tool, LLC. All rights reserved.</div>
        <form className="flex gap-2">
          <input type="email" placeholder="Enter your email" className="bg-background border border-border rounded px-3 py-2 text-text text-xs" />
          <button className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:scale-105 transition text-xs">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
