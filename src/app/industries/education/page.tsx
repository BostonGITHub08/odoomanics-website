import { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Odoo for Education: Student Management & Academic Operations',
  description: 'Streamline educational operations with Odoo. Student management, course planning, academic records, fee management, and faculty management for educational institutions.',
  keywords: ['Odoo education', 'education ERP', 'student management', 'academic records', 'course planning', 'fee management'],
  openGraph: {
    title: 'Odoo for Education: Student Management & Academic Operations',
    description: 'Streamline educational operations with Odoo. Student management, course planning, academic records, fee management, and faculty management for educational institutions.',
    images: ['https://odoomanics.com/_assets/og-education-industry.png'],
  },
}

const educationChallenges = [
  {
    challenge: 'Student Management',
    description: 'Managing student information, enrollment, and academic progress across multiple programs.',
    solution: 'Comprehensive student information system with enrollment and progress tracking.',
    icon: '🎓'
  },
  {
    challenge: 'Course Planning',
    description: 'Planning and scheduling courses, managing prerequisites, and optimizing resource allocation.',
    solution: 'Advanced course planning with scheduling optimization and resource management.',
    icon: '📚'
  },
  {
    challenge: 'Academic Records',
    description: 'Maintaining accurate academic records, transcripts, and degree progress tracking.',
    solution: 'Secure academic record management with transcript generation and progress tracking.',
    icon: '📋'
  },
  {
    challenge: 'Fee Management',
    description: 'Managing tuition fees, scholarships, financial aid, and payment processing.',
    solution: 'Automated fee management with payment processing and financial aid tracking.',
    icon: '💰'
  },
  {
    challenge: 'Faculty Management',
    description: 'Managing faculty information, schedules, workload, and performance evaluation.',
    solution: 'Comprehensive faculty management with scheduling and performance tracking.',
    icon: '👨‍🏫'
  },
  {
    challenge: 'Communication',
    description: 'Facilitating communication between students, faculty, and administration.',
    solution: 'Integrated communication platform with notifications and messaging systems.',
    icon: '💬'
  }
]

const educationSolutions = [
  {
    title: 'Student Information System',
    description: 'Comprehensive student management with enrollment, progress tracking, and academic records.',
    features: [
      'Student registration and profiles',
      'Enrollment management',
      'Academic progress tracking',
      'Student portal access',
      'Academic record management'
    ],
    icon: '👨‍🎓'
  },
  {
    title: 'Course Management',
    description: 'Advanced course planning and management with scheduling and resource optimization.',
    features: [
      'Course catalog management',
      'Class scheduling and planning',
      'Prerequisite management',
      'Resource allocation',
      'Course evaluation and feedback'
    ],
    icon: '📖'
  },
  {
    title: 'Academic Records',
    description: 'Secure academic record management with transcript generation and progress tracking.',
    features: [
      'Grade management and tracking',
      'Transcript generation',
      'Degree progress monitoring',
      'Academic standing tracking',
      'Record security and compliance'
    ],
    icon: '📊'
  },
  {
    title: 'Fee Management',
    description: 'Automated fee management with payment processing and financial aid tracking.',
    features: [
      'Tuition fee management',
      'Payment processing and tracking',
      'Scholarship and financial aid',
      'Fee structure management',
      'Financial reporting and analytics'
    ],
    icon: '💳'
  },
  {
    title: 'Faculty Management',
    description: 'Comprehensive faculty management with scheduling and performance tracking.',
    features: [
      'Faculty profiles and information',
      'Workload management',
      'Performance evaluation',
      'Schedule and availability',
      'Professional development tracking'
    ],
    icon: '👨‍🏫'
  },
  {
    title: 'Communication Platform',
    description: 'Integrated communication system for students, faculty, and administration.',
    features: [
      'Student-faculty communication',
      'Announcement and notification system',
      'Discussion forums and groups',
      'Event management and scheduling',
      'Mobile communication access'
    ],
    icon: '📱'
  }
]

const educationProcess = [
  {
    step: '01',
    title: 'Student Enrollment',
    description: 'Process new student applications and manage enrollment procedures.'
  },
  {
    step: '02',
    title: 'Course Registration',
    description: 'Manage course registration and scheduling for students and faculty.'
  },
  {
    step: '03',
    title: 'Academic Delivery',
    description: 'Deliver courses and manage academic activities throughout the semester.'
  },
  {
    step: '04',
    title: 'Assessment & Grading',
    description: 'Conduct assessments and manage grading and academic progress.'
  },
  {
    step: '05',
    title: 'Fee Management',
    description: 'Process tuition fees, scholarships, and financial aid applications.'
  },
  {
    step: '06',
    title: 'Academic Reporting',
    description: 'Generate academic reports and maintain student records.'
  }
]

const industryStats = [
  { metric: '30%', description: 'Improvement in administrative efficiency' },
  { metric: '45%', description: 'Reduction in manual processes' },
  { metric: '50%', description: 'Improvement in student satisfaction' },
  { metric: '40%', description: 'Increase in faculty productivity' }
]

const educationTypes = [
  {
    type: 'Universities',
    description: 'Higher education institutions with multiple programs and departments.',
    features: ['Multi-program management', 'Department coordination', 'Research tracking', 'Graduate programs']
  },
  {
    type: 'Colleges',
    description: 'Undergraduate institutions with specialized programs and courses.',
    features: ['Program management', 'Course scheduling', 'Student services', 'Academic advising']
  },
  {
    type: 'Schools',
    description: 'K-12 educational institutions with grade-level management.',
    features: ['Grade-level management', 'Parent communication', 'Attendance tracking', 'Curriculum management']
  },
  {
    type: 'Training Centers',
    description: 'Professional training and certification programs.',
    features: ['Course delivery', 'Certification tracking', 'Skill assessment', 'Professional development']
  }
]

export default function EducationIndustryPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Odoo Education Industry Solutions",
          description: "Complete education management solution with student management, course planning, and academic operations"
        }} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary-light/10 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-dark mb-6">
              Odoo for Education Industry
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your educational operations with Odoo's comprehensive solution. 
              From student management to academic planning, optimize every aspect of your educational institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Education Consultation
              </Link>
              <Link href="/demo" className="btn-secondary">
                Request Education Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Education Industry Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Odoo transforms educational operations across different institution types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Common Education Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational institutions face unique challenges. Here's how Odoo helps solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{challenge.challenge}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Odoo Solution:</h4>
                  <p className="text-sm text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Solutions */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Education Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational management tools designed for modern institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Education Institution Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odoo adapts to different educational institution models and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-bold text-dark mb-4">{type.type}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <ul className="space-y-2 text-left">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Process */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">
              Education Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a systematic approach to educational management with our proven methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our education experts help you implement Odoo and optimize your 
              student management, academic planning, and administrative processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Get Education Consultation
              </Link>
              <Link href="/demo" className="btn-outline-white">
                Request Education Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

