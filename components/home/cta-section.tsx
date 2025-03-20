import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Besoin d'un arbitrage sportif ?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez la chambre arbitrale du sport pour un règlement équitable et rapide des litiges liés au sport.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  )
}
