'use client';

import HeroSection from '@/components/ui/HeroSection';
import FeaturesSection from '@/components/ui/FeaturesSection';
import HighlightFeature from '@/components/ui/HighlightFeature';
import PricingSection from '@/components/ui/PricingSection';
import TestimonialsSection from '@/components/ui/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <HighlightFeature />
      <PricingSection />
      <TestimonialsSection />
    </main>
  );
}