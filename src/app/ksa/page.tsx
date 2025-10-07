import { Metadata } from 'next'
import Hero from '@/components/pages/Hero'
import KSAServices from '@/components/pages/KSAServices'
import KSALocations from '@/components/pages/KSALocations'
import KSATestimonials from '@/components/pages/KSATestimonials'
import KSAContact from '@/components/pages/KSAContact'
import KSASEOOptimization from '@/components/KSASEOOptimization'

export const metadata: Metadata = {
  title: 'Odoo Implementation Saudi Arabia | Riyadh & Dammam | Expert ERP Solutions',
  description: 'Leading Odoo ERP implementation company in Saudi Arabia. Expert services in Riyadh, Dammam, and Jeddah. Manufacturing, Retail, eCommerce solutions with local support.',
  keywords: ['Odoo Saudi Arabia', 'Odoo Riyadh', 'Odoo Dammam', 'Odoo Jeddah', 'Odoo implementation KSA', 'ERP Saudi Arabia', 'Manufacturing ERP KSA', 'Retail ERP Saudi', 'Odoo customization KSA', 'Odoo hosting Saudi Arabia'],
  openGraph: {
    title: 'Odoo Implementation Saudi Arabia | Riyadh & Dammam | Expert ERP Solutions',
    description: 'Leading Odoo ERP implementation company in Saudi Arabia. Expert services in Riyadh, Dammam, and Jeddah. Manufacturing, Retail, eCommerce solutions with local support.',
    images: ['https://odoomanics.com/_assets/og-ksa.png'],
  },
  alternates: {
    canonical: 'https://odoomanics.com/ksa',
    languages: {
      'en-SA': 'https://odoomanics.com/ksa',
      'ar-SA': 'https://odoomanics.com/ksa/ar',
    },
  },
}

export default function KSAPage() {
  return (
    <>
      <KSASEOOptimization />
      <Hero 
        title="Odoo Implementation Saudi Arabia"
        subtitle="Expert ERP Solutions in Riyadh, Dammam & Jeddah"
        description="Leading Odoo ERP implementation company in Saudi Arabia. We provide expert Odoo solutions for Manufacturing, Retail, eCommerce, and Services with local offices in Riyadh and Dammam."
      />
      <KSAServices />
      <KSALocations />
      <KSATestimonials />
      <KSAContact />
    </>
  )
}
