'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function WhyMeSection() {
  const { t } = useTranslation();

  const qualities = [
    t('contact.whyMe.experience'),
    t('contact.whyMe.growth'),
    t('contact.whyMe.expertise'),
    t('contact.whyMe.performance'),
    t('contact.whyMe.independence'),
    t('contact.whyMe.collaboration'),
  ];

  return (
    <aside aria-labelledby="why-me-title" className="flex items-stretch">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
        <h4 id="why-me-title" className="text-xl font-bold text-gray-900 mb-4">
          {t('contact.whyMe.title')}
        </h4>
        <ul
          className="space-y-3 text-gray-700"
          aria-label={t('contact.whyMe.qualities')}
        >
          {qualities.map((quality) => (
            <li key={quality} className="flex items-start space-x-3">
              <div
                className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                aria-hidden="true"
              ></div>
              <span>{quality}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
