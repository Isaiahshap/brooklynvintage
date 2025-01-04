"use client"

import { motion } from "framer-motion";
import StorefrontBackground from "./StorefrontBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Layers */}
      
      {/* Storefront Background */}
      <StorefrontBackground />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="relative mb-8">
            <span className="block text-[12rem] font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-vintage-gold via-vintage-copper to-vintage-gold animate-shimmer">
              BROOKLYN
            </span>
            <span className="block text-6xl font-cinzel text-vintage-copper tracking-[0.5em] mt-4">
              VINTAGE
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
