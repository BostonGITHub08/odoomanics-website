'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is included in the implementation price?',
    answer: 'The implementation price includes complete Odoo setup, configuration of selected modules, data migration, user training, basic customization, workflow setup, go-live support, and post-launch support for the specified period. It also includes one year of hosting management (server maintenance and monitoring).'
  },
  {
    question: 'Are Odoo license fees included in the pricing?',
    answer: 'No, Odoo Enterprise license fees are not included in our implementation pricing. These are billed separately by Odoo based on the number of users and activated modules. We can help you estimate license costs based on your requirements.'
  },
  {
    question: 'What are SH charges and why are they separate?',
    answer: 'Odoo.sh is Odoo\'s official cloud hosting platform. If you choose SH deployment, you will be billed directly by Odoo for their hosting infrastructure. Our pricing includes the management, monitoring, and optimization of your Odoo instance, but not Odoo\'s platform fees.'
  },
  {
    question: 'What deployment options do you support?',
    answer: 'We support all three deployment options: Online (cloud hosting on our servers), Odoo.sh (Odoo\'s official platform), and On-Premises (hosted on your own infrastructure). All plans support all deployment types at the same price.'
  },
  {
    question: 'Can I add more modules later?',
    answer: 'Yes! You can add additional modules at any time for SAR 3,500 per module. This includes full implementation, configuration, integration with existing modules, and user training.'
  },
  {
    question: 'What is the implementation timeline?',
    answer: 'Implementation timelines vary by plan: Charlie Plan takes 4-6 weeks, Bravo Plan takes 6-8 weeks, and Alpha Plan takes 8-12 weeks. The timeline depends on your data volume, complexity, and customization requirements.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer milestone-based payments: 40% upfront to begin the project, 40% after user acceptance testing, and 20% at go-live. This ensures you only pay as we deliver value.'
  },
  {
    question: 'What happens after the post-launch support period ends?',
    answer: 'After the included post-launch support period, you can opt for our Extended Support package at SAR 2,500/month, which includes 24/7 priority support, monthly health checks, performance optimization, and regular updates. Alternatively, you can contact us on a pay-per-incident basis.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade to a higher plan at any time. We will credit your initial payment and you only pay the difference. For example, if you start with Charlie and want to upgrade to Bravo, you pay SAR 4,000 (the difference).'
  },
  {
    question: 'Do you provide training for our team?',
    answer: 'Yes, all plans include comprehensive user training. The number of sessions varies by plan: Charlie includes 2 sessions, Bravo includes 5 sessions, and Alpha includes unlimited training sessions. We also provide training materials and documentation.'
  },
  {
    question: 'What if we need custom features not available in standard Odoo?',
    answer: 'We offer custom development services starting from SAR 12,000. Our team can build custom modules, workflows, reports, and features tailored to your specific business requirements. Alpha Plan includes custom module development.'
  },
  {
    question: 'Is the hosting secure and reliable?',
    answer: 'Yes, we provide enterprise-grade security with SSL certificates, daily backups, firewall protection, DDoS protection, and regular security updates. We guarantee 99.9% uptime for all our hosting services.'
  }
]

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our pricing and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-dark pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan and answer any questions about pricing, implementation, or Odoo features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Schedule a Call
              </a>
              <a href="mailto:info@odoomanics.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingFAQ
