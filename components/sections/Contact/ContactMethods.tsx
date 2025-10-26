'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { contactMethods as contactData } from '@/content/contact';
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
      value: contactData.email.value,
      icon: contactData.email.icon,
      href: contactData.email.href,
      description: t('contact.methods.emailDesc'),
    },
    {
      label: t('contact.methods.phone'),
      value: contactData.phone.value,
      icon: contactData.phone.icon,
      href: contactData.phone.href,
      description: t('contact.methods.phoneDesc'),
    },
    {
      label: t('contact.methods.github'),
      value: contactData.github.value,
      icon: contactData.github.icon,
      href: contactData.github.href,
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
