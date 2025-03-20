import Image from "next/image"

export default function ThematiqueBanner() {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl">La Chambre Arbitrale du Sport</h1>
            <p className="text-muted-foreground text-lg">
              La chambre arbitrale du sport est une structure juridictionnelle indépendante du CNOM, visant à régler les conflits sportifs.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://www.cnom.org.ma/sites/default/files/inline-images/51174850_593903341035970_6445745823866159104_n.jpg"
              alt="Chambre Arbitrale du Sport"
              width={500}
              height={400}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

