'use client';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'TechCorp Innovation',
    position: 'Senior Full Stack Developer',
    period: '2022 - Present',
    description: [
      'Led development of enterprise-scale React applications serving 50K+ users',
      'Architected and implemented microservices using Node.js and PostgreSQL',
      'Mentored 5 junior developers and established code review best practices',
      'Reduced application load time by 40% through advanced optimization techniques'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    company: 'Digital Dynamics',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Built responsive web applications using React, Next.js, and modern CSS',
      'Developed RESTful APIs and GraphQL endpoints for mobile and web clients',
      'Implemented real-time features using WebSockets and server-sent events',
      'Collaborated with UX designers to create pixel-perfect user interfaces'
    ],
    technologies: ['React', 'Next.js', 'GraphQL', 'MongoDB', 'Express.js']
  },
  {
    company: 'StartupLab',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description: [
      'Created interactive data visualizations using D3.js and Three.js',
      'Optimized application performance and implemented Progressive Web App features',
      'Worked closely with product team to translate mockups into functional components',
      'Maintained 95%+ test coverage using Jest and React Testing Library'
    ],
    technologies: ['JavaScript', 'React', 'D3.js', 'Three.js', 'Jest']
  }
];

export default function Experience() {
  
  
  return (
    <section id="experience" className="py-20 bg-white" aria-labelledby="experience-title">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 
            id="experience-title"
            className="text-5xl font-bold text-gray-900 mb-6"
            data-macaly="experience-title"
          >
            Professional Experience
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-macaly="experience-description"
          >
            A journey of growth, innovation, and continuous learning across 
            diverse projects and cutting-edge technologies.
          </p>
        </header>

        <div className="relative" role="region" aria-label="Professional timeline">
          {/* Timeline line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-amber-500"
            aria-hidden="true"
            role="presentation"
          ></div>
          
          <ol className="space-y-12" role="list" aria-label="Professional positions in reverse chronological order">
            {experiences.map((exp, index) => (
              <li 
                key={index} 
                className="relative flex items-start space-x-8"
                role="listitem"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0" aria-hidden="true">
                  <div 
                    className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"
                    role="presentation"
                  ></div>
                </div>
                
                {/* Content card */}
                <article 
                  className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300"
                  aria-labelledby={`experience-${index}-position`}
                  tabIndex={0}
                >
                  <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 
                        id={`experience-${index}-position`}
                        className="text-2xl font-bold text-gray-900 mb-2"
                        data-macaly={`experience-${index}-position`}
                      >
                        {exp.position}
                      </h3>
                      <h4 
                        className="text-xl text-indigo-600 font-semibold"
                        data-macaly={`experience-${index}-company`}
                      >
                        {exp.company}
                      </h4>
                    </div>
                    <div 
                      className="text-amber-600 font-medium bg-amber-100 px-4 py-2 rounded-full mt-4 lg:mt-0"
                      data-macaly={`experience-${index}-period`}
                      aria-label={`Employment period: ${exp.period}`}
                    >
                      <time>{exp.period}</time>
                    </div>
                  </header>
                  
                  <section aria-labelledby={`experience-${index}-responsibilities`}>
                    <h5 id={`experience-${index}-responsibilities`} className="sr-only">
                      Key responsibilities and achievements
                    </h5>
                    <ul className="space-y-3 mb-6" role="list" aria-label="Key responsibilities">
                      {exp.description.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="text-gray-700 flex items-start space-x-3"
                          role="listitem"
                        >
                          <div 
                            className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" 
                            aria-hidden="true"
                          ></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  
                  <section aria-labelledby={`experience-${index}-technologies`}>
                    <h5 id={`experience-${index}-technologies`} className="sr-only">
                      Technologies used
                    </h5>
                    <div 
                      className="flex flex-wrap gap-2" 
                      role="list" 
                      aria-label="Technologies and tools used"
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                          role="listitem"
                          aria-label={`Technology: ${tech}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}