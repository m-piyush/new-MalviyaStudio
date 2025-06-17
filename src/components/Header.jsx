'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinksLeft = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const navLinksRight = [
    { name: 'Portfolio', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const allLinks = [...navLinksLeft, ...navLinksRight];

  return (
    <header className="bg-red-200/30 shadow-sm top-0 z-50 border-b border-red-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between w-full text-sm uppercase tracking-widest font-light text-gray-800">
          {/* Left nav */}
          <div className="flex gap-4">
            {navLinksLeft.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-black">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo center */}
          <div className="text-center leading-tight">
            <div className="text-xl font-[500] font-cursive italic">Malviya Studio</div>
            <div className="text-[10px] tracking-wider text-gray-500">PHOTOGRAPHY</div>
          </div>

          {/* Right nav */}
          <div className="flex gap-4">
            {navLinksRight.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-black">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="text-xl font-[500] font-cursive italic">Malviya Studio</div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F8F7] px-6 pb-4 text-sm uppercase tracking-widest font-light text-gray-800 space-y-3">
          {allLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
