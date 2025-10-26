import type { Metadata } from 'next';
import { siteConfig } from '@/content/site-config';

const EMOJI = '👩‍💻';
const faviconSvg = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${EMOJI}</text></svg>`;

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
  description: siteConfig.description.short,
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
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    description: siteConfig.description.portfolio,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.jobTitle}`,
    description: siteConfig.description.twitter,
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
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
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
