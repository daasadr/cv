'use client';

import { useTranslation } from '@/hooks/useTranslation';

export function SkipNavigation() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      {t('nav.skipToContent')}
    </a>
  );
}

