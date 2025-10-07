import { Metadata } from 'next'
import Hero from '@/components/pages/Hero'
import CaseStudyDetails from '@/components/pages/CaseStudyDetails'
import CaseStudyResults from '@/components/pages/CaseStudyResults'
import CaseStudyTestimonial from '@/components/pages/CaseStudyTestimonial'
import CaseStudyStructuredData from '@/components/pages/CaseStudyStructuredData'

export const metadata: Metadata = {
  title: 'Pakistani Manufacturing Company - Odoo ERP Success Story',
  description: 'How a leading Pakistani manufacturing company increased efficiency by 40% and reduced inventory costs by 25% with Odoo ERP implementation by OdooManics.',
  keywords: ['Pakistani manufacturing', 'Odoo manufacturing', 'ERP success story', 'inventory management', 'production planning', 'Odoo implementation'],
  openGraph: {
    title: 'Pakistani Manufacturing Company - Odoo ERP Success Story',
    description: 'How a leading Pakistani manufacturing company increased efficiency by 40% and reduced inventory costs by 25% with Odoo ERP implementation by OdooManics.',
    images: ['https://odoomanics.com/_assets/og-case-study-manufacturing.png'],
  },
}

const caseStudyData = {
  company: 'Pakistani Manufacturing Company',
  industry: 'Manufacturing',
  location: 'Lahore, Pakistan',
  employees: '150+',
  challenge: 'Manual processes, inventory mismanagement, and lack of real-time visibility',
  solution: 'Complete Odoo ERP implementation with Manufacturing, Inventory, and Accounting modules',
  results: {
    efficiency: '40%',
    inventoryCosts: '25%',
    orderProcessing: '60%',
    reporting: '80%'
  },
  modules: [
    'Manufacturing (MRP)',
    'Inventory Management',
    'Purchase Management',
    'Sales Management',
    'Accounting',
    'Project Management',
    'Quality Control',
    'Maintenance'
  ],
  timeline: '3 months',
  team: '8 OdooManics specialists'
}

export default function PakistaniManufacturingCaseStudy() {
  return (
    <>
      <CaseStudyStructuredData caseStudy={caseStudyData} />
      <Hero 
        title="Pakistani Manufacturing Company"
        subtitle="40% Efficiency Increase with Odoo ERP"
        description="How a leading Pakistani manufacturing company transformed their operations, reduced inventory costs by 25%, and increased overall efficiency by 40% through strategic Odoo implementation."
      />
      <CaseStudyDetails caseStudy={caseStudyData} />
      <CaseStudyResults caseStudy={caseStudyData} />
      <CaseStudyTestimonial caseStudy={caseStudyData} />
    </>
  )
}
