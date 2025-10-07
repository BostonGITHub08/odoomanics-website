const ksaTestimonials = [
  {
    name: 'Ahmed Al-Rashid',
    position: 'Operations Director',
    company: 'Saudi Manufacturing Co.',
    location: 'Riyadh',
    content: 'OdooManics transformed our manufacturing operations. The Odoo implementation increased our efficiency by 45% and reduced inventory costs significantly. Their local support in Riyadh is exceptional.',
    rating: 5,
    industry: 'Manufacturing'
  },
  {
    name: 'Sarah Al-Mansouri',
    position: 'IT Manager',
    company: 'Eastern Retail Group',
    location: 'Dammam',
    content: 'The Odoo retail solution they implemented for our multi-store operations is outstanding. Real-time inventory sync across all locations has been a game-changer for our business.',
    rating: 5,
    industry: 'Retail'
  },
  {
    name: 'Dr. Mohammed Al-Zahrani',
    position: 'Hospital Administrator',
    company: 'King Fahd Medical Center',
    location: 'Jeddah',
    content: 'OdooManics helped us streamline our hospital operations with their healthcare-specific Odoo solution. Patient management and billing processes are now much more efficient.',
    rating: 5,
    industry: 'Healthcare'
  }
]

const KSATestimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            What Our Saudi Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from businesses across Saudi Arabia who have transformed their operations with Odoo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ksaTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-dark">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.position}</div>
                <div className="text-primary font-semibold text-sm">{testimonial.company}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-500 text-sm">{testimonial.location}</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 50+ Successful Saudi Businesses
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            From Riyadh to Dammam, Jeddah to Al Khobar - we've helped businesses across Saudi Arabia 
            achieve digital transformation with Odoo ERP.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Saudi Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Local Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KSATestimonials
