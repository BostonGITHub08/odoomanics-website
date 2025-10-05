interface DownloadableResourcesProps {
  module: string
}

const DownloadableResources = ({ module }: DownloadableResourcesProps) => {
  const resources = [
    {
      title: `${module} Implementation Checklist`,
      description: 'Comprehensive checklist for successful implementation',
      type: 'PDF',
      size: '2.3 MB'
    },
    {
      title: `${module} Configuration Guide`,
      description: 'Step-by-step configuration instructions',
      type: 'PDF',
      size: '4.1 MB'
    },
    {
      title: `${module} ROI Calculator`,
      description: 'Calculate your potential return on investment',
      type: 'Excel',
      size: '1.2 MB'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Downloadable Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive guides and tools to help you plan your {module} implementation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="card-hover text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>
                <button className="btn-primary w-full">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadableResources
