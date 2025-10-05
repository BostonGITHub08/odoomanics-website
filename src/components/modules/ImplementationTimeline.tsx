interface ImplementationTimelineProps {
  module: string
}

const ImplementationTimeline = ({ module }: ImplementationTimelineProps) => {
  const steps = [
    { phase: 'Discovery', duration: '1-2 weeks', description: 'Analyze current inventory processes and requirements' },
    { phase: 'Configuration', duration: '2-3 weeks', description: 'Set up warehouses, locations, and routing rules' },
    { phase: 'Data Migration', duration: '1-2 weeks', description: 'Import existing inventory data and historical records' },
    { phase: 'Testing', duration: '1-2 weeks', description: 'Validate workflows and conduct user acceptance testing' },
    { phase: 'Training', duration: '1 week', description: 'Train users on new processes and procedures' },
    { phase: 'Go-Live', duration: '1 week', description: 'Deploy system and provide go-live support' }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Implementation Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured approach ensures a smooth {module} implementation with minimal disruption to your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-dark">{step.phase}</h3>
                    <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImplementationTimeline
