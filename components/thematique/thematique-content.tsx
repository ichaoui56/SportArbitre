import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ThematiqueContent() {
  const thematiques = [
    {
      title: "Règlement des Conflits Sportifs",
      description: "La chambre arbitrale du sport règle les conflits et litiges à caractère sportif.",
      image: "https://www.cnom.org.ma/sites/default/files/inline-images/50641911_2174771182841446_8814253569864630272_n.jpg",
      points: [
        "Structure juridictionnelle indépendante",
        "Règlement des litiges sportifs",
        "Mise en œuvre des décisions exécutoires",
      ],
    },
    {
      title: "Compétence et Procédure",
      description: "Compétente pour se prononcer sur les différends sportifs.",
      image: "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/08/17/2017-08-17-Schooling-rio2016-inside-06.jpg?interpolation=lanczos-none&resize=2120:*",
      points: [
        "Clause compromissoire",
        "Compromis conclu entre parties",
        "Exclusion des litiges de dopage",
      ],
    },
    {
      title: "Cadre Légal",
      description: "Basée sur l'article 44 du Dahir n° 1-10-150.",
      image: "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/08/17/2017-08-17-Schooling-rio2016-inside-05.jpg?interpolation=lanczos-none&resize=2120:*",
      points: [
        "Création au sein du CNOM",
        "Règles de procédure réglementaires",
        "Opposabilité des décisions",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        {thematiques.map((thematique, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index !== thematiques.length - 1 ? "mb-24" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <h2 className="text-3xl font-bold mb-4">{thematique.title}</h2>
              <p className="text-muted-foreground mb-6">{thematique.description}</p>
              <ul className="space-y-3 mb-6">
                {thematique.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="card hover:shadow-lg transition-all duration-300">
                <Image
                  src={thematique.image || "/placeholder.svg"}
                  alt={thematique.title}
                  width={400}
                  height={300}
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

