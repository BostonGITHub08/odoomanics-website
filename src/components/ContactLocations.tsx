const ContactLocations = () => {
  const locations = [
    {
      country: 'Pakistan',
      flag: '🇵🇰',
      isMain: true,
      offices: [
        {
          name: 'Pakistan HQ (Registered)',
          address: '347/3B, Main Lahore – Kasur Rd, near Bhabra Market Road, Block M Gulberg III, Lahore',
          phone: '+92 321 5999030',
          email: 'pk@odoomanics.com'
        },
        {
          name: 'Operating Office',
          address: '347/3B, Main Lahore–Kasur Rd, near Bhabra Market Road, Block M Gulberg III, Lahore, 54000, Pakistan',
          phone: '+92 321 5999030',
          email: 'pk@odoomanics.com'
        }
      ]
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      offices: [
        {
          name: 'Boston Office',
          address: '30 Franklin Street, Unit 208, Malden, MA 02148, USA',
          phone: '+1 (617) 386-9728',
          email: 'us@odoomanics.com'
        }
      ]
    },
    {
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      offices: [
        {
          name: 'Riyadh Office',
          address: 'Al Muruj 12284, Riyadh, Saudi Arabia',
          phone: '+966 53 803 4685',
          email: 'ksa@odoomanics.com'
        }
      ]
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      offices: [
        {
          name: 'London Office',
          address: '128 City Road, London, United Kingdom, EC1V 2NX',
          phone: '+44 7848 115043',
          email: 'uk@odoomanics.com'
        }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Global Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're strategically positioned across multiple continents to serve our clients 
            with local expertise and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="card-hover">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{location.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-dark">{location.country}</h3>
                  {location.isMain && (
                    <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                      Headquarters
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {location.offices.map((office, officeIndex) => (
                  <div key={officeIndex} className="border-l-4 border-primary/20 pl-4">
                    <h4 className="font-semibold text-dark mb-2">{office.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors duration-200">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors duration-200">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the most convenient way to reach us. We're here to help you 
            transform your business with Odoo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Book Free Consultation
            </a>
            <a href="mailto:info@odoomanics.com" className="btn-outline">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocations
