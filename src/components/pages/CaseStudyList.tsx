const caseStudies = [
  {
    id: 'pakistani-manufacturing',
    title: 'Pakistani Manufacturing Company',
    industry: 'Manufacturing',
    location: 'Lahore, Pakistan',
    employees: '150+',
    challenge: 'Manual processes and inventory mismanagement',
    solution: 'Complete Odoo ERP with Manufacturing modules',
    results: '40% efficiency increase, 25% cost reduction',
    image: '/_assets/case-study-manufacturing.jpg',
    href: '/case-studies/pakistani-manufacturing',
    featured: true
  },
  {
    id: 'retail-chain',
    title: 'Multi-Store Retail Chain',
    industry: 'Retail & eCommerce',
    location: 'Karachi, Pakistan',
    employees: '80+',
    challenge: 'Inventory synchronization across stores',
    solution: 'Odoo POS and eCommerce integration',
    results: '60% faster checkout, 30% inventory accuracy',
    image: '/_assets/case-study-retail.jpg',
    href: '/case-studies/retail-chain',
    featured: false
  },
  {
    id: 'distribution-company',
    title: 'Distribution & Logistics Company',
    industry: 'Distribution',
    location: 'Riyadh, Saudi Arabia',
    employees: '120+',
    challenge: 'Complex supply chain management',
    solution: 'Odoo with advanced inventory and logistics',
    results: '50% faster order processing, 35% cost savings',
    image: '/_assets/case-study-distribution.jpg',
    href: '/case-studies/distribution-company',
    featured: false
  },
  {
    id: 'healthcare-clinic',
    title: 'Healthcare Clinic Network',
    industry: 'Healthcare',
    location: 'Boston, USA',
    employees: '60+',
    challenge: 'Patient management and billing complexity',
    solution: 'Custom Odoo healthcare solution',
    results: '45% faster patient processing, 20% revenue increase',
    image: '/_assets/case-study-healthcare.jpg',
    href: '/case-studies/healthcare-clinic',
    featured: false
  },
  {
    id: 'educational-institution',
    title: 'Private Educational Institution',
    industry: 'Education',
    location: 'Islamabad, Pakistan',
    employees: '200+',
    challenge: 'Student and staff management',
    solution: 'Odoo with custom education modules',
    results: '70% administrative efficiency, 90% parent satisfaction',
    image: '/_assets/case-study-education.jpg',
    href: '/case-studies/educational-institution',
    featured: false
  },
  {
    id: 'service-company',
    title: 'Professional Services Company',
    industry: 'Services',
    location: 'Dubai, UAE',
    employees: '45+',
    challenge: 'Project tracking and resource management',
    solution: 'Odoo Project and Timesheet modules',
    results: '55% project visibility, 40% resource optimization',
    image: '/_assets/case-study-services.jpg',
    href: '/case-studies/service-company',
    featured: false
  }
]

const CaseStudyList = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed success stories from our clients across different industries and regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                caseStudy.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              {caseStudy.featured && (
                <div className="bg-primary text-white px-4 py-2 text-sm font-semibold text-center">
                  FEATURED CASE STUDY
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {caseStudy.industry}
                  </span>
                  <span className="text-gray-500 text-sm">{caseStudy.location}</span>
                </div>

                <h3 className="text-xl font-bold text-dark mb-3">
                  {caseStudy.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {caseStudy.employees} employees
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-semibold text-dark mb-1">Challenge:</div>
                    <div className="text-gray-600">{caseStudy.challenge}</div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-semibold text-dark mb-1">Solution:</div>
                    <div className="text-gray-600">{caseStudy.solution}</div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-semibold text-primary mb-1">Results:</div>
                    <div className="text-gray-600">{caseStudy.results}</div>
                  </div>
                </div>

                <a
                  href={caseStudy.href}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors duration-200"
                >
                  Read Full Case Study
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <a href="/contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyList
