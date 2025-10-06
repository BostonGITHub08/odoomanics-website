import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Training & Support Services - Expert Guidance',
  description: 'Comprehensive Odoo training and support services. User training, administrator training, and 24/7 technical support for your Odoo system.',
  openGraph: {
    title: 'Odoo Training & Support Services - Expert Guidance',
    description: 'Comprehensive Odoo training and support services. User training, administrator training, and 24/7 technical support for your Odoo system.',
    images: ['https://odoomanics.com/_assets/og-support.png'],
  },
}

const trainingPrograms = [
  {
    title: 'End-User Training',
    description: 'Comprehensive training for your team to effectively use Odoo in their daily work.',
    duration: '2-3 days',
    features: [
      'Module-specific training',
      'Hands-on practice sessions',
      'Real-world scenarios',
      'User guides and documentation',
      'Follow-up support'
    ],
    icon: '👥'
  },
  {
    title: 'Administrator Training',
    description: 'Advanced training for system administrators to manage and maintain Odoo.',
    duration: '3-5 days',
    features: [
      'System configuration',
      'User management',
      'Security settings',
      'Backup and maintenance',
      'Troubleshooting techniques'
    ],
    icon: '👨‍💼'
  },
  {
    title: 'Developer Training',
    description: 'Technical training for developers to customize and extend Odoo functionality.',
    duration: '5-7 days',
    features: [
      'Odoo framework basics',
      'Module development',
      'API integration',
      'Custom reporting',
      'Best practices'
    ],
    icon: '💻'
  },
  {
    title: 'Custom Training',
    description: 'Tailored training programs designed specifically for your business needs.',
    duration: 'Variable',
    features: [
      'Business-specific scenarios',
      'Custom workflow training',
      'Integration training',
      'Advanced features',
      'Ongoing support'
    ],
    icon: '🎯'
  }
]

const supportServices = [
  {
    title: '24/7 Technical Support',
    description: 'Round-the-clock technical support to ensure your Odoo system runs smoothly.',
    features: [
      '24/7 availability',
      'Priority response times',
      'Remote assistance',
      'Issue escalation',
      'Root cause analysis'
    ],
    icon: '🕐'
  },
  {
    title: 'System Maintenance',
    description: 'Regular maintenance and updates to keep your Odoo system secure and optimized.',
    features: [
      'Regular updates',
      'Security patches',
      'Performance monitoring',
      'Database optimization',
      'Backup management'
    ],
    icon: '🔧'
  },
  {
    title: 'Performance Optimization',
    description: 'Continuous monitoring and optimization to ensure optimal system performance.',
    features: [
      'Performance monitoring',
      'Bottleneck identification',
      'Query optimization',
      'Resource management',
      'Scalability planning'
    ],
    icon: '⚡'
  },
  {
    title: 'Issue Resolution',
    description: 'Quick and effective resolution of any issues that may arise with your system.',
    features: [
      'Rapid response',
      'Expert troubleshooting',
      'Issue tracking',
      'Prevention strategies',
      'Documentation updates'
    ],
    icon: '🛠️'
  }
]

const supportLevels = [
  {
    name: 'Basic Support',
    description: 'Essential support for small businesses',
    features: [
      'Email support (48h response)',
      'Basic troubleshooting',
      'Documentation access',
      'Community forum access'
    ],
    price: 'Starting at $99/month'
  },
  {
    name: 'Professional Support',
    description: 'Comprehensive support for growing businesses',
    features: [
      'Email & phone support (24h response)',
      'Priority issue resolution',
      'Remote assistance',
      'Monthly health checks',
      'Performance monitoring'
    ],
    price: 'Starting at $299/month'
  },
  {
    name: 'Enterprise Support',
    description: 'Premium support for large organizations',
    features: [
      '24/7 phone & email support',
      'Dedicated support manager',
      'SLA guarantees',
      'Proactive monitoring',
      'Custom training sessions',
      'Priority development'
    ],
    price: 'Starting at $599/month'
  }
]

export default function SupportPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Training & Support Services",
          description: "Comprehensive Odoo training and support services including user training, administrator training, and 24/7 technical support"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Training & Support Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Maximize your Odoo investment with comprehensive training and ongoing support. 
              From user training to 24/7 technical support, we ensure your team succeeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Support Quote
              </Link>
              <Link href="/training" className="btn-secondary">
                View Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive training programs designed to help your team master Odoo and maximize your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="text-sm text-primary font-semibold mb-6">Duration: {program.duration}</div>
                
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive support services ensure your Odoo system runs smoothly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Support Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support plan that best fits your business needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-8 ${index === 1 ? 'bg-primary text-white' : 'bg-white'}`}>
                <h3 className={`text-2xl font-bold mb-4 ${index === 1 ? 'text-white' : 'text-dark'}`}>
                  {level.name}
                </h3>
                <p className={`mb-6 ${index === 1 ? 'text-white opacity-90' : 'text-gray-600'}`}>
                  {level.description}
                </p>
                <div className={`text-3xl font-bold mb-8 ${index === 1 ? 'text-white' : 'text-primary'}`}>
                  {level.price}
                </div>
                
                <ul className="space-y-3">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className={`w-5 h-5 mr-3 ${index === 1 ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={index === 1 ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`mt-8 w-full text-center block py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    index === 1 
                      ? 'bg-white text-primary hover:bg-gray-100' 
                      : 'bg-primary text-white hover:bg-primary-light'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your training and support needs and create a plan that ensures your team's success with Odoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="btn-outline-white">
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
