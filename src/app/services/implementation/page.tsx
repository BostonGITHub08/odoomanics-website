import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Implementation Services - End-to-End ERP Deployment',
  description: 'Professional Odoo implementation services from discovery to go-live. Expert implementation team with offices in Pakistan, USA, and Saudi Arabia.',
  openGraph: {
    title: 'Odoo Implementation Services - End-to-End ERP Deployment',
    description: 'Professional Odoo implementation services from discovery to go-live. Expert implementation team with offices in Pakistan, USA, and Saudi Arabia.',
    images: ['https://odoomanics.com/_assets/og-implementation.png'],
  },
}

const implementationSteps = [
  {
    phase: 'Discovery & Planning',
    duration: '2-4 weeks',
    description: 'We analyze your business processes, requirements, and existing systems to create a comprehensive implementation roadmap.',
    activities: [
      'Business process mapping',
      'Requirements gathering',
      'System architecture design',
      'Project timeline creation',
      'Stakeholder alignment'
    ]
  },
  {
    phase: 'System Configuration',
    duration: '4-8 weeks',
    description: 'We configure Odoo modules according to your business needs and set up the foundation for your ERP system.',
    activities: [
      'Module configuration',
      'User roles & permissions',
      'Workflow setup',
      'Integration planning',
      'Data structure design'
    ]
  },
  {
    phase: 'Development & Customization',
    duration: '6-12 weeks',
    description: 'We develop custom solutions, integrate third-party systems, and create tailored workflows for your business.',
    activities: [
      'Custom module development',
      'Third-party integrations',
      'API development',
      'UI/UX customization',
      'Workflow automation'
    ]
  },
  {
    phase: 'Data Migration',
    duration: '2-4 weeks',
    description: 'We migrate your existing data to Odoo with zero data loss and ensure data integrity throughout the process.',
    activities: [
      'Data mapping & cleaning',
      'Legacy system integration',
      'Data validation',
      'Migration testing',
      'Rollback planning'
    ]
  },
  {
    phase: 'Testing & Quality Assurance',
    duration: '2-4 weeks',
    description: 'We conduct comprehensive testing to ensure system stability, performance, and user acceptance.',
    activities: [
      'Functional testing',
      'Performance testing',
      'User acceptance testing',
      'Security testing',
      'Integration testing'
    ]
  },
  {
    phase: 'Training & Go-Live',
    duration: '2-3 weeks',
    description: 'We train your team and ensure smooth go-live with ongoing support and monitoring.',
    activities: [
      'User training programs',
      'Administrator training',
      'Go-live support',
      'Performance monitoring',
      'Issue resolution'
    ]
  }
]

const benefits = [
  {
    title: 'Reduced Implementation Time',
    description: 'Our proven methodology and experienced team ensure faster time-to-value.',
    icon: '⏱️'
  },
  {
    title: 'Minimal Business Disruption',
    description: 'We plan implementations to minimize impact on your daily operations.',
    icon: '🛡️'
  },
  {
    title: 'Expert Guidance',
    description: 'Our certified Odoo experts guide you through every step of the process.',
    icon: '👨‍💼'
  },
  {
    title: 'Ongoing Support',
    description: 'We provide continuous support even after go-live to ensure success.',
    icon: '🔄'
  }
]

export default function ImplementationPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Implementation Services",
          description: "End-to-end Odoo implementation from discovery to go-live with expert guidance and minimal business disruption"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Implementation Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with professional Odoo implementation. From discovery to go-live, 
              we ensure seamless deployment with minimal disruption to your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 6-phase methodology to ensure successful Odoo implementations that deliver real business value.
            </p>
          </div>

          <div className="space-y-12">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-primary text-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">Phase {index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.phase}</h3>
                    <div className="text-sm opacity-90">Duration: {step.duration}</div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Choose Our Implementation Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team and proven methodology ensure successful Odoo implementations that deliver real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Ready to Implement Odoo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your requirements and create a customized implementation plan that fits your business needs.
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
