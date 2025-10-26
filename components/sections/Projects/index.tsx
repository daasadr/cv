'use client';

import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';
import { projects } from '@/content/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50"
      aria-labelledby="projects-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ProjectsHeader />
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
}
