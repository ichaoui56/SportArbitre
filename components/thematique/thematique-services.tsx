import { Headphones, ShieldCheck, Calendar } from "lucide-react"
import Link from "next/link"

/**
 * Composant `ThematiqueServices` :
 * Ce composant affiche une liste de services offerts par la Chambre Arbitrale du Sport.
 * Chaque service est représenté par une icône, un titre, une description et un lien pour en savoir plus.
 */
export default function ThematiqueServices() {
    const services = [
        {
          icon: <Headphones className="h-12 w-12 text-cas-green" />,
          title: "Excellent Support",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
          link: "#",
        },
        {
          icon: <ShieldCheck className="h-12 w-12 text-cas-green" />,
          title: "Secure Service",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
          link: "#",
        },
        {
          icon: <Calendar className="h-12 w-12 text-cas-green" />,
          title: "Timely Deliverables",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
          link: "#",
        },
      ]
  
    return (
      <section id="services" className="py-16 bg-gradient-to-r from-muted/80 to-muted border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className=" max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-6 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-green-500 border-2 border-transparent cursor-pointer"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Link href={service.link} className="inline-block text-cas-green font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

