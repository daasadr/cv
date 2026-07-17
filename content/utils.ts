import type { Locale } from '@/i18n/types';

/**
 * Počet celých měsíců mezi datem zahájení a dneškem.
 * Díky tomu se doba u dovedností i roky zkušeností počítají dynamicky
 * a průběžně narůstají podle reálného času.
 * @param startDate - datum zahájení ve formátu ISO (např. '2024-01-01')
 * @returns počet uplynulých celých měsíců (min. 0)
 */
export const getMonthsSince = (startDate: string): number => {
  const start = new Date(startDate);
  const now = new Date();
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months--;
  return Math.max(0, months);
};

/**
 * Datum, od kterého se počítají celkové roky zkušeností v IT.
 * Nastaveno tak, aby k červenci 2026 odpovídalo 3 rokům, a dále roste.
 */
export const EXPERIENCE_START_DATE = '2023-07-01';

/**
 * Formats experience duration in months to a human-readable string
 * @param months - Total number of months
 * @param language - Language for formatting ('cs' or 'en')
 * @returns Formatted string like "2 years and 3 months" or "2 roky a 3 měsíce"
 */
export const formatExperienceDuration = (
  months: number,
  language: Locale
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
 * Determines the experience level key based on months of experience
 * @param months - Total number of months of experience
 * @returns Experience level key for translation ('advanced', 'intermediate', 'beginner', or 'basic')
 */
export const getExperienceLevelKey = (months: number): string => {
  if (months >= 18) return 'advanced';
  if (months >= 10) return 'intermediate';
  if (months >= 6) return 'beginner';
  return 'basic';
};
