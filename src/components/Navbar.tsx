"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-vintage-darker/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-vintage-texture opacity-[0.02]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-32">
          <Link href="/" className="group relative">
            <div className="absolute -inset-x-6 -inset-y-4 border border-vintage-copper/10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
            <span className="block text-3xl font-cinzel tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-vintage-gold via-vintage-copper to-vintage-gold">
              BROOKLYN
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
