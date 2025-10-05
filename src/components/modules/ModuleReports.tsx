interface ModuleReportsProps {
  module: string
}

const ModuleReports = ({ module }: ModuleReportsProps) => {
  const reports = [
    'Stock Level Report',
    'Inventory Valuation',
    'Stock Movement Analysis',
    'ABC Analysis',
    'Aging Report',
    'Cycle Count Results'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Reports & Dashboards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive reporting and analytics to help you make informed inventory decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div key={index} className="card-hover text-center">
              <h3 className="text-lg font-semibold text-dark">{report}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModuleReports
