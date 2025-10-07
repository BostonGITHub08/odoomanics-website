const KSASEOOptimization = () => {
  const ksaStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OdooManics",
    "alternateName": "OdooManics KSA",
    "url": "https://odoomanics.com",
    "logo": "https://odoomanics.com/logo.png",
    "description": "Expert Odoo ERP implementation, customization, and support services in Saudi Arabia. Specializing in Manufacturing, Retail, and Services sectors in Riyadh and Dammam.",
    "foundingDate": "2020",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Al Muruj 12284",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh Province",
        "postalCode": "12284",
        "addressCountry": "SA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road, Al Khobar",
        "addressLocality": "Dammam",
        "addressRegion": "Eastern Province",
        "postalCode": "34429",
        "addressCountry": "SA"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966-53-803-4685",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["English", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+966-53-803-4685",
        "contactType": "sales",
        "areaServed": ["Riyadh", "Dammam", "Jeddah"],
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "City",
        "name": "Riyadh"
      },
      {
        "@type": "City",
        "name": "Dammam"
      },
      {
        "@type": "City",
        "name": "Jeddah"
      },
      {
        "@type": "City",
        "name": "Al Khobar"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Odoo Implementation Services Saudi Arabia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Implementation Riyadh",
            "description": "Complete Odoo ERP implementation services for businesses in Riyadh, Saudi Arabia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Implementation Dammam",
            "description": "Expert Odoo ERP setup and customization for companies in Dammam, Eastern Province"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Manufacturing Saudi Arabia",
            "description": "Odoo Manufacturing module implementation for Saudi manufacturing companies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Odoo Retail KSA",
            "description": "Odoo retail and eCommerce solutions for Saudi retail businesses"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/odoomanics",
      "https://twitter.com/odoomanics",
      "https://www.facebook.com/odoomanics"
    ]
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OdooManics Saudi Arabia",
    "image": "https://odoomanics.com/logo.png",
    "description": "Leading Odoo ERP implementation company in Saudi Arabia, serving Riyadh, Dammam, and Jeddah with expert Odoo solutions.",
    "url": "https://odoomanics.com",
    "telephone": "+966-53-803-4685",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Muruj 12284",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "postalCode": "12284",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ksaStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  )
}

export default KSASEOOptimization
