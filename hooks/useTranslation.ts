'use client';

import { useTranslations as useNextIntlTranslations, useLocale } from 'next-intl';

/**
 * Wrapper around next-intl's useTranslations for easier migration
 * This maintains backward compatibility with the old API
 */
export function useTranslation() {
  const t = useNextIntlTranslations();
  const locale = useLocale();

  return { 
    t, 
    language: locale as 'cs' | 'en'
  };
}
