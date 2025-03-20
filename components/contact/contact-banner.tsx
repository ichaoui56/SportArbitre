import Image from "next/image"

export default function ContactBanner() {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 md:text-5xl">Contactez-nous</h1>
            <p className="text-muted-foreground text-lg">
              Nous sommes là pour répondre à toutes vos questions et vous aider dans votre parcours de développement.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://www.cnom.org.ma/sites/default/files/default_images/presidence-cnom.jpg"
              alt="Contact illustration"
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

