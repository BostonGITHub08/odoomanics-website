import Hero from '@/components/sections/Hero'
import TrustBadges from '@/components/sections/TrustBadges'
import ValueProps from '@/components/sections/ValueProps'
import FeaturedModules from '@/components/sections/FeaturedModules'
import Industries from '@/components/sections/Industries'
import Numbers from '@/components/sections/Numbers'
import CaseStudyTeaser from '@/components/sections/CaseStudyTeaser'
import Testimonials from '@/components/sections/Testimonials'
import BlogHighlights from '@/components/sections/BlogHighlights'
import CTA from '@/components/sections/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Odoo Implementation Saudi Arabia | Riyadh & Dammam | OdooManics',
  description: 'Expert Odoo ERP implementation in Saudi Arabia. Serving Riyadh, Dammam, and Jeddah with Manufacturing, Retail, eCommerce solutions. Certified Odoo partners with local offices.',
  keywords: ['Odoo Saudi Arabia', 'Odoo Riyadh', 'Odoo Dammam', 'Odoo implementation KSA', 'ERP Saudi Arabia', 'Manufacturing ERP', 'Retail ERP', 'Odoo customization', 'Odoo hosting'],
  openGraph: {
    title: 'Odoo Implementation Saudi Arabia | Riyadh & Dammam | OdooManics',
    description: 'Expert Odoo ERP implementation in Saudi Arabia. Serving Riyadh, Dammam, and Jeddah with Manufacturing, Retail, eCommerce solutions. Certified Odoo partners.',
    images: ['https://odoomanics.com/_assets/og-home.png'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ValueProps />
      <FeaturedModules />
      <Industries />
      <Numbers />
      <CaseStudyTeaser />
      <Testimonials />
      <BlogHighlights />
      <CTA />
    </>
  )
}
