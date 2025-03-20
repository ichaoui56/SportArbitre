"use client"

import type React from "react"

import { useState } from "react"
import ContactBanner from "@/components/contact/contact-banner"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import { useContactStore } from "@/store/contact-store"

/**
 * Page de contact principale.
 * Cette page affiche une bannière, des informations de contact et un formulaire de contact.
 * Le formulaire est géré par un store (zustand) pour la gestion de l'état.
 */
export default function ContactPage() {
  // Utilisation du store pour gérer les données du formulaire
  const { formData, setFormData, submitForm } = useContactStore()

  // États pour gérer l'affichage pendant et après la soumission du formulaire
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  /**
   * Gère la soumission du formulaire.
   * - Empêche le rechargement de la page.
   * - Simule une soumission asynchrone.
   * - Réinitialise l'état de soumission après 3 secondes.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simule une soumission asynchrone (par exemple, une requête API)
    setTimeout(() => {
      submitForm() // Soumet les données du formulaire via le store
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Réinitialise l'état de soumission après 3 secondes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen">
      {/* Bannière de contact */}
      <ContactBanner />

      {/* Conteneur principal pour le formulaire et les informations de contact */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section des informations de contact */}
          <ContactInfo />

          {/* Formulaire de contact */}
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}