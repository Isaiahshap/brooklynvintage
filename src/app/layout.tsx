import './globals.css'
import type { Metadata } from 'next'
import { Tenor_Sans, Playfair_Display } from 'next/font/google'

const tenor = Tenor_Sans({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tenor'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Brooklyn Vintage | Curated Timeless Pieces',
  description: 'Discover hand-selected vintage clothing and accessories in our Brooklyn boutique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${tenor.variable} ${playfair.variable} font-tenor bg-vintage-dark text-vintage-cream`}>
        {children}
      </body>
    </html>
  )
}
