import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Services - Implementation, Customization & Support',
  description: 'Comprehensive Odoo services including implementation, customization, data migration, training, and managed hosting. Expert Odoo partners in Pakistan, USA, and Saudi Arabia.',
  openGraph: {
    title: 'Odoo Services - Implementation, Customization & Support',
    description: 'Comprehensive Odoo services including implementation, customization, data migration, training, and managed hosting. Expert Odoo partners in Pakistan, USA, and Saudi Arabia.',
    images: ['https://odoomanics.com/_assets/og-services.png'],
  },
}

const services = [
  {
    title: 'Odoo Implementation',
    description: 'End-to-end Odoo implementation from discovery to go-live. We ensure seamless deployment with minimal business disruption.',
    features: [
      'Business process analysis',
      'System configuration',
      'Data migration',
      'User training',
      'Go-live support'
    ],
    href: '/services/implementation',
    icon: '🚀'
  },
  {
    title: 'Odoo Customization',
    description: 'Tailor Odoo to your specific business needs with custom modules, workflows, and integrations.',
    features: [
      'Custom module development',
      'Workflow automation',
      'Third-party integrations',
      'UI/UX customization',
      'API development'
    ],
    href: '/services/customization',
    icon: '⚙️'
  },
  {
    title: 'Data Migration',
    description: 'Seamless data migration from your existing systems to Odoo with zero data loss.',
    features: [
      'Data mapping & cleaning',
      'Legacy system integration',
      'Data validation',
      'Migration testing',
      'Rollback planning'
    ],
    href: '/services/migration',
    icon: '📊'
  },
  {
    title: 'Training & Support',
    description: 'Comprehensive training programs and ongoing support to maximize your Odoo investment.',
    features: [
      'User training programs',
      'Administrator training',
      'Documentation',
      '24/7 support',
      'Performance optimization'
    ],
    href: '/services/support',
    icon: '🎓'
  },
  {
    title: 'Managed Hosting',
    description: 'Secure, scalable, and reliable Odoo hosting with 99.9% uptime guarantee.',
    features: [
      'Cloud hosting solutions',
      'Security monitoring',
      'Backup & recovery',
      'Performance optimization',
      '24/7 technical support'
    ],
    href: '/services/hosting',
    icon: '☁️'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your business processes, requirements, and existing systems to create a comprehensive implementation plan.'
  },
  {
    step: '02',
    title: 'Design & Configuration',
    description: 'We configure Odoo according to your specifications and create custom solutions where needed.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop custom modules, integrate third-party systems, and conduct thorough testing.'
  },
  {
    step: '04',
    title: 'Training & Go-Live',
    description: 'We train your team and ensure smooth go-live with ongoing support and monitoring.'
  }
]

export default function ServicesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Services",
          description: "Comprehensive Odoo implementation, customization, data migration, training, and managed hosting services"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Comprehensive Odoo Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From implementation to ongoing support, we provide end-to-end Odoo solutions 
              that transform your business operations across Pakistan, USA, and Saudi Arabia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of Odoo services to help you succeed at every stage of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful Odoo implementations that deliver real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our Odoo services can help you achieve your business goals. 
              Get a free consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="btn-outline-white">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
