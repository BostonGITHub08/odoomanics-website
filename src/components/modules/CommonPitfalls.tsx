interface CommonPitfallsProps {
  module: string
}

const CommonPitfalls = ({ module }: CommonPitfallsProps) => {
  const pitfalls = [
    {
      pitfall: 'Inadequate data migration planning',
      solution: 'We conduct thorough data analysis and create detailed migration scripts'
    },
    {
      pitfall: 'Poor warehouse layout configuration',
      solution: 'Our experts help design optimal warehouse structures and routing rules'
    },
    {
      pitfall: 'Insufficient user training',
      solution: 'Comprehensive training programs tailored to each user role'
    }
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Common Pitfalls & Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from common implementation challenges and how we prevent them.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {pitfalls.map((item, index) => (
            <div key={index} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Common Pitfall:</h3>
                  <p className="text-gray-700">{item.pitfall}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Our Solution:</h3>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommonPitfalls
