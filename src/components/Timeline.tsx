import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Giants Inc.',
    role: 'Senior Software Engineer',
    period: '2022 - Present',
    description: 'Leading a team of 5 engineers, building scalable microservices architecture.',
    achievements: [
      'Reduced API response time by 40%',
      'Implemented CI/CD pipeline',
      'Mentored junior developers'
    ]
  },
  {
    company: 'StartupX',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using React and Node.js.',
    achievements: [
      'Built real-time analytics dashboard',
      'Optimized database queries',
      'Implemented authentication system'
    ]
  },
  {
    company: 'Digital Solutions Ltd.',
    role: 'Software Developer',
    period: '2019 - 2020',
    description: 'Worked on enterprise-level applications using Java and Spring Boot.',
    achievements: [
      'Developed RESTful APIs',
      'Improved test coverage by 60%',
      'Automated deployment process'
    ]
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-gray-600" />
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 relative overflow-hidden group hover:bg-gray-100 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500" />
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{exp.company}</h3>
                  <p className="text-pink-600">{exp.role}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}