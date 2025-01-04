"use client"

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const curatedPieces = [
  {
    name: 'Art Deco Vanity Mirror',
    era: '1920s',
    price: '$2,850',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed',
    size: 'tall' // tall, wide, or standard
  },
  {
    name: 'Victorian Brass Chandelier',
    era: '1880s',
    price: '$4,200',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f',
    size: 'standard'
  },
  {
    name: 'French Provincial Armoire',
    era: '1890s',
    price: '$6,800',
    image: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec',
    size: 'wide'
  },
  {
    name: 'Edwardian Writing Desk',
    era: '1910s',
    price: '$3,900',
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9eb4b19',
    size: 'standard'
  },
  // Add more items as needed
];

const categories = [
  {
    name: 'Fine Furniture',
    description: 'Exceptional pieces from the Georgian to Art Deco periods',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
    era: '1714-1940'
  },
  {
    name: 'Decorative Arts',
    description: 'Rare objets d\'art and ornamental pieces',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    era: '1800-1939'
  },
  {
    name: 'Lighting',
    description: 'Distinguished illumination from notable periods',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f',
    era: '1850-1935'
  }
];

export default function Home() {
  const [hoveredPiece, setHoveredPiece] = useState<string | null>(null);
  
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <main className="bg-vintage-darker min-h-screen relative">
      {/* Artistic background pattern */}
      <div className="fixed inset-0 bg-vintage-pattern opacity-[0.02] pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-radial from-vintage-darker via-transparent to-vintage-darker opacity-40 pointer-events-none" />
      
      <Navbar />
      <Hero />
      
      {/* Curated Collection Section */}
      <section className="relative py-40 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-vintage-pattern opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-vintage-darker via-transparent to-vintage-darker" />
        </motion.div>

        <div className="max-w-[2000px] mx-auto">
          <div className="mb-32 text-center relative">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-vintage-copper/80 tracking-[0.8em] text-xs font-tenor"
            >
              ESTABLISHED 1985
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-6xl font-cinzel text-vintage-cream relative inline-block"
            >
              Curated Collection
              <div className="absolute -inset-x-10 -inset-y-6 border border-vintage-copper/20 scale-90 opacity-0 hover:opacity-100 hover:scale-100 transition-all duration-700" />
            </motion.h2>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-vintage-copper/40 to-transparent"
            />
          </div>

          <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-12 w-auto"
            columnClassName="pl-12 bg-clip-padding"
          >
            {curatedPieces.map((piece, index) => (
              <motion.div
                key={piece.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                onHoverStart={() => setHoveredPiece(piece.name)}
                onHoverEnd={() => setHoveredPiece(null)}
                className="mb-12 group cursor-pointer relative"
              >
                <div className="relative overflow-hidden">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 border border-vintage-copper/30 rotate-1" />
                    <div className="absolute inset-0 border border-vintage-gold/20 -rotate-1" />
                  </div>

                  <div className={`relative ${
                    piece.size === 'tall' ? 'h-[90vh]' :
                    piece.size === 'wide' ? 'h-[50vh]' : 'h-[70vh]'
                  }`}>
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vintage-darker via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <motion.div 
                    animate={{ 
                      opacity: hoveredPiece === piece.name ? 1 : 0.7,
                      scale: hoveredPiece === piece.name ? 1.05 : 1
                    }}
                    className="absolute top-6 right-6 bg-vintage-darker/90 px-6 py-3 backdrop-blur-sm"
                  >
                    <span className="text-xs tracking-widest text-vintage-copper">{piece.era}</span>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: hoveredPiece === piece.name ? 0 : '100%' }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <div className="bg-vintage-darker/95 p-8 backdrop-blur-md">
                      <h3 className="font-cinzel text-2xl text-vintage-cream mb-3">{piece.name}</h3>
                      <p className="font-tenor text-vintage-copper text-lg">{piece.price}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-32 bg-vintage-dark">
        <div className="absolute inset-0 bg-vintage-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[28rem] mb-6 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-darker via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-vintage-darker/90 px-4 py-2">
                    <span className="text-xs tracking-widest text-vintage-copper">{category.era}</span>
                  </div>
                </div>
                
                <div className="relative">
                  <h3 className="text-2xl font-cinzel text-vintage-copper mb-3">{category.name}</h3>
                  <p className="text-vintage-cream/70 font-tenor tracking-wide text-sm">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-vintage-copper/80 text-sm tracking-widest group-hover:text-vintage-copper transition-colors duration-300">
                    VIEW COLLECTION
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
