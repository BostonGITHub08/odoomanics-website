'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Implementation', href: '/services/implementation' },
        { name: 'Customization', href: '/services/customization' },
        { name: 'Data Migration', href: '/services/migration' },
        { name: 'Training & Support', href: '/services/support' },
        { name: 'Managed Hosting', href: '/services/hosting' },
      ]
    },
    {
      name: 'Odoo Modules',
      href: '/odoo-modules',
      children: [
        { name: 'CRM & Sales', href: '/odoo-modules/crm' },
        { name: 'Inventory', href: '/odoo-modules/inventory' },
        { name: 'Accounting', href: '/odoo-modules/accounting' },
        { name: 'Manufacturing', href: '/odoo-modules/manufacturing' },
        { name: 'eCommerce', href: '/odoo-modules/ecommerce' },
        { name: 'HR & Payroll', href: '/odoo-modules/hr' },
        { name: 'View All Modules', href: '/odoo-modules' },
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      children: [
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Retail & eCommerce', href: '/industries/retail' },
        { name: 'Distribution', href: '/industries/distribution' },
        { name: 'Services', href: '/industries/services' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Education', href: '/industries/education' },
        { name: 'View All Industries', href: '/industries' },
      ]
    },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="OdooManics Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-dark hover:text-primary font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-primary transition-colors duration-200"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark hover:text-primary transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 text-dark hover:text-primary font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
