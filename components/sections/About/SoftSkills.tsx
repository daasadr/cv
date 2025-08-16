'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function SoftSkills() {
  const { t } = useTranslation();

  const softSkills = [
    t('about.softSkills.communication'),
    t('about.softSkills.selfDriven'),
    t('about.softSkills.problemSolving'),
    t('about.softSkills.reliability'),
    t('about.softSkills.creativity'),
    t('about.softSkills.perseverance'),
    t('about.softSkills.growthMindset'),
  ];

  return (
    <section aria-labelledby="soft-skills-title">
      <h3
        id="soft-skills-title"
        className="text-2xl font-bold text-gray-900 mb-8 mt-10"
      >
        {t('about.softSkills.title')}
      </h3>
      <div
        className="mt-10 flex flex-wrap gap-4"
        role="list"
        aria-label="Seznam soft skills"
      >
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium"
            role="listitem"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
