const plans = [
  {
    id: 'charlie',
    name: 'Charlie Plan',
    subtitle: 'Perfect for Small Businesses',
    price: '45,000',
    currency: 'SAR',
    modules: '6 Standard Modules',
    moduleCount: 6,
    businessSize: 'Small Business',
    users: 'Up to 10 users',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      '6 Standard Odoo Modules',
      'Complete Implementation',
      'Data Migration (up to 5,000 records)',
      'User Training (2 sessions)',
      'Hosting Included (1 year)',
      '2 GB Storage',
      'Email Support',
      'Basic Customization',
      'Standard Workflows Setup',
      'Go-Live Support',
      '30 Days Post-Launch Support',
      'Standard Documentation'
    ],
    deploymentOptions: [
      { type: 'Online (Odoo.sh)', included: true },
      { type: 'SH Hosting', included: true },
      { type: 'On-Premises', included: true }
    ],
    recommended: false
  },
  {
    id: 'bravo',
    name: 'Bravo Plan',
    subtitle: 'Ideal for Medium-Sized Businesses',
    price: '85,000',
    currency: 'SAR',
    modules: '10 Standard Modules',
    moduleCount: 10,
    businessSize: 'Medium Business',
    users: 'Up to 25 users',
    color: 'from-primary to-primary-light',
    bgColor: 'bg-primary/5',
    borderColor: 'border-primary',
    features: [
      '10 Standard Odoo Modules',
      'Complete Implementation',
      'Data Migration (up to 25,000 records)',
      'User Training (5 sessions)',
      'Hosting Included (1 year)',
      '5 GB Storage',
      'Priority Email & Phone Support',
      'Advanced Customization',
      'Custom Workflows & Reports',
      'Integration Support (2 systems)',
      'Go-Live Support',
      '60 Days Post-Launch Support',
      'Comprehensive Documentation',
      'Monthly Health Check (3 months)'
    ],
    deploymentOptions: [
      { type: 'Online (Odoo.sh)', included: true },
      { type: 'SH Hosting', included: true },
      { type: 'On-Premises', included: true }
    ],
    recommended: true
  },
  {
    id: 'alpha',
    name: 'Alpha Plan',
    subtitle: 'Enterprise Solution for Large Businesses',
    price: '150,000',
    currency: 'SAR',
    modules: '20 Standard Modules',
    moduleCount: 20,
    businessSize: 'Large Business',
    users: 'Unlimited users',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      '20 Standard Odoo Modules',
      'Complete Implementation',
      'Data Migration (unlimited records)',
      'User Training (unlimited sessions)',
      'Hosting Included (1 year)',
      '20 GB Storage',
      'Dedicated Support Manager',
      '24/7 Priority Support',
      'Enterprise-Grade Customization',
      'Custom Modules Development',
      'Advanced Workflows & Automation',
      'Integration Support (unlimited systems)',
      'API Development',
      'Go-Live Support',
      '90 Days Post-Launch Support',
      'Full Documentation & Runbooks',
      'Weekly Health Checks (6 months)',
      'Performance Optimization'
    ],
    deploymentOptions: [
      { type: 'Online (Odoo.sh)', included: true },
      { type: 'SH Hosting', included: true },
      { type: 'On-Premises', included: true }
    ],
    recommended: false
  }
]

const PricingTables = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Choose Your Implementation Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All plans include complete Odoo implementation and hosting. Select the package that fits your business size and requirements.
          </p>
        </div>

        {/* Pricing Tables - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.bgColor} ${plan.borderColor} border-2 rounded-2xl p-8 ${
                plan.recommended ? 'ring-4 ring-primary/20 shadow-2xl scale-105' : 'shadow-lg'
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} text-white text-2xl font-bold mb-4`}>
                  {plan.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.subtitle}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-start justify-center gap-2">
                    <span className="text-2xl font-bold text-dark mt-2">{plan.currency}</span>
                    <span className="text-5xl font-bold text-dark">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">One-time implementation fee</p>
                </div>

                {/* Key Info */}
                <div className="space-y-2 mb-6">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${plan.color} text-white font-semibold text-sm`}>
                    {plan.modules}
                  </div>
                  <p className="text-sm text-gray-600">{plan.businessSize}</p>
                  <p className="text-sm text-gray-600 font-semibold">{plan.users}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-dark text-center mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deployment Options */}
              <div className="mb-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-dark text-center mb-4 text-sm">Deployment Options:</h4>
                <div className="space-y-2">
                  {plan.deploymentOptions.map((option, index) => (
                    <div key={index} className="flex items-center justify-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {option.type}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity duration-200`}
              >
                Get Started with {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-dark mb-6 text-center">
            Important Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark mb-2">SH Charges Not Included</h4>
                <p className="text-gray-600 text-sm">
                  Odoo.sh hosting charges are separate and billed directly by Odoo. Our hosting included refers to server management and maintenance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark mb-2">License Charges Not Included</h4>
                <p className="text-gray-600 text-sm">
                  Odoo Enterprise license fees are billed separately by Odoo based on the number of users and modules activated.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark mb-2">Flexible Payment Terms</h4>
                <p className="text-gray-600 text-sm">
                  We offer flexible payment terms with milestone-based payments. Pay 40% upfront, 40% at testing, and 20% at go-live.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-dark mb-2">Custom Solutions Available</h4>
                <p className="text-gray-600 text-sm">
                  Need more modules or custom features? We can create a tailored plan that perfectly fits your business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Not Sure Which Plan is Right for You?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our Odoo experts. We'll analyze your business needs and recommend the perfect plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Book Free Consultation
            </a>
            <a href="tel:+966501234567" className="btn-secondary">
              Call Us: +966 50 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingTables
