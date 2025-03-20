"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import logo from "@/public/logo-s.png"
import logoDark from "@/public/logo-d.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export default function Footer() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLogo = mounted && (theme === "dark" || resolvedTheme === "dark") ? logoDark : logo

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Merci de vous être inscrit avec ${email}`)
    setEmail("")
  }

  return (
    <footer className="bg-gradient-to-r from-muted/80 to-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Logo CAS"
                width={180}
                height={180}
                className="transition-all duration-300 hover:scale-105"
              />
            </Link>
          </div>

          <div className="w-[300px] max-w-lg">
            <h3 className="text-lg font-semibold mb-3">Restez informé</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="max-w-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="default">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">À propos</h3>
            <p className="text-muted-foreground mb-4">
              Centre d'Admission des Stagiaires en développement Next.js. Nous offrons une plateforme pour tester et
              améliorer vos compétences.
            </p>
            <div className="flex space-x-4 mt-4">
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

          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/thematique"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Thématique
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/tutoriels"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/evenements"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Événements
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>123 Rue du Développement, 75000 Paris, France</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@cas-dev.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-border pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Centre d'Admission des Stagiaires. Tous droits réservés.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

