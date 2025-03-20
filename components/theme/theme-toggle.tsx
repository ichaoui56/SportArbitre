"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light"
    setIsDark(currentTheme === "dark")
    document.documentElement.classList.toggle("dark", currentTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", newTheme)
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