"use client"

import { motion } from "framer-motion";

export default function StorefrontBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Art Deco Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-vintage-pattern opacity-[0.15]"
      />

      {/* Main Building Structure */}
      <div className="relative w-full max-w-7xl h-[90vh] mx-8">
        {/* Art Deco Columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute inset-y-0 -left-24 w-20 flex flex-col"
        >
          {/* Column Capital */}
          <div className="h-16 w-full">
            <div className="h-full w-full bg-vintage-copper/40 rounded-t-sm">
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-vintage-gold/30" />
            </div>
          </div>
          
          {/* Column Shaft */}
          <div className="flex-1 w-full bg-gradient-to-b from-vintage-copper/30 to-vintage-copper/20 relative">
            {/* Vertical Fluting */}
            <div className="absolute inset-0">
              <div className="absolute inset-x-4 inset-y-0 bg-[repeating-linear-gradient(180deg,var(--vintage-gold),var(--vintage-gold)_1px,transparent_1px,transparent_20px)] opacity-20" />
            </div>
            
            {/* Center Band */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <div className="h-12 w-full bg-vintage-gold/20">
                <div className="h-full w-full bg-gradient-to-r from-vintage-copper/40 via-transparent to-vintage-copper/40" />
              </div>
            </div>
          </div>
          
          {/* Column Base */}
          <div className="h-20 w-full">
            <div className="h-2/3 w-full bg-vintage-copper/40">
              <div className="absolute inset-x-0 top-0 h-4 bg-vintage-gold/20" />
            </div>
            <div className="h-1/3 w-full bg-vintage-darker">
              <div className="absolute inset-x-2 bottom-0 h-2 bg-vintage-copper/30" />
            </div>
          </div>
        </motion.div>

        {/* Mirror for right column with reversed gradients */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute inset-y-0 -right-24 w-20 flex flex-col"
        >
          {/* Same structure as left column but with reversed gradients */}
          <div className="h-16 w-full">
            <div className="h-full w-full bg-vintage-copper/40 rounded-t-sm">
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-vintage-gold/30" />
            </div>
          </div>
          
          <div className="flex-1 w-full bg-gradient-to-b from-vintage-copper/30 to-vintage-copper/20 relative">
            <div className="absolute inset-0">
              <div className="absolute inset-x-4 inset-y-0 bg-[repeating-linear-gradient(180deg,var(--vintage-gold),var(--vintage-gold)_1px,transparent_1px,transparent_20px)] opacity-20" />
            </div>
            
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <div className="h-12 w-full bg-vintage-gold/20">
                <div className="h-full w-full bg-gradient-to-r from-vintage-copper/40 via-transparent to-vintage-copper/40" />
              </div>
            </div>
          </div>
          
          <div className="h-20 w-full">
            <div className="h-2/3 w-full bg-vintage-copper/40">
              <div className="absolute inset-x-0 top-0 h-4 bg-vintage-gold/20" />
            </div>
            <div className="h-1/3 w-full bg-vintage-darker">
              <div className="absolute inset-x-2 bottom-0 h-2 bg-vintage-copper/30" />
            </div>
          </div>
        </motion.div>

        {/* Decorative Top Crown */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -top-24 inset-x-0"
        >
          <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-vintage-copper/30 to-transparent" />
          <div className="absolute inset-0 flex justify-center space-x-24">
            <div className="w-32 h-24 bg-vintage-gold/20 transform skew-x-12" />
            <div className="w-64 h-24 bg-vintage-copper/30" />
            <div className="w-32 h-24 bg-vintage-gold/20 transform -skew-x-12" />
          </div>
        </motion.div>

        {/* Main Facade */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-vintage-darker via-vintage-dark to-transparent"
        >
          {/* Ornate Top Border */}
          <div className="absolute inset-x-0 top-0 h-16 flex justify-center items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-vintage-copper to-transparent" />
            <div className="absolute w-32 h-16 bg-vintage-gold/10 transform rotate-45" />
            <div className="absolute w-32 h-16 bg-vintage-gold/10 transform -rotate-45" />
          </div>

          {/* Display Windows */}
          <div className="absolute inset-x-16 top-32 bottom-40 grid grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                className="relative group"
              >
                {/* Window Frame */}
                <div className="absolute -inset-4 border-2 border-vintage-copper/30" />
                <div className="absolute -inset-3 border border-vintage-gold/20" />
                
                {/* Window Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-cream/5 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-vintage-gold/10 via-transparent to-transparent" />
                </div>

                {/* Art Deco Patterns */}
                <div className="absolute inset-x-0 top-0 h-1/4">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(60deg,transparent,transparent_20px,var(--vintage-copper)_20px,var(--vintage-copper)_21px)] opacity-10" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grand Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute left-1/2 bottom-0 w-64 h-[45vh] -ml-32 bg-transparent"
          >
            {/* Door Frame with Art Deco Details */}
            <div className="absolute -inset-6">
              <div className="absolute inset-0 border-2 border-vintage-copper/40" />
              <div className="absolute inset-x-0 top-0 h-12">
                <div className="absolute inset-0 bg-vintage-gold/20" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--vintage-copper)_10px,var(--vintage-copper)_11px)] opacity-20" />
              </div>
            </div>

            {/* Door */}
            <div className="absolute inset-0 bg-vintage-darker/80">
              <div className="absolute inset-4 grid grid-rows-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="absolute inset-0 border border-vintage-copper/30" />
                    <div className="absolute inset-2 border border-vintage-gold/20" />
                    {i === 1 && (
                      <div className="absolute inset-4 bg-vintage-gold/5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Door Handles */}
            <div className="absolute right-6 top-1/2 w-8 h-16 -mt-8">
              <div className="absolute inset-0 bg-vintage-copper/40" />
              <div className="absolute inset-1 bg-vintage-gold/20" />
            </div>
            <div className="absolute left-6 top-1/2 w-8 h-16 -mt-8">
              <div className="absolute inset-0 bg-vintage-copper/40" />
              <div className="absolute inset-1 bg-vintage-gold/20" />
            </div>
          </motion.div>
        </motion.div>

        {/* Base Foundation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute inset-x-0 bottom-0 h-20"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-vintage-copper/30" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-vintage-copper/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}