import Link from 'next/link'

const CaseStudyTeaser = () => {
  const caseStudies = [
    {
      title: 'Pakistani Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual production planning and inventory management',
      solution: 'Complete Odoo Manufacturing implementation with MRP',
      results: ['40% faster production planning', '60% reduction in stockouts', '25% cost savings'],
      href: '/case-studies/pakistani-manufacturing'
    },
    {
      title: 'US E-commerce Retailer',
      industry: 'Retail & eCommerce',
      challenge: 'Disconnected systems and manual order processing',
      solution: 'Integrated eCommerce, POS, and inventory management',
      results: ['50% faster order processing', '35% inventory accuracy improvement', '20% revenue growth'],
      href: '/case-studies/us-ecommerce'
    }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses that transformed their operations with Odoo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link key={index} href={study.href} className="card-hover group">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  {study.industry}
                </span>
                <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors duration-200">
                  {study.title}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-3 h-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                Read Full Case Study
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyTeaser
