import HeroSection from "@/components/home/hero-section"
import PresentationSection from "@/components/home/presentation-section"
import AdvantagesSection from "@/components/home/advantages-section"
import CtaSection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PresentationSection />
      <AdvantagesSection />
      <CtaSection />
    </div>
  )
}

