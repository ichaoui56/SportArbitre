"use client"

import type React from "react"
import type { ContactFormData } from "@/store/contact-store"

interface ContactFormProps {
  formData: ContactFormData
  setFormData: (data: ContactFormData) => void
  isSubmitting: boolean
  isSubmitted: boolean
  handleSubmit: (e: React.FormEvent) => void
}

export default function ContactForm({
  formData,
  setFormData,
  isSubmitting,
  isSubmitted,
  handleSubmit,
}: ContactFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="card hover:shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom..."
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre email..."
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Entrez votre message..."
              rows={5}
              className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
            >
              {isSubmitting ? "Envoi en cours..." : isSubmitted ? "Message envoyé !" : "Envoyer le message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

