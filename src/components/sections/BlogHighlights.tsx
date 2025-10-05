import Link from 'next/link'

const BlogHighlights = () => {
  const blogPosts = [
    {
      title: 'Odoo Accounting vs Local Pakistani FBR Compliance—What\'s Included?',
      excerpt: 'Complete guide to FBR e-invoicing requirements and how Odoo Accounting handles Pakistani tax compliance.',
      category: 'Compliance',
      date: '2024-01-15',
      href: '/blog/odoo-accounting-fbr-compliance',
      readTime: '8 min read'
    },
    {
      title: 'End-to-End Guide to Odoo Inventory Replenishment Rules',
      excerpt: 'Master inventory management with automated reordering, safety stock, and demand forecasting.',
      category: 'How-To',
      href: '/blog/odoo-inventory-replenishment-guide',
      date: '2024-01-10',
      readTime: '12 min read'
    },
    {
      title: 'Data Migration to Odoo: Cleaning, Mapping, Dry-Runs',
      excerpt: 'Best practices for seamless data migration from any ERP system to Odoo with zero downtime.',
      category: 'Migration',
      href: '/blog/odoo-data-migration-best-practices',
      date: '2024-01-05',
      readTime: '10 min read'
    }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance, best practices, and industry insights to help you maximize your Odoo investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.href} className="card-hover group">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                Read Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogHighlights
