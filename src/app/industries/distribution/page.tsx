import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Distribution: Warehouse & Logistics Management Solution',
  description: 'Optimize your distribution operations with Odoo. Warehouse management, logistics, inventory tracking, delivery scheduling, and supply chain optimization for distributors.',
  keywords: ['Odoo distribution', 'warehouse management', 'logistics ERP', 'inventory tracking', 'delivery management', 'supply chain'],
  openGraph: {
    title: 'Odoo for Distribution: Warehouse & Logistics Management Solution',
    description: 'Optimize your distribution operations with Odoo. Warehouse management, logistics, inventory tracking, delivery scheduling, and supply chain optimization for distributors.',
    images: ['https://odoomanics.com/_assets/og-distribution-industry.png'],
  },
}

const distributionChallenges = [
  {
    challenge: 'Warehouse Management',
    description: 'Managing complex warehouse operations with multiple locations and inventory types.',
    solution: 'Advanced warehouse management with location tracking and automated operations.',
    icon: '🏪'
  },
  {
    challenge: 'Inventory Tracking',
    description: 'Tracking inventory across multiple locations with real-time visibility.',
    solution: 'Real-time inventory tracking with automated replenishment and demand forecasting.',
    icon: '📦'
  },
  {
    challenge: 'Delivery Optimization',
    description: 'Optimizing delivery routes and managing complex delivery schedules.',
    solution: 'Route optimization with delivery scheduling and tracking capabilities.',
    icon: '🚚'
  },
  {
    challenge: 'Supply Chain Coordination',
    description: 'Coordinating with suppliers and managing complex supply chain relationships.',
    solution: 'Integrated supply chain management with supplier coordination and tracking.',
    icon: '🔗'
  },
  {
    challenge: 'Order Fulfillment',
    description: 'Processing orders efficiently with accurate picking and packing operations.',
    solution: 'Automated order processing with picking optimization and quality control.',
    icon: '📋'
  },
  {
    challenge: 'Cost Management',
    description: 'Controlling distribution costs and optimizing operational efficiency.',
    solution: 'Cost tracking and optimization with performance analytics and reporting.',
    icon: '💰'
  }
]

const distributionSolutions = [
  {
    title: 'Warehouse Management',
    description: 'Advanced warehouse operations with location tracking and automated processes.',
    features: [
      'Multi-location warehouse management',
      'Bin and location tracking',
      'Automated picking and packing',
      'Quality control and inspection',
      'Warehouse analytics and reporting'
    ],
    icon: '🏪'
  },
  {
    title: 'Inventory Management',
    description: 'Real-time inventory tracking with automated replenishment and forecasting.',
    features: [
      'Real-time inventory visibility',
      'Automated replenishment',
      'Demand forecasting',
      'Inventory optimization',
      'Stock level monitoring'
    ],
    icon: '📦'
  },
  {
    title: 'Logistics & Delivery',
    description: 'Route optimization and delivery management with tracking capabilities.',
    features: [
      'Route optimization and planning',
      'Delivery scheduling and tracking',
      'Fleet management',
      'Delivery performance analytics',
      'Customer delivery notifications'
    ],
    icon: '🚚'
  },
  {
    title: 'Order Management',
    description: 'Comprehensive order processing with fulfillment optimization.',
    features: [
      'Order processing and tracking',
      'Fulfillment optimization',
      'Order status management',
      'Customer communication',
      'Order analytics and reporting'
    ],
    icon: '📋'
  },
  {
    title: 'Supply Chain Management',
    description: 'Integrated supply chain coordination with supplier management.',
    features: [
      'Supplier relationship management',
      'Supply chain visibility',
      'Procurement optimization',
      'Supplier performance tracking',
      'Supply chain analytics'
    ],
    icon: '🔗'
  },
  {
    title: 'Cost & Performance Analytics',
    description: 'Comprehensive analytics for cost control and performance optimization.',
    features: [
      'Cost tracking and analysis',
      'Performance metrics and KPIs',
      'Operational efficiency reporting',
      'Profitability analysis',
      'Custom dashboards and reports'
    ],
    icon: '📊'
  }
]

const distributionProcess = [
  {
    step: '01',
    title: 'Order Receipt',
    description: 'Receive and process customer orders with validation and confirmation.'
  },
  {
    step: '02',
    title: 'Inventory Allocation',
    description: 'Allocate inventory from available stock and manage backorders.'
  },
  {
    step: '03',
    title: 'Warehouse Operations',
    description: 'Execute picking, packing, and quality control operations.'
  },
  {
    step: '04',
    title: 'Delivery Planning',
    description: 'Plan delivery routes and schedule shipments for optimal efficiency.'
  },
  {
    step: '05',
    title: 'Delivery Execution',
    description: 'Execute deliveries with tracking and customer communication.'
  },
  {
    step: '06',
    title: 'Performance Analysis',
    description: 'Analyze performance metrics and optimize operations for improvement.'
  }
]

const industryStats = [
  { metric: '50%', description: 'Improvement in delivery times' },
  { metric: '35%', description: 'Reduction in operational costs' },
  { metric: '45%', description: 'Improvement in inventory accuracy' },
  { metric: '40%', description: 'Increase in order fulfillment efficiency' }
]

const distributionTypes = [
  {
    type: 'Wholesale Distribution',
    description: 'B2B distribution with bulk orders and complex pricing structures.',
    features: ['Bulk order management', 'Complex pricing', 'Customer credit management', 'Volume discounts']
  },
  {
    type: 'Retail Distribution',
    description: 'B2C distribution with individual orders and consumer-focused operations.',
    features: ['Individual order processing', 'Consumer packaging', 'Delivery tracking', 'Customer service']
  },
  {
    type: 'Food & Beverage',
    description: 'Perishable goods distribution with temperature control and expiry management.',
    features: ['Temperature monitoring', 'Expiry date tracking', 'Cold chain management', 'Quality control']
  },
  {
    type: 'Pharmaceutical',
    description: 'Regulated distribution with compliance requirements and traceability.',
    features: ['Compliance tracking', 'Serial number management', 'Regulatory reporting', 'Quality assurance']
  }
]

export default function DistributionIndustryPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Distribution Industry Solutions",
          description: "Complete distribution management solution with warehouse management, logistics, and supply chain optimization"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Distribution Industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimize your distribution operations with Odoo's comprehensive solution. 
              From warehouse management to delivery optimization, streamline every aspect of your distribution business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Distribution Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Distribution Demo
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
              Distribution Industry Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Odoo transforms distribution operations across different business types.
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

      {/* Distribution Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Common Distribution Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distribution businesses face unique challenges. Here's how Odoo helps solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributionChallenges.map((challenge, index) => (
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

      {/* Distribution Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Distribution Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive distribution management tools for modern logistics operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributionSolutions.map((solution, index) => (
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

      {/* Distribution Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Distribution Business Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo adapts to different distribution business models and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionTypes.map((type, index) => (
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

      {/* Distribution Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Distribution Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to distribution management with our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributionProcess.map((step, index) => (
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
              Ready to Optimize Your Distribution Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our distribution experts help you implement Odoo and optimize your 
              warehouse management, logistics, and supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Distribution Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Distribution Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

