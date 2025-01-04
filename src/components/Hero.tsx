"use client"

import { motion } from "framer-motion";
import StorefrontBackground from "./StorefrontBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <StorefrontBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-6xl mx-auto"
        >
          <h1 className="relative mb-6">
            <span className="block text-[10rem] font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-vintage-gold via-vintage-copper to-vintage-gold animate-shimmer">
              BROOKLYN
            </span>
            <span className="block text-5xl font-cinzel text-vintage-copper tracking-[0.5em] mt-2">
              VINTAGE COMPANY
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-8 mt-12 text-vintage-copper/80"
          >
            {['FURN', 'VINYL', 'CLOTHING', 'JEWELRY', 'LIGHTING', 'ART'].map((category) => (
              <div key={category} className="relative group">
                <span className="text-sm tracking-[0.3em] font-tenor group-hover:text-vintage-gold transition-colors duration-500">
                  {category}
                </span>
                <div className="absolute -inset-x-2 -inset-y-1 border border-vintage-copper/20 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
