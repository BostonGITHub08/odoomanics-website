import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo eCommerce: Complete Online Store and E-commerce Solution',
  description: 'Build and manage your online store with Odoo eCommerce. Product catalog, shopping cart, payment processing, order management, and marketing tools.',
  keywords: ['Odoo eCommerce', 'online store', 'e-commerce', 'product catalog', 'shopping cart', 'payment processing'],
  openGraph: {
    title: 'Odoo eCommerce: Complete Online Store and E-commerce Solution',
    description: 'Build and manage your online store with Odoo eCommerce. Product catalog, shopping cart, payment processing, order management, and marketing tools.',
    images: ['https://odoomanics.com/_assets/og-ecommerce.png'],
  },
}

const ecommerceFeatures = [
  {
    title: 'Product Catalog',
    description: 'Create and manage your product catalog with advanced product variants, attributes, and pricing.',
    benefits: [
      'Product variants and attributes',
      'Dynamic pricing rules',
      'Product categories and tags',
      'SEO-optimized product pages',
      'Product comparison tools'
    ],
    icon: '📦'
  },
  {
    title: 'Shopping Cart & Checkout',
    description: 'Provide a seamless shopping experience with advanced cart functionality and multiple checkout options.',
    benefits: [
      'Persistent shopping cart',
      'Guest checkout option',
      'Multiple payment methods',
      'Shipping calculator',
      'Order summary and confirmation'
    ],
    icon: '🛒'
  },
  {
    title: 'Payment Processing',
    description: 'Accept payments securely with integrated payment gateways and fraud protection.',
    benefits: [
      'Multiple payment gateways',
      'Secure payment processing',
      'Fraud detection and prevention',
      'Refund and chargeback management',
      'Payment analytics and reporting'
    ],
    icon: '💳'
  },
  {
    title: 'Order Management',
    description: 'Process and fulfill orders efficiently with integrated inventory and shipping management.',
    benefits: [
      'Order processing workflow',
      'Inventory integration',
      'Shipping label generation',
      'Order tracking and notifications',
      'Return and refund management'
    ],
    icon: '📋'
  },
  {
    title: 'Customer Management',
    description: 'Manage customer accounts, preferences, and order history with integrated CRM functionality.',
    benefits: [
      'Customer account creation',
      'Order history and tracking',
      'Wishlist and favorites',
      'Customer preferences',
      'Loyalty program integration'
    ],
    icon: '👤'
  },
  {
    title: 'Marketing & SEO',
    description: 'Drive traffic and conversions with built-in marketing tools and SEO optimization.',
    benefits: [
      'SEO-optimized pages',
      'Email marketing campaigns',
      'Discount codes and promotions',
      'Social media integration',
      'Analytics and reporting'
    ],
    icon: '📈'
  }
]

const ecommerceProcess = [
  {
    step: '01',
    title: 'Store Setup',
    description: 'Configure your online store with themes, payment methods, and shipping options.'
  },
  {
    step: '02',
    title: 'Product Catalog',
    description: 'Create and organize your product catalog with categories, variants, and pricing.'
  },
  {
    step: '03',
    title: 'Payment Integration',
    description: 'Set up payment gateways and configure payment processing for secure transactions.'
  },
  {
    step: '04',
    title: 'Order Processing',
    description: 'Configure order workflows and integrate with inventory and shipping systems.'
  },
  {
    step: '05',
    title: 'Marketing Setup',
    description: 'Implement marketing tools, SEO optimization, and promotional campaigns.'
  },
  {
    step: '06',
    title: 'Launch & Monitor',
    description: 'Launch your store and monitor performance with analytics and reporting tools.'
  }
]

const integrations = [
  { name: 'Inventory', description: 'Real-time stock synchronization and inventory management' },
  { name: 'Sales', description: 'Automatic order processing and customer management' },
  { name: 'Accounting', description: 'Automatic invoicing and financial reporting' },
  { name: 'CRM', description: 'Customer relationship management and marketing automation' },
  { name: 'Website', description: 'Integrated website builder and content management' },
  { name: 'Analytics', description: 'Advanced analytics and performance tracking' }
]

const benefits = [
  {
    title: 'Integrated Solution',
    description: 'Seamlessly integrate with your existing business processes and data.',
    icon: '🔗'
  },
  {
    title: 'Mobile Responsive',
    description: 'Mobile-optimized design for excellent shopping experience on all devices.',
    icon: '📱'
  },
  {
    title: 'SEO Optimized',
    description: 'Built-in SEO features to improve search engine rankings and visibility.',
    icon: '🔍'
  },
  {
    title: 'Scalable Platform',
    description: 'Grow your business with a platform that scales with your needs.',
    icon: '📈'
  }
]

export default function EcommercePage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo eCommerce Implementation",
          description: "Complete e-commerce solution with online store, product catalog, and order management"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo eCommerce: Complete Online Store Solution
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build and manage your online store with Odoo eCommerce. From product catalog to order fulfillment, 
              create a complete e-commerce solution that integrates seamlessly with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get eCommerce Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request eCommerce Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* eCommerce Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              eCommerce Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo eCommerce provides everything you need to create and manage a successful online store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => (
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

      {/* eCommerce Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              eCommerce Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to launching your online store with our proven implementation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceProcess.map((step, index) => (
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
              eCommerce Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo eCommerce integrates seamlessly with all business modules for complete e-commerce management.
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
              Why Choose Odoo eCommerce?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo eCommerce provides a complete solution for online businesses with integrated business management.
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
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our eCommerce experts help you build and launch a successful online store that integrates seamlessly with your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get eCommerce Implementation Quote
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request eCommerce Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
