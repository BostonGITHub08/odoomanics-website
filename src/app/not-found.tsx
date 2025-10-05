import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary-light/5 flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">
                  Go to Homepage
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-dark mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <Link href="/odoo-modules" className="text-primary hover:text-primary-light transition-colors duration-200">
                Odoo Modules
              </Link>
              <Link href="/services" className="text-primary hover:text-primary-light transition-colors duration-200">
                Our Services
              </Link>
              <Link href="/industries" className="text-primary hover:text-primary-light transition-colors duration-200">
                Industries
              </Link>
              <Link href="/case-studies" className="text-primary hover:text-primary-light transition-colors duration-200">
                Case Studies
              </Link>
              <Link href="/pricing" className="text-primary hover:text-primary-light transition-colors duration-200">
                Pricing
              </Link>
              <Link href="/blog" className="text-primary hover:text-primary-light transition-colors duration-200">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
