import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

/**
 * Section héro de la page d'accueil.
 * Cette section présente une introduction visuelle et accrocheuse,
 * avec un titre, une description, des boutons d'action et une illustration.
 */
export default function HeroSection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte de la section héro */}
        <div>
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">La chambre arbitrale du sport</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Une juridiction indépendante du CNOM pour le règlement des conflits et litiges sportifs, garantissant
            une justice équitable sans passer par les tribunaux ordinaires.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/thematique"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Illustration de la section héro */}
        <div className="flex justify-center">
          <Image
            src="https://www.cnom.org.ma/sites/default/files/styles/normal_size/public/articles/WhatsApp%20Image%202025-02-26%20at%2023.13.13%20%281%29.jpeg?itok=aNclrdC3"
            alt="Arbitrage sportif"
            width={600}
            height={500}
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}