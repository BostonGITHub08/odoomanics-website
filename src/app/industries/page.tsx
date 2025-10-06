import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Industries: Tailored ERP Solutions for Every Business Sector',
  description: 'Discover how Odoo ERP transforms businesses across industries. Manufacturing, Retail, Distribution, Services, Healthcare, Education - customized solutions for every sector.',
  keywords: ['Odoo industries', 'ERP for manufacturing', 'retail ERP', 'distribution ERP', 'healthcare ERP', 'education ERP'],
  openGraph: {
    title: 'Odoo for Industries: Tailored ERP Solutions for Every Business Sector',
    description: 'Discover how Odoo ERP transforms businesses across industries. Manufacturing, Retail, Distribution, Services, Healthcare, Education - customized solutions for every sector.',
    images: ['https://odoomanics.com/_assets/og-industries.png'],
  },
}

const industries = [
  {
    name: 'Manufacturing',
    description: 'Streamline production with advanced MRP, quality control, and shop floor management.',
    features: ['Production Planning', 'Quality Control', 'Shop Floor Management', 'Supply Chain', 'Cost Tracking'],
    href: '/industries/manufacturing',
    icon: '🏭',
    color: 'from-blue-500 to-blue-600',
    stats: '40% reduction in production costs'
  },
  {
    name: 'Retail & eCommerce',
    description: 'Unify online and offline sales with integrated POS, inventory, and customer management.',
    features: ['POS Integration', 'Inventory Management', 'Customer Analytics', 'Multi-channel Sales', 'Order Fulfillment'],
    href: '/industries/retail',
    icon: '🛍️',
    color: 'from-green-500 to-green-600',
    stats: '60% increase in sales efficiency'
  },
  {
    name: 'Distribution & Logistics',
    description: 'Optimize warehouse operations and delivery with advanced logistics management.',
    features: ['Warehouse Management', 'Route Optimization', 'Fleet Management', 'Inventory Tracking', 'Delivery Scheduling'],
    href: '/industries/distribution',
    icon: '🚚',
    color: 'from-orange-500 to-orange-600',
    stats: '50% improvement in delivery times'
  },
  {
    name: 'Professional Services',
    description: 'Manage projects, resources, and billing with comprehensive service management tools.',
    features: ['Project Management', 'Time Tracking', 'Resource Planning', 'Client Billing', 'Knowledge Management'],
    href: '/industries/services',
    icon: '💼',
    color: 'from-purple-500 to-purple-600',
    stats: '35% increase in project profitability'
  },
  {
    name: 'Healthcare',
    description: 'Ensure compliance and patient care with specialized healthcare management solutions.',
    features: ['Patient Management', 'Compliance Tracking', 'Medical Records', 'Appointment Scheduling', 'Billing & Insurance'],
    href: '/industries/healthcare',
    icon: '🏥',
    color: 'from-red-500 to-red-600',
    stats: '25% reduction in administrative costs'
  },
  {
    name: 'Education',
    description: 'Manage academic operations with student information systems and administrative tools.',
    features: ['Student Management', 'Course Planning', 'Academic Records', 'Fee Management', 'Faculty Management'],
    href: '/industries/education',
    icon: '🎓',
    color: 'from-indigo-500 to-indigo-600',
    stats: '30% improvement in administrative efficiency'
  }
]

const industryBenefits = [
  {
    title: 'Industry-Specific Solutions',
    description: 'Pre-configured workflows and processes tailored to your industry requirements.',
    icon: '🎯'
  },
  {
    title: 'Compliance Ready',
    description: 'Built-in compliance features for industry regulations and standards.',
    icon: '📋'
  },
  {
    title: 'Scalable Architecture',
    description: 'Grow your business with solutions that scale with your industry needs.',
    icon: '📈'
  },
  {
    title: 'Expert Implementation',
    description: 'Industry experts who understand your business challenges and requirements.',
    icon: '👨‍💼'
  }
]

const caseStudyHighlights = [
  {
    industry: 'Manufacturing',
    company: 'ABC Manufacturing Ltd',
    challenge: 'Complex production planning and quality control',
    solution: 'Odoo Manufacturing with MRP and Quality modules',
    result: '40% reduction in production costs, 60% improvement in quality metrics'
  },
  {
    industry: 'Retail',
    company: 'XYZ Retail Chain',
    challenge: 'Multi-channel sales and inventory management',
    solution: 'Odoo eCommerce with POS and Inventory integration',
    result: '60% increase in sales efficiency, 50% reduction in stockouts'
  },
  {
    industry: 'Services',
    company: 'Professional Services Inc',
    challenge: 'Project management and resource allocation',
    solution: 'Odoo Project with Timesheet and HR modules',
    result: '35% increase in project profitability, 45% improvement in resource utilization'
  }
]

export default function IndustriesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Industry Solutions",
          description: "Tailored ERP solutions for Manufacturing, Retail, Distribution, Services, Healthcare, and Education industries"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Industries: Tailored ERP Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Every industry has unique challenges and requirements. Discover how Odoo ERP transforms businesses 
              across different sectors with industry-specific solutions and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Industry Consultation
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Industry Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manufacturing to healthcare, we provide specialized Odoo solutions for every industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">{industry.stats}</div>
                  <div className="text-sm text-gray-500">Average improvement</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={industry.href}
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

      {/* Industry Benefits */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Choose Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industry expertise ensures you get solutions that are perfectly tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses in your industry have transformed their operations with Odoo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudyHighlights.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-sm text-primary font-semibold mb-2">{caseStudy.industry}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{caseStudy.company}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Result:</h4>
                  <p className="text-gray-600 text-sm">{caseStudy.result}</p>
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
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our industry experts help you implement Odoo solutions tailored specifically for your business sector. 
              Get a free consultation and discover how we can optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Industry Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Industry Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
