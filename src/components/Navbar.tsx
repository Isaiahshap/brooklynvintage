"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductsDropdown from './ProductsDropdown';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Products', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-vintage-darker/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-vintage-texture opacity-[0.02]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-32">
          <Link href="/" className="group relative">
            <div className="absolute -inset-x-6 -inset-y-4 border border-vintage-copper/10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
            <div className="flex flex-col items-center">
              <span className="block text-2xl font-cinzel tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-vintage-gold via-vintage-copper to-vintage-gold">
                BROOKLYN
              </span>
              <span className="text-sm font-tenor tracking-[0.5em] text-vintage-copper/80 mt-1">
                VINTAGE COMPANY
              </span>
            </div>
          </Link>

          {scrolled && (
            <div className="flex items-center space-x-12">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button className="text-sm tracking-[0.3em] text-vintage-copper/80 hover:text-vintage-gold transition-colors duration-300">
                      {item.name.toUpperCase()}
                    </button>
                  ) : (
                    <Link
                      href={item.href || ''}
                      className="text-sm tracking-[0.3em] text-vintage-copper/80 hover:text-vintage-gold transition-colors duration-300"
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  )}
                  
                  <motion.div
                    className="absolute -inset-x-6 -inset-y-4 border border-vintage-copper/10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
                  />
                  
                  {item.hasDropdown && (
                    <ProductsDropdown isOpen={activeDropdown === item.name} />
                  )}
                </div>
              ))}
              
              <Link
                href="/cart"
                className="relative group"
              >
                <div className="absolute -inset-x-6 -inset-y-4 border border-vintage-copper/10 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
                <span className="text-sm tracking-[0.3em] text-vintage-copper/80 hover:text-vintage-gold transition-colors duration-300">
                  CART (0)
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
