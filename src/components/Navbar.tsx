import * as React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="font-bold text-primary text-lg">AI Tool</div>
        <div className="hidden md:flex gap-8 text-text">
          <a href="#" className="hover:text-primary transition">Home</a>
          <a href="#features" className="hover:text-primary transition">Features</a>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="#pricing" className="hover:text-primary transition">Pricing</a>
              </TooltipTrigger>
              <TooltipContent className="bg-card text-muted border border-border rounded shadow-lg p-2">
                View our flexible pricing plans
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded border border-primary text-primary bg-transparent hover:bg-primary/10 transition">Login</button>
          <button className="px-4 py-2 rounded bg-primary text-white shadow-lg hover:scale-105 transition">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
