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
  title: 'Odoo Implementations & Managed Support—From Discovery to Go-Live',
  description: 'We scope, implement, migrate, and support Odoo for Manufacturing, Retail, eCommerce, Services & more. Expert implementation across Pakistan, USA, and Saudi Arabia.',
  openGraph: {
    title: 'OdooManics - Odoo Implementations & Managed Support',
    description: 'We scope, implement, migrate, and support Odoo for Manufacturing, Retail, eCommerce, Services & more. Expert implementation across Pakistan, USA, and Saudi Arabia.',
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
