interface ModulePricingProps {
  module: string
}

const ModulePricing = ({ module }: ModulePricingProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Implementation Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for {module} implementation based on your specific requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark mb-4">Custom Pricing</h3>
            <p className="text-gray-600 mb-6">
              Every {module} implementation is unique. Contact us for a detailed quote based on your specific needs.
            </p>
            <a href="/contact" className="btn-primary">
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModulePricing
