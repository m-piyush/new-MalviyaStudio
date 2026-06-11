"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Scroll detection for dynamic background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinksLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    // { name: "Films", path: "/films" },
  ]

  const navLinksRight = [
    { name: "Portfolio", path: "/gallery" },
    { name: "Album", path: "/album" },
    { name: "Contact", path: "/contact" },
  ]

  const allLinks = [...navLinksLeft, ...navLinksRight]

  const isActiveLink = (path) => {
    if (path === "/") return pathname === "/"
    return pathname === path || pathname.startsWith(path + "/")
  }

  // Routes that should have solid red background
  const solidRedRoutes = ["/contact", "/gallery", "/album"]

  const isSolidRedBg = solidRedRoutes.some(route => pathname.startsWith(route))

  // Solid brand bar on dedicated routes or after scrolling; otherwise a
  // transparent gradient scrim so light nav text stays legible over a hero.
  const isSolid = isSolidRedBg || isScrolled
  const headerBgClass = isSolid
    ? "bg-brand/90 backdrop-blur-md shadow-md border-b border-white/10"
    : "bg-gradient-to-b from-black/55 via-black/25 to-transparent"

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between w-full text-sm uppercase tracking-widest font-light text-gray-100">
          {/* Left nav */}
          <div className="flex gap-4">
            {navLinksLeft.map((link) => {
              const isActive = isActiveLink(link.path)
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-bold transition-colors duration-200 ${isActive ? "text-white border-b-2 border-white pb-1" : "text-gray-100 hover:text-gray-400"}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Logo center */}
          <div className="text-center leading-tight">
            <Link href="/" className="block">
              <div className="text-xl font-[500] font-cursive italic hover:text-gray-400">Malviya Studio</div>
              <div className="text-[10px] tracking-wider text-gray-100 hover:text-gray-400">PHOTOGRAPHY</div>
            </Link>
          </div>

          {/* Right nav */}
          <div className="flex items-center gap-4">
            {navLinksRight.map((link) => {
              const isActive = isActiveLink(link.path)
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-bold transition-colors duration-200 ${isActive ? "text-white border-b-2 border-white pb-1" : "text-gray-100 hover:text-gray-400"}`}>
                  {link.name}
                </Link>
              )
            })}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="text-xl text-[#fff] font-[500] font-cursive italic">
            <Link href="/">Malviya Studio</Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md p-1"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-card/95 text-card-foreground backdrop-blur-md px-6 py-4 text-sm uppercase tracking-widest font-light space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {allLinks.map((link) => {
            const isActive = isActiveLink(link.path)
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`block transition-colors duration-200 ${isActive
                  ? "text-brand font-bold border-l-4 border-brand pl-2"
                  : "text-foreground hover:text-muted-foreground"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
