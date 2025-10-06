import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo HR: Complete Human Resources Management System',
  description: 'Manage your workforce with Odoo HR. Employee management, recruitment, payroll, time tracking, performance management, and HR analytics.',
  keywords: ['Odoo HR', 'human resources', 'employee management', 'recruitment', 'payroll', 'time tracking'],
  openGraph: {
    title: 'Odoo HR: Complete Human Resources Management System',
    description: 'Manage your workforce with Odoo HR. Employee management, recruitment, payroll, time tracking, performance management, and HR analytics.',
    images: ['https://odoomanics.com/_assets/og-hr.png'],
  },
}

const hrFeatures = [
  {
    title: 'Employee Management',
    description: 'Manage employee information, contracts, and organizational structure with comprehensive HR records.',
    benefits: [
      'Employee database and profiles',
      'Contract and document management',
      'Organizational chart',
      'Employee self-service portal',
      'Document storage and access'
    ],
    icon: '👥'
  },
  {
    title: 'Recruitment Management',
    description: 'Streamline your hiring process with job postings, applicant tracking, and interview management.',
    benefits: [
      'Job posting and management',
      'Applicant tracking system',
      'Interview scheduling',
      'Candidate evaluation',
      'Onboarding automation'
    ],
    icon: '🎯'
  },
  {
    title: 'Payroll Processing',
    description: 'Automate payroll processing with salary calculations, tax deductions, and payment management.',
    benefits: [
      'Automated salary calculations',
      'Tax and deduction management',
      'Payslip generation',
      'Bank transfer processing',
      'Payroll reporting and compliance'
    ],
    icon: '💰'
  },
  {
    title: 'Time & Attendance',
    description: 'Track employee time and attendance with flexible time tracking and leave management.',
    benefits: [
      'Time tracking and timesheets',
      'Leave request management',
      'Attendance monitoring',
      'Overtime calculations',
      'Time reporting and analytics'
    ],
    icon: '⏰'
  },
  {
    title: 'Performance Management',
    description: 'Manage employee performance with goal setting, reviews, and development planning.',
    benefits: [
      'Goal setting and tracking',
      'Performance reviews',
      '360-degree feedback',
      'Development planning',
      'Performance analytics'
    ],
    icon: '📊'
  },
  {
    title: 'Training & Development',
    description: 'Plan and track employee training and development programs for skill enhancement.',
    benefits: [
      'Training program management',
      'Course scheduling',
      'Progress tracking',
      'Certification management',
      'Training analytics'
    ],
    icon: '🎓'
  }
]

const hrProcess = [
  {
    step: '01',
    title: 'Employee Onboarding',
    description: 'Streamline the onboarding process with automated workflows and document management.'
  },
  {
    step: '02',
    title: 'Time & Attendance',
    description: 'Track employee time and manage attendance with flexible time tracking systems.'
  },
  {
    step: '03',
    title: 'Performance Management',
    description: 'Set goals, conduct reviews, and track employee performance and development.'
  },
  {
    step: '04',
    title: 'Payroll Processing',
    description: 'Process payroll with automated calculations and compliance management.'
  },
  {
    step: '05',
    title: 'Training & Development',
    description: 'Plan and deliver training programs to enhance employee skills and knowledge.'
  },
  {
    step: '06',
    title: 'HR Analytics',
    description: 'Analyze HR data and generate reports for better decision making and compliance.'
  }
]

const integrations = [
  { name: 'Accounting', description: 'Payroll integration and financial reporting' },
  { name: 'Project', description: 'Time tracking and project resource management' },
  { name: 'Fleet', description: 'Vehicle management and driver tracking' },
  { name: 'Expenses', description: 'Employee expense management and reimbursement' },
  { name: 'Recruitment', description: 'Integrated hiring and onboarding process' },
  { name: 'Time Off', description: 'Leave management and vacation tracking' }
]

const benefits = [
  {
    title: 'Streamlined HR Processes',
    description: 'Automate routine HR tasks and improve efficiency with integrated workflows.',
    icon: '⚡'
  },
  {
    title: 'Better Employee Experience',
    description: 'Provide employees with self-service tools and better communication channels.',
    icon: '😊'
  },
  {
    title: 'Compliance Management',
    description: 'Ensure compliance with labor laws and regulations with automated reporting.',
    icon: '📋'
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make informed HR decisions with comprehensive analytics and reporting.',
    icon: '📊'
  }
]

export default function HRPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo HR Implementation",
          description: "Complete human resources management solution with employee management, payroll, and performance tracking"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo HR: Complete Human Resources Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Manage your workforce effectively with Odoo HR. From recruitment to retirement, 
              handle every aspect of human resources with comprehensive tools and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get HR Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request HR Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HR Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              HR Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo HR provides comprehensive tools for managing your workforce and HR processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrFeatures.map((feature, index) => (
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

      {/* HR Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              HR Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to human resources management with our proven HR process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrProcess.map((step, index) => (
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
              HR Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo HR integrates seamlessly with other business modules for complete workforce management.
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
              Why Choose Odoo HR?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo HR helps you manage your workforce effectively and improve employee satisfaction.
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
              Ready to Transform Your HR Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our HR experts help you implement Odoo HR and optimize your human resources processes for better employee management and satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get HR Implementation Quote
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request HR Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
