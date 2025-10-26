'use client';

import {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';

type Language = 'cs' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = 'preferred-language';
const DEFAULT_LANGUAGE: Language = 'cs';

// Safe localStorage access
function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'cs' || stored === 'en') {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error);
  }
  
  return null;
}

function setStoredLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Failed to save language to localStorage:', error);
  }
}

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

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
