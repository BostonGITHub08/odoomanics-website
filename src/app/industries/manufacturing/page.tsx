import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Manufacturing: Complete Production Management & MRP Solution',
  description: 'Transform your manufacturing operations with Odoo. Advanced MRP, production planning, quality control, shop floor management, and supply chain optimization for manufacturers.',
  keywords: ['Odoo manufacturing', 'manufacturing ERP', 'MRP system', 'production planning', 'quality control', 'shop floor management'],
  openGraph: {
    title: 'Odoo for Manufacturing: Complete Production Management & MRP Solution',
    description: 'Transform your manufacturing operations with Odoo. Advanced MRP, production planning, quality control, shop floor management, and supply chain optimization for manufacturers.',
    images: ['https://odoomanics.com/_assets/og-manufacturing-industry.png'],
  },
}

const manufacturingChallenges = [
  {
    challenge: 'Complex Production Planning',
    description: 'Managing multiple product lines with varying lead times and resource requirements.',
    solution: 'Advanced MRP algorithms with capacity planning and demand forecasting.',
    icon: '📅'
  },
  {
    challenge: 'Quality Control Issues',
    description: 'Ensuring consistent quality across all production processes and products.',
    solution: 'Integrated quality management with inspection plans and non-conformance tracking.',
    icon: '✅'
  },
  {
    challenge: 'Inventory Management',
    description: 'Balancing raw materials, work-in-progress, and finished goods inventory levels.',
    solution: 'Real-time inventory tracking with automated replenishment and demand planning.',
    icon: '📦'
  },
  {
    challenge: 'Cost Control',
    description: 'Tracking and controlling production costs for profitability analysis.',
    solution: 'Real-time cost tracking with variance analysis and profitability reporting.',
    icon: '💰'
  },
  {
    challenge: 'Supply Chain Coordination',
    description: 'Coordinating with suppliers and managing complex supply chain relationships.',
    solution: 'Integrated supplier management with purchase planning and vendor performance tracking.',
    icon: '🔗'
  },
  {
    challenge: 'Regulatory Compliance',
    description: 'Meeting industry standards and regulatory requirements for manufacturing.',
    solution: 'Built-in compliance features with audit trails and regulatory reporting.',
    icon: '📋'
  }
]

const manufacturingSolutions = [
  {
    title: 'Production Planning & MRP',
    description: 'Advanced material requirements planning with capacity optimization and demand forecasting.',
    features: [
      'Master Production Schedule (MPS)',
      'Material Requirements Planning (MRP)',
      'Capacity planning and scheduling',
      'Demand forecasting algorithms',
      'Production optimization tools'
    ],
    icon: '📊'
  },
  {
    title: 'Shop Floor Management',
    description: 'Real-time production monitoring and control with mobile shop floor access.',
    features: [
      'Real-time production dashboards',
      'Work order tracking and management',
      'Machine monitoring and maintenance',
      'Operator efficiency tracking',
      'Production reporting and analytics'
    ],
    icon: '🏭'
  },
  {
    title: 'Quality Management',
    description: 'Comprehensive quality control with inspection plans and non-conformance tracking.',
    features: [
      'Inspection plans and checklists',
      'Quality control points',
      'Non-conformance tracking',
      'Supplier quality management',
      'Quality reporting and analytics'
    ],
    icon: '🔍'
  },
  {
    title: 'Supply Chain Management',
    description: 'Integrated supply chain coordination with supplier management and procurement.',
    features: [
      'Supplier relationship management',
      'Purchase planning and optimization',
      'Vendor performance tracking',
      'Supply chain visibility',
      'Procurement analytics'
    ],
    icon: '🚚'
  },
  {
    title: 'Cost Management',
    description: 'Real-time cost tracking and analysis for better profitability control.',
    features: [
      'Real-time cost tracking',
      'Standard vs actual cost analysis',
      'Labor and overhead allocation',
      'Profitability analysis',
      'Cost variance reporting'
    ],
    icon: '💹'
  },
  {
    title: 'Compliance & Reporting',
    description: 'Industry compliance with audit trails and regulatory reporting capabilities.',
    features: [
      'Audit trail and documentation',
      'Regulatory compliance reporting',
      'Traceability and recall management',
      'Industry standard compliance',
      'Document management system'
    ],
    icon: '📋'
  }
]

const manufacturingProcess = [
  {
    step: '01',
    title: 'Demand Planning',
    description: 'Analyze market demand and create production forecasts using historical data and market trends.'
  },
  {
    step: '02',
    title: 'Production Planning',
    description: 'Generate optimized production plans using MRP algorithms and capacity constraints.'
  },
  {
    step: '03',
    title: 'Material Procurement',
    description: 'Automatically generate purchase orders for raw materials based on production requirements.'
  },
  {
    step: '04',
    title: 'Production Execution',
    description: 'Execute production with real-time monitoring, quality checks, and progress tracking.'
  },
  {
    step: '05',
    title: 'Quality Control',
    description: 'Conduct quality inspections and manage non-conformances throughout production.'
  },
  {
    step: '06',
    title: 'Delivery & Analysis',
    description: 'Deliver finished goods and analyze production performance for continuous improvement.'
  }
]

const industryStats = [
  { metric: '40%', description: 'Reduction in production costs' },
  { metric: '60%', description: 'Improvement in quality metrics' },
  { metric: '50%', description: 'Reduction in lead times' },
  { metric: '35%', description: 'Increase in production efficiency' }
]

const caseStudies = [
  {
    company: 'ABC Manufacturing Ltd',
    industry: 'Automotive Parts',
    challenge: 'Complex multi-level BOMs and quality control requirements',
    solution: 'Odoo Manufacturing with advanced MRP and quality management',
    results: [
      '40% reduction in production costs',
      '60% improvement in quality metrics',
      '50% reduction in lead times'
    ]
  },
  {
    company: 'XYZ Electronics Inc',
    industry: 'Electronics Manufacturing',
    challenge: 'High-volume production with strict quality standards',
    solution: 'Odoo with shop floor control and real-time monitoring',
    results: [
      '35% increase in production efficiency',
      '45% reduction in defects',
      '30% improvement in on-time delivery'
    ]
  }
]

export default function ManufacturingIndustryPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Manufacturing Industry Solutions",
          description: "Complete manufacturing ERP solution with MRP, production planning, quality control, and shop floor management"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Manufacturing Industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your manufacturing operations with Odoo's comprehensive ERP solution. 
              From production planning to quality control, optimize every aspect of your manufacturing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Manufacturing Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Manufacturing Demo
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
              Manufacturing Industry Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Odoo transforms manufacturing operations across different industries.
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

      {/* Manufacturing Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Common Manufacturing Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every manufacturer faces unique challenges. Here's how Odoo helps solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingChallenges.map((challenge, index) => (
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

      {/* Manufacturing Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing management tools designed for modern production environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingSolutions.map((solution, index) => (
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

      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Manufacturing Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to manufacturing with our proven process methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingProcess.map((step, index) => (
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

      {/* Case Studies */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Manufacturing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how manufacturers have transformed their operations with Odoo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-sm text-primary font-semibold mb-2">{caseStudy.industry}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{caseStudy.company}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/case-studies"
                  className="text-primary font-semibold hover:text-primary-light transition-colors duration-200"
                >
                  Read Full Case Study →
                </Link>
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
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our manufacturing experts help you implement Odoo and optimize your production processes 
              for maximum efficiency, quality, and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Manufacturing Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Manufacturing Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

