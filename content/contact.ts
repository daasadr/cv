export interface ContactMethod {
  value: string;
  icon: string;
  href: string;
}

// Labels and descriptions are now in messages files under contact.labels and contact.methods
export const contactMethods = {
  email: {
    value: 'Daasa.D@seznam.cz',
    icon: '📧',
    href: 'mailto:Daasa.D@seznam.cz',
  },
  github: {
    value: 'github.com/daasadr',
    icon: '💻',
    href: 'https://github.com/daasadr',
  },
  linkedin: {
    value: 'linkedin.com/in/dagmar-dr-541a3b2b0',
    icon: '🔗',
    href: 'https://www.linkedin.com/in/dagmar-dr-541a3b2b0',
  },
} as const;
