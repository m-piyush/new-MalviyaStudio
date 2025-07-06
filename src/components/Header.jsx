"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinksLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ]

  const navLinksRight = [
    { name: "Portfolio", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  const allLinks = [...navLinksLeft, ...navLinksRight]

  const isActiveLink = (path) => {
    if (path === "/") return pathname === "/"
    return pathname === path || pathname.startsWith(path + "/")
  }

  return (
    <header className={`fixed top-0 z-50 w-full shadow-sm transition-colors duration-300 ${isScrolled ? "bg-[#ff004a]" : "backdrop-invert backdrop-opacity-10"}`}>
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
          <div className="flex gap-4">
            {navLinksRight.map((link) => {
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
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="text-xl text-[#fff] font-[500] font-cursive italic">
            <Link href="/">Malviya Studio</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 focus:outline-none">
            {/* Hamburger Icon */}
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F8F7] px-6 py-4 text-sm uppercase tracking-widest font-light text-gray-800 space-y-3">
          {allLinks.map((link) => {
            const isActive = isActiveLink(link.path)
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`block transition-colors duration-200 ${isActive
                  ? "text-[#ff004a] font-bold border-l-4 border-[#ff004a] pl-2"
                  : "text-gray-800 hover:text-black"
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
