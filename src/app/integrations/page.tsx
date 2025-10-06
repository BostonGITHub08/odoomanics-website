import { Metadata } from 'next'
import Hero from '@/components/pages/Hero'
import IntegrationBlocks from '@/components/pages/IntegrationBlocks'
import IntegrationBenefits from '@/components/pages/IntegrationBenefits'
import IntegrationProcess from '@/components/pages/IntegrationProcess'
import IntegrationStructuredData from '@/components/pages/IntegrationStructuredData'

export const metadata: Metadata = {
  title: 'Odoo Integrations - Connect Your Business Tools',
  description: 'Seamlessly integrate Odoo with Shopify, WordPress, Google Services, payment gateways, accounting software, and CRM systems. Expert integration services by OdooManics.',
  keywords: ['Odoo integrations', 'Shopify integration', 'WordPress integration', 'Google Maps integration', 'payment gateway integration', 'accounting software integration'],
  openGraph: {
    title: 'Odoo Integrations - Connect Your Business Tools',
    description: 'Seamlessly integrate Odoo with Shopify, WordPress, Google Services, payment gateways, accounting software, and CRM systems. Expert integration services by OdooManics.',
    images: ['https://odoomanics.com/_assets/og-integrations.png'],
  },
}

export default function IntegrationsPage() {
  return (
    <>
      <IntegrationStructuredData />
      <Hero 
        title="Odoo Integrations"
        subtitle="Connect Your Business Tools Seamlessly"
        description="Integrate Odoo with your existing business tools and platforms. Our expert team ensures smooth data flow between Odoo and your favorite applications, maximizing efficiency and reducing manual work."
      />
      <IntegrationBlocks />
      <IntegrationBenefits />
      <IntegrationProcess />
    </>
  )
}
