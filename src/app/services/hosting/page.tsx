import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo Managed Hosting Services - Secure & Reliable Cloud Hosting',
  description: 'Professional Odoo managed hosting services with 99.9% uptime guarantee. Secure, scalable, and reliable cloud hosting for your Odoo system.',
  openGraph: {
    title: 'Odoo Managed Hosting Services - Secure & Reliable Cloud Hosting',
    description: 'Professional Odoo managed hosting services with 99.9% uptime guarantee. Secure, scalable, and reliable cloud hosting for your Odoo system.',
    images: ['https://odoomanics.com/_assets/og-hosting.png'],
  },
}

const hostingFeatures = [
  {
    title: '99.9% Uptime Guarantee',
    description: 'Reliable hosting with guaranteed uptime and minimal downtime.',
    icon: '⚡'
  },
  {
    title: '24/7 Monitoring',
    description: 'Continuous monitoring of your system performance and security.',
    icon: '👁️'
  },
  {
    title: 'Automatic Backups',
    description: 'Daily automated backups with point-in-time recovery options.',
    icon: '💾'
  },
  {
    title: 'Security Updates',
    description: 'Regular security patches and updates to keep your system secure.',
    icon: '🔒'
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Easily scale your resources as your business grows.',
    icon: '📈'
  },
  {
    title: 'Expert Support',
    description: '24/7 technical support from Odoo hosting experts.',
    icon: '🛠️'
  }
]

const hostingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with Odoo',
    price: '$99/month',
    features: [
      '2 CPU cores',
      '4GB RAM',
      '50GB SSD storage',
      'Unlimited bandwidth',
      'Daily backups',
      'Email support',
      '99.9% uptime SLA'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses with moderate usage',
    price: '$199/month',
    features: [
      '4 CPU cores',
      '8GB RAM',
      '100GB SSD storage',
      'Unlimited bandwidth',
      'Daily backups + point-in-time recovery',
      'Priority support',
      '99.9% uptime SLA',
      'SSL certificate included'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with high performance needs',
    price: '$399/month',
    features: [
      '8 CPU cores',
      '16GB RAM',
      '200GB SSD storage',
      'Unlimited bandwidth',
      'Hourly backups + point-in-time recovery',
      '24/7 phone support',
      '99.95% uptime SLA',
      'Dedicated resources',
      'Custom configurations'
    ],
    recommended: false
  }
]

const securityFeatures = [
  {
    title: 'SSL Encryption',
    description: 'End-to-end encryption for all data transmission',
    icon: '🔐'
  },
  {
    title: 'Firewall Protection',
    description: 'Advanced firewall rules to protect against threats',
    icon: '🛡️'
  },
  {
    title: 'DDoS Protection',
    description: 'Protection against distributed denial-of-service attacks',
    icon: '⚔️'
  },
  {
    title: 'Regular Security Audits',
    description: 'Regular security assessments and vulnerability testing',
    icon: '🔍'
  }
]

const benefits = [
  {
    title: 'Focus on Your Business',
    description: 'Let us handle the technical aspects while you focus on growing your business.',
    icon: '🎯'
  },
  {
    title: 'Cost Effective',
    description: 'Reduce IT costs with our managed hosting solutions.',
    icon: '💰'
  },
  {
    title: 'Expert Management',
    description: 'Benefit from our team of Odoo hosting experts.',
    icon: '👨‍💼'
  },
  {
    title: 'Peace of Mind',
    description: 'Rest assured with our reliable hosting and support.',
    icon: '😌'
  }
]

export default function HostingPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Managed Hosting Services",
          description: "Professional Odoo managed hosting services with 99.9% uptime guarantee, security monitoring, and expert support"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo Managed Hosting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Secure, scalable, and reliable Odoo hosting with 99.9% uptime guarantee. 
              Let us handle the technical aspects while you focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Hosting Quote
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Why Choose Our Hosting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our managed hosting services provide everything you need to run Odoo successfully in the cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Hosting Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the hosting plan that best fits your business needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-8 relative ${plan.recommended ? 'bg-primary text-white' : 'bg-white'}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-light text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-4 ${plan.recommended ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.recommended ? 'text-white opacity-90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className={`text-4xl font-bold mb-8 ${plan.recommended ? 'text-white' : 'text-primary'}`}>
                  {plan.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className={`w-5 h-5 mr-3 ${plan.recommended ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.recommended ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.recommended 
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

      {/* Security Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures to protect your information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Benefits of Managed Hosting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focus on your business while we handle all the technical aspects of hosting your Odoo system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Ready to Host Your Odoo System?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your hosting requirements and create a solution that ensures optimal performance and security for your Odoo system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Free Hosting Assessment
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
