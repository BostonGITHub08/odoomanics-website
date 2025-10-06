import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Data Migration Services - Seamless System Transition',
  description: 'Professional data migration services from legacy systems to Odoo. Zero data loss, comprehensive validation, and smooth transition guaranteed.',
  openGraph: {
    title: 'Odoo Data Migration Services - Seamless System Transition',
    description: 'Professional data migration services from legacy systems to Odoo. Zero data loss, comprehensive validation, and smooth transition guaranteed.',
    images: ['https://odoomanics.com/_assets/og-migration.png'],
  },
}

const migrationSteps = [
  {
    step: '01',
    title: 'Data Assessment',
    description: 'We analyze your existing data structure, quality, and relationships to create a comprehensive migration plan.',
    activities: [
      'Data inventory and mapping',
      'Data quality analysis',
      'Relationship identification',
      'Migration strategy planning',
      'Risk assessment'
    ]
  },
  {
    step: '02',
    title: 'Data Cleaning & Preparation',
    description: 'We clean and standardize your data to ensure compatibility with Odoo and maintain data integrity.',
    activities: [
      'Duplicate data removal',
      'Data standardization',
      'Format conversion',
      'Validation rules setup',
      'Data enrichment'
    ]
  },
  {
    step: '03',
    title: 'Migration Development',
    description: 'We develop custom migration scripts and tools to transfer your data safely and efficiently.',
    activities: [
      'Migration script development',
      'Data transformation logic',
      'Error handling mechanisms',
      'Rollback procedures',
      'Testing frameworks'
    ]
  },
  {
    step: '04',
    title: 'Testing & Validation',
    description: 'We conduct comprehensive testing to ensure data accuracy and system integrity before go-live.',
    activities: [
      'Data validation testing',
      'Integrity checks',
      'Performance testing',
      'User acceptance testing',
      'Rollback testing'
    ]
  },
  {
    step: '05',
    title: 'Migration Execution',
    description: 'We execute the migration with minimal downtime and maximum data safety.',
    activities: [
      'Pre-migration backup',
      'Staged migration execution',
      'Real-time monitoring',
      'Issue resolution',
      'Post-migration verification'
    ]
  },
  {
    step: '06',
    title: 'Post-Migration Support',
    description: 'We provide ongoing support to ensure smooth operation and address any post-migration issues.',
    activities: [
      'Data verification',
      'User training',
      'Issue resolution',
      'Performance monitoring',
      'Documentation delivery'
    ]
  }
]

const supportedSystems = [
  {
    name: 'SAP',
    description: 'Migrate from SAP ERP to Odoo with full data integrity',
    icon: '🏢'
  },
  {
    name: 'Microsoft Dynamics',
    description: 'Seamless migration from Dynamics NAV/365 to Odoo',
    icon: '💼'
  },
  {
    name: 'QuickBooks',
    description: 'Complete accounting data migration from QuickBooks',
    icon: '📊'
  },
  {
    name: 'Salesforce',
    description: 'CRM data migration from Salesforce to Odoo',
    icon: '👥'
  },
  {
    name: 'Custom Systems',
    description: 'Migration from any custom or legacy system',
    icon: '🔧'
  },
  {
    name: 'Excel/CSV',
    description: 'Import data from spreadsheets and CSV files',
    icon: '📈'
  }
]

const benefits = [
  {
    title: 'Zero Data Loss',
    description: 'Our comprehensive validation ensures 100% data integrity during migration.',
    icon: '🛡️'
  },
  {
    title: 'Minimal Downtime',
    description: 'Efficient migration process minimizes business disruption.',
    icon: '⏱️'
  },
  {
    title: 'Data Validation',
    description: 'Thorough testing and validation ensure data accuracy.',
    icon: '✅'
  },
  {
    title: 'Rollback Support',
    description: 'Complete rollback procedures in case of any issues.',
    icon: '🔄'
  }
]

export default function MigrationPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Data Migration Services",
          description: "Professional data migration services from legacy systems to Odoo with zero data loss and comprehensive validation"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Data Migration Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Seamlessly migrate your data from legacy systems to Odoo with zero data loss. 
              Our expert team ensures a smooth transition with comprehensive validation and testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Migration Quote
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Migration Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven 6-step methodology to ensure successful data migration with zero data loss and minimal business disruption.
            </p>
          </div>

          <div className="space-y-12">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-primary text-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Systems We Migrate From
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience migrating data from a wide range of systems and platforms to Odoo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportedSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{system.name}</h3>
                <p className="text-gray-600">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Choose Our Migration Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team and proven methodology ensure successful data migration with zero data loss.
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
              Ready to Migrate Your Data?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your migration requirements and create a plan that ensures zero data loss and smooth transition to Odoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Migration Assessment
              </Link>
              <Link href="/pricing" className="btn-outline-white">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
