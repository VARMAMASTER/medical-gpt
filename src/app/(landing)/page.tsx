import HeroSection from '@/components/ui/HeroSection'
import FeaturesSection from '@/components/ui/FeaturesSection'
import HighlightFeature from '@/components/ui/HighlightFeature'
import SecondaryFeatures from '@/components/ui/SecondaryFeatures'
import PricingSection from '@/components/ui/PricingSection'
import TestimonialsSection from '@/components/ui/Testimonials'
import TrustedBy from '@/components/ui/TrustedBy'
import ContactForm from '@/components/ui/ContactForm'
import BlogSection from '@/components/ui/BlogSection'
import FinalCTA from '@/components/ui/FinalCTA'
import Footer from '@/components/ui/Footer'

export default function LandingPage() {
  return (
    <main className="relative">
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
