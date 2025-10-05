interface HeroProps {
  title: string
  subtitle: string
  description: string
  showCTA?: boolean
}

const Hero = ({ title, subtitle, description, showCTA = true }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-primary-light/5 section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              {title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              {subtitle}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {showCTA && (
            <div className="mt-8">
              <a href="/contact" className="btn-primary">
                Get Started Today
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
