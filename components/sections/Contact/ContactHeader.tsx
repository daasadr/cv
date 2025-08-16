'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function ContactHeader() {
  const { t } = useTranslation();

  return (
    <header className="text-center mb-16">
      <h2
        id="contact-title"
        className="text-5xl font-bold text-gray-900 mb-6"
        data-macaly="contact-title"
      >
        {t('contact.title')}
      </h2>
      <p
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        data-macaly="contact-description"
      >
        {t('contact.description')}
      </p>
    </header>
  );
}
