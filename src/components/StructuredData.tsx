interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'faq' | 'breadcrumb' | 'article'
  data: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OdooManics",
          "url": "https://odoomanics.com",
          "logo": "https://odoomanics.com/_assets/logo.png",
          "sameAs": [
            "https://linkedin.com/company/odoomanics",
            "https://twitter.com/odoomanics"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+923215999030",
              "contactType": "sales",
              "areaServed": "PK",
              "availableLanguage": ["en", "ur"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+16173869728",
              "contactType": "sales",
              "areaServed": "US",
              "availableLanguage": ["en"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+966538034685",
              "contactType": "sales",
              "areaServed": "SA",
              "availableLanguage": ["en", "ar"]
            }
          ],
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
              "streetAddress": "347/3B, Main Lahore–Kasur Rd, near Bhabra Market Road, Block M Gulberg III",
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
              "streetAddress": "Al Muruj 12284",
              "addressLocality": "Riyadh",
              "addressCountry": "SA"
            }
          ]
        }

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "OdooManics",
          "description": "Expert Odoo implementation, customization, and managed hosting services",
          "url": "https://odoomanics.com",
          "telephone": "+923215999030",
          "email": "info@odoomanics.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Ghazali Park – Wahdat Road",
            "addressLocality": "Lahore",
            "postalCode": "54000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "31.5204",
            "longitude": "74.3587"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$",
          "serviceArea": [
            {
              "@type": "Country",
              "name": "Pakistan"
            },
            {
              "@type": "Country", 
              "name": "United States"
            },
            {
              "@type": "Country",
              "name": "Saudi Arabia"
            }
          ]
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Odoo Implementation Services",
          "description": data.description || "Expert Odoo implementation, customization, and managed hosting",
          "provider": {
            "@type": "Organization",
            "name": "OdooManics",
            "url": "https://odoomanics.com"
          },
          "areaServed": [
            {
              "@type": "Country",
              "name": "Pakistan"
            },
            {
              "@type": "Country",
              "name": "United States"
            },
            {
              "@type": "Country",
              "name": "Saudi Arabia"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Odoo Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Odoo Implementation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Odoo Customization"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Managed Hosting"
                }
              }
            ]
          }
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || []
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "OdooManics"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OdooManics",
            "logo": {
              "@type": "ImageObject",
              "url": "https://odoomanics.com/_assets/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "image": data.image || "https://odoomanics.com/_assets/og-image.png"
        }

      default:
        return {}
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData
