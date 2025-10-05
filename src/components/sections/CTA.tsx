import Link from 'next/link'
import Button from '@/components/ui/Button'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Odoo?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join 150+ successful businesses that have streamlined their operations 
            with our expert Odoo implementations. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Free Discovery</div>
              <div className="text-sm opacity-90">No-cost consultation to assess your needs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Expert Implementation</div>
              <div className="text-sm opacity-90">Certified Odoo specialists at your service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-sm opacity-90">Round-the-clock assistance and monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
