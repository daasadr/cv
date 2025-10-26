import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/content/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (project && event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  // Focus management
  useEffect(() => {
    if (project) {
      // Focus the modal
      setTimeout(() => {
        modalRef.current?.focus();
      }, 100);

      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto focus:outline-none"
        tabIndex={-1}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 id="modal-title" className="text-3xl font-bold text-gray-900">
              {project.title}
            </h3>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Zavřít dialog"
              type="button"
            >
              ×
            </Button>
          </div>

          <img
            src={project.image}
            alt={`Detailní obrázek projektu ${project.title}`}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <p
            id="modal-description"
            className="text-gray-700 mb-6 leading-relaxed"
          >
            {project.longDescription}
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

          <div
            className="flex space-x-4"
            role="group"
            aria-label="Akce projektu"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-0 sm:gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:bg-indigo-700 transition-colors duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
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
            {project.githubUrl && (
              <a
                href={project.githubUrl}
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
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
