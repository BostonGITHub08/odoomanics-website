const IntegrationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Odoo Integration Services",
    "description": "Expert Odoo integration services connecting your business tools with Odoo ERP. We integrate Shopify, WordPress, Google Services, payment gateways, accounting software, and CRM systems.",
    "provider": {
      "@type": "Organization",
      "name": "OdooManics",
      "url": "https://odoomanics.com",
      "logo": "https://odoomanics.com/logo.png",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "347/3B, Main Lahore – Kasur Rd, near Bhabra Market Road, Block M Gulberg III",
          "addressLocality": "Lahore",
          "postalCode": "54000",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "30 Franklin Street, Unit 208",
          "addressLocality": "Malden",
          "addressRegion": "MA",
          "postalCode": "02148",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "128 City Road",
          "addressLocality": "London",
          "postalCode": "EC1V 2NX",
          "addressCountry": "GB"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+923001234567",
          "contactType": "customer service",
          "areaServed": "PK"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-617-555-0123",
          "contactType": "customer service",
          "areaServed": "US"
        }
      ]
    },
    "serviceType": "Software Integration",
    "areaServed": ["Pakistan", "United States", "Saudi Arabia", "United Kingdom"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Odoo Integration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shopify Integration",
            "description": "Connect your Shopify store with Odoo for seamless inventory management and order processing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Integration",
            "description": "Integrate your WordPress website with Odoo to manage content, leads, and customer interactions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Services Integration",
            "description": "Leverage Google Maps, Analytics, Drive, and other Google services within your Odoo system."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payment Gateway Integration",
            "description": "Connect multiple payment gateways to Odoo for seamless payment processing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accounting Software Integration",
            "description": "Sync your accounting software with Odoo for accurate financial reporting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM Systems Integration",
            "description": "Connect external CRM systems with Odoo to maintain customer relationships."
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional Odoo integration services with custom solutions for your business needs",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default IntegrationStructuredData
