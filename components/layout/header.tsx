"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useNavStore } from "@/store/nav-store"
import Image from "next/image"
import logo from "@/public/logo-s.png"
import logoDark from "@/public/logo-d.png" 
import ThemeToggle from "../theme/theme-toggle"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMenuOpen, toggleMenu, closeMenu } = useNavStore()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Thématique", href: "/thematique" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`sticky top-0 z-50 mx-auto transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 w-full lg:w-1/2 rounded-b-xl mt-5 mx-auto backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-background w-full"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center mr-8">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image 
                src={isDark ? logoDark : logo} 
                alt="Logo" 
                width={isScrolled ? 150 : 200} 
                height={isScrolled ? 150 : 200} 
                className="mr-2 transition-all duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden ml-10 mt-2 md:flex">
            <ThemeToggle onThemeChange={setIsDark} /> 
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="ml-2 text-muted-foreground hover:text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-center mt-4">
                <ThemeToggle onThemeChange={setIsDark} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}