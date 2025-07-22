import Image from 'next/image';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  year: number;
  index: number;
  onViewDetails?: (project: Project) => void;
}

export default function ProjectCard({
  project,
  year,
  index,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      role="listitem"
      aria-labelledby={`project-${year}-${index}-title`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={`Obrázek projektu ${project.title}`}
          width={400}
          height={256}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          data-macaly={`project-${year}-${index}-image`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h4
            id={`project-${year}-${index}-title`}
            className="text-2xl font-bold text-gray-900"
            data-macaly={`project-${year}-${index}-title`}
          >
            {project.title}
          </h4>
          {project.featured && (
            <span
              className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
              aria-label="Doporučený projekt"
            >
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

        <div
          className="flex flex-wrap gap-2 mb-6"
          role="list"
          aria-label="Použité technologie"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4" role="group" aria-label="Akce projektu">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-0 sm:gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:bg-indigo-700 transition-colors duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-describedby={`live-demo-${year}-${index}-desc`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 hidden sm:inline"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Live Demo
              <span id={`live-demo-${year}-${index}-desc`} className="sr-only">
                - otevře živou ukázku projektu {project.title} v novém okně
              </span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="inline-flex items-center gap-0 sm:gap-2 border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 transition-colors duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              aria-describedby={`github-${year}-${index}-desc`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 hidden sm:inline"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
              <span id={`github-${year}-${index}-desc`} className="sr-only">
                - otevře zdrojový kód projektu {project.title} na GitHubu v
                novém okně
              </span>
            </a>
          )}
        </div>

        {project.longDescription && onViewDetails && (
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => onViewDetails(project)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:bg-indigo-700 transition-colors duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              aria-describedby={`details-${year}-${index}-desc`}
              type="button"
            >
              View Details
              <span id={`details-${year}-${index}-desc`} className="sr-only">
                - zobrazí detailní informace o projektu {project.title}
              </span>
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-0 sm:gap-2 border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:border-gray-900 hover:text-gray-900 focus:border-gray-900 focus:text-gray-900 transition-colors duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4 hidden sm:inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
