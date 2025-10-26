'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.errors.nameLength');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = t('contact.form.errors.subjectLength');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.errors.messageLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    const isFormErrorKey = (key: string): key is keyof FormErrors => {
      return ['name', 'email', 'subject', 'message'].includes(key);
    };

    if (isFormErrorKey(name) && errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulace odeslání formuláře
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section aria-labelledby="contact-form-title">
      <h3
        id="contact-form-title"
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        {t('contact.form.title')}
      </h3>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        noValidate
        aria-describedby="form-instructions"
      >
        {/* Instructions for screen readers */}
        <div id="form-instructions" className="sr-only">
          {t('contact.form.instructions')}
        </div>

        <fieldset className="border-none p-0">
          <legend className="sr-only">{t('contact.form.personalInfo')}</legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t('contact.form.fullName')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-4 py-3 border rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  errors.name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-transparent'
                }`}
                placeholder={t('contact.form.placeholders.name')}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-2 text-sm text-red-600"
                  role="alert"
                >
                  <span className="sr-only">Chyba: </span>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : 'email-help'}
                className={`w-full px-4 py-3 border rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-transparent'
                }`}
                placeholder={t('contact.form.placeholders.email')}
              />
              <p id="email-help" className="mt-1 text-xs text-gray-500">
                {t('contact.form.emailHelp')}
              </p>
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-600"
                  role="alert"
                >
                  <span className="sr-only">Chyba: </span>
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        <fieldset className="border-none p-0">
          <legend className="sr-only">{t('contact.form.message')}</legend>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t('contact.form.subject')}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={`w-full px-4 py-3 border rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                errors.subject
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-transparent'
              }`}
              placeholder={t('contact.form.placeholders.subject')}
            />
            {errors.subject && (
              <p
                id="subject-error"
                className="mt-2 text-sm text-red-600"
                role="alert"
              >
                <span className="sr-only">Chyba: </span>
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t('contact.form.messageText')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={
                errors.message ? 'message-error' : 'message-help'
              }
              rows={6}
              className={`w-full px-4 py-3 border rounded-xl transition-colors duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-transparent'
              }`}
              placeholder={t('contact.form.placeholders.message')}
            />
            <p id="message-help" className="mt-1 text-xs text-gray-500">
              {t('contact.form.help.message')}
            </p>
            {errors.message && (
              <p
                id="message-error"
                className="mt-2 text-sm text-red-600"
                role="alert"
              >
                <span className="sr-only">Chyba: </span>
                {errors.message}
              </p>
            )}
          </div>
        </fieldset>

        <Button
          type="submit"
          disabled={isSubmitting}
          aria-describedby="submit-button-desc"
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 transform hover:scale-105 focus:scale-105'
          } text-white shadow-lg`}
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {t('contact.form.sending')}
            </span>
          ) : (
            t('contact.form.submit')
          )}
          <span id="submit-button-desc" className="sr-only">
            {isSubmitting
              ? t('contact.form.sendingDesc')
              : t('contact.form.submitDesc')}
          </span>
        </Button>

        {/* Status messages */}
        {submitStatus === 'success' && (
          <div
            className="text-center p-4 bg-green-100 text-green-800 rounded-xl border border-green-200"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">{t('contact.form.success')}</span>
            </div>
            <p className="mt-2">{t('contact.form.successMessage')}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div
            className="text-center p-4 bg-red-100 text-red-800 rounded-xl border border-red-200"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">{t('contact.form.error')}</span>
            </div>
            <p className="mt-2">{t('contact.form.errorMessage')}</p>
          </div>
        )}
      </form>
    </section>
  );
}
