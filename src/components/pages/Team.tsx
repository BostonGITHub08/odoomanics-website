const Team = () => {
  const teamMembers = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO & Founder',
      location: 'Lahore, Pakistan',
      expertise: ['Strategic Planning', 'Business Development', 'Team Leadership'],
      bio: 'With over 8 years in ERP implementation, Ahmed leads OdooManics with a vision to democratize enterprise software access.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Implementation',
      location: 'Boston, USA',
      expertise: ['Odoo Implementation', 'Project Management', 'System Architecture'],
      bio: 'Sarah brings 10+ years of experience in enterprise software implementation and has led 50+ successful Odoo projects.'
    },
    {
      name: 'Mohammed Al-Rashid',
      role: 'Regional Director - KSA',
      location: 'Riyadh, Saudi Arabia',
      expertise: ['Local Compliance', 'Regional Operations', 'Client Relations'],
      bio: 'Mohammed ensures our Saudi operations meet local business requirements and compliance standards.'
    },
    {
      name: 'Fatima Khan',
      role: 'Lead Developer',
      location: 'Lahore, Pakistan',
      expertise: ['Custom Development', 'Odoo Studio', 'API Integration'],
      bio: 'Fatima specializes in custom Odoo development and has built 100+ custom modules for various industries.'
    },
    {
      name: 'David Chen',
      role: 'Technical Architect',
      location: 'Boston, USA',
      expertise: ['System Architecture', 'Performance Optimization', 'Cloud Infrastructure'],
      bio: 'David designs scalable Odoo architectures and ensures optimal performance for our enterprise clients.'
    },
    {
      name: 'Aisha Ahmed',
      role: 'Support Manager',
      location: 'Lahore, Pakistan',
      expertise: ['Customer Support', 'Training', 'Documentation'],
      bio: 'Aisha leads our 24/7 support team and ensures our clients get the most value from their Odoo investment.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our certified Odoo specialists bring together decades of experience in ERP implementation, 
            business process optimization, and customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-hover text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-dark mb-2">{member.name}</h3>
              <div className="text-primary font-semibold mb-2">{member.role}</div>
              <div className="text-sm text-gray-600 mb-4">{member.location}</div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="space-y-2">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mr-2 mb-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            Join Our Growing Team
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            delivering exceptional Odoo implementations.
          </p>
          <a href="/careers" className="btn-primary">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team
