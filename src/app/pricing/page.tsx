import { Metadata } from 'next'
import Hero from '@/components/pages/Hero'
import PricingTables from '@/components/pages/PricingTables'
import PricingFeatures from '@/components/pages/PricingFeatures'
import PricingFAQ from '@/components/pages/PricingFAQ'
import PricingStructuredData from '@/components/pages/PricingStructuredData'

export const metadata: Metadata = {
  title: 'Odoo Implementation Pricing - Transparent Plans for Every Business',
  description: 'Choose from Alpha, Bravo, or Charlie plans for Odoo implementation. Flexible pricing for large, medium, and small businesses with hosting included. Available online, SH, or on-premises.',
  keywords: ['Odoo pricing', 'Odoo implementation cost', 'Odoo hosting', 'ERP pricing', 'Odoo packages', 'Saudi Arabia', 'SAR pricing'],
  openGraph: {
    title: 'Odoo Implementation Pricing - Transparent Plans for Every Business',
    description: 'Choose from Alpha, Bravo, or Charlie plans for Odoo implementation. Flexible pricing for large, medium, and small businesses with hosting included.',
    images: ['https://odoomanics.com/_assets/og-pricing.png'],
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingStructuredData />
      <Hero 
        title="Transparent Pricing Plans"
        subtitle="Choose the Perfect Plan for Your Business"
        description="Get Odoo implementation and hosting in one comprehensive package. Select from Alpha, Bravo, or Charlie plans based on your business size and module requirements. All plans available for online, SH, or on-premises deployment."
      />
      <PricingTables />
      <PricingFeatures />
      <PricingFAQ />
    </>
  )
}
