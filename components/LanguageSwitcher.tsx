'use client';

import { Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const toggleLanguage = () => {
    const newLocale = locale === 'cs' ? 'en' : 'cs';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        'flex items-center space-x-2 px-3 py-2 rounded-full',
        'bg-white/20 backdrop-blur-sm border border-white/30',
        'hover:bg-white/30 hover:border-white/50',
        'transition-all duration-200 text-sm font-medium',
        'text-gray-700 hover:text-gray-900'
      )}
      aria-label={
        locale === 'cs'
          ? t('switchToEnglish')
          : t('switchToCzech')
      }
      title={
        locale === 'cs'
          ? t('switchToEnglish')
          : t('switchToCzech')
      }
    >
      <Languages className="w-4 h-4" />
      <span className="hidden sm:inline">
        {locale === 'cs' ? 'EN' : 'CS'}
      </span>
    </Button>
  );
}
