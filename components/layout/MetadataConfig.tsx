import type { Metadata } from 'next';
import { currentFaviconMetadata } from '@/lib/favicon-emojis';
import { siteConfig } from '@/content/site-config';

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
  icons: currentFaviconMetadata,
};
