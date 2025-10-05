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
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary-light/5 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Get Your Free Consultation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your business with Odoo? Let's discuss your requirements 
              and create a tailored implementation plan.
            </p>
          </div>
        </div>
      </section>

      <ContactLocations />
      <ContactForm />
    </>
  )
}
