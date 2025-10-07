import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import KSASEOOptimization from '@/components/KSASEOOptimization'
import PerformanceOptimizations from '@/components/PerformanceOptimizations'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'OdooManics - Odoo Implementation & Managed Support',
    template: '%s | OdooManics'
  },
  description: 'Expert Odoo implementation, customization, and managed hosting in Saudi Arabia. From discovery to go-live for Manufacturing, Retail, eCommerce, and Services. Offices in Riyadh, Dammam, Pakistan, and USA.',
  keywords: ['Odoo Saudi Arabia', 'Odoo Riyadh', 'Odoo Dammam', 'Odoo implementation KSA', 'ERP Saudi Arabia', 'Odoo customization', 'Odoo hosting', 'Manufacturing ERP', 'Retail ERP', 'Pakistan', 'USA'],
  authors: [{ name: 'OdooManics' }],
  creator: 'OdooManics',
  publisher: 'OdooManics',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://odoomanics.com',
    siteName: 'OdooManics',
    title: 'OdooManics - Odoo Implementation & Managed Support',
    description: 'Expert Odoo implementation, customization, and managed hosting. From discovery to go-live for Manufacturing, Retail, eCommerce, and Services.',
    images: [
      {
        url: 'https://odoomanics.com/_assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OdooManics - Odoo Implementation & Managed Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OdooManics - Odoo Implementation & Managed Support',
    description: 'Expert Odoo implementation, customization, and managed hosting. From discovery to go-live for Manufacturing, Retail, eCommerce, and Services.',
    images: ['https://odoomanics.com/_assets/og-image.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <KSASEOOptimization />
        <PerformanceOptimizations />
        <link rel="canonical" href="https://odoomanics.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Riyadh, Dammam" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
