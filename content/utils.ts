import type { Language } from './translations';

/**
 * Formats experience duration in months to a human-readable string
 * @param months - Total number of months
 * @param language - Language for formatting ('cs' or 'en')
 * @returns Formatted string like "2 years and 3 months" or "2 roky a 3 měsíce"
 */
export const formatExperienceDuration = (
  months: number,
  language: Language
): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (language === 'cs') {
    if (years > 0) {
      return remainingMonths > 0
        ? `${years} rok${years > 1 ? 'y' : ''} a ${remainingMonths} měsíc${remainingMonths > 1 ? 'ů' : ''}`
        : `${years} rok${years > 1 ? 'y' : ''}`;
    }
    return `${months} měsíc${months > 1 ? 'ů' : ''}`;
  } else {
    if (years > 0) {
      return remainingMonths > 0
        ? `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
        : `${years} year${years > 1 ? 's' : ''}`;
    }
    return `${months} month${months > 1 ? 's' : ''}`;
  }
};

/**
 * Determines the experience level based on months of experience
 * @param months - Total number of months of experience
 * @returns Experience level label in Czech ('Pokročilý', 'Střední', 'Začínající', or 'Základní')
 */
export const getExperienceLevel = (months: number): string => {
  if (months >= 18) return 'Pokročilý';
  if (months >= 10) return 'Střední';
  if (months >= 6) return 'Začínající';
  return 'Základní';
};

