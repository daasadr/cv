import ProjectCard from './ProjectCard';
import type { Project } from '@/content/projects';

interface ProjectsListProps {
  projects: Project[];
  onViewDetails?: (project: Project) => void;
}

export default function ProjectsList({
  projects,
  onViewDetails,
}: ProjectsListProps) {
  // Group projects by year in descending order
  const projectsByYear = projects.reduce<Record<number, Project[]>>(
    (acc, project) => {
      if (!acc[project.year]) {
        acc[project.year] = [];
      }
      acc[project.year].push(project);
      return acc;
    },
    {}
  );

  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a); // Descending order

  return (
    <>
      {years.map((year) => (
        <section key={year} className="mb-16" aria-labelledby={`year-${year}`}>
          <h3
            id={`year-${year}`}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            {year}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
            {projectsByYear[year].map((project, index) => (
              <ProjectCard
                key={`${year}-${index}`}
                project={project}
                year={year}
                index={index}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
