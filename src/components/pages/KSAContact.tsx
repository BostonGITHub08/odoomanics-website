const KSAContact = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Get Started with Odoo in Saudi Arabia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with Odoo? Contact our local team for a free consultation 
            and discover how we can help your organization achieve digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">Contact Our Saudi Team</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-dark mb-4 flex items-center">
                  <span className="text-2xl mr-3">🇸🇦</span>
                  Riyadh Office
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Address:</strong> Al Muruj 12284, Riyadh, Saudi Arabia</p>
                  <p><strong>Phone:</strong> <a href="tel:+966538034685" className="text-primary hover:underline">+966 53 803 4685</a></p>
                  <p><strong>Email:</strong> <a href="mailto:riyadh@odoomanics.com" className="text-primary hover:underline">riyadh@odoomanics.com</a></p>
                  <p><strong>Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-dark mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏭</span>
                  Dammam Office
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Address:</strong> King Fahd Road, Al Khobar, Dammam, Saudi Arabia</p>
                  <p><strong>Phone:</strong> <a href="tel:+966131234567" className="text-primary hover:underline">+966 13 123 4567</a></p>
                  <p><strong>Email:</strong> <a href="mailto:dammam@odoomanics.com" className="text-primary hover:underline">dammam@odoomanics.com</a></p>
                  <p><strong>Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-dark mb-4 flex items-center">
                  <span className="text-2xl mr-3">🛍️</span>
                  Jeddah Office
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Address:</strong> King Abdulaziz Road, Jeddah, Saudi Arabia</p>
                  <p><strong>Phone:</strong> <a href="tel:+966123456789" className="text-primary hover:underline">+966 12 345 6789</a></p>
                  <p><strong>Email:</strong> <a href="mailto:jeddah@odoomanics.com" className="text-primary hover:underline">jeddah@odoomanics.com</a></p>
                  <p><strong>Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-dark mb-6">Get Your Free Consultation</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">First Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Email *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Phone *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+966 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">City *</label>
                <select 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select your city</option>
                  <option value="riyadh">Riyadh</option>
                  <option value="dammam">Dammam</option>
                  <option value="jeddah">Jeddah</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Industry</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select your industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail & eCommerce</option>
                  <option value="services">Professional Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your Odoo requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KSAContact
