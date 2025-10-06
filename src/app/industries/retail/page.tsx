import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Retail: Complete eCommerce & POS Solution for Retailers',
  description: 'Transform your retail business with Odoo. Unified POS, eCommerce, inventory management, customer analytics, and multi-channel sales for modern retailers.',
  keywords: ['Odoo retail', 'retail ERP', 'POS system', 'eCommerce', 'inventory management', 'multi-channel retail'],
  openGraph: {
    title: 'Odoo for Retail: Complete eCommerce & POS Solution for Retailers',
    description: 'Transform your retail business with Odoo. Unified POS, eCommerce, inventory management, customer analytics, and multi-channel sales for modern retailers.',
    images: ['https://odoomanics.com/_assets/og-retail-industry.png'],
  },
}

const retailChallenges = [
  {
    challenge: 'Multi-Channel Sales',
    description: 'Managing sales across online, offline, and mobile channels with unified inventory.',
    solution: 'Integrated POS and eCommerce with real-time inventory synchronization.',
    icon: '🛒'
  },
  {
    challenge: 'Inventory Management',
    description: 'Keeping track of stock levels across multiple locations and sales channels.',
    solution: 'Real-time inventory tracking with automated replenishment and demand forecasting.',
    icon: '📦'
  },
  {
    challenge: 'Customer Experience',
    description: 'Providing consistent and personalized customer experience across all touchpoints.',
    solution: 'Unified customer profiles with purchase history and personalized recommendations.',
    icon: '👥'
  },
  {
    challenge: 'Pricing & Promotions',
    description: 'Managing complex pricing structures and promotional campaigns effectively.',
    solution: 'Dynamic pricing rules with automated promotions and discount management.',
    icon: '💰'
  },
  {
    challenge: 'Order Fulfillment',
    description: 'Efficiently processing and fulfilling orders from multiple sales channels.',
    solution: 'Automated order processing with integrated shipping and delivery management.',
    icon: '🚚'
  },
  {
    challenge: 'Analytics & Reporting',
    description: 'Getting insights into sales performance, customer behavior, and inventory trends.',
    solution: 'Comprehensive analytics dashboards with real-time reporting and forecasting.',
    icon: '📊'
  }
]

const retailSolutions = [
  {
    title: 'Point of Sale (POS)',
    description: 'Modern POS system with offline capability and integrated payment processing.',
    features: [
      'Offline POS capability',
      'Multiple payment methods',
      'Receipt printing and email',
      'Customer management',
      'Sales analytics and reporting'
    ],
    icon: '💳'
  },
  {
    title: 'eCommerce Platform',
    description: 'Complete online store with product catalog, shopping cart, and payment processing.',
    features: [
      'Responsive online store',
      'Product catalog management',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'SEO optimization tools'
    ],
    icon: '🌐'
  },
  {
    title: 'Inventory Management',
    description: 'Real-time inventory tracking with multi-location support and automated replenishment.',
    features: [
      'Multi-location inventory',
      'Real-time stock tracking',
      'Automated replenishment',
      'Barcode scanning support',
      'Inventory analytics'
    ],
    icon: '📦'
  },
  {
    title: 'Customer Management',
    description: 'Comprehensive customer profiles with purchase history and loyalty programs.',
    features: [
      'Customer database',
      'Purchase history tracking',
      'Loyalty program management',
      'Customer segmentation',
      'Marketing automation'
    ],
    icon: '👤'
  },
  {
    title: 'Order Management',
    description: 'Unified order processing for all sales channels with fulfillment tracking.',
    features: [
      'Multi-channel order processing',
      'Order tracking and status',
      'Fulfillment management',
      'Return and refund handling',
      'Order analytics'
    ],
    icon: '📋'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics for sales, inventory, and customer insights.',
    features: [
      'Sales performance dashboards',
      'Inventory analytics',
      'Customer behavior insights',
      'Financial reporting',
      'Custom report builder'
    ],
    icon: '📈'
  }
]

const retailProcess = [
  {
    step: '01',
    title: 'Store Setup',
    description: 'Configure your retail environment with POS, eCommerce, and inventory settings.'
  },
  {
    step: '02',
    title: 'Product Catalog',
    description: 'Create and manage your product catalog with variants, pricing, and categories.'
  },
  {
    step: '03',
    title: 'Channel Integration',
    description: 'Integrate all sales channels for unified inventory and customer management.'
  },
  {
    step: '04',
    title: 'Customer Onboarding',
    description: 'Set up customer management and loyalty programs for better engagement.'
  },
  {
    step: '05',
    title: 'Sales Operations',
    description: 'Process sales across all channels with real-time inventory updates.'
  },
  {
    step: '06',
    title: 'Analytics & Optimization',
    description: 'Analyze performance and optimize operations for better profitability.'
  }
]

const industryStats = [
  { metric: '60%', description: 'Increase in sales efficiency' },
  { metric: '50%', description: 'Reduction in stockouts' },
  { metric: '40%', description: 'Improvement in customer satisfaction' },
  { metric: '35%', description: 'Increase in average order value' }
]

const retailTypes = [
  {
    type: 'Fashion & Apparel',
    description: 'Manage seasonal inventory, size variants, and fashion trends.',
    features: ['Size and color variants', 'Seasonal planning', 'Trend analysis', 'Size optimization']
  },
  {
    type: 'Electronics',
    description: 'Handle complex product specifications and warranty management.',
    features: ['Product specifications', 'Warranty tracking', 'Technical support', 'Serial number management']
  },
  {
    type: 'Food & Beverage',
    description: 'Manage perishable inventory and compliance requirements.',
    features: ['Expiry date tracking', 'Temperature monitoring', 'Compliance management', 'Supplier traceability']
  },
  {
    type: 'Home & Garden',
    description: 'Handle large items and complex delivery requirements.',
    features: ['Large item management', 'Delivery scheduling', 'Assembly services', 'Installation tracking']
  }
]

export default function RetailIndustryPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Retail Industry Solutions",
          description: "Complete retail ERP solution with POS, eCommerce, inventory management, and multi-channel sales"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Retail Industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your retail business with Odoo's unified solution. From POS to eCommerce, 
              manage all aspects of your retail operations with seamless integration and real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Retail Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Retail Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Retail Industry Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Odoo transforms retail operations across different business types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Common Retail Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern retail faces unique challenges. Here's how Odoo helps solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{challenge.challenge}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Odoo Solution:</h4>
                  <p className="text-sm text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Retail Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive retail management tools for modern multi-channel businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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

      {/* Retail Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Retail Business Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo adapts to different retail business models and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold text-dark mb-4">{type.type}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <ul className="space-y-2 text-left">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Retail Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Retail Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to retail transformation with our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailProcess.map((step, index) => (
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
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our retail experts help you implement Odoo and create a unified, 
              efficient retail operation that delights customers and drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Retail Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Retail Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
