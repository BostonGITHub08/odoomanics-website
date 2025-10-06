const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current systems, data flow, and integration requirements to create a comprehensive integration plan.',
    details: [
      'System architecture review',
      'Data mapping and analysis',
      'Integration requirements gathering',
      'Security and compliance assessment'
    ]
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our team designs the integration architecture and creates a detailed implementation roadmap.',
    details: [
      'Integration architecture design',
      'API mapping and configuration',
      'Data transformation planning',
      'Testing strategy development'
    ]
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We develop the integration solution and conduct thorough testing to ensure reliability and performance.',
    details: [
      'Custom integration development',
      'API connection implementation',
      'Data synchronization setup',
      'Comprehensive testing and validation'
    ]
  },
  {
    step: '04',
    title: 'Deployment & Go-Live',
    description: 'We deploy the integration in your production environment and provide training and support.',
    details: [
      'Production deployment',
      'User training and documentation',
      'Performance monitoring setup',
      'Ongoing support and maintenance'
    ]
  }
]

const IntegrationProcess = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Integration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful integration of your business systems with Odoo.
          </p>
        </div>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-primary-light text-white flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {step.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Integration Timeline
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Most integrations are completed within 2-4 weeks, depending on complexity and requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">1-2 Weeks</div>
                <div className="text-gray-600">Simple Integrations</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2-3 Weeks</div>
                <div className="text-gray-600">Standard Integrations</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">3-4 Weeks</div>
                <div className="text-gray-600">Complex Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationProcess
