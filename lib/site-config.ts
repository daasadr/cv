/**
 * Shared site and personal information configuration
 *
 * This object contains common data used across metadata configuration,
 * structured data, and other site-wide information to avoid duplication
 * and ensure consistency.
 */
export const siteConfig = {
  // Personal Information
  name: 'Dagmar Drbálková',
  jobTitle: 'Full Stack Developer',
  email: 'Daasa.D@seznam.cz',
  phone: '+420773245222',

  // Site Information
  url: 'https://daasadr.github.io',
  siteName: 'Dagmar Drbálková Portfolio',
  locale: 'cs_CZ',

  // Social Links
  social: {
    github: 'https://github.com/daasadr',
  },

  // Professional Information
  description: {
    short:
      'Full Stack Developer s 2+ lety zkušeností v IT. Specializace na TypeScript, React, Node.js. Portfolio, zkušenosti a kontaktní informace.',
    portfolio:
      'Portfolio Full Stack Developerky s 2+ lety zkušeností. Specializace na TypeScript, React, Node.js a moderní webové technologie.',
    structured:
      'Full Stack Developer s 2+ lety zkušeností v TypeScript, React, Node.js',
    twitter:
      'Portfolio Full Stack Developerky s 2+ lety zkušeností v moderních webových technologiích.',
  },

  // Technical Skills
  technologies: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Three.js',
  ],

  // SEO Keywords
  keywords: [
    'Full Stack Developer',
    'TypeScript',
    'React',
    'Node.js',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript',
    'Next.js',
    'PostgreSQL',
    'Dagmar Drbálková',
  ],

  // Address Information
  address: {
    country: 'CZ',
  },

  // Theme Configuration
  theme: {
    color: '#6366F1',
  },
} as const;
