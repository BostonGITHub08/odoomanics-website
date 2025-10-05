export async function GET(): Promise<Response> {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://odoomanics.com/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /odoo-modules/
Allow: /industries/
Allow: /integrations/
Allow: /blog/
Allow: /case-studies/`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
