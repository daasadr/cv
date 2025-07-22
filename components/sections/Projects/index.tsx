'use client';

import { useRef, useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';
import { projects } from './projectsData';
import type { Project } from './types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleViewDetails = (project: Project) => {
    // Store the currently focused element
    previousFocusRef.current = document.activeElement as HTMLElement;
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Restore focus when modal closes
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ProjectsHeader />
        <ProjectsList projects={projects} onViewDetails={handleViewDetails} />
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
