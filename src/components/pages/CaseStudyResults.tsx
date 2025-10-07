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

interface CaseStudyResultsProps {
  caseStudy: CaseStudyData
}

const CaseStudyResults = ({ caseStudy }: CaseStudyResultsProps) => {
  const resultMetrics = [
    {
      title: 'Efficiency Increase',
      value: caseStudy.results.efficiency,
      description: 'Overall operational efficiency improvement',
      icon: '📈',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Inventory Cost Reduction',
      value: caseStudy.results.inventoryCosts,
      description: 'Reduction in inventory holding costs',
      icon: '💰',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Faster Order Processing',
      value: caseStudy.results.orderProcessing,
      description: 'Improvement in order processing speed',
      icon: '⚡',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Reporting Efficiency',
      value: caseStudy.results.reporting,
      description: 'Faster report generation and analysis',
      icon: '📊',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const businessImpact = [
    {
      area: 'Production Planning',
      before: 'Manual planning with Excel spreadsheets',
      after: 'Automated MRP with real-time demand forecasting',
      improvement: '60% faster planning cycles'
    },
    {
      area: 'Inventory Management',
      before: 'Stock-outs and overstocking issues',
      after: 'Real-time inventory tracking with automated reorder points',
      improvement: '35% reduction in stock-outs'
    },
    {
      area: 'Quality Control',
      before: 'Paper-based quality checks',
      after: 'Digital quality control workflows with mobile access',
      improvement: '50% faster quality inspections'
    },
    {
      area: 'Financial Reporting',
      before: 'Monthly manual reports taking 5 days',
      after: 'Real-time dashboards and automated reports',
      improvement: '90% faster report generation'
    },
    {
      area: 'Customer Service',
      before: 'Delayed order status updates',
      after: 'Real-time order tracking and customer portal',
      improvement: '80% improvement in customer satisfaction'
    },
    {
      area: 'Maintenance Management',
      before: 'Reactive maintenance approach',
      after: 'Preventive maintenance scheduling with asset tracking',
      improvement: '40% reduction in unplanned downtime'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Measurable Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The implementation delivered significant improvements across all key business areas, 
            with measurable ROI achieved within the first 6 months.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resultMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${metric.color} text-white text-2xl mb-4`}>
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-dark mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-dark mb-2">
                {metric.title}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Business Impact Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-dark mb-8 text-center">
            Before vs After: Business Impact
          </h3>
          <div className="space-y-6">
            {businessImpact.map((impact, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-4">
                <h4 className="text-lg font-bold text-dark mb-3">{impact.area}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-sm font-semibold text-red-600 mb-1">Before:</div>
                    <div className="text-sm text-gray-600">{impact.before}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600 mb-1">After:</div>
                    <div className="text-sm text-gray-600">{impact.after}</div>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {impact.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Return on Investment
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            The Odoo implementation paid for itself within 8 months through improved efficiency, 
            reduced costs, and better decision-making capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">ROI in first year</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8 months</div>
              <div className="text-sm opacity-90">Payback period</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2.5M</div>
              <div className="text-sm opacity-90">Annual cost savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyResults
