import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Modules: Complete ERP Solution for Every Business Need',
  description: 'Explore Odoo modules for CRM, Sales, Inventory, Accounting, Manufacturing, eCommerce, HR, and more. Comprehensive ERP solutions for businesses of all sizes.',
  keywords: ['Odoo modules', 'ERP modules', 'CRM', 'Sales', 'Inventory', 'Accounting', 'Manufacturing', 'eCommerce', 'HR'],
  openGraph: {
    title: 'Odoo Modules: Complete ERP Solution for Every Business Need',
    description: 'Explore Odoo modules for CRM, Sales, Inventory, Accounting, Manufacturing, eCommerce, HR, and more. Comprehensive ERP solutions for businesses of all sizes.',
    images: ['https://odoomanics.com/_assets/og-modules.png'],
  },
}

const moduleCategories = [
  {
    name: 'Sales & CRM',
    description: 'Manage your sales pipeline, customer relationships, and marketing campaigns',
    modules: ['CRM', 'Sales', 'Marketing', 'eCommerce', 'POS'],
    icon: '💼',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Operations & Inventory',
    description: 'Streamline your operations with advanced inventory and warehouse management',
    modules: ['Inventory', 'Purchase', 'Manufacturing', 'MRP', 'Quality'],
    icon: '📦',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Finance & Accounting',
    description: 'Complete financial management with accounting, invoicing, and reporting',
    modules: ['Accounting', 'Invoicing', 'Expenses', 'Budget', 'Assets'],
    icon: '💰',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    name: 'Human Resources',
    description: 'Manage your workforce with comprehensive HR and payroll solutions',
    modules: ['HR', 'Employees', 'Recruitment', 'Payroll', 'Time Off'],
    icon: '👥',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Project Management',
    description: 'Plan, execute, and track projects with advanced project management tools',
    modules: ['Project', 'Timesheets', 'Field Service', 'Helpdesk', 'Knowledge'],
    icon: '📋',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Website & Marketing',
    description: 'Build and manage your online presence with website and marketing tools',
    modules: ['Website', 'Blog', 'Events', 'Social', 'Live Chat'],
    icon: '🌐',
    color: 'from-pink-500 to-pink-600'
  }
]

const featuredModules = [
  {
    name: 'CRM',
    title: 'Customer Relationship Management',
    description: 'Streamline your sales process and build stronger customer relationships with Odoo CRM.',
    features: ['Lead Management', 'Pipeline Tracking', 'Email Integration', 'Activity Planning'],
    href: '/odoo-modules/crm',
    icon: '🎯'
  },
  {
    name: 'Sales',
    title: 'Sales Management',
    description: 'Manage quotes, orders, and customer relationships with comprehensive sales tools.',
    features: ['Quote Management', 'Order Processing', 'Customer Portal', 'Sales Analytics'],
    href: '/odoo-modules/sales',
    icon: '📈'
  },
  {
    name: 'Inventory',
    title: 'Inventory Management',
    description: 'Real-time stock tracking, multi-warehouse management, and automated replenishment.',
    features: ['Stock Tracking', 'Warehouse Management', 'Barcode Scanning', 'Demand Forecasting'],
    href: '/odoo-modules/inventory',
    icon: '📦'
  },
  {
    name: 'Accounting',
    title: 'Financial Management',
    description: 'Complete accounting solution with invoicing, reporting, and financial controls.',
    features: ['General Ledger', 'Invoicing', 'Bank Reconciliation', 'Financial Reports'],
    href: '/odoo-modules/accounting',
    icon: '💰'
  },
  {
    name: 'Manufacturing',
    title: 'Production Management',
    description: 'Plan and control manufacturing operations with advanced production management.',
    features: ['Production Planning', 'Work Orders', 'Quality Control', 'Cost Tracking'],
    href: '/odoo-modules/manufacturing',
    icon: '🏭'
  },
  {
    name: 'eCommerce',
    title: 'Online Store',
    description: 'Create and manage your online store with integrated eCommerce solutions.',
    features: ['Product Catalog', 'Shopping Cart', 'Payment Processing', 'Order Management'],
    href: '/odoo-modules/ecommerce',
    icon: '🛒'
  }
]

const benefits = [
  {
    title: 'Integrated Solution',
    description: 'All modules work seamlessly together, sharing data and processes across your entire business.',
    icon: '🔗'
  },
  {
    title: 'Scalable Architecture',
    description: 'Start with what you need and add modules as your business grows.',
    icon: '📈'
  },
  {
    title: 'Real-Time Data',
    description: 'Access real-time information across all modules for better decision making.',
    icon: '⚡'
  },
  {
    title: 'Customizable',
    description: 'Tailor each module to your specific business processes and requirements.',
    icon: '⚙️'
  }
]

export default function OdooModulesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Modules",
          description: "Comprehensive ERP modules for CRM, Sales, Inventory, Accounting, Manufacturing, eCommerce, HR, and more"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Modules: Complete ERP Solution
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the power of Odoo's integrated modules. From CRM and Sales to Manufacturing and HR, 
              find the perfect combination of tools to streamline your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Module Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Module Categories */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Module Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo modules are organized into logical categories to help you find the right tools for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moduleCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.modules.map((module, moduleIndex) => (
                    <span key={moduleIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {module}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/odoo-modules/${category.modules[0].toLowerCase()}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors duration-200"
                >
                  Explore Modules
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Featured Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular Odoo modules that businesses use to transform their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-6">{module.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={module.href}
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Choose Odoo Modules?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo modules are designed to work together seamlessly, providing a unified business management solution.
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
              Ready to Explore Odoo Modules?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts help you identify the right combination of Odoo modules for your business needs. 
              Get a free consultation and module recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
