import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme/theme-provider"

// Configuration de la police Inter avec le sous-ensemble "latin"
const inter = Inter({ subsets: ["latin"] })

/**
 * Layout racine de l'application.
 * Ce composant englobe toute l'application et fournit :
 * - Un thème personnalisé via `ThemeProvider`.
 * - Un en-tête (`Header`) et un pied de page (`Footer`).
 * - Une structure de base pour le contenu principal (`children`).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Fournisseur de thème pour gérer le mode clair/sombre */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            {/* En-tête de la page */}
            <Header />

            {/* Contenu principal de la page */}
            <main className="flex-1">{children}</main>

            {/* Pied de page de la page */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}