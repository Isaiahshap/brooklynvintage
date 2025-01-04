import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          copper: '#C87941',
          brass: '#B5A642',
          bronze: '#CD7F32',
          gold: '#CFB53B',
          dark: '#1A1614',
          darker: '#0D0B0A',
          cream: '#F5E6D3',
          parchment: '#F4E4BC'
        }
      },
      fontFamily: {
        tenor: ['var(--font-tenor)', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
      },
      backgroundImage: {
        'vintage-pattern': "url('/patterns/ornate-damask.png')",
        'copper-texture': "url('/textures/copper-patina.png')",
        'vintage-border': "url('/patterns/art-nouveau-border.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(200, 121, 65, 0.1) 50%, transparent 100%)',
        'art-nouveau': "url('/patterns/art-nouveau.png')",
        'vintage-texture': "url('/patterns/vintage-texture.png')"
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'border-glow': {
          '0%, 100%': {
            'border-color': 'rgb(200, 121, 65, 0.2)'
          },
          '50%': {
            'border-color': 'rgb(200, 121, 65, 0.4)'
          }
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'reveal': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
        },
        'elegant-fade': {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
        'elegant-fade': 'elegant-fade 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.43, 0.13, 0.23, 0.96)',
      },
    },
  },
  plugins: [],
} satisfies Config;
