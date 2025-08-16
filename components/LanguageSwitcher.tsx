'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      aria-label={
        language === 'cs'
          ? t('language.switchToEnglish')
          : t('language.switchToCzech')
      }
      title={
        language === 'cs'
          ? t('language.switchToEnglish')
          : t('language.switchToCzech')
      }
    >
      <Languages className="w-4 h-4" />
      <span className="hidden sm:inline">
        {language === 'cs' ? 'EN' : 'CS'}
      </span>
    </button>
  );
}
