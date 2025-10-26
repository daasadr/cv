'use client';

import { type ReactNode, useState, useEffect } from 'react';
import type { Language } from './types';
import { DEFAULT_LANGUAGE } from './constants';
import { getStoredLanguage, setStoredLanguage } from './storage';
import { LanguageContext } from './LanguageContext';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with default, will be hydrated on client
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = getStoredLanguage();
    if (stored) {
      setLanguageState(stored);
    }
    setIsHydrated(true);
  }, []);

  // Persist changes to localStorage
  useEffect(() => {
    if (isHydrated) {
      setStoredLanguage(language);
    }
  }, [language, isHydrated]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'cs' ? 'en' : 'cs'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

