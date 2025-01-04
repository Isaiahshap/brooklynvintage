"use client"

import { motion } from "framer-motion";

export default function StorefrontBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Animated Art Deco Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(207,181,59,0.03),transparent_70%)]" />
      </motion.div>

      {/* Main Building Structure */}
      <div className="relative w-full max-w-7xl h-[90vh] mx-8">
        {/* Decorative Top Crown - Enhanced */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -top-32 inset-x-0 h-40"
        >
          {/* Stepped Geometric Crown */}
          <div className="absolute inset-x-0 top-0 h-40 overflow-hidden">
            <div className="absolute inset-0">
              {/* Layered Steps */}
              <div className="absolute inset-x-0 top-0 h-8 bg-vintage-darker/90">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(207,181,59,0.1),rgba(200,121,65,0.15))]" />
              </div>
              <div className="absolute inset-x-8 top-8 h-8 bg-vintage-darker/90">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(207,181,59,0.15),rgba(200,121,65,0.2))]" />
              </div>
              <div className="absolute inset-x-16 top-16 h-8 bg-vintage-darker/90">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(207,181,59,0.2),rgba(200,121,65,0.25))]" />
              </div>
            </div>
          </div>
          
          {/* Central Ornament - Geometric Medallion */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-96 h-32">
            <div className="absolute inset-0 bg-vintage-darker/90">
              {/* Concentric Rectangles */}
              <div className="absolute inset-8 border-2 border-vintage-gold/30" />
              <div className="absolute inset-12 border border-vintage-copper/20" />
              <div className="absolute inset-16 bg-[radial-gradient(circle_at_50%_50%,rgba(207,181,59,0.2),transparent_70%)]" />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Art Deco Column - Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute inset-y-0 -left-24 w-24 flex flex-col"
        >
          {/* Ornate Capital */}
          <div className="h-32 w-full">
            <div className="h-full w-full bg-gradient-to-b from-vintage-copper/50 to-vintage-copper/40 relative">
              {/* Acanthus Leaf Details */}
              <div className="absolute inset-0">
                <div className="absolute inset-2 border-2 border-vintage-gold/30" />
                <div className="absolute inset-4 bg-[repeating-radial-gradient(circle_at_center,transparent_0,transparent_8px,rgba(207,181,59,0.15)_8px,rgba(207,181,59,0.15)_16px)]" />
              </div>
              {/* Floral Ornaments */}
              <div className="absolute inset-x-0 bottom-0 h-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(207,181,59,0.3),transparent_70%)]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(200,121,65,0.2)_10px,rgba(200,121,65,0.2)_20px)]" />
              </div>
            </div>
          </div>

          {/* Luxurious Column Shaft with Fluting */}
          <div className="flex-1 w-full relative overflow-hidden">
            {/* Rich Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/40 via-vintage-copper/30 to-vintage-copper/40" />
            
            {/* Vertical Fluting Pattern */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 flex"
            >
              {[...Array(8)].map((_, index) => (
                <div key={index} className="flex-1 border-r border-vintage-gold/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-vintage-gold/5 via-transparent to-vintage-gold/5" />
                </div>
              ))}
            </motion.div>

            {/* Decorative Bands with Enhanced Patterns */}
            <div className="absolute inset-0">
              {/* Top Ornamental Band */}
              <div className="absolute inset-x-0 top-1/4 h-12">
                <div className="absolute inset-0 bg-vintage-gold/20">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(200,121,65,0.2)_8px,rgba(200,121,65,0.2)_16px)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,181,59,0.3),transparent_70%)]" />
                </div>
              </div>
              
              {/* Center Medallion */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24">
                <div className="absolute inset-0 bg-gradient-to-r from-vintage-copper/30 via-vintage-gold/25 to-vintage-copper/30">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,rgba(207,181,59,0.2)_12px,rgba(207,181,59,0.2)_24px)]" />
                  <div className="absolute inset-4 border border-vintage-gold/30" />
                </div>
              </div>

              {/* Bottom Ornamental Band */}
              <div className="absolute inset-x-0 bottom-1/4 h-12">
                <div className="absolute inset-0 bg-vintage-gold/20">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(200,121,65,0.2)_8px,rgba(200,121,65,0.2)_16px)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,181,59,0.3),transparent_70%)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Column Base */}
          <div className="h-36 w-full">
            <div className="h-2/3 w-full bg-gradient-to-b from-vintage-copper/50 to-vintage-copper/40 relative">
              {/* Base Ornamentation */}
              <div className="absolute inset-0">
                <div className="absolute inset-2 border-2 border-vintage-gold/30" />
                <div className="absolute inset-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(207,181,59,0.15)_8px,rgba(207,181,59,0.15)_16px)]" />
              </div>
            </div>
            <div className="h-1/3 w-full bg-gradient-to-b from-vintage-darker to-vintage-dark relative">
              <div className="absolute inset-x-0 top-0 h-3 bg-vintage-gold/30" />
              <div className="absolute inset-x-2 bottom-0 h-2 bg-vintage-copper/40" />
            </div>
          </div>
        </motion.div>

        {/* Mirror the enhanced column for the right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute inset-y-0 -right-24 w-24 flex flex-col"
        >
          {/* Ornate Capital */}
          <div className="h-32 w-full">
            <div className="h-full w-full bg-gradient-to-b from-vintage-copper/50 to-vintage-copper/40 relative">
              {/* Acanthus Leaf Details */}
              <div className="absolute inset-0">
                <div className="absolute inset-2 border-2 border-vintage-gold/30" />
                <div className="absolute inset-4 bg-[repeating-radial-gradient(circle_at_center,transparent_0,transparent_8px,rgba(207,181,59,0.15)_8px,rgba(207,181,59,0.15)_16px)]" />
              </div>
              {/* Floral Ornaments */}
              <div className="absolute inset-x-0 bottom-0 h-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(207,181,59,0.3),transparent_70%)]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(200,121,65,0.2)_10px,rgba(200,121,65,0.2)_20px)]" />
              </div>
            </div>
          </div>

          {/* Luxurious Column Shaft with Fluting */}
          <div className="flex-1 w-full relative overflow-hidden">
            {/* Rich Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/40 via-vintage-copper/30 to-vintage-copper/40" />
            
            {/* Vertical Fluting Pattern */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 flex"
            >
              {[...Array(8)].map((_, index) => (
                <div key={index} className="flex-1 border-r border-vintage-gold/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-vintage-gold/5 via-transparent to-vintage-gold/5" />
                </div>
              ))}
            </motion.div>

            {/* Decorative Bands with Enhanced Patterns */}
            <div className="absolute inset-0">
              {/* Top Ornamental Band */}
              <div className="absolute inset-x-0 top-1/4 h-12">
                <div className="absolute inset-0 bg-vintage-gold/20">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(200,121,65,0.2)_8px,rgba(200,121,65,0.2)_16px)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,181,59,0.3),transparent_70%)]" />
                </div>
              </div>
              
              {/* Center Medallion */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24">
                <div className="absolute inset-0 bg-gradient-to-r from-vintage-copper/30 via-vintage-gold/25 to-vintage-copper/30">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,rgba(207,181,59,0.2)_12px,rgba(207,181,59,0.2)_24px)]" />
                  <div className="absolute inset-4 border border-vintage-gold/30" />
                </div>
              </div>

              {/* Bottom Ornamental Band */}
              <div className="absolute inset-x-0 bottom-1/4 h-12">
                <div className="absolute inset-0 bg-vintage-gold/20">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(200,121,65,0.2)_8px,rgba(200,121,65,0.2)_16px)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,181,59,0.3),transparent_70%)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Column Base */}
          <div className="h-36 w-full">
            <div className="h-2/3 w-full bg-gradient-to-b from-vintage-copper/50 to-vintage-copper/40 relative">
              {/* Base Ornamentation */}
              <div className="absolute inset-0">
                <div className="absolute inset-2 border-2 border-vintage-gold/30" />
                <div className="absolute inset-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(207,181,59,0.15)_8px,rgba(207,181,59,0.15)_16px)]" />
              </div>
            </div>
            <div className="h-1/3 w-full bg-gradient-to-b from-vintage-darker to-vintage-dark relative">
              <div className="absolute inset-x-0 top-0 h-3 bg-vintage-gold/30" />
              <div className="absolute inset-x-2 bottom-0 h-2 bg-vintage-copper/40" />
            </div>
          </div>
        </motion.div>

        {/* Main Facade with Enhanced Details */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-vintage-darker via-vintage-dark to-transparent"
        >
          {/* Enhanced Ornate Top Border */}
          <div className="absolute inset-x-0 top-0 h-24">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(200,121,65,0.2),transparent)]" />
            <div className="absolute inset-0 flex justify-center items-center">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="w-full h-px bg-gradient-to-r from-transparent via-vintage-copper to-transparent"
              />
              {/* Geometric Art Deco Patterns */}
              <div className="absolute inset-0 flex justify-center space-x-32">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 45 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="w-40 h-40 border border-vintage-gold/10 transform -translate-y-1/2"
                />
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 45 }}
                  transition={{ duration: 1.2, delay: 1 }}
                  className="w-40 h-40 border border-vintage-copper/10 transform -translate-y-1/2"
                />
              </div>
            </div>
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
                {/* Window Frame with Stepped Details */}
                <div className="absolute -inset-4">
                  <div className="absolute inset-0 border-2 border-vintage-copper/30" />
                  <div className="absolute inset-2 border border-vintage-gold/20" />
                  <div className="absolute inset-6 border border-vintage-copper/15" />
                </div>
                
                {/* Window Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-cream/5 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(207,181,59,0.1),transparent_70%)]" />
                </div>

                {/* Geometric Window Divisions */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                  {[...Array(9)].map((_, index) => (
                    <div key={index} className="border border-vintage-copper/10" />
                  ))}
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