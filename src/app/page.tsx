'use client';

import HeroSection from '@/components/landing-page/HeroSection'
import FeaturesSection from '@/components/landing-page/FeaturesSection'
import HighlightFeature from '@/components/landing-page/HighlightFeature'
import SecondaryFeatures from '@/components/landing-page/SecondaryFeatures'
import PricingSection from '@/components/landing-page/PricingSection'
import TestimonialsSection from '@/components/landing-page/Testimonials'
import TrustedBy from '@/components/landing-page/TrustedBy'
import ContactForm from '@/components/landing-page/ContactForm'
import BlogSection from '@/components/landing-page/BlogSection'
import FinalCTA from '@/components/landing-page/FinalCTA'
import Footer from '@/components/landing-page/Footer'
import Navbar from '@/components/landing-page/Navbar'

export default function LandingPage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HighlightFeature />
      <SecondaryFeatures />
      <PricingSection />
      <TestimonialsSection />
      <TrustedBy />
      <ContactForm />
      <BlogSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
