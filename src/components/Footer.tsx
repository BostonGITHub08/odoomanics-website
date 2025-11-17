import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Implementation', href: '/services/implementation' },
      { name: 'Customization', href: '/services/customization' },
      { name: 'Data Migration', href: '/services/migration' },
      { name: 'Training & Support', href: '/services/support' },
      { name: 'Managed Hosting', href: '/services/hosting' },
    ],
    modules: [
      { name: 'CRM & Sales', href: '/odoo-modules/crm' },
      { name: 'Inventory', href: '/odoo-modules/inventory' },
      { name: 'Accounting', href: '/odoo-modules/accounting' },
      { name: 'Manufacturing', href: '/odoo-modules/manufacturing' },
      { name: 'eCommerce', href: '/odoo-modules/ecommerce' },
      { name: 'HR & Payroll', href: '/odoo-modules/hr' },
    ],
    industries: [
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Retail & eCommerce', href: '/industries/retail' },
      { name: 'Distribution', href: '/industries/distribution' },
      { name: 'Services', href: '/industries/services' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Education', href: '/industries/education' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
    ],
  }

  const locations = [
    {
      country: 'Pakistan',
      address: '347/3B, Main Lahore – Kasur Rd, near Bhabra Market Road, Block M Gulberg III, Lahore',
      phone: '+92 321 5999030',
      email: 'pk@odoomanics.com'
    },
    {
      country: 'USA',
      address: '30 Franklin Street, Unit 208, Malden, MA 02148, USA',
      phone: '+1 (617) 386-9728',
      email: 'us@odoomanics.com'
    },
    {
      country: 'Saudi Arabia - Riyadh',
      address: 'Al Muruj 12284, Riyadh, Saudi Arabia',
      phone: '+966 53 803 4685',
      email: 'ksa@odoomanics.com'
    },
    {
      country: 'UK',
      address: '128 City Road, London, United Kingdom, EC1V 2NX',
      phone: '+44 7848 115043',
      email: 'uk@odoomanics.com'
    },
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="OdooManics Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Expert Odoo implementation, customization, and managed hosting. 
                From discovery to go-live for businesses across Pakistan, USA, and Saudi Arabia.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/odoomanics" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/odoomanics" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Odoo Modules */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Odoo Modules</h3>
              <ul className="space-y-2">
                {footerLinks.modules.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {locations.map((location) => (
                <div key={location.country} className="text-center md:text-left">
                  <h4 className="text-sm font-semibold text-primary mb-1.5">{location.country}</h4>
                  <p className="text-xs text-gray-300 mb-1 leading-relaxed">{location.address}</p>
                  <p className="text-xs text-gray-300 mb-1">Phone: {location.phone}</p>
                  <p className="text-xs text-gray-300">Email: {location.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400">
                © {currentYear} OdooManics. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ for Odoo excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
