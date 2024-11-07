import React from 'react';
import { Code2 } from 'lucide-react';

const skills = {
  'Frontend': [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Redux', level: 85 }
  ],
  'Backend': [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'Spring Boot', level: 65 },
    { name: 'GraphQL', level: 80 }
  ],
  'Database': [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 90 },
    { name: 'Redis', level: 75 },
    { name: 'Elasticsearch', level: 70 }
  ],
  'DevOps': [
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 75 },
    { name: 'AWS', level: 80 },
    { name: 'CI/CD', level: 85 },
    { name: 'Git', level: 95 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-gray-600" />
          Skills & Expertise
        </h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-800 mb-4">{category}</h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}