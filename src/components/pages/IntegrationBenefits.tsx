const benefits = [
  {
    icon: '⚡',
    title: 'Automated Data Sync',
    description: 'Eliminate manual data entry with real-time synchronization between your systems and Odoo.'
  },
  {
    icon: '📈',
    title: 'Improved Efficiency',
    description: 'Streamline workflows and reduce processing time by connecting all your business tools.'
  },
  {
    icon: '🔒',
    title: 'Secure Integration',
    description: 'Enterprise-grade security protocols ensure your data remains safe during integration.'
  },
  {
    icon: '💰',
    title: 'Cost Reduction',
    description: 'Reduce operational costs by eliminating duplicate data entry and manual processes.'
  },
  {
    icon: '📊',
    title: 'Better Analytics',
    description: 'Get comprehensive insights by combining data from all your integrated systems.'
  },
  {
    icon: '🔄',
    title: 'Scalable Solutions',
    description: 'Our integrations grow with your business, supporting increased data volume and complexity.'
  }
]

const IntegrationBenefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Choose Our Integration Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert integration services help you connect Odoo with your existing business tools, 
            creating a unified ecosystem that drives efficiency and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-3xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Ready to Integrate Your Systems?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our integration experts help you connect Odoo with your existing business tools. 
              Get a free consultation and custom integration plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Free Consultation
              </a>
              <a href="tel:+923001234567" className="btn-secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationBenefits
