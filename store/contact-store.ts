import { create } from "zustand"

export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

interface ContactState {
  formData: ContactFormData
  setFormData: (data: ContactFormData) => void
  submitForm: () => void
  resetForm: () => void
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export const useContactStore = create<ContactState>((set) => ({
  formData: initialFormData,
  setFormData: (data) => set({ formData: data }),
  submitForm: () => {
    // In a real app, you would send the data to an API here
    console.log("Form submitted")
    set({ formData: initialFormData })
  },
  resetForm: () => set({ formData: initialFormData }),
}))

