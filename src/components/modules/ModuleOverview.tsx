interface ModuleOverviewProps {
  name: string
  description: string
  icon: string
}

const ModuleOverview = ({ name, description, icon }: ModuleOverviewProps) => {
  const kpis = [
    { metric: 'Stock Accuracy', improvement: '95%+', description: 'Real-time tracking eliminates discrepancies' },
    { metric: 'Order Fulfillment', improvement: '40% faster', description: 'Automated picking and putaway rules' },
    { metric: 'Inventory Turnover', improvement: '25% increase', description: 'Optimized stock levels and demand forecasting' },
    { metric: 'Warehouse Efficiency', improvement: '30% improvement', description: 'Streamlined operations with mobile scanning' }
  ]

  const useCases = [
    'Multi-location retail chains',
    'E-commerce businesses with complex fulfillment',
    'Manufacturing companies with component tracking',
    'Distribution centers with high-volume operations',
    'Businesses requiring compliance tracking (lot/serial)',
    'Companies needing real-time stock visibility'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{name}</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Key Performance Indicators</h3>
              <div className="space-y-4">
                {kpis.map((kpi, index) => (
                  <div key={index} className="bg-light rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-dark">{kpi.metric}</h4>
                      <span className="text-primary font-bold text-lg">{kpi.improvement}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{kpi.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Ideal Use Cases</h3>
              <div className="space-y-3">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModuleOverview
