const Certifications = () => {
  const certifications = [
    {
      name: 'Odoo Certified Partner',
      issuer: 'Odoo S.A.',
      description: 'Official Odoo partner with certified expertise in implementation and customization.',
      icon: '🏆'
    },
    {
      name: 'ISO 27001:2013',
      issuer: 'International Organization for Standardization',
      description: 'Information security management system certification ensuring data protection.',
      icon: '🔒'
    },
    {
      name: 'GDPR Compliant',
      issuer: 'European Union',
      description: 'Full compliance with General Data Protection Regulation for data privacy.',
      icon: '✅'
    },
    {
      name: 'Microsoft Partner',
      issuer: 'Microsoft Corporation',
      description: 'Certified partner for cloud solutions and Microsoft integrations.',
      icon: '☁️'
    },
    {
      name: 'AWS Partner',
      issuer: 'Amazon Web Services',
      description: 'Certified AWS partner for cloud hosting and infrastructure solutions.',
      icon: '🚀'
    },
    {
      name: 'Local Business License',
      issuer: 'Pakistan, USA, KSA',
      description: 'Licensed to operate in Pakistan, United States, and Saudi Arabia.',
      icon: '📋'
    }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our certifications demonstrate our commitment to quality, security, and compliance 
            across all regions where we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="card-hover text-center">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{cert.name}</h3>
              <div className="text-primary font-semibold mb-4">{cert.issuer}</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Why Certifications Matter
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Quality Assurance</h4>
                    <p className="text-gray-600 text-sm">Certified processes ensure consistent, high-quality implementations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Security & Compliance</h4>
                    <p className="text-gray-600 text-sm">Your data is protected with enterprise-grade security measures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Expert Knowledge</h4>
                    <p className="text-gray-600 text-sm">Certified expertise in Odoo and related technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Continuous Improvement</h4>
                    <p className="text-gray-600 text-sm">Regular audits ensure we maintain the highest standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-dark mb-4">Ready to Work with Certified Experts?</h4>
              <p className="text-gray-600 mb-6">
                Partner with a certified Odoo implementation team that meets the highest industry standards.
              </p>
              <a href="/contact" className="btn-primary w-full text-center block">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
