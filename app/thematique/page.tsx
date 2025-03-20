import ThematiqueBanner from "@/components/thematique/thematique-banner"
import ThematiqueContent from "@/components/thematique/thematique-content"
import ThematiqueCta from "@/components/thematique/thematique-cta"
import ThematiqueServices from "@/components/thematique/thematique-services"

/**
 * Page thématique principale.
 * Cette page affiche une bannière, du contenu thématique, une liste de services
 * et un appel à l'action (CTA) pour engager l'utilisateur.
 */
export default function ThematiquePage() {
  return (
    <div className="min-h-screen">
      {/* Bannière thématique : Affiche une image ou un message accrocheur */}
      <ThematiqueBanner />

      {/* Contenu thématique : Présente des informations détaillées sur la thématique */}
      <ThematiqueContent />

      {/* Services thématiques : Liste des services ou fonctionnalités liés à la thématique */}
      <ThematiqueServices />

      {/* Appel à l'action (CTA) : Encourage l'utilisateur à effectuer une action (ex: contact, inscription) */}
      <ThematiqueCta />
    </div>
  )
}