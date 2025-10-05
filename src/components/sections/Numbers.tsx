const Numbers = () => {
  const stats = [
    {
      number: '150+',
      label: 'Successful Implementations',
      description: 'Across Pakistan, USA, and Saudi Arabia'
    },
    {
      number: '95%',
      label: 'Customer Satisfaction',
      description: 'Based on post-implementation surveys'
    },
    {
      number: '24/7',
      label: 'Support Availability',
      description: 'Round-the-clock technical assistance'
    },
    {
      number: '50+',
      label: 'Odoo Modules',
      description: 'Expertise across all major modules'
    },
    {
      number: '3',
      label: 'Global Offices',
      description: 'Pakistan, USA, and Saudi Arabia'
    },
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Dedicated Odoo implementation expertise'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Track Record
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm opacity-90">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let us help you achieve similar results with your Odoo implementation.
            </p>
            <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers
