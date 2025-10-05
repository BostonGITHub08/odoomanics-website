import { Metadata } from 'next'
import Hero from '@/components/pages/Hero'
import Mission from '@/components/pages/Mission'
import Team from '@/components/pages/Team'
import Methodology from '@/components/pages/Methodology'
import Certifications from '@/components/pages/Certifications'

export const metadata: Metadata = {
  title: 'About OdooManics - Expert Odoo Implementation Team',
  description: 'Learn about OdooManics mission, methodology, and expert team. Certified Odoo partners with offices in Pakistan, USA, and Saudi Arabia.',
  openGraph: {
    title: 'About OdooManics - Expert Odoo Implementation Team',
    description: 'Learn about OdooManics mission, methodology, and expert team. Certified Odoo partners with offices in Pakistan, USA, and Saudi Arabia.',
    images: ['https://odoomanics.com/_assets/og-about.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About OdooManics"
        subtitle="Expert Odoo Implementation & Managed Support"
        description="We're passionate about transforming businesses through expert Odoo implementations. Our certified team delivers solutions that drive real results across Pakistan, USA, and Saudi Arabia."
      />
      <Mission />
      <Methodology />
      <Team />
      <Certifications />
    </>
  )
}
