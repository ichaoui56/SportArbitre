"use client"

import { useEffect, useState } from "react"

/**
 * Composant `ThemeToggle` :
 * Ce composant permet de basculer entre les thèmes sombre et clair. Il utilise `localStorage` pour sauvegarder la préférence de l'utilisateur.
 */
export default function ThemeToggle({ onThemeChange }: { onThemeChange: (isDark: boolean) => void }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light"
    setIsDark(currentTheme === "dark")
    document.documentElement.classList.toggle("dark", currentTheme === "dark")
    onThemeChange(currentTheme === "dark")
  }, [onThemeChange])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", newTheme)
    onThemeChange(!isDark)
  }

  return (
    <div className="toggle-button-cover">
      <div className="button r" id="button-3">
        <input
          type="checkbox"
          className="checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  )
}