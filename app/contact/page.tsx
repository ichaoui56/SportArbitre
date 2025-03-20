"use client"

import type React from "react"

import { useState } from "react"
import ContactBanner from "@/components/contact/contact-banner"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import { useContactStore } from "@/store/contact-store"

export default function ContactPage() {
  const { formData, setFormData, submitForm } = useContactStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      submitForm()
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="min-h-screen">
      <ContactBanner />
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
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

