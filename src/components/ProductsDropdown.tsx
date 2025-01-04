import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductsDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 right-0 z-50"
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Art Deco Border Top */}
      <div className="h-px bg-gradient-to-r from-transparent via-vintage-gold/30 to-transparent" />

      {/* Main Dropdown Content */}
      <div className="bg-vintage-darker/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Luxury Header */}
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-4xl text-vintage-gold mb-4">Our Collections</h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-vintage-copper/40 to-transparent" />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-3 gap-24">
            {/* Fine Furniture */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="font-cinzel text-2xl text-vintage-gold mb-3">Fine Furniture</h3>
                <p className="text-vintage-copper/70 tracking-wide">
                  Timeless pieces with distinguished heritage
                </p>
              </div>

              <div className="space-y-4">
                {['Armoires', 'Writing Desks', 'Vanities', 'Chaise Lounges'].map((item) => (
                  <Link 
                    href={`/products/furniture/${item.toLowerCase()}`}
                    key={item}
                    className="group/item flex items-center space-x-3 text-vintage-cream/60 hover:text-vintage-gold transition-colors duration-300"
                  >
                    <span className="block w-4 h-px bg-vintage-copper/30 group-hover/item:bg-vintage-gold group-hover/item:w-6 transition-all duration-300" />
                    <span className="text-sm tracking-wider">{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Vintage Vinyl */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="font-cinzel text-2xl text-vintage-gold mb-3">Vintage Vinyl</h3>
                <p className="text-vintage-copper/70 tracking-wide">
                  Rare pressings & collector editions
                </p>
              </div>

              <div className="space-y-4">
                {['Jazz', 'Classical', 'Blues', 'Early Rock'].map((item) => (
                  <Link 
                    href={`/products/vinyl/${item.toLowerCase()}`}
                    key={item}
                    className="group/item flex items-center space-x-3 text-vintage-cream/60 hover:text-vintage-gold transition-colors duration-300"
                  >
                    <span className="block w-4 h-px bg-vintage-copper/30 group-hover/item:bg-vintage-gold group-hover/item:w-6 transition-all duration-300" />
                    <span className="text-sm tracking-wider">{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Period Clothing */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-vintage-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="font-cinzel text-2xl text-vintage-gold mb-3">Period Clothing</h3>
                <p className="text-vintage-copper/70 tracking-wide">
                  Curated fashion through the decades
                </p>
              </div>

              <div className="space-y-4">
                {['1920s', '1930s', '1940s', '1950s'].map((item) => (
                  <Link 
                    href={`/products/clothing/${item.toLowerCase()}`}
                    key={item}
                    className="group/item flex items-center space-x-3 text-vintage-cream/60 hover:text-vintage-gold transition-colors duration-300"
                  >
                    <span className="block w-4 h-px bg-vintage-copper/30 group-hover/item:bg-vintage-gold group-hover/item:w-6 transition-all duration-300" />
                    <span className="text-sm tracking-wider">{item}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Art Deco Border Bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-vintage-gold/30 to-transparent" />
    </motion.div>
  );
} 