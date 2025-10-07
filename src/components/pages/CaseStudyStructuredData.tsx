interface CaseStudyData {
  company: string
  industry: string
  location: string
  employees: string
  challenge: string
  solution: string
  results: {
    efficiency: string
    inventoryCosts: string
    orderProcessing: string
    reporting: string
  }
  modules: string[]
  timeline: string
  team: string
}

interface CaseStudyStructuredDataProps {
  caseStudy?: CaseStudyData
}

const CaseStudyStructuredData = ({ caseStudy }: CaseStudyStructuredDataProps) => {
  // Main case studies page structured data
  const mainPageData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Odoo Case Studies - Real Success Stories",
    "description": "Discover how OdooManics has helped businesses transform their operations with Odoo ERP. Read real case studies from manufacturing, retail, and service companies.",
    "url": "https://odoomanics.com/case-studies",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Odoo Implementation Case Studies",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "Pakistani Manufacturing Company - Odoo ERP Success Story",
            "url": "https://odoomanics.com/case-studies/pakistani-manufacturing",
            "description": "How a leading Pakistani manufacturing company increased efficiency by 40% and reduced inventory costs by 25% with Odoo ERP implementation."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "Multi-Store Retail Chain - Odoo Success Story",
            "url": "https://odoomanics.com/case-studies/retail-chain",
            "description": "How a retail chain achieved 60% faster checkout and 30% inventory accuracy with Odoo POS and eCommerce integration."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "name": "Distribution & Logistics Company - Odoo Success Story",
            "url": "https://odoomanics.com/case-studies/distribution-company",
            "description": "How a distribution company achieved 50% faster order processing and 35% cost savings with Odoo implementation."
          }
        }
      ]
    }
  }

  // Individual case study structured data
  const individualCaseStudyData = caseStudy ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${caseStudy.company} - Odoo ERP Success Story`,
    "description": `How ${caseStudy.company} increased efficiency by ${caseStudy.results.efficiency} and reduced inventory costs by ${caseStudy.results.inventoryCosts} with Odoo ERP implementation by OdooManics.`,
    "url": `https://odoomanics.com/case-studies/pakistani-manufacturing`,
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "author": {
      "@type": "Organization",
      "name": "OdooManics",
      "url": "https://odoomanics.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OdooManics",
      "url": "https://odoomanics.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://odoomanics.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://odoomanics.com/case-studies/pakistani-manufacturing"
    },
    "about": {
      "@type": "Organization",
      "name": caseStudy.company,
      "industry": caseStudy.industry,
      "location": {
        "@type": "Place",
        "name": caseStudy.location
      },
      "numberOfEmployees": caseStudy.employees
    },
    "mentions": [
      {
        "@type": "SoftwareApplication",
        "name": "Odoo ERP",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based"
      },
      {
        "@type": "Organization",
        "name": "OdooManics",
        "url": "https://odoomanics.com"
      }
    ]
  } : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(caseStudy ? individualCaseStudyData : mainPageData) 
        }}
      />
    </>
  )
}

export default CaseStudyStructuredData
