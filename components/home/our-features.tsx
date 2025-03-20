import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Liste des fonctionnalités
const features = [
  {
    title: "Indépendance Juridictionnelle",
    description: "La chambre arbitrale du sport est une structure indépendante du CNOM pour régler les conflits sportifs.",
    link: "#",
  },
  {
    title: "Compétence et Procédure",
    description: "Compétente pour se prononcer sur les différends sportifs selon l'article 44 du Dahir n° 1-10-150.",
    link: "#",
  },
  {
    title: "Exécution des Décisions",
    description: "Les décisions sont exécutoires et opposables à toutes les parties en conflit.",
    link: "#",
  },
]

/**
 * Section des fonctionnalités.
 * Cette section présente les principales caractéristiques de la chambre arbitrale du sport,
 * accompagnées d'une illustration.
 */
export default function OurFeatures() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Titre et description de la section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">La Chambre Arbitrale du Sport</h2>
          <p className="max-w-2xl mx-auto">
            La chambre arbitrale du sport vise à régler les conflits sportifs, évitant les recours aux tribunaux ordinaires.
          </p>
        </div>

        {/* Grille des fonctionnalités et illustration */}
        <div className="grid md:grid-cols-2 gap-1 items-center">
          {/* Illustration */}
          <div>
            <Image
              src="https://www.cnom.org.ma/sites/default/files/inline-images/WhatsApp%20Image%202018-12-19%20at%2021.27.57.jpeg"
              alt="Features illustration"
              width={500}
              height={400}
              className="max-w-full h-auto rounded-lg"
            />
          </div>

          {/* Liste des fonctionnalités */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="mb-2">{feature.description}</p>
                <Link href={feature.link} className="inline-flex items-center text-primary font-medium hover:underline">
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}