interface Integration {
  name: string
  description: string
}

interface ModuleIntegrationsProps {
  integrations: Integration[]
}

const ModuleIntegrations = ({ integrations }: ModuleIntegrationsProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odoo Inventory integrates seamlessly with other Odoo modules and external systems 
            to provide a unified business management solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="card-hover text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">
                  {integration.name[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">{integration.name}</h3>
              <p className="text-gray-600 text-sm">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModuleIntegrations
