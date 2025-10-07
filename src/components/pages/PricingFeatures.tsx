const additionalServices = [
  {
    icon: '🔧',
    title: 'Additional Modules',
    description: 'Need more modules beyond your plan?',
    price: 'SAR 3,500',
    unit: 'per module',
    features: [
      'Full module implementation',
      'Configuration and setup',
      'User training included',
      'Integration with existing modules'
    ]
  },
  {
    icon: '💾',
    title: 'Extended Storage',
    description: 'Upgrade your storage capacity',
    price: 'SAR 500',
    unit: 'per GB/month',
    features: [
      'Additional database storage',
      'File storage expansion',
      'Automatic backups included',
      'High-performance SSD storage'
    ]
  },
  {
    icon: '👥',
    title: 'Additional Users',
    description: 'Scale your team seamlessly',
    price: 'Contact Us',
    unit: 'custom pricing',
    features: [
      'Flexible user licensing',
      'Role-based access control',
      'User training sessions',
      'Onboarding support'
    ]
  },
  {
    icon: '🔌',
    title: 'Custom Integrations',
    description: 'Connect with third-party systems',
    price: 'SAR 8,000',
    unit: 'per integration',
    features: [
      'API development',
      'Data synchronization',
      'Real-time updates',
      'Testing and validation'
    ]
  },
  {
    icon: '🎨',
    title: 'Custom Development',
    description: 'Tailored features for your business',
    price: 'SAR 12,000',
    unit: 'starting from',
    features: [
      'Custom module development',
      'Workflow automation',
      'Custom reports and dashboards',
      'Full documentation'
    ]
  },
  {
    icon: '📞',
    title: 'Extended Support',
    description: 'Ongoing maintenance and support',
    price: 'SAR 2,500',
    unit: 'per month',
    features: [
      '24/7 priority support',
      'Monthly system health checks',
      'Performance optimization',
      'Regular updates and patches'
    ]
  }
]

const comparisonFeatures = [
  {
    category: 'Implementation',
    features: [
      { name: 'Number of Modules', charlie: '6 modules', bravo: '10 modules', alpha: '20 modules' },
      { name: 'Implementation Time', charlie: '4-6 weeks', bravo: '6-8 weeks', alpha: '8-12 weeks' },
      { name: 'Data Migration', charlie: 'Up to 5,000 records', bravo: 'Up to 25,000 records', alpha: 'Unlimited records' },
      { name: 'Custom Workflows', charlie: 'Basic', bravo: 'Advanced', alpha: 'Enterprise' },
    ]
  },
  {
    category: 'Training & Support',
    features: [
      { name: 'Training Sessions', charlie: '2 sessions', bravo: '5 sessions', alpha: 'Unlimited' },
      { name: 'Support Channel', charlie: 'Email', bravo: 'Email & Phone', alpha: '24/7 Dedicated Manager' },
      { name: 'Post-Launch Support', charlie: '30 days', bravo: '60 days', alpha: '90 days' },
      { name: 'Health Checks', charlie: 'None', bravo: '3 months', alpha: '6 months' },
    ]
  },
  {
    category: 'Hosting & Infrastructure',
    features: [
      { name: 'Storage Included', charlie: '2 GB', bravo: '5 GB', alpha: '20 GB' },
      { name: 'Users Supported', charlie: 'Up to 10', bravo: 'Up to 25', alpha: 'Unlimited' },
      { name: 'Deployment Options', charlie: 'All options', bravo: 'All options', alpha: 'All options' },
      { name: 'Backup Frequency', charlie: 'Daily', bravo: 'Daily', alpha: 'Real-time' },
    ]
  },
  {
    category: 'Customization',
    features: [
      { name: 'Custom Reports', charlie: '3 reports', bravo: '10 reports', alpha: 'Unlimited' },
      { name: 'Integrations', charlie: 'Basic', bravo: '2 systems', alpha: 'Unlimited' },
      { name: 'API Development', charlie: 'Not included', bravo: 'Basic', alpha: 'Advanced' },
      { name: 'Custom Modules', charlie: 'Not included', bravo: 'Not included', alpha: 'Included' },
    ]
  }
]

const PricingFeatures = () => {
  return (
    <>
      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Additional Services & Add-Ons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your Odoo implementation with our additional services and support packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.unit}</div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Detailed Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Detailed Plan Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features across all plans to find the perfect fit for your business needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-light text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-bold">Charlie Plan</th>
                    <th className="px-6 py-4 text-center text-sm font-bold">Bravo Plan</th>
                    <th className="px-6 py-4 text-center text-sm font-bold">Alpha Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <>
                      <tr key={`cat-${catIndex}`} className="bg-gray-100">
                        <td colSpan={4} className="px-6 py-3 text-sm font-bold text-dark">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featIndex) => (
                        <tr
                          key={`feat-${catIndex}-${featIndex}`}
                          className={featIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        >
                          <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 text-center">
                            {feature.charlie}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 text-center font-semibold">
                            {feature.bravo}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 text-center">
                            {feature.alpha}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              All plans include deployment flexibility: Online, Odoo.sh, or On-Premises
            </p>
            <a href="/contact" className="btn-primary">
              Request Detailed Proposal
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingFeatures
