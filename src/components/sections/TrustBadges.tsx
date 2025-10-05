const TrustBadges = () => {
  const badges = [
    { name: 'Odoo Certified Partner', icon: '🏆' },
    { name: 'ISO 27001 Certified', icon: '🔒' },
    { name: '24/7 Support', icon: '🛡️' },
    { name: 'GDPR Compliant', icon: '✅' },
    { name: 'SLA Guaranteed', icon: '📋' },
  ]

  return (
    <section className="py-12 bg-light">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">Trusted by businesses worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-medium">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
