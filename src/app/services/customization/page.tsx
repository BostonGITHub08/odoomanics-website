import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Customization Services - Tailored ERP Solutions',
  description: 'Custom Odoo development and customization services. Tailor Odoo to your specific business needs with custom modules, workflows, and integrations.',
  openGraph: {
    title: 'Odoo Customization Services - Tailored ERP Solutions',
    description: 'Custom Odoo development and customization services. Tailor Odoo to your specific business needs with custom modules, workflows, and integrations.',
    images: ['https://odoomanics.com/_assets/og-customization.png'],
  },
}

const customizationServices = [
  {
    title: 'Custom Module Development',
    description: 'Build custom Odoo modules tailored to your specific business processes and requirements.',
    features: [
      'Custom data models',
      'Business logic implementation',
      'User interface design',
      'Report generation',
      'Workflow automation'
    ],
    icon: '🔧'
  },
  {
    title: 'Third-Party Integrations',
    description: 'Connect Odoo with your existing systems and third-party applications seamlessly.',
    features: [
      'API development',
      'Data synchronization',
      'Real-time updates',
      'Error handling',
      'Performance optimization'
    ],
    icon: '🔗'
  },
  {
    title: 'UI/UX Customization',
    description: 'Customize the user interface to match your brand and improve user experience.',
    features: [
      'Theme customization',
      'Dashboard design',
      'Mobile optimization',
      'User preferences',
      'Accessibility improvements'
    ],
    icon: '🎨'
  },
  {
    title: 'Workflow Automation',
    description: 'Automate business processes and workflows to improve efficiency and reduce manual work.',
    features: [
      'Process automation',
      'Approval workflows',
      'Notification systems',
      'Task management',
      'Performance tracking'
    ],
    icon: '⚡'
  },
  {
    title: 'Report & Analytics',
    description: 'Create custom reports and analytics dashboards for better business insights.',
    features: [
      'Custom reports',
      'Data visualization',
      'KPI dashboards',
      'Scheduled reports',
      'Export capabilities'
    ],
    icon: '📊'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimize Odoo performance to handle large datasets and high user loads.',
    features: [
      'Database optimization',
      'Query optimization',
      'Caching strategies',
      'Load balancing',
      'Monitoring tools'
    ],
    icon: '🚀'
  }
]

const technologies = [
  'Python', 'JavaScript', 'XML', 'PostgreSQL', 'Docker', 'REST APIs', 'OAuth', 'Webhooks'
]

const processSteps = [
  {
    step: '01',
    title: 'Requirements Analysis',
    description: 'We analyze your business requirements and existing systems to design the perfect custom solution.'
  },
  {
    step: '02',
    title: 'Technical Design',
    description: 'We create detailed technical specifications and architecture for your custom development.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop your custom solution with rigorous testing and quality assurance.'
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support and maintenance.'
  }
]

export default function CustomizationPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Customization Services",
          description: "Custom Odoo development and customization services to tailor Odoo to your specific business needs"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Customization Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tailor Odoo to your specific business needs with our expert customization services. 
              From custom modules to third-party integrations, we build solutions that fit your workflow perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Discuss Your Needs
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Custom Solutions
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
              Our Customization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive customization services to make Odoo work exactly the way your business needs it to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customizationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team uses the latest technologies and best practices to deliver high-quality custom solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured development process to ensure your custom solution meets your requirements and exceeds your expectations.
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
              Need Custom Odoo Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your specific requirements and create a custom solution that perfectly fits your business needs.
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
