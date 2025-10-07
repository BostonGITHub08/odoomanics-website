interface CaseStudyData {
  company: string
  industry: string
  location: string
  employees: string
  challenge: string
  solution: string
  results: {
    efficiency: string
    inventoryCosts: string
    orderProcessing: string
    reporting: string
  }
  modules: string[]
  timeline: string
  team: string
}

interface CaseStudyDetailsProps {
  caseStudy: CaseStudyData
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Overview */}
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Company Overview</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="font-semibold text-dark w-24">Company:</span>
                <span className="text-gray-600">{caseStudy.company}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-dark w-24">Industry:</span>
                <span className="text-gray-600">{caseStudy.industry}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-dark w-24">Location:</span>
                <span className="text-gray-600">{caseStudy.location}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-dark w-24">Employees:</span>
                <span className="text-gray-600">{caseStudy.employees}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-dark w-24">Timeline:</span>
                <span className="text-gray-600">{caseStudy.timeline}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-dark w-24">Team:</span>
                <span className="text-gray-600">{caseStudy.team}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-dark mb-4">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {caseStudy.challenge}
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Implementation Details */}
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Implementation Details</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-dark mb-4">Odoo Modules Implemented</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.modules.map((module, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-dark mb-2">Phase 1: Discovery & Planning</h4>
                <p className="text-gray-600 text-sm">Comprehensive analysis of existing processes and requirements gathering</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-dark mb-2">Phase 2: Configuration & Customization</h4>
                <p className="text-gray-600 text-sm">Odoo setup, module configuration, and custom development</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-dark mb-2">Phase 3: Data Migration & Testing</h4>
                <p className="text-gray-600 text-sm">Data transfer, system testing, and user acceptance testing</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-dark mb-2">Phase 4: Training & Go-Live</h4>
                <p className="text-gray-600 text-sm">User training, go-live support, and post-implementation monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyDetails
