const PricingStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Odoo Implementation Services",
    "description": "Professional Odoo ERP implementation and hosting services with three comprehensive plans: Alpha, Bravo, and Charlie.",
    "provider": {
      "@type": "Organization",
      "name": "OdooManics",
      "url": "https://odoomanics.com",
      "logo": "https://odoomanics.com/logo.png",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "8 Ghazali Park – Wahdat Road",
          "addressLocality": "Lahore",
          "postalCode": "54000",
          "addressCountry": "PK"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Al Muruj 12284",
          "addressLocality": "Riyadh",
          "addressCountry": "SA"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "30 Franklin Street, Unit 208",
          "addressLocality": "Malden",
          "addressRegion": "MA",
          "postalCode": "02148",
          "addressCountry": "US"
        }
      ]
    },
    "areaServed": ["Pakistan", "Saudi Arabia", "United States"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Odoo Implementation Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Charlie Plan - Small Business",
          "description": "Perfect for small businesses with 6 standard Odoo modules, complete implementation, and hosting included.",
          "price": "45000",
          "priceCurrency": "SAR",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Implementation - Charlie Plan",
            "description": "6 Standard Modules, up to 10 users, complete implementation with training and 30 days post-launch support"
          }
        },
        {
          "@type": "Offer",
          "name": "Bravo Plan - Medium Business",
          "description": "Ideal for medium-sized businesses with 10 standard Odoo modules, advanced customization, and priority support.",
          "price": "85000",
          "priceCurrency": "SAR",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Implementation - Bravo Plan",
            "description": "10 Standard Modules, up to 25 users, advanced customization with 60 days post-launch support"
          }
        },
        {
          "@type": "Offer",
          "name": "Alpha Plan - Large Business",
          "description": "Enterprise solution for large businesses with 20 standard Odoo modules, unlimited users, and dedicated support.",
          "price": "150000",
          "priceCurrency": "SAR",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Implementation - Alpha Plan",
            "description": "20 Standard Modules, unlimited users, enterprise customization with 90 days post-launch support and dedicated manager"
          }
        }
      ]
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in the implementation price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The implementation price includes complete Odoo setup, configuration of selected modules, data migration, user training, basic customization, workflow setup, go-live support, and post-launch support for the specified period. It also includes one year of hosting management."
        }
      },
      {
        "@type": "Question",
        "name": "Are Odoo license fees included in the pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Odoo Enterprise license fees are not included in our implementation pricing. These are billed separately by Odoo based on the number of users and activated modules."
        }
      },
      {
        "@type": "Question",
        "name": "What deployment options do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all three deployment options: Online (cloud hosting), Odoo.sh (Odoo's official platform), and On-Premises (hosted on your own infrastructure). All plans support all deployment types."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add more modules later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can add additional modules at any time for SAR 3,500 per module. This includes full implementation, configuration, integration with existing modules, and user training."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer payment plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer milestone-based payments: 40% upfront, 40% after user acceptance testing, and 20% at go-live."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  )
}

export default PricingStructuredData
