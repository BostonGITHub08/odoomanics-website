const ksaServices = [
  {
    title: 'Odoo Manufacturing KSA',
    description: 'Complete Odoo Manufacturing solutions for Saudi industrial companies. MRP, PLM, Quality Control, and Maintenance modules.',
    features: ['MRP Planning', 'Production Scheduling', 'Quality Control', 'Maintenance Management', 'Inventory Optimization'],
    cities: ['Riyadh', 'Dammam', 'Jeddah'],
    icon: '🏭'
  },
  {
    title: 'Odoo Retail & eCommerce',
    description: 'Multi-channel retail solutions for Saudi businesses. POS, eCommerce, and inventory management integration.',
    features: ['POS Systems', 'eCommerce Integration', 'Multi-store Management', 'Customer Management', 'Sales Analytics'],
    cities: ['Riyadh', 'Dammam', 'Jeddah'],
    icon: '🛍️'
  },
  {
    title: 'Odoo Services Sector',
    description: 'Professional services automation for Saudi companies. Project management, timesheets, and client billing.',
    features: ['Project Management', 'Timesheet Tracking', 'Client Billing', 'Resource Planning', 'Service Analytics'],
    cities: ['Riyadh', 'Dammam', 'Jeddah'],
    icon: '💼'
  },
  {
    title: 'Odoo Healthcare KSA',
    description: 'Healthcare management solutions for Saudi medical facilities. Patient management, billing, and compliance.',
    features: ['Patient Management', 'Appointment Scheduling', 'Medical Billing', 'Compliance Tracking', 'Staff Management'],
    cities: ['Riyadh', 'Dammam', 'Jeddah'],
    icon: '🏥'
  },
  {
    title: 'Odoo Education',
    description: 'Educational institution management for Saudi schools and universities. Student, staff, and academic management.',
    features: ['Student Management', 'Academic Planning', 'Staff Administration', 'Fee Management', 'Parent Portal'],
    cities: ['Riyadh', 'Dammam', 'Jeddah'],
    icon: '🎓'
  },
  {
    title: 'Odoo Government & NGO',
    description: 'Public sector and NGO solutions for Saudi organizations. Grant management, compliance, and reporting.',
    features: ['Grant Management', 'Compliance Tracking', 'Donor Management', 'Project Reporting', 'Financial Management'],
    cities: ['Riyadh', 'Dammam', 'Jeddah'],
    icon: '🏛️'
  }
]

const KSAServices = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Odoo Services in Saudi Arabia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Odoo ERP solutions tailored for Saudi businesses across all major cities. 
            From manufacturing to retail, we deliver industry-specific implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ksaServices.map((service, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-dark mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-dark mb-2">Available in:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.cities.map((city, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <a href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors duration-200">
                Get Quote for {service.title}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Why Choose OdooManics in Saudi Arabia?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-4">🇸🇦</div>
              <h4 className="text-lg font-bold text-dark mb-2">Local Presence</h4>
              <p className="text-gray-600">Offices in Riyadh and Dammam with local support teams</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-lg font-bold text-dark mb-2">Certified Experts</h4>
              <p className="text-gray-600">Odoo certified consultants with Saudi market experience</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-dark mb-2">Fast Implementation</h4>
              <p className="text-gray-600">Quick deployment with Arabic language support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KSAServices
