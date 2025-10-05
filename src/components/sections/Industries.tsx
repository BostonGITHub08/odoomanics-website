import Link from 'next/link'

const Industries = () => {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Streamline production with MRP, quality control, and supply chain optimization.',
      icon: '🏭',
      href: '/industries/manufacturing',
      stats: '40% faster production planning'
    },
    {
      name: 'Retail & eCommerce',
      description: 'Unified commerce platform with POS, inventory, and customer management.',
      icon: '🛍️',
      href: '/industries/retail',
      stats: '60% inventory accuracy improvement'
    },
    {
      name: 'Distribution',
      description: 'Optimize warehouse operations with advanced routing and logistics management.',
      icon: '📦',
      href: '/industries/distribution',
      stats: '35% reduction in shipping costs'
    },
    {
      name: 'Services',
      description: 'Project management, time tracking, and resource allocation for service businesses.',
      icon: '⚙️',
      href: '/industries/services',
      stats: '50% better resource utilization'
    },
    {
      name: 'Healthcare',
      description: 'Patient management, appointment scheduling, and medical inventory tracking.',
      icon: '🏥',
      href: '/industries/healthcare',
      stats: '25% faster patient processing'
    },
    {
      name: 'Education',
      description: 'Student information systems, course management, and administrative automation.',
      icon: '🎓',
      href: '/industries/education',
      stats: '30% administrative efficiency gain'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized Odoo implementations tailored to industry-specific requirements 
            and compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link key={index} href={industry.href} className="card-hover group">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{industry.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-200">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{industry.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{industry.stats}</span>
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/industries" className="btn-outline">
            Explore All Industries
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Industries
