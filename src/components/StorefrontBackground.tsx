"use client"

import { motion } from "framer-motion";

export default function StorefrontBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Enhanced Art Deco Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {/* Layered Art Deco Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(207,181,59,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(200,121,65,0.04)_40px,rgba(200,121,65,0.04)_80px)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_40px,rgba(207,181,59,0.03)_40px,rgba(207,181,59,0.03)_80px)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,11,10,0.9)_0%,rgba(13,11,10,0.7)_50%,rgba(13,11,10,0.9)_100%)]" />
      </motion.div>

      {/* Main Building Structure */}
      <div className="relative w-full max-w-7xl h-[90vh] mx-8">
        {/* Enhanced Art Deco Crown Molding */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-40 inset-x-0 h-48"
        >
          {/* Zigzag Crown Pattern */}
          <div className="absolute inset-x-0 top-0 h-24">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(60deg,transparent,transparent_30px,rgba(200,121,65,0.15)_30px,rgba(200,121,65,0.15)_60px)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent,transparent_30px,rgba(207,181,59,0.15)_30px,rgba(207,181,59,0.15)_60px)]" />
          </div>
          
          {/* Central Medallion */}
          <div className="absolute left-1/2 -translate-x-1/2 top-12 w-96 h-36">
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-2 border-vintage-gold/30" />
              <div className="absolute inset-4 border border-vintage-copper/20" />
              <div className="absolute inset-8 bg-[radial-gradient(circle_at_50%_50%,rgba(207,181,59,0.2),transparent_70%)]" />
            </div>
          </div>
        </motion.div>

        {/* Symmetrical Art Deco Columns */}
        {['-left', '-right'].map((side) => (
          <motion.div
            key={side}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className={`absolute inset-y-0 ${side}-24 w-20 flex flex-col`}
          >
            {/* Column Capital */}
            <div className="h-32 w-full">
              <div className="h-full w-full relative">
                {/* Layered Capital Details */}
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-gold/30 to-vintage-copper/20">
                  <div className="absolute inset-2 border border-vintage-gold/30" />
                  <div className="absolute inset-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(207,181,59,0.1)_8px,rgba(207,181,59,0.1)_16px)]" />
                </div>
                {/* Acanthus Leaf Details */}
                <div className="absolute inset-x-0 bottom-0 h-16">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(207,181,59,0.3),transparent_70%)]" />
                </div>
              </div>
            </div>

            {/* Column Shaft with Enhanced Fluting */}
            <div className="flex-1 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/20 via-vintage-copper/15 to-vintage-copper/20" />
              
              {/* Vertical Fluting Animation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(207,181,59,0.1),rgba(207,181,59,0.1)_2px,transparent_2px,transparent_20px)]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(200,121,65,0.07)_10px,rgba(200,121,65,0.07)_20px)]" />
              </motion.div>

              {/* Decorative Column Bands */}
              {['top', 'center', 'bottom'].map((position) => (
                <div key={position} className={`absolute inset-x-0 ${position === 'center' ? 'top-1/2 -translate-y-1/2 h-20' : position === 'top' ? 'top-1/4 h-12' : 'bottom-1/4 h-12'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-vintage-copper/30 via-vintage-gold/20 to-vintage-copper/30">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(207,181,59,0.1)_12px,rgba(207,181,59,0.1)_24px)]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Column Base */}
            <div className="h-40 w-full">
              <div className="h-2/3 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/30 to-vintage-copper/20">
                  <div className="absolute inset-2 border border-vintage-gold/20" />
                  <div className="absolute inset-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(207,181,59,0.1)_8px,rgba(207,181,59,0.1)_16px)]" />
                </div>
              </div>
              <div className="h-1/3 w-full bg-gradient-to-b from-vintage-darker to-vintage-dark relative">
                <div className="absolute inset-x-0 top-0 h-2 bg-vintage-gold/20" />
                <div className="absolute inset-x-2 bottom-0 h-1 bg-vintage-copper/30" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Main Facade with Curved Windows */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-vintage-darker via-vintage-dark to-transparent"
        >
          {/* Window Section */}
          <div className="absolute inset-x-16 top-32 bottom-40 grid grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.2 }}
                className="relative group"
              >
                {/* Curved Window Frame */}
                <div className="absolute -inset-4">
                  <div className="absolute inset-0 rounded-t-[120px] border-2 border-vintage-copper/30" />
                  <div className="absolute inset-2 rounded-t-[110px] border border-vintage-gold/20" />
                </div>
                
                {/* Window Glass Effect */}
                <div className="absolute inset-0 rounded-t-[100px] bg-gradient-to-b from-vintage-cream/5 to-transparent">
                  <div className="absolute inset-0 rounded-t-[100px] bg-[radial-gradient(circle_at_50%_0%,rgba(207,181,59,0.1),transparent_70%)]" />
                </div>

                {/* Art Deco Window Details */}
                <div className="absolute inset-x-0 top-0 h-1/3 rounded-t-[100px] overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(60deg,transparent,transparent_20px,rgba(200,121,65,0.1)_20px,rgba(200,121,65,0.1)_40px)]" />
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent,transparent_20px,rgba(207,181,59,0.1)_20px,rgba(207,181,59,0.1)_40px)]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Art Deco Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute left-1/2 bottom-0 w-72 h-[50vh] -ml-36"
          >
            {/* Door Frame with Detailed Ornamentation */}
            <div className="absolute -inset-8">
              <div className="absolute inset-0 border-2 border-vintage-copper/40 rounded-t-[60px]" />
              <div className="absolute inset-2 border border-vintage-gold/20 rounded-t-[55px]" />
              
              {/* Art Deco Door Header */}
              <div className="absolute inset-x-4 top-4 h-16">
                <div className="absolute inset-0 bg-vintage-gold/20 rounded-t-[50px]" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(200,121,65,0.2)_10px,rgba(200,121,65,0.2)_20px)]" />
              </div>
            </div>

            {/* Double Door Design */}
            <div className="absolute inset-0 bg-vintage-darker/90 rounded-t-[50px] flex">
              {[0, 1].map((door) => (
                <div key={door} className="flex-1 p-4">
                  <div className="h-full border border-vintage-copper/30 rounded-t-[40px]">
                    <div className="absolute inset-6 grid grid-rows-3 gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="relative rounded-lg">
                          <div className="absolute inset-0 border border-vintage-copper/30" />
                          <div className="absolute inset-2 border border-vintage-gold/20" />
                          {i === 1 && (
                            <div className="absolute inset-4 bg-vintage-gold/5 rounded-lg" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Art Deco Door Handles */}
            {['-right-6', '-left-6'].map((position) => (
              <div key={position} className={`absolute ${position} top-1/2 w-8 h-20 -mt-10`}>
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/40 to-vintage-copper/20 rounded-full">
                  <div className="absolute inset-1 bg-gradient-to-r from-vintage-gold/20 to-transparent rounded-full" />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}