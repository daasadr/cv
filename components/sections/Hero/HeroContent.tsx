'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function HeroContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1
        id="hero-title"
        className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight text-wrap-balance no-orphans"
        data-macaly="hero-title"
      >
        Dagmar Drbálková
      </h1>

      <div className="text-2xl md:text-3xl text-indigo-600 font-light mb-8 space-y-2 text-wrap-balance no-orphans">
        <div data-macaly="hero-subtitle-1">{t('hero.subtitle1')}</div>
        <div data-macaly="hero-subtitle-2">{t('hero.subtitle2')}</div>
      </div>

      <div className="space-y-6 mb-12">
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
          data-macaly="hero-description"
        >
          {t('hero.description1')}
        </p>
        <p
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
          data-macaly="hero-description"
        >
          {t('hero.description2')}
        </p>
      </div>
    </>
  );
}
