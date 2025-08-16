'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function AboutContent() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
      <p data-macaly="about-paragraph-1">
        {t('about.content.paragraph1')}
        <a
          href="#skills"
          className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
          aria-describedby="skills-link-desc"
        >
          {t('about.content.skillsLink')}
          <span id="skills-link-desc" className="sr-only">
            - {t('about.content.skillsLinkDesc')}
          </span>
        </a>
        ).
      </p>

      <p data-macaly="about-paragraph-2">{t('about.content.paragraph2')}</p>
    </div>
  );
}
