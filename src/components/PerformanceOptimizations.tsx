import Head from 'next/head'

const PerformanceOptimizations = () => {
  return (
    <Head>
      {/* Preload Critical Resources */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/_assets/hero-bg.jpg" as="image" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource Hints */}
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/pricing" />
      <link rel="prefetch" href="/contact" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#714B67" />
      <meta name="msapplication-TileColor" content="#714B67" />
      
      {/* Critical CSS Inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-section { background: linear-gradient(135deg, #714B67 0%, #875A7B 100%); }
          .btn-primary { background: #714B67; transition: all 0.3s ease; }
          .btn-primary:hover { background: #875A7B; transform: translateY(-2px); }
        `
      }} />
    </Head>
  )
}

export default PerformanceOptimizations
