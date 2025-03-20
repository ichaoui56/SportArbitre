import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import logo from "@/public/logo-s.png"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={200} height={200} className="mr-2" />
            </Link>
          </div>
            <p className="text-muted-foreground mb-6">
              Centre d'Admission des Stagiaires en développement Next.js. Nous offrons une plateforme pour tester et
              améliorer vos compétences.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Liens Utiles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/thematique" className="text-muted-foreground hover:text-primary transition-colors">
                  Thématique
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Réseaux Sociaux</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Centre d'Admission des Stagiaires. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

