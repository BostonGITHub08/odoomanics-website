import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Professional Services: Project Management & Resource Planning',
  description: 'Optimize your professional services with Odoo. Project management, time tracking, resource planning, client billing, and knowledge management for service businesses.',
  keywords: ['Odoo professional services', 'project management', 'time tracking', 'resource planning', 'client billing', 'service management'],
  openGraph: {
    title: 'Odoo for Professional Services: Project Management & Resource Planning',
    description: 'Optimize your professional services with Odoo. Project management, time tracking, resource planning, client billing, and knowledge management for service businesses.',
    images: ['https://odoomanics.com/_assets/og-services-industry.png'],
  },
}

const serviceChallenges = [
  {
    challenge: 'Project Management',
    description: 'Managing multiple projects with different timelines, budgets, and resource requirements.',
    solution: 'Comprehensive project management with Gantt charts, resource allocation, and progress tracking.',
    icon: '📋'
  },
  {
    challenge: 'Time Tracking',
    description: 'Accurately tracking billable hours and project time across different clients and projects.',
    solution: 'Automated time tracking with mobile access and detailed reporting capabilities.',
    icon: '⏰'
  },
  {
    challenge: 'Resource Planning',
    description: 'Optimizing resource allocation and managing team capacity across multiple projects.',
    solution: 'Advanced resource planning with capacity management and skill-based allocation.',
    icon: '👥'
  },
  {
    challenge: 'Client Billing',
    description: 'Managing complex billing structures with different rates, contracts, and payment terms.',
    solution: 'Flexible billing system with automated invoicing and payment tracking.',
    icon: '💰'
  },
  {
    challenge: 'Knowledge Management',
    description: 'Capturing and sharing knowledge across projects and team members effectively.',
    solution: 'Centralized knowledge base with document management and collaboration tools.',
    icon: '📚'
  },
  {
    challenge: 'Client Communication',
    description: 'Maintaining clear communication with clients and providing project visibility.',
    solution: 'Client portal with project updates, document sharing, and communication tools.',
    icon: '💬'
  }
]

const serviceSolutions = [
  {
    title: 'Project Management',
    description: 'Complete project lifecycle management with planning, execution, and delivery tracking.',
    features: [
      'Project planning and scheduling',
      'Gantt charts and milestones',
      'Task management and assignment',
      'Progress tracking and reporting',
      'Project templates and workflows'
    ],
    icon: '📊'
  },
  {
    title: 'Time & Expense Tracking',
    description: 'Comprehensive time tracking with expense management and billable hour calculation.',
    features: [
      'Time tracking and timesheets',
      'Expense management and approval',
      'Billable hour calculation',
      'Mobile time tracking',
      'Time and expense reporting'
    ],
    icon: '⏱️'
  },
  {
    title: 'Resource Management',
    description: 'Optimize resource allocation with capacity planning and skill-based assignment.',
    features: [
      'Resource capacity planning',
      'Skill-based resource allocation',
      'Team workload management',
      'Resource utilization analytics',
      'Availability and scheduling'
    ],
    icon: '👨‍💼'
  },
  {
    title: 'Client Billing',
    description: 'Flexible billing system with automated invoicing and payment management.',
    features: [
      'Flexible billing structures',
      'Automated invoice generation',
      'Payment tracking and management',
      'Contract and rate management',
      'Financial reporting and analytics'
    ],
    icon: '🧾'
  },
  {
    title: 'Knowledge Management',
    description: 'Centralized knowledge base with document management and collaboration tools.',
    features: [
      'Document management system',
      'Knowledge base and wiki',
      'Project documentation',
      'Team collaboration tools',
      'Search and retrieval system'
    ],
    icon: '📖'
  },
  {
    title: 'Client Portal',
    description: 'Client-facing portal with project visibility and communication tools.',
    features: [
      'Project status and updates',
      'Document sharing and access',
      'Communication and messaging',
      'Invoice and payment portal',
      'Project collaboration tools'
    ],
    icon: '🌐'
  }
]

const serviceProcess = [
  {
    step: '01',
    title: 'Project Initiation',
    description: 'Define project scope, requirements, and resource needs with client consultation.'
  },
  {
    step: '02',
    title: 'Resource Planning',
    description: 'Allocate team members and resources based on project requirements and availability.'
  },
  {
    step: '03',
    title: 'Project Execution',
    description: 'Execute project tasks with time tracking, progress monitoring, and client communication.'
  },
  {
    step: '04',
    title: 'Time & Expense Tracking',
    description: 'Track billable hours and expenses with automated reporting and approval workflows.'
  },
  {
    step: '05',
    title: 'Client Billing',
    description: 'Generate invoices and manage payments with automated billing and tracking.'
  },
  {
    step: '06',
    title: 'Project Delivery',
    description: 'Deliver project deliverables and conduct post-project analysis and knowledge capture.'
  }
]

const industryStats = [
  { metric: '35%', description: 'Increase in project profitability' },
  { metric: '45%', description: 'Improvement in resource utilization' },
  { metric: '50%', description: 'Reduction in administrative time' },
  { metric: '40%', description: 'Improvement in client satisfaction' }
]

const serviceTypes = [
  {
    type: 'Consulting Services',
    description: 'Management and business consulting with project-based billing.',
    features: ['Project-based billing', 'Expertise tracking', 'Client relationship management', 'Knowledge sharing']
  },
  {
    type: 'IT Services',
    description: 'Software development and IT support with time-based billing.',
    features: ['Time-based billing', 'Technical documentation', 'Issue tracking', 'Client support portal']
  },
  {
    type: 'Marketing Agencies',
    description: 'Creative and marketing services with campaign management.',
    features: ['Campaign management', 'Creative asset tracking', 'Client collaboration', 'Performance analytics']
  },
  {
    type: 'Legal Services',
    description: 'Legal practice management with case tracking and billing.',
    features: ['Case management', 'Document management', 'Billing by activity', 'Client confidentiality']
  }
]

export default function ServicesIndustryPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Professional Services Solutions",
          description: "Complete project management solution with time tracking, resource planning, and client billing for service businesses"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Professional Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Optimize your professional services with Odoo's comprehensive project management solution. 
              From time tracking to client billing, manage every aspect of your service business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Services Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Services Demo
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
              Professional Services Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Odoo transforms professional services across different business types.
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

      {/* Service Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Common Service Industry Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services face unique challenges. Here's how Odoo helps solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceChallenges.map((challenge, index) => (
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

      {/* Service Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Professional Services Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for professional service businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceSolutions.map((solution, index) => (
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

      {/* Service Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Professional Service Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo adapts to different professional service business models and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((type, index) => (
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

      {/* Service Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Professional Services Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to service delivery with our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
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
              Ready to Optimize Your Professional Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our professional services experts help you implement Odoo and optimize your 
              project management, resource planning, and client billing processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Services Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Services Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

