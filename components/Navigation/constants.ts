// Navigation configuration constants
export const SECTIONS = ['hero', 'about', 'skills', 'projects', 'contact'] as const;
export const SCROLL_THRESHOLD = 50;
export const SCROLL_OFFSET = 100;
export const MOBILE_BREAKPOINT = 768;
export const THROTTLE_DELAY = 100;

export type Section = (typeof SECTIONS)[number];

