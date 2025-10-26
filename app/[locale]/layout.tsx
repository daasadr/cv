import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import {
  BodyWrapper,
  bodyFontClass,
  fontVariables,
  HeadContent,
} from '@/components/layout';
import { siteConfig } from '@/content/site-config';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Helper function to get nested values from translation messages object
 */
function getNestedValue(obj: unknown, keys: string[]): string {
  let value: unknown = obj;
  for (const key of keys) {
    if (value !== null && typeof value === 'object' && key in value) {
      value = Reflect.get(value, key);
    } else {
      return '';
    }
  }
  return typeof value === 'string' ? value : '';
}

/**
 * Emoji used for favicon across the application
 */
const EMOJI = '👩‍💻';

/**
 * SVG data URL for emoji favicon
 */
const faviconSvg = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${EMOJI}</text></svg>`;

/**
 * Generate metadata for the page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  const messages = await getMessages();
  const t = (key: string): string => getNestedValue(messages, key.split('.'));
  
  return {
    title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    description: t('siteConfig.description.short'),
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/',
      languages: {
        cs: '/cs',
        en: '/en',
      },
    },
    openGraph: {
      title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
      description: t('siteConfig.description.portfolio'),
      url: siteConfig.url,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
      description: t('siteConfig.description.twitter'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        {
          url: faviconSvg,
          type: 'image/svg+xml',
        },
      ],
      shortcut: faviconSvg,
      apple: [
        {
          url: faviconSvg,
          sizes: '180x180',
          type: 'image/svg+xml',
        },
      ],
    },
  };
}

function isValidLocale(locale: string): locale is 'cs' | 'en' {
  return locale === 'cs' || locale === 'en';
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={fontVariables}>
      <head>
        <HeadContent />
      </head>
      <NextIntlClientProvider messages={messages}>
        <BodyWrapper fontClass={bodyFontClass}>{children}</BodyWrapper>
      </NextIntlClientProvider>
    </html>
  );
}

