const stats = [
  {
    number: '50+',
    label: 'Successful Implementations',
    description: 'Across Pakistan, USA, and Saudi Arabia'
  },
  {
    number: '95%',
    label: 'Client Satisfaction Rate',
    description: 'Based on post-implementation surveys'
  },
  {
    number: '40%',
    label: 'Average Efficiency Gain',
    description: 'Measured across all implementations'
  },
  {
    number: '3-6',
    label: 'Months Implementation',
    description: 'From discovery to go-live'
  }
]

const industries = [
  {
    name: 'Manufacturing',
    count: '15+',
    description: 'From automotive to textiles',
    icon: '🏭'
  },
  {
    name: 'Retail & eCommerce',
    count: '12+',
    description: 'Multi-channel operations',
    icon: '🛍️'
  },
  {
    name: 'Distribution',
    count: '10+',
    description: 'Supply chain optimization',
    icon: '📦'
  },
  {
    name: 'Services',
    count: '8+',
    description: 'Professional services',
    icon: '💼'
  },
  {
    name: 'Healthcare',
    count: '3+',
    description: 'Medical practice management',
    icon: '🏥'
  },
  {
    name: 'Education',
    count: '2+',
    description: 'Educational institutions',
    icon: '🎓'
  }
]

const CaseStudyOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Odoo implementations have delivered measurable results for businesses of all sizes, 
            from startups to enterprise organizations across multiple industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-dark mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{industry.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark">{industry.name}</h4>
                    <div className="text-sm text-primary font-semibold">{industry.count} implementations</div>
                  </div>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing list of successful businesses that have transformed their operations with Odoo. 
            Let's discuss how we can help your company achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="/pricing" className="btn-secondary">
              View Pricing Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyOverview
