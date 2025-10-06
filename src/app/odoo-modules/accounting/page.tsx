import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Accounting: Complete Financial Management and Reporting',
  description: 'Master your finances with Odoo Accounting. General ledger, invoicing, bank reconciliation, financial reporting, and compliance for businesses of all sizes.',
  keywords: ['Odoo Accounting', 'financial management', 'general ledger', 'invoicing', 'bank reconciliation', 'financial reporting'],
  openGraph: {
    title: 'Odoo Accounting: Complete Financial Management and Reporting',
    description: 'Master your finances with Odoo Accounting. General ledger, invoicing, bank reconciliation, financial reporting, and compliance for businesses of all sizes.',
    images: ['https://odoomanics.com/_assets/og-accounting.png'],
  },
}

const accountingFeatures = [
  {
    title: 'General Ledger',
    description: 'Complete double-entry bookkeeping with automated journal entries and chart of accounts management.',
    benefits: [
      'Automated journal entries',
      'Multi-currency support',
      'Chart of accounts management',
      'Period closing automation',
      'Audit trail and compliance'
    ],
    icon: '📚'
  },
  {
    title: 'Invoicing & Billing',
    description: 'Streamline invoicing with automated billing, payment tracking, and customer portal integration.',
    benefits: [
      'Automated invoice generation',
      'Recurring billing setup',
      'Payment tracking and matching',
      'Customer portal access',
      'Late payment reminders'
    ],
    icon: '🧾'
  },
  {
    title: 'Bank Reconciliation',
    description: 'Automate bank reconciliation with intelligent matching and exception handling.',
    benefits: [
      'Automatic bank import',
      'Smart transaction matching',
      'Exception handling',
      'Multi-bank support',
      'Reconciliation reports'
    ],
    icon: '🏦'
  },
  {
    title: 'Financial Reporting',
    description: 'Generate comprehensive financial reports including P&L, Balance Sheet, and Cash Flow statements.',
    benefits: [
      'Profit & Loss statements',
      'Balance Sheet reports',
      'Cash Flow analysis',
      'Budget vs Actual reports',
      'Custom report builder'
    ],
    icon: '📊'
  },
  {
    title: 'Tax Management',
    description: 'Handle complex tax requirements with automated tax calculations and compliance reporting.',
    benefits: [
      'Automated tax calculations',
      'Multi-tax support',
      'Tax reporting and filing',
      'VAT/GST compliance',
      'Tax audit trails'
    ],
    icon: '🧮'
  },
  {
    title: 'Budget & Forecasting',
    description: 'Plan and track budgets with forecasting tools and variance analysis.',
    benefits: [
      'Budget planning and approval',
      'Forecasting and projections',
      'Variance analysis',
      'Departmental budgeting',
      'Budget performance tracking'
    ],
    icon: '📈'
  }
]

const accountingProcess = [
  {
    step: '01',
    title: 'Chart of Accounts Setup',
    description: 'Configure your chart of accounts to match your business structure and reporting requirements.'
  },
  {
    step: '02',
    title: 'Transaction Recording',
    description: 'Record all financial transactions with automated journal entries and approval workflows.'
  },
  {
    step: '03',
    title: 'Bank Reconciliation',
    description: 'Reconcile bank statements with accounting records for accurate cash management.'
  },
  {
    step: '04',
    title: 'Invoice Processing',
    description: 'Generate and process invoices with automated billing and payment tracking.'
  },
  {
    step: '05',
    title: 'Financial Reporting',
    description: 'Generate financial reports and statements for management and compliance purposes.'
  },
  {
    step: '06',
    title: 'Period Closing',
    description: 'Close accounting periods and prepare for audits with proper documentation.'
  }
]

const integrations = [
  { name: 'Sales', description: 'Automatic invoice generation from sales orders' },
  { name: 'Purchase', description: 'Vendor bill processing and payment management' },
  { name: 'Inventory', description: 'Cost of goods sold and inventory valuation' },
  { name: 'HR', description: 'Payroll processing and employee expense management' },
  { name: 'Project', description: 'Project cost tracking and profitability analysis' },
  { name: 'Banking', description: 'Direct bank integration for transaction import' }
]

const complianceFeatures = [
  {
    title: 'Multi-Currency Support',
    description: 'Handle multiple currencies with automatic exchange rate updates and revaluation.',
    icon: '💱'
  },
  {
    title: 'Audit Trail',
    description: 'Complete audit trail for all transactions with user tracking and change logs.',
    icon: '🔍'
  },
  {
    title: 'Compliance Reporting',
    description: 'Generate compliance reports for tax authorities and regulatory requirements.',
    icon: '📋'
  },
  {
    title: 'Data Security',
    description: 'Bank-level security with role-based access and data encryption.',
    icon: '🔒'
  }
]

export default function AccountingPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Accounting Implementation",
          description: "Complete financial management solution with general ledger, invoicing, and financial reporting"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Accounting: Complete Financial Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take control of your finances with Odoo Accounting. From general ledger to financial reporting, 
              manage every aspect of your business finances with confidence and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Accounting Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Accounting Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Accounting Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Accounting provides comprehensive financial management tools for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingFeatures.map((feature, index) => (
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

      {/* Accounting Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Accounting Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to financial management with our proven accounting process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingProcess.map((step, index) => (
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
              Accounting Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Accounting integrates seamlessly with all business modules for complete financial visibility.
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

      {/* Compliance Features */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo Accounting ensures compliance with financial regulations and provides enterprise-grade security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to Streamline Your Financial Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our accounting experts help you implement Odoo Accounting and optimize your financial processes for better control and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Accounting Implementation Quote
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Accounting Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
