const ksaLocations = [
  {
    city: 'Riyadh',
    address: 'Al Muruj 12284, Riyadh, Saudi Arabia',
    phone: '+966 53 803 4685',
    email: 'riyadh@odoomanics.com',
    coordinates: { lat: 24.7136, lng: 46.6753 },
    services: ['Manufacturing', 'Retail', 'Services', 'Healthcare', 'Education'],
    description: 'Our main office in Riyadh serves the capital region with comprehensive Odoo implementation services.',
    icon: '🏢'
  },
  {
    city: 'Dammam',
    address: 'King Fahd Road, Al Khobar, Dammam, Saudi Arabia',
    phone: '+966 53 803 4685',
    email: 'dammam@odoomanics.com',
    coordinates: { lat: 26.4207, lng: 50.0888 },
    services: ['Manufacturing', 'Oil & Gas', 'Logistics', 'Retail', 'Services'],
    description: 'Eastern Province office specializing in industrial and energy sector Odoo solutions.',
    icon: '🏭'
  },
  {
    city: 'Jeddah',
    address: 'King Abdulaziz Road, Jeddah, Saudi Arabia',
    phone: '+966 12 345 6789',
    email: 'jeddah@odoomanics.com',
    coordinates: { lat: 21.4858, lng: 39.1925 },
    services: ['Retail', 'eCommerce', 'Logistics', 'Services', 'Healthcare'],
    description: 'Commercial hub office serving the western region with retail and eCommerce focus.',
    icon: '🛍️'
  }
]

const KSALocations = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Offices in Saudi Arabia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Local presence across major Saudi cities with dedicated teams and specialized services 
            for each region's unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ksaLocations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{location.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-2">{location.city}</h3>
                <p className="text-gray-600">{location.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-semibold text-dark">Address:</div>
                    <div className="text-gray-600 text-sm">{location.address}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-dark">Phone:</div>
                    <div className="text-gray-600 text-sm">{location.phone}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-dark">Email:</div>
                    <div className="text-gray-600 text-sm">{location.email}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-dark mb-3">Specialized Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <a 
                  href={`tel:${location.phone}`}
                  className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
                >
                  Call Now
                </a>
                <a 
                  href={`mailto:${location.email}`}
                  className="flex-1 border border-primary text-primary text-center py-2 px-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Ready to Start Your Odoo Implementation?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our nearest office for a free consultation and discover how Odoo can transform your business operations.
          </p>
          <a href="/contact" className="btn-primary">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default KSALocations
