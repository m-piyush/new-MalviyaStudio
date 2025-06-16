'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navLinksLeft = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const navLinksRight = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#F9F8F7] shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm uppercase tracking-widest font-light text-gray-800">
        {/* Left nav */}
        <div className="flex gap-2">
          {navLinksLeft.map((link) => (
            <Link key={link.name} href={link.path} className="hover:text-black">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo center */}
        <div className="text-center leading-tight">
          <div className="text-xl font-[500] font-cursive italic">Tessa Morgan</div>
          <div className="text-[10px] tracking-wider text-gray-500">PHOTOGRAPHY</div>
        </div>

        {/* Right nav */}
        <div className="flex gap-2">
          {navLinksRight.map((link) => (
            <Link key={link.name} href={link.path} className="hover:text-black">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
