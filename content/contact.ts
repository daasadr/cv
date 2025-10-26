export interface ContactMethod {
  label: string;
  value: string;
  icon: string;
  href: string;
  description: string;
}

export const contactMethods = {
  email: {
    value: 'Daasa.D@seznam.cz',
    icon: '📧',
    href: 'mailto:Daasa.D@seznam.cz',
  },
  phone: {
    value: '+420 773 245 222',
    icon: '📱',
    href: 'tel:+420773245222',
  },
  github: {
    value: 'github.com/daasadr',
    icon: '💻',
    href: 'https://github.com/daasadr',
  },
} as const;

