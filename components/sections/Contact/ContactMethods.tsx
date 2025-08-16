'use client';

import { useTranslation } from '@/hooks/useTranslation';
import ContactMethodItem from './ContactMethodItem';

interface ContactMethod {
  label: string;
  value: string;
  icon: string;
  href: string;
  description: string;
}

export default function ContactMethods() {
  const { t } = useTranslation();

  const contactMethods: ContactMethod[] = [
    {
      label: t('contact.methods.email'),
      value: 'Daasa.D@seznam.cz',
      icon: '📧',
      href: 'mailto:Daasa.D@seznam.cz',
      description: t('contact.methods.emailDesc'),
    },
    {
      label: t('contact.methods.phone'),
      value: '+420 773 245 222',
      icon: '📱',
      href: 'tel:+420 773 245 222',
      description: t('contact.methods.phoneDesc'),
    },
    {
      label: t('contact.methods.github'),
      value: 'github.com/daasadr',
      icon: '💻',
      href: 'https://github.com/daasadr',
      description: t('contact.methods.githubDesc'),
    },
  ];

  return (
    <section aria-labelledby="contact-methods-title">
      <h3
        id="contact-methods-title"
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        {t('contact.methods.title')}
      </h3>

      <div
        className="space-y-6"
        role="list"
        aria-label={t('contact.methods.ways')}
      >
        {contactMethods.map((method) => (
          <ContactMethodItem key={method.href} {...method} />
        ))}
      </div>
    </section>
  );
}
