import { MetadataRoute } from 'next'

export async function GET(): Promise<Response> {
  const baseUrl = 'https://odoomanics.com'
  
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/contact',
    '/case-studies',
    '/industries',
    '/blog',
    '/resources',
    '/careers',
    '/legal/privacy',
    '/legal/terms',
    '/odoo-modules',
    '/integrations'
  ]

  const moduleRoutes = [
    'crm',
    'sales',
    'purchase',
    'inventory',
    'accounting',
    'invoicing',
    'manufacturing',
    'mrp',
    'plm',
    'maintenance',
    'quality',
    'project',
    'timesheets',
    'helpdesk',
    'field-service',
    'studio',
    'website',
    'ecommerce',
    'pos',
    'marketing',
    'events',
    'social',
    'live-chat',
    'hr',
    'employees',
    'recruitment',
    'appraisals',
    'payroll',
    'fleet',
    'approvals',
    'documents',
    'subscriptions',
    'rental',
    'sign',
    'knowledge',
    'appointments'
  ]

  const industryRoutes = [
    'manufacturing',
    'distribution',
    'retail',
    'ecommerce',
    'services',
    'real-estate',
    'education',
    'ngo-donations',
    'healthcare',
    'f-b',
    'logistics'
  ]

  const integrationRoutes = [
    'shopify',
    'woocommerce',
    'magento',
    'amazon',
    'stripe',
    'paypal',
    'adyen',
    'dhl',
    'fedex',
    'ups',
    'google-workspace',
    'microsoft-365',
    'metabase',
    'power-bi',
    'sso',
    'whatsapp',
    'fbr-pakistan'
  ]

  const blogRoutes = [
    'odoo-accounting-fbr-compliance',
    'odoo-inventory-replenishment-guide',
    'odoo-manufacturing-30-days',
    'pos-ecommerce-unified-catalog',
    'data-migration-cleaning-mapping',
    'odoo-ngos-donation-tracking',
    'odoo-studio-customize-vs-configure',
    'core-web-vitals-odoo-websites',
    'odoo-shopify-two-way-sync',
    'fbr-e-invoicing-step-by-step'
  ]

  const sitemap: MetadataRoute.Sitemap = [
    ...staticRoutes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
      priority: route === '' ? 1 : 0.8
    })),
    ...moduleRoutes.map(module => ({
      url: `${baseUrl}/odoo-modules/${module}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...industryRoutes.map(industry => ({
      url: `${baseUrl}/industries/${industry}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...integrationRoutes.map(integration => ({
      url: `${baseUrl}/integrations/${integration}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6
    })),
    ...blogRoutes.map(post => ({
      url: `${baseUrl}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5
    }))
  ]

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified?.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
