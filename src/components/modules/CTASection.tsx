interface CTASectionProps {
  module: string
}

const CTASection = ({ module }: CTASectionProps) => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement {module}?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let our expert team help you implement {module} with our proven methodology and 24/7 support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Book Free Consultation
            </a>
            <a href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
              View Case Studies
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">What's Included in Our {module} Implementation:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">Free Discovery</div>
                <div className="text-sm opacity-90">No-cost consultation and requirements analysis</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Expert Setup</div>
                <div className="text-sm opacity-90">Professional configuration and customization</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7 Support</div>
                <div className="text-sm opacity-90">Ongoing support and system optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
