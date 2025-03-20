import { Check } from "lucide-react"

export default function AdvantagesSection() {
  const advantages = [
    {
      title: "Indépendance",
      description: "La chambre arbitrale du sport est une structure juridictionnelle indépendante du CNOM.",
    },
    {
      title: "Règlement des litiges",
      description: "Elle vise à régler les conflits sportifs sans recours aux tribunaux ordinaires.",
    },
    {
      title: "Cadre légal",
      description: "Conformément à la loi 30-09, elle assure un arbitrage spécialisé en matière sportive.",
    },
    {
      title: "Compétence",
      description: "Elle se prononce sur les différends liés aux activités sportives.",
    },
    {
      title: "Exécution des décisions",
      description: "Les décisions de la chambre arbitrale sont exécutoires et opposables aux parties concernées.",
    },
    {
      title: "Exclusion des affaires de dopage",
      description: "Les litiges impliquant le dopage restent du ressort des juridictions ordinaires.",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>Nos Avantages</h2>
          <p>Découvrez pourquoi la chambre arbitrale du sport est essentielle pour le règlement des litiges sportifs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className=" card p-6 border rounded-lg transition-all duration-300 hover:border-green-500 hover:shadow-md hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
