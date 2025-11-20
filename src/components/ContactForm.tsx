'use client'

import { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Button from '@/components/ui/Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    modules: [] as string[],
    message: '',
    budget: '',
    timeline: ''
  })

  // Use Formspree hook with your form ID
  const [state, handleSubmit] = useForm('manvveal')

  // Reset form when submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        modules: [],
        message: '',
        budget: '',
        timeline: ''
      })
    }
  }, [state.succeeded])

  const modules = [
    'CRM & Sales',
    'Inventory Management',
    'Accounting & Finance',
    'Manufacturing (MRP)',
    'eCommerce',
    'HR & Payroll',
    'Point of Sale (POS)',
    'Project Management',
    'Website Builder',
    'Marketing Automation',
    'Field Service',
    'Helpdesk',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleModuleChange = (module: string) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.includes(module)
        ? prev.modules.filter(m => m !== module)
        : [...prev.modules, module]
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Submit to Formspree - it will automatically handle form serialization
    handleSubmit(e)
  }

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your business requirements and we'll create a customized Odoo solution for you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {state.succeeded ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your inquiry and will get back to you within 24 hours.
                </p>
                <Button onClick={() => window.location.reload()}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                {/* Hidden inputs for Formspree */}
                <input type="hidden" name="modules" value={formData.modules.join(', ')} />
                <input type="hidden" name="_subject" value={`New Contact Form Submission from ${formData.name || 'Visitor'}`} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Odoo Modules of Interest
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {modules.map((module) => (
                      <label key={module} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.modules.includes(module)}
                          onChange={() => handleModuleChange(module)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{module}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-dark mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-dark mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="planning">Just planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your business, current challenges, and what you hope to achieve with Odoo..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {state.errors && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 font-semibold mb-2">
                      ⚠️ Form Submission Error
                    </p>
                    <p className="text-red-600 text-sm">
                      Please check your form fields and try again. If the problem persists, please contact us directly.
                    </p>
                  </div>
                )}

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full md:w-auto"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    We'll respond within 24 hours with a detailed proposal.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
