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
  title: 'AI Tools Directory',
  description: 'Discover the best AI tools in one place',
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
