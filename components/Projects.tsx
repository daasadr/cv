'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: number;
}

const projects: Project[] = [
  {
    title: 'Interaktivní komponenta pro výrobce laboratorního vybavení',
    description: 'Dropshipping e-commerce řešení s autentizací uživatelů, správou produktů, funkcí nákupního košíku, zpracováním plateb a newslettery.',
    technologies: ['Accessibility', 'CSS only interactivity', 'Performance', 'Figma'],
    githubUrl: 'https://github.com/daasadr/interaktivni_linka',
    liveUrl: '/interaktivni_linka.html',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025
  },
  {
    title: 'Aplikace pro lektora střeleckého výcviku',
    description: '',
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025
  },
  {
    title: 'No-code generování PWA',
    description: 'Drag & drop sestavení a generování PWA.',
    technologies: ['React Brics', 'Next.js', 'Directus'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025
  }, {
    title: 'Dropshipping e-commerce řešení',
    description: 'Dropshipping e-commerce řešení s autentizací uživatelů, správou produktů, funkcí nákupního košíku, zpracováním plateb a newslettery.',
    technologies: ['Next.js', 'Directus'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2024
  },
  {
    title: 'Práce s mapami',
    description: 'Appka pro zobrazení mapy a práci s ní - měření vzdáleností ap. Využívá Google Maps API a OpenLayers.',
    technologies: ['React', 'Google Maps API', 'Github Actions', 'OpenLayers', 'MUI'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    liveUrl: 'https://daasadr.github.io/vrg-demo3/',
    githubUrl: 'https://github.com/daasadr/vrg-demo3',
    year: 2024
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  console.log('Projects component rendered with', projects.length, 'projects');

  // Group projects by year in descending order
  const projectsByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<number, Project[]>);

  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a); // Descending order

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-gray-900 mb-6"
            data-macaly="projects-title"
          >
            Zkušenosti a tvorba
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-macaly="projects-description"
          >
            Seznam projektů, které ukazují mé technické znalosti a kreativní řešení problémů.
          </p>
        </div>

        {/* Projects grouped by year */}
        {years.map((year) => (
          <div key={year} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {year}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projectsByYear[year].map((project, index) => (
                <div
                  key={`${year}-${index}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      data-macaly={`project-${year}-${index}-image`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4
                        className="text-2xl font-bold text-gray-900"
                        data-macaly={`project-${year}-${index}-title`}
                      >
                        {project.title}
                      </h4>
                      {project.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <p
                      className="text-gray-600 mb-6 leading-relaxed"
                      data-macaly={`project-${year}-${index}-description`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 font-medium"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 font-medium"
                        >
                          View Code
                        </a>
                      )}
                    </div>

                    {project.longDescription && (
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 font-medium"
                        >
                          View Details
                        </button>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 font-medium"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 font-medium"
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}