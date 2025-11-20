import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactLocations from '@/components/ContactLocations'

export const metadata: Metadata = {
  title: 'Contact OdooManics - Get Your Free Consultation',
  description: 'Contact OdooManics for expert Odoo implementation, customization, and support. Offices in Pakistan, USA, and Saudi Arabia. Book your free consultation today.',
  openGraph: {
    title: 'Contact OdooManics - Get Your Free Consultation',
    description: 'Contact OdooManics for expert Odoo implementation, customization, and support. Offices in Pakistan, USA, and Saudi Arabia. Book your free consultation today.',
    images: ['https://odoomanics.com/_assets/og-contact.png'],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactLocations />
    </>
  )
}
