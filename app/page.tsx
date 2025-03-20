import HeroSection from "@/components/home/hero-section"
import PresentationSection from "@/components/home/presentation-section"
import AdvantagesSection from "@/components/home/advantages-section"
import CtaSection from "@/components/home/cta-section"
import OurFeatures from "@/components/home/our-features"

/**
 * Page d'accueil de l'application.
 * Cette page affiche :
 * - Une section héro (`HeroSection`) pour accueillir les utilisateurs.
 * - Une section présentant les fonctionnalités (`OurFeatures`).
 * - Une section détaillant les avantages (`AdvantagesSection`).
 * - Un appel à l'action (`CtaSection`) pour engager les utilisateurs.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section héro : Introduction visuelle et accrocheuse */}
      <HeroSection />

      {/* Section des fonctionnalités : Présente les principales fonctionnalités de la plateforme */}
      <OurFeatures />

      {/* Section des avantages : Détaille les avantages de la plateforme */}
      <AdvantagesSection />

      {/* Section d'appel à l'action : Encourage les utilisateurs à agir (ex: s'inscrire) */}
      <CtaSection />
    </div>
  )
}