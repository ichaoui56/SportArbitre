import Link from "next/link"

/**
 * Composant `ThematiqueCta` :
 * Ce composant affiche un appel à l'action (CTA) pour encourager les utilisateurs à contacter la Chambre Arbitrale du Sport.
 * Il est utilisé pour inciter les visiteurs à prendre des mesures supplémentaires.
 */
export default function ThematiqueCta() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Intéressé par la Chambre Arbitrale du Sport ?</h2>
          <p className="text-muted-foreground mb-8">
            Contactez-nous pour en savoir plus sur le rôle et les responsabilités de la chambre arbitrale du sport.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

