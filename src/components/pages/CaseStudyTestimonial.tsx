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

interface CaseStudyTestimonialProps {
  caseStudy: CaseStudyData
}

const CaseStudyTestimonial = ({ caseStudy }: CaseStudyTestimonialProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="text-6xl text-primary mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "The OdooManics team transformed our entire operation. What used to take us days now takes hours. 
                The real-time visibility into our production and inventory has been a game-changer. 
                We've not only improved efficiency but also reduced costs significantly. 
                The ROI was evident within the first quarter."
              </blockquote>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-left">
                <div className="font-bold text-dark text-lg">Ahmed Hassan</div>
                <div className="text-gray-600">Operations Director</div>
                <div className="text-primary font-semibold">{caseStudy.company}</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gray-300"></div>
              <div className="text-center md:text-left">
                <div className="font-bold text-dark text-lg">Sarah Khan</div>
                <div className="text-gray-600">IT Manager</div>
                <div className="text-primary font-semibold">{caseStudy.company}</div>
              </div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how OdooManics can help your business achieve similar improvements. 
              Our proven methodology ensures successful implementation and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/case-studies" className="btn-secondary">
                View More Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyTestimonial
