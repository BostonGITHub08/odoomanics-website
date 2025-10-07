import { Metadata } from 'next'
import Hero from '@/components/pages/Hero'
import CaseStudyOverview from '@/components/pages/CaseStudyOverview'
import CaseStudyList from '@/components/pages/CaseStudyList'
import CaseStudyStructuredData from '@/components/pages/CaseStudyStructuredData'

export const metadata: Metadata = {
  title: 'Odoo Case Studies - Real Success Stories from Our Clients',
  description: 'Discover how OdooManics has helped businesses transform their operations with Odoo ERP. Read real case studies from manufacturing, retail, and service companies.',
  keywords: ['Odoo case studies', 'ERP success stories', 'Odoo implementation', 'business transformation', 'manufacturing ERP', 'retail ERP'],
  openGraph: {
    title: 'Odoo Case Studies - Real Success Stories from Our Clients',
    description: 'Discover how OdooManics has helped businesses transform their operations with Odoo ERP. Read real case studies from manufacturing, retail, and service companies.',
    images: ['https://odoomanics.com/_assets/og-case-studies.png'],
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudyStructuredData />
      <Hero 
        title="Odoo Success Stories"
        subtitle="Real Results from Real Businesses"
        description="Discover how we've helped companies across Pakistan, USA, and Saudi Arabia transform their operations with Odoo ERP. From manufacturing to retail, see the measurable impact of our implementations."
      />
      <CaseStudyOverview />
      <CaseStudyList />
    </>
  )
}
