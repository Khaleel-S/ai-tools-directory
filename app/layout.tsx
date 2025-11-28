import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import { Manrope, Syne } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AI Verse - Discover the best AI tools in one place',
    template: '%s | AI Verse' // For page titles like "ChatGPT | AI Verse"
  },
  description: 'Hand-picked collection of AI tools for developers, creators, and founders. Compare text generation, image AI, coding assistants, and more. No login, no ads.',
  keywords: 'AI tools, artificial intelligence, ChatGPT, Claude, Gemini, Grok, Perplexity, AI directory',
  authors: [{ name: 'AI Verse' }],
  creator: 'AI Verse',
  publisher: 'AI Verse',
  
  // Open Graph (Social media previews)
  openGraph: {
    title: 'AI Verse - Best AI tools directory',
    description: 'Discover hand-picked AI tools for developers, creators, and founders. Compare ChatGPT, Claude, Gemini, and more.',
    url: 'https://ai-verse-beta.vercel.app',
    siteName: 'AI Verse',
    images: [
      {
        url: 'https://ai-verse-beta.vercel.app/og-image.png', // Add this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'AI Verse - AI tools directory',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'AI Verse - Best AI tools directory',
    description: 'Hand-picked AI tools for developers. Compare ChatGPT, Claude, Gemini, Grok & more.',
    images: ['https://ai-verse-beta.vercel.app/og-image.png'],
    creator: '@yourtwitterhandle', // Optional
  },
  
  // Canonical URL & more
  alternates: {
    canonical: 'https://ai-verse-beta.vercel.app',
  },
  
  // Robots (allows indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons (for browser tab)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="bg-[#020617] text-slate-50 antialiased">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
