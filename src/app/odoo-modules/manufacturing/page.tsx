import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Manufacturing: Complete Production Management and MRP',
  description: 'Optimize your manufacturing with Odoo Manufacturing. Production planning, work orders, quality control, cost tracking, and MRP for efficient operations.',
  keywords: ['Odoo Manufacturing', 'production management', 'MRP', 'work orders', 'quality control', 'cost tracking'],
  openGraph: {
    title: 'Odoo Manufacturing: Complete Production Management and MRP',
    description: 'Optimize your manufacturing with Odoo Manufacturing. Production planning, work orders, quality control, cost tracking, and MRP for efficient operations.',
    images: ['https://odoomanics.com/_assets/og-manufacturing.png'],
  },
}

const manufacturingFeatures = [
  {
    title: 'Production Planning',
    description: 'Plan and schedule production with advanced MRP algorithms and capacity planning tools.',
    benefits: [
      'Master Production Schedule (MPS)',
      'Material Requirements Planning (MRP)',
      'Capacity planning and scheduling',
      'Demand forecasting',
      'Production optimization'
    ],
    icon: '📅'
  },
  {
    title: 'Work Order Management',
    description: 'Create, track, and manage work orders with real-time production monitoring.',
    benefits: [
      'Work order creation and scheduling',
      'Real-time production tracking',
      'Resource allocation',
      'Progress monitoring',
      'Quality checkpoints'
    ],
    icon: '🔧'
  },
  {
    title: 'Bill of Materials (BOM)',
    description: 'Manage complex product structures with multi-level BOMs and routing operations.',
    benefits: [
      'Multi-level BOM management',
      'Routing and operation definitions',
      'Alternative BOMs',
      'BOM versioning',
      'Cost rollup calculations'
    ],
    icon: '📋'
  },
  {
    title: 'Quality Control',
    description: 'Implement quality control processes with inspection plans and quality tracking.',
    benefits: [
      'Inspection plans and checklists',
      'Quality control points',
      'Non-conformance tracking',
      'Supplier quality management',
      'Quality reporting and analytics'
    ],
    icon: '✅'
  },
  {
    title: 'Cost Tracking',
    description: 'Track production costs with real-time cost analysis and variance reporting.',
    benefits: [
      'Real-time cost tracking',
      'Standard vs actual costs',
      'Cost variance analysis',
      'Labor and overhead allocation',
      'Profitability analysis'
    ],
    icon: '💰'
  },
  {
    title: 'Shop Floor Control',
    description: 'Monitor and control shop floor operations with real-time dashboards and mobile access.',
    benefits: [
      'Real-time production dashboards',
      'Mobile shop floor access',
      'Machine monitoring',
      'Operator efficiency tracking',
      'Production reporting'
    ],
    icon: '📱'
  }
]

const manufacturingProcess = [
  {
    step: '01',
    title: 'Demand Planning',
    description: 'Analyze demand patterns and create production forecasts based on sales orders and historical data.'
  },
  {
    step: '02',
    title: 'Production Planning',
    description: 'Generate production plans using MRP algorithms to optimize resource utilization and meet demand.'
  },
  {
    step: '03',
    title: 'Work Order Creation',
    description: 'Create and schedule work orders based on production plans and available resources.'
  },
  {
    step: '04',
    title: 'Material Preparation',
    description: 'Prepare materials and components according to BOM requirements and work order specifications.'
  },
  {
    step: '05',
    title: 'Production Execution',
    description: 'Execute production with real-time monitoring, quality checks, and progress tracking.'
  },
  {
    step: '06',
    title: 'Quality & Delivery',
    description: 'Complete quality inspections and deliver finished goods to inventory or customers.'
  }
]

const integrations = [
  { name: 'Inventory', description: 'Automatic component consumption and finished goods production' },
  { name: 'Sales', description: 'Production planning based on sales orders and forecasts' },
  { name: 'Purchase', description: 'Automatic purchase orders for raw materials and components' },
  { name: 'Accounting', description: 'Production cost tracking and financial reporting' },
  { name: 'Quality', description: 'Integrated quality control and inspection management' },
  { name: 'Maintenance', description: 'Equipment maintenance scheduling and tracking' }
]

const benefits = [
  {
    title: 'Reduced Production Costs',
    description: 'Optimize production planning and reduce waste with better resource utilization.',
    icon: '💸'
  },
  {
    title: 'Improved Quality',
    description: 'Implement quality control processes to reduce defects and improve customer satisfaction.',
    icon: '⭐'
  },
  {
    title: 'Better Planning',
    description: 'Use MRP and forecasting to improve production planning and reduce lead times.',
    icon: '📊'
  },
  {
    title: 'Real-Time Visibility',
    description: 'Monitor production in real-time with dashboards and mobile access.',
    icon: '👁️'
  }
]

export default function ManufacturingPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Manufacturing Implementation",
          description: "Complete production management solution with MRP, work orders, and quality control"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Manufacturing: Complete Production Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimize your manufacturing operations with Odoo Manufacturing. From production planning to quality control, 
              manage every aspect of your manufacturing process with advanced MRP and shop floor control.
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

      {/* Manufacturing Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Manufacturing Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Manufacturing provides comprehensive tools for production planning, execution, and control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingFeatures.map((feature, index) => (
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

      {/* Manufacturing Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Manufacturing Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to manufacturing with our proven production management process.
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

      {/* Integrations */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Manufacturing Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Manufacturing integrates seamlessly with all business modules for complete production visibility.
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
              Why Choose Odoo Manufacturing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Manufacturing helps you optimize production processes and improve manufacturing efficiency.
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
              Ready to Optimize Your Manufacturing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our manufacturing experts help you implement Odoo Manufacturing and optimize your production processes for maximum efficiency and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Manufacturing Implementation Quote
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
