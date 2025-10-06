import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Healthcare: Patient Management & Compliance Solution',
  description: 'Streamline healthcare operations with Odoo. Patient management, appointment scheduling, medical records, billing, insurance, and compliance for healthcare providers.',
  keywords: ['Odoo healthcare', 'healthcare ERP', 'patient management', 'medical records', 'appointment scheduling', 'healthcare compliance'],
  openGraph: {
    title: 'Odoo for Healthcare: Patient Management & Compliance Solution',
    description: 'Streamline healthcare operations with Odoo. Patient management, appointment scheduling, medical records, billing, insurance, and compliance for healthcare providers.',
    images: ['https://odoomanics.com/_assets/og-healthcare-industry.png'],
  },
}

const healthcareChallenges = [
  {
    challenge: 'Patient Management',
    description: 'Managing patient information, medical history, and treatment records efficiently.',
    solution: 'Comprehensive patient management with medical records and treatment tracking.',
    icon: '👥'
  },
  {
    challenge: 'Appointment Scheduling',
    description: 'Coordinating appointments across multiple providers and managing patient flow.',
    solution: 'Advanced scheduling system with provider availability and automated reminders.',
    icon: '📅'
  },
  {
    challenge: 'Medical Records',
    description: 'Maintaining secure and accessible medical records with proper documentation.',
    solution: 'Secure document management with HIPAA compliance and audit trails.',
    icon: '📋'
  },
  {
    challenge: 'Billing & Insurance',
    description: 'Managing complex billing processes and insurance claim processing.',
    solution: 'Automated billing system with insurance integration and claim management.',
    icon: '💰'
  },
  {
    challenge: 'Compliance & Regulations',
    description: 'Meeting healthcare regulations and maintaining compliance standards.',
    solution: 'Built-in compliance features with regulatory reporting and audit management.',
    icon: '🔒'
  },
  {
    challenge: 'Inventory Management',
    description: 'Managing medical supplies, equipment, and pharmaceutical inventory.',
    solution: 'Specialized inventory management with expiry tracking and compliance monitoring.',
    icon: '💊'
  }
]

const healthcareSolutions = [
  {
    title: 'Patient Management',
    description: 'Comprehensive patient information management with medical history and treatment tracking.',
    features: [
      'Patient registration and profiles',
      'Medical history tracking',
      'Treatment plan management',
      'Patient communication portal',
      'Health record integration'
    ],
    icon: '👤'
  },
  {
    title: 'Appointment Scheduling',
    description: 'Advanced scheduling system with provider management and patient flow optimization.',
    features: [
      'Provider availability management',
      'Appointment booking and rescheduling',
      'Automated reminders and notifications',
      'Waitlist management',
      'Scheduling analytics and reporting'
    ],
    icon: '📅'
  },
  {
    title: 'Medical Records',
    description: 'Secure document management with HIPAA compliance and audit trails.',
    features: [
      'Electronic health records (EHR)',
      'Document management and storage',
      'HIPAA compliance features',
      'Audit trail and logging',
      'Secure access controls'
    ],
    icon: '📋'
  },
  {
    title: 'Billing & Insurance',
    description: 'Automated billing system with insurance integration and claim management.',
    features: [
      'Automated billing and invoicing',
      'Insurance claim processing',
      'Payment tracking and management',
      'Financial reporting and analytics',
      'Insurance verification'
    ],
    icon: '💳'
  },
  {
    title: 'Compliance Management',
    description: 'Built-in compliance features with regulatory reporting and audit management.',
    features: [
      'Regulatory compliance tracking',
      'Audit management and reporting',
      'Policy and procedure management',
      'Risk assessment tools',
      'Compliance training tracking'
    ],
    icon: '🔒'
  },
  {
    title: 'Inventory & Supplies',
    description: 'Specialized inventory management for medical supplies and equipment.',
    features: [
      'Medical supply tracking',
      'Equipment management',
      'Pharmaceutical inventory',
      'Expiry date monitoring',
      'Supplier management'
    ],
    icon: '💊'
  }
]

const healthcareProcess = [
  {
    step: '01',
    title: 'Patient Registration',
    description: 'Register new patients and collect necessary information and documentation.'
  },
  {
    step: '02',
    title: 'Appointment Scheduling',
    description: 'Schedule appointments with appropriate providers based on patient needs.'
  },
  {
    step: '03',
    title: 'Medical Consultation',
    description: 'Conduct medical consultations with proper documentation and record keeping.'
  },
  {
    step: '04',
    title: 'Treatment Planning',
    description: 'Develop treatment plans and manage ongoing patient care and monitoring.'
  },
  {
    step: '05',
    title: 'Billing & Insurance',
    description: 'Process billing and insurance claims with proper documentation and follow-up.'
  },
  {
    step: '06',
    title: 'Follow-up Care',
    description: 'Schedule follow-up appointments and maintain ongoing patient relationships.'
  }
]

const industryStats = [
  { metric: '25%', description: 'Reduction in administrative costs' },
  { metric: '40%', description: 'Improvement in appointment efficiency' },
  { metric: '60%', description: 'Reduction in billing errors' },
  { metric: '35%', description: 'Improvement in patient satisfaction' }
]

const healthcareTypes = [
  {
    type: 'Hospitals',
    description: 'Large healthcare facilities with multiple departments and complex operations.',
    features: ['Multi-department management', 'Complex scheduling', 'Resource allocation', 'Emergency protocols']
  },
  {
    type: 'Clinics',
    description: 'Outpatient facilities with specialized medical services and treatments.',
    features: ['Specialized care tracking', 'Outpatient scheduling', 'Treatment protocols', 'Patient education']
  },
  {
    type: 'Dental Practices',
    description: 'Dental care providers with appointment-based services and treatment planning.',
    features: ['Treatment planning', 'Appointment management', 'Insurance processing', 'Patient education']
  },
  {
    type: 'Mental Health',
    description: 'Mental health providers with therapy sessions and treatment management.',
    features: ['Session tracking', 'Treatment plans', 'Confidentiality management', 'Progress monitoring']
  }
]

export default function HealthcareIndustryPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Healthcare Industry Solutions",
          description: "Complete healthcare management solution with patient management, appointment scheduling, and compliance features"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Healthcare Industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your healthcare operations with Odoo's comprehensive solution. 
              From patient management to compliance, optimize every aspect of your healthcare practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Healthcare Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Healthcare Demo
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
              Healthcare Industry Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Odoo transforms healthcare operations across different practice types.
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

      {/* Healthcare Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Common Healthcare Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare providers face unique challenges. Here's how Odoo helps solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareChallenges.map((challenge, index) => (
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

      {/* Healthcare Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare management tools designed for modern medical practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareSolutions.map((solution, index) => (
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

      {/* Healthcare Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Healthcare Practice Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo adapts to different healthcare practice models and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareTypes.map((type, index) => (
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

      {/* Healthcare Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Healthcare Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to healthcare delivery with our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareProcess.map((step, index) => (
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
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our healthcare experts help you implement Odoo and optimize your 
              patient management, scheduling, and compliance processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Healthcare Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Healthcare Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
