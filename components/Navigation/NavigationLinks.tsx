'use client';

import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface NavigationItem {
  label: string;
  id: string;
  mobile: boolean;
}

interface NavigationLinksProps {
  currentSection: string;
  isMobile: boolean;
}

export function NavigationLinks({
  currentSection,
  isMobile,
}: NavigationLinksProps) {
  const { t } = useTranslation();

  const navigationItems: NavigationItem[] = [
    { label: t('nav.about'), id: 'about', mobile: true },
    { label: t('nav.skills'), id: 'skills', mobile: true },
    { label: t('nav.projects'), id: 'projects', mobile: true },
    { label: t('nav.contact'), id: 'contact', mobile: false },
  ];

  return (
    <ul className="flex space-x-8">
      {navigationItems
        .filter((item) => !isMobile || item.mobile)
        .map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'hover:text-indigo-600 focus:text-indigo-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-md px-2 py-1 inline-block',
                currentSection === item.id
                  ? 'text-indigo-600'
                  : 'text-gray-700'
              )}
              aria-current={currentSection === item.id ? 'page' : undefined}
              aria-describedby={`nav-${item.id}-desc`}
            >
              {item.label}
              <span id={`nav-${item.id}-desc`} className="sr-only">
                - {t('nav.goToSection')} {item.label}
              </span>
            </a>
          </li>
        ))}
    </ul>
  );
}

