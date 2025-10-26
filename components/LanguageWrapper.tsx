'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

/**
 * Updates the html lang attribute based on user's language preference.
 * 
 * Note: We use an effect to update the lang attribute instead of passing it
 * to the <html> tag because Next.js App Router's root layout is a Server
 * Component and can't access client-side context. This approach ensures:
 * 1. Server renders with default language (good for SEO)
 * 2. Client hydrates and updates to user's preferred language
 * 3. No hydration mismatches since we don't render different content
 */
export function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update lang attribute when language changes
    document.documentElement.lang = language;
  }, [language]);

  return <>{children}</>;
}
