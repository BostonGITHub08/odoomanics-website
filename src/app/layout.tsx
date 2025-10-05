import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'OdooManics - Odoo Implementation & Managed Support',
    template: '%s | OdooManics'
  },
  description: 'Expert Odoo implementation, customization, and managed hosting. From discovery to go-live for Manufacturing, Retail, eCommerce, and Services. Pakistan, USA, KSA offices.',
  keywords: ['Odoo', 'ERP', 'implementation', 'customization', 'hosting', 'Pakistan', 'USA', 'KSA'],
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
        <link rel="canonical" href="https://odoomanics.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
