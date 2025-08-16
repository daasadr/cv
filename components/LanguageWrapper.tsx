'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language } = useLanguage();

  useEffect(() => {
    // Dynamicky měníme lang atribut html elementu pouze na klientovi
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  return <>{children}</>;
}
