'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { skills } from '@/content/skills';

export default function StatsCards() {
  const { t } = useTranslation();

  return (
    <aside aria-labelledby="stats-title">
      <h3 id="stats-title" className="sr-only">
        {t('about.stats.title')}
      </h3>
      <div className="space-y-6">
        <div
          className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100"
          role="group"
          aria-labelledby="experience-stat"
        >
          <div
            className="text-4xl font-bold text-indigo-600 mb-2"
            aria-label={t('about.stats.experienceYears')}
          >
            2
          </div>
          <div id="experience-stat" className="text-gray-700 font-medium">
            {t('about.stats.experience')}
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100"
          role="group"
          aria-labelledby="projects-stat"
        >
          <div
            className="text-4xl font-bold text-amber-600 mb-2"
            aria-label={t('about.stats.projectsCount')}
          >
            11
          </div>
          <div id="projects-stat" className="text-gray-700 font-medium">
            {t('about.stats.projects')} (
            <a
              href="#projects"
              className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
              aria-describedby="projects-list-desc"
            >
              {t('about.stats.list')}
              <span id="projects-list-desc" className="sr-only">
                - {t('about.stats.projectsListDesc')}
              </span>
            </a>
            )
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
          role="group"
          aria-labelledby="technologies-stat"
        >
          <div
            className="text-4xl font-bold text-green-600 mb-2"
            aria-label={t('about.stats.technologiesCount', {
              count: skills.length,
            })}
          >
            {skills.length}
          </div>
          <div id="technologies-stat" className="text-gray-700 font-medium">
            {t('about.stats.technologies')} (
            <a
              href="#skills"
              className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
              aria-describedby="skills-list-desc"
            >
              {t('about.stats.list')}
              <span id="skills-list-desc" className="sr-only">
                - {t('about.stats.technologiesListDesc')}
              </span>
            </a>
            )
          </div>
        </div>
      </div>
    </aside>
  );
}
