import type { Language } from './types';
import { STORAGE_KEY } from './constants';

// Safe localStorage access
export function getStoredLanguage(): Language | null {
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

export function setStoredLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Failed to save language to localStorage:', error);
  }
}

