export default function PresentationSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="section-title">
          <h2>À propos de la Chambre Arbitrale du Sport</h2>
          <p>
            Une instance juridictionnelle indépendante dédiée au règlement des conflits sportifs, au sein du Comité National Olympique Marocain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6">
              La chambre arbitrale du sport a pour mission de trancher les litiges opposant les sportifs, clubs et fédérations, évitant ainsi le recours systématique aux tribunaux ordinaires.
            </p>
            <p className="text-muted-foreground">
              Conformément à l’article 44 de la loi n° 30-09 relative à l'éducation physique et aux sports, elle offre un arbitrage spécialisé dans le respect des réglementations en vigueur.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-center mb-2">Indépendance</h3>
              <p className="text-muted-foreground text-center text-sm">
                Une institution autonome garantissant un arbitrage impartial.
              </p>
            </div>
            <div className="card hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-center mb-2">Équité</h3>
              <p className="text-muted-foreground text-center text-sm">
                Assurer une justice équitable pour toutes les parties concernées.
              </p>
            </div>
            <div className="card hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-center mb-2">Légalité</h3>
              <p className="text-muted-foreground text-center text-sm">
                Fondée sur la législation marocaine et les normes internationales.
              </p>
            </div>
            <div className="card hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold text-center mb-2">Exécution</h3>
              <p className="text-muted-foreground text-center text-sm">
                Les décisions rendues sont exécutoires et opposables à toutes les parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
