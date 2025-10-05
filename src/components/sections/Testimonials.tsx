const Testimonials = () => {
  const testimonials = [
    {
      quote: "OdooManics transformed our manufacturing operations. The MRP implementation reduced our production planning time by 40% and eliminated stockouts completely.",
      author: "Ahmed Khan",
      role: "Operations Director",
      company: "Pakistani Manufacturing Co.",
      location: "Lahore, Pakistan"
    },
    {
      quote: "The eCommerce integration was seamless. Our online sales increased by 35% within the first quarter, and inventory management became completely automated.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechRetail USA",
      location: "Boston, USA"
    },
    {
      quote: "Outstanding support and implementation quality. The team understood our healthcare compliance requirements and delivered a solution that exceeded expectations.",
      author: "Dr. Mohammed Al-Rashid",
      role: "Administrative Director",
      company: "Riyadh Medical Center",
      location: "Riyadh, Saudi Arabia"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our Odoo implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover">
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-dark">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                <div className="text-xs text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
