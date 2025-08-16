'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function SkillsHeader() {
  const { t } = useTranslation();

  return (
    <header className="text-center mb-16">
      <h2
        id="skills-title"
        className="text-5xl font-bold text-gray-900 mb-6"
        data-macaly="skills-title"
      >
        {t('skills.title')}
      </h2>
      <p
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        data-macaly="skills-description"
      >
        {t('skills.description')}
      </p>
    </header>
  );
}
