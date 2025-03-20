import ThematiqueBanner from "@/components/thematique/thematique-banner"
import ThematiqueContent from "@/components/thematique/thematique-content"
import ThematiqueCta from "@/components/thematique/thematique-cta"
import ThematiqueServices from "@/components/thematique/thematique-services"
export default function ThematiquePage() {
  return (
    <div className="min-h-screen">
      <ThematiqueBanner />
      <ThematiqueContent />
      <ThematiqueServices />
      <ThematiqueCta />
    </div>
  )
}

