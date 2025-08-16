'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { type TranslationKey, translations } from '@/lib/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (
    key: TranslationKey,
    params?: Record<string, string | number>
  ): string => {
    let text = translations[language][key] || key;

    // Nahradit parametry v textu
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }

    return text;
  };

  return { t, language };
}
