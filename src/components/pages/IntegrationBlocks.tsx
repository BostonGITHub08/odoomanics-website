import Image from 'next/image'

const integrations = [
  {
    id: 'shopify',
    name: 'Shopify Integration',
    description: 'Connect your Shopify store with Odoo for seamless inventory management, order processing, and customer data synchronization.',
    features: [
      'Real-time inventory sync',
      'Automatic order import',
      'Customer data synchronization',
      'Product catalog management',
      'Multi-store support'
    ],
    icon: '🛍️',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'wordpress',
    name: 'WordPress Integration',
    description: 'Integrate your WordPress website with Odoo to manage content, leads, and customer interactions from a single platform.',
    features: [
      'Lead capture automation',
      'Content management sync',
      'User data integration',
      'Form submissions to CRM',
      'Blog post automation'
    ],
    icon: '🌐',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'google-services',
    name: 'Google Services Integration',
    description: 'Leverage Google Maps, Analytics, Drive, and other Google services within your Odoo system for enhanced functionality.',
    features: [
      'Google Maps integration',
      'Google Analytics tracking',
      'Google Drive file sync',
      'Gmail integration',
      'Google Calendar sync'
    ],
    icon: '🗺️',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'payment-gateways',
    name: 'Payment Gateway Integration',
    description: 'Connect multiple payment gateways to Odoo for seamless payment processing and financial management.',
    features: [
      'Stripe integration',
      'PayPal integration',
      'Bank payment processing',
      'Multi-currency support',
      'Payment reconciliation'
    ],
    icon: '💳',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'accounting-software',
    name: 'Accounting Software Integration',
    description: 'Sync your accounting software with Odoo for accurate financial reporting and streamlined bookkeeping processes.',
    features: [
      'QuickBooks integration',
      'Xero synchronization',
      'Sage accounting sync',
      'Financial data mapping',
      'Automated reconciliation'
    ],
    icon: '📊',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'crm-systems',
    name: 'CRM Systems Integration',
    description: 'Connect external CRM systems with Odoo to maintain customer relationships and sales data across platforms.',
    features: [
      'Salesforce integration',
      'HubSpot synchronization',
      'Pipedrive connection',
      'Lead management sync',
      'Customer data unification'
    ],
    icon: '👥',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
]

const IntegrationBlocks = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Popular Odoo Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect Odoo with your favorite business tools and platforms. Our expert team ensures seamless integration and data synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className={`${integration.bgColor} ${integration.borderColor} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${integration.color} text-white text-2xl mb-4`}>
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {integration.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {integration.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-dark mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {integration.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r ${integration.color} hover:opacity-90 transition-opacity duration-200`}
                >
                  Get Integration Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your preferred integration? We can build custom integrations for any platform.
          </p>
          <a href="/contact" className="btn-primary">
            Request Custom Integration
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntegrationBlocks
