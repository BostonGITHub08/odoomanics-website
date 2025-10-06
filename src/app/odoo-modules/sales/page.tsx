import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Sales: Complete Sales Management and Order Processing',
  description: 'Streamline your sales process with Odoo Sales. Quote management, order processing, customer portal, and sales analytics for growing businesses.',
  keywords: ['Odoo Sales', 'sales management', 'quote management', 'order processing', 'customer portal', 'sales analytics'],
  openGraph: {
    title: 'Odoo Sales: Complete Sales Management and Order Processing',
    description: 'Streamline your sales process with Odoo Sales. Quote management, order processing, customer portal, and sales analytics for growing businesses.',
    images: ['https://odoomanics.com/_assets/og-sales.png'],
  },
}

const salesFeatures = [
  {
    title: 'Quote Management',
    description: 'Create, send, and track professional quotes with automated follow-up and approval workflows.',
    benefits: [
      'Professional quote templates',
      'Automated quote generation',
      'Quote approval workflows',
      'Expiration date tracking',
      'Quote conversion analytics'
    ],
    icon: '📋'
  },
  {
    title: 'Order Processing',
    description: 'Streamline order processing from quote to delivery with integrated inventory and accounting.',
    benefits: [
      'Automated order confirmation',
      'Inventory availability checking',
      'Delivery scheduling',
      'Order status tracking',
      'Customer notifications'
    ],
    icon: '🛒'
  },
  {
    title: 'Customer Portal',
    description: 'Provide customers with self-service access to quotes, orders, and account information.',
    benefits: [
      'Self-service quote viewing',
      'Order history and tracking',
      'Document downloads',
      'Support ticket creation',
      'Account management'
    ],
    icon: '👤'
  },
  {
    title: 'Sales Analytics',
    description: 'Gain insights into sales performance with comprehensive reporting and forecasting.',
    benefits: [
      'Sales performance dashboards',
      'Revenue forecasting',
      'Product performance analysis',
      'Sales team metrics',
      'Custom report builder'
    ],
    icon: '📊'
  },
  {
    title: 'Pricing Management',
    description: 'Manage complex pricing structures with customer-specific pricing and discount rules.',
    benefits: [
      'Customer-specific pricing',
      'Volume discount rules',
      'Promotional pricing',
      'Price list management',
      'Margin analysis'
    ],
    icon: '💰'
  },
  {
    title: 'Sales Team Management',
    description: 'Organize and manage your sales team with territories, quotas, and performance tracking.',
    benefits: [
      'Sales territory management',
      'Quota setting and tracking',
      'Team performance metrics',
      'Commission calculations',
      'Sales forecasting'
    ],
    icon: '👥'
  }
]

const salesProcess = [
  {
    step: '01',
    title: 'Lead Qualification',
    description: 'Qualify leads and convert them into sales opportunities with proper scoring and assignment.'
  },
  {
    step: '02',
    title: 'Quote Creation',
    description: 'Create professional quotes with accurate pricing, terms, and conditions for your prospects.'
  },
  {
    step: '03',
    title: 'Quote Follow-up',
    description: 'Track quote status and follow up with prospects to maximize conversion rates.'
  },
  {
    step: '04',
    title: 'Order Confirmation',
    description: 'Convert approved quotes into sales orders with integrated inventory and accounting.'
  },
  {
    step: '05',
    title: 'Order Fulfillment',
    description: 'Process orders through production, inventory, and delivery with real-time tracking.'
  },
  {
    step: '06',
    title: 'Customer Service',
    description: 'Provide ongoing support and manage customer relationships for repeat business.'
  }
]

const integrations = [
  { name: 'CRM', description: 'Seamless integration with customer relationship management' },
  { name: 'Inventory', description: 'Real-time inventory checking and stock management' },
  { name: 'Accounting', description: 'Automatic invoicing and financial reporting' },
  { name: 'eCommerce', description: 'Synchronize with online store orders and customers' },
  { name: 'Manufacturing', description: 'Production planning based on sales orders' },
  { name: 'Project', description: 'Convert sales orders into project management tasks' }
]

const benefits = [
  {
    title: 'Faster Quote Processing',
    description: 'Reduce quote creation time by 70% with automated templates and pricing rules.',
    icon: '⚡'
  },
  {
    title: 'Higher Conversion Rates',
    description: 'Improve quote-to-order conversion with professional quotes and follow-up automation.',
    icon: '📈'
  },
  {
    title: 'Better Customer Experience',
    description: 'Provide customers with self-service access and real-time order tracking.',
    icon: '😊'
  },
  {
    title: 'Improved Sales Visibility',
    description: 'Track sales performance and forecast revenue with comprehensive analytics.',
    icon: '👁️'
  }
]

export default function SalesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Sales Implementation",
          description: "Complete sales management solution with quote management, order processing, and customer portal"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Sales: Complete Sales Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your entire sales process from quote to delivery. Manage quotes, process orders, 
              and provide exceptional customer service with Odoo Sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Sales Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Sales Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Sales Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Sales provides everything you need to manage your sales process efficiently and grow your revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesFeatures.map((feature, index) => (
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

      {/* Sales Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Sales Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a proven 6-step sales process to maximize efficiency and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesProcess.map((step, index) => (
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
              Sales Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Sales integrates seamlessly with other business modules for a complete solution.
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
              Why Choose Odoo Sales?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Sales helps you streamline your sales process and improve customer satisfaction.
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
              Ready to Streamline Your Sales Process?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our sales experts help you implement Odoo Sales and optimize your sales operations for maximum efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Sales Implementation Quote
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Sales Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
