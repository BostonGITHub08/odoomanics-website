import Link from 'next/link'

const FeaturedModules = () => {
  const modules = [
    {
      name: 'CRM & Sales',
      description: 'Manage leads, opportunities, and sales pipelines with advanced automation and reporting.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      href: '/odoo-modules/crm',
      features: ['Lead Management', 'Sales Pipeline', 'Automation']
    },
    {
      name: 'Inventory',
      description: 'Real-time stock tracking, multi-warehouse management, and automated replenishment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      href: '/odoo-modules/inventory',
      features: ['Multi-warehouse', 'Real-time Tracking', 'Automated Replenishment']
    },
    {
      name: 'Accounting',
      description: 'Complete financial management with local compliance for Pakistan, USA, and KSA.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: '/odoo-modules/accounting',
      features: ['FBR Compliance', 'Multi-currency', 'Automated Reports']
    },
    {
      name: 'Manufacturing',
      description: 'Advanced MRP, Bill of Materials, work orders, and production planning capabilities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      href: '/odoo-modules/manufacturing',
      features: ['MRP Planning', 'Work Orders', 'Quality Control']
    },
    {
      name: 'eCommerce',
      description: 'Build and manage online stores with integrated inventory and customer management.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      href: '/odoo-modules/ecommerce',
      features: ['Online Store', 'Payment Gateway', 'Order Management']
    },
    {
      name: 'HR & Payroll',
      description: 'Complete human resources management with local payroll compliance and employee self-service.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      href: '/odoo-modules/hr',
      features: ['Employee Management', 'Payroll Processing', 'Performance Reviews']
    }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Featured Odoo Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular Odoo modules that transform business operations 
            across industries and regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Link key={index} href={module.href} className="card-hover group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors duration-200">
                  {module.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="flex flex-wrap gap-2">
                {module.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/odoo-modules" className="btn-primary">
            View All Odoo Modules
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedModules
