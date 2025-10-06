import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo CRM: Complete Customer Relationship Management Solution',
  description: 'Master customer relationships with Odoo CRM. Lead management, pipeline tracking, email integration, and sales automation for businesses of all sizes.',
  keywords: ['Odoo CRM', 'customer relationship management', 'lead management', 'sales pipeline', 'email integration', 'sales automation'],
  openGraph: {
    title: 'Odoo CRM: Complete Customer Relationship Management Solution',
    description: 'Master customer relationships with Odoo CRM. Lead management, pipeline tracking, email integration, and sales automation for businesses of all sizes.',
    images: ['https://odoomanics.com/_assets/og-crm.png'],
  },
}

const crmFeatures = [
  {
    title: 'Lead Management',
    description: 'Capture, qualify, and convert leads into opportunities with intelligent lead scoring and automated follow-up.',
    benefits: [
      'Automated lead capture from website forms',
      'Lead scoring based on behavior and demographics',
      'Lead qualification and assignment rules',
      'Lead nurturing campaigns',
      'Conversion tracking and analytics'
    ],
    icon: '🎯'
  },
  {
    title: 'Pipeline Management',
    description: 'Visualize and manage your sales pipeline with customizable stages and automated progression rules.',
    benefits: [
      'Customizable pipeline stages',
      'Drag-and-drop opportunity management',
      'Automated stage progression',
      'Pipeline forecasting and reporting',
      'Team performance tracking'
    ],
    icon: '📊'
  },
  {
    title: 'Email Integration',
    description: 'Seamlessly integrate with your email to track communications and automate follow-ups.',
    benefits: [
      'Two-way email synchronization',
      'Email templates and automation',
      'Communication history tracking',
      'Email performance analytics',
      'Mobile email access'
    ],
    icon: '📧'
  },
  {
    title: 'Activity Management',
    description: 'Plan, track, and manage all customer-related activities in one centralized location.',
    benefits: [
      'Activity scheduling and reminders',
      'Call logging and notes',
      'Meeting management',
      'Task assignment and tracking',
      'Activity reporting and analytics'
    ],
    icon: '📅'
  },
  {
    title: 'Customer Segmentation',
    description: 'Segment your customers based on behavior, value, and characteristics for targeted marketing.',
    benefits: [
      'Dynamic customer segmentation',
      'Behavior-based categorization',
      'Value-based tiering',
      'Targeted marketing campaigns',
      'Segmentation analytics'
    ],
    icon: '👥'
  },
  {
    title: 'Sales Analytics',
    description: 'Gain insights into your sales performance with comprehensive reporting and analytics.',
    benefits: [
      'Real-time sales dashboards',
      'Performance metrics and KPIs',
      'Forecasting and predictions',
      'Team and individual analytics',
      'Custom report builder'
    ],
    icon: '📈'
  }
]

const crmProcess = [
  {
    step: '01',
    title: 'Lead Capture',
    description: 'Automatically capture leads from multiple sources including website forms, social media, and email campaigns.'
  },
  {
    step: '02',
    title: 'Lead Qualification',
    description: 'Score and qualify leads based on predefined criteria to focus on high-value prospects.'
  },
  {
    step: '03',
    title: 'Opportunity Creation',
    description: 'Convert qualified leads into opportunities and assign them to the appropriate sales team member.'
  },
  {
    step: '04',
    title: 'Pipeline Management',
    description: 'Track opportunities through your sales pipeline with visual stages and automated progression.'
  },
  {
    step: '05',
    title: 'Deal Closure',
    description: 'Close deals with integrated quoting, contract management, and order processing.'
  },
  {
    step: '06',
    title: 'Customer Retention',
    description: 'Maintain relationships with existing customers through ongoing communication and support.'
  }
]

const integrations = [
  { name: 'Sales', description: 'Seamless integration with sales orders and quotations' },
  { name: 'Marketing', description: 'Connect with marketing campaigns and lead generation' },
  { name: 'Website', description: 'Capture leads directly from your website forms' },
  { name: 'Email', description: 'Two-way email synchronization and tracking' },
  { name: 'Calendar', description: 'Schedule meetings and activities with calendar integration' },
  { name: 'Phone', description: 'Make calls directly from CRM with call logging' }
]

const benefits = [
  {
    title: 'Increased Sales Efficiency',
    description: 'Streamline your sales process and reduce time spent on administrative tasks.',
    icon: '⚡'
  },
  {
    title: 'Better Lead Management',
    description: 'Never lose a lead again with automated capture and follow-up systems.',
    icon: '🎯'
  },
  {
    title: 'Improved Customer Relationships',
    description: 'Build stronger relationships with comprehensive customer history and communication tracking.',
    icon: '🤝'
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make informed decisions with detailed analytics and reporting.',
    icon: '📊'
  }
]

export default function CRMPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo CRM Implementation",
          description: "Complete customer relationship management solution with lead management, pipeline tracking, and sales automation"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo CRM: Complete Customer Relationship Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your sales process with Odoo CRM. From lead capture to customer retention, 
              manage every aspect of your customer relationships in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get CRM Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request CRM Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              CRM Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo CRM provides everything you need to manage customer relationships effectively and grow your sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              CRM Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a proven 6-step process to maximize your CRM effectiveness and sales success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmProcess.map((step, index) => (
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

      {/* Integrations */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              CRM Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo CRM integrates seamlessly with other Odoo modules and external systems for a complete solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-dark mb-4">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Choose Odoo CRM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo CRM provides the tools and insights you need to build stronger customer relationships and grow your business.
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
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our CRM experts help you implement Odoo CRM and optimize your sales process for maximum efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get CRM Implementation Quote
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request CRM Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
