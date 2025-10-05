const Methodology = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your business processes, requirements, and goals to create a comprehensive implementation plan.',
      duration: '1-2 weeks',
      deliverables: ['Business Process Analysis', 'Requirements Document', 'Implementation Roadmap']
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team designs your Odoo system architecture, workflows, and customizations to match your business needs.',
      duration: '2-3 weeks',
      deliverables: ['System Architecture', 'Workflow Design', 'Customization Specifications']
    },
    {
      number: '03',
      title: 'Build',
      description: 'We implement your Odoo system with all customizations, integrations, and data migration.',
      duration: '4-8 weeks',
      deliverables: ['System Implementation', 'Data Migration', 'Integration Setup']
    },
    {
      number: '04',
      title: 'Train',
      description: 'Comprehensive training for your team to ensure smooth adoption and maximum system utilization.',
      duration: '1-2 weeks',
      deliverables: ['User Training', 'Admin Training', 'Documentation']
    },
    {
      number: '05',
      title: 'Go-Live',
      description: 'We support your system launch with monitoring, troubleshooting, and optimization.',
      duration: '1 week',
      deliverables: ['Go-Live Support', 'Performance Monitoring', 'Issue Resolution']
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing managed support with 24/7 monitoring, updates, and continuous optimization.',
      duration: 'Ongoing',
      deliverables: ['24/7 Support', 'System Updates', 'Performance Optimization']
    }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Our Proven Methodology
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our structured approach ensures successful Odoo implementations that deliver measurable results. 
            Each phase builds upon the previous one, creating a solid foundation for your business transformation.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-dark mb-2 md:mb-0">{step.title}</h3>
                  <span className="text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                    {step.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <span
                      key={deliverableIndex}
                      className="px-3 py-1 bg-white text-primary text-sm rounded-full border border-primary/20"
                    >
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Ready to Start Your Odoo Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us guide you through our proven methodology to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Book Discovery Session
              </a>
              <a href="/case-studies" className="btn-outline">
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Methodology
