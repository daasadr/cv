'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ProjectsHeader() {
  const { t } = useTranslation();

  return (
    <header className="text-center mb-16">
      <h2
        id="projects-title"
        className="text-5xl font-bold text-gray-900 mb-6"
        data-macaly="projects-title"
      >
        {t('projects.title')}
      </h2>
      <p
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        data-macaly="projects-description"
      >
        {t('projects.description')}
      </p>
    </header>
  );
}
