import { siteConfig } from '@/content/site-config';

const EMOJI = '👩‍💻';
const faviconSvg = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${EMOJI}</text></svg>`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description.structured,
  url: siteConfig.url,
  sameAs: [siteConfig.social.github],
  knowsAbout: [...siteConfig.technologies],
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: siteConfig.address.country,
  },
};

/**
 * Critical CSS for above-the-fold content.
 * This is static, developer-controlled CSS that's safe to inject.
 */
const criticalCSS = `
  /* Critical styles for immediate render */
  .hero-critical {
    background: linear-gradient(to bottom right, #f9fafb, #ffffff, #eef2ff);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .hero-content {
    text-align: center;
    padding: 1.5rem;
    max-width: 80rem;
    margin: 0 auto;
    padding-top: 10rem;
    position: relative;
    z-index: 10;
  }
  .hero-title {
    font-size: 3.75rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  .hero-subtitle {
    font-size: 1.5rem;
    color: #4f46e5;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    .hero-title { font-size: 6rem; }
    .hero-subtitle { font-size: 1.875rem; }
    .hero-content { padding-top: 5rem; }
  }
  @media (min-width: 1024px) {
    .hero-content { padding-top: 0; }
  }
`;

/**
 * HeadContent Component
 *
 * This component handles all HTML head content including meta tags, structured data,
 * and critical CSS for the application.
 *
 * @important Security Notice: This component uses dangerouslySetInnerHTML in two places:
 * 1. Critical CSS injection - Safe because it's a static, developer-controlled string
 * 2. JSON-LD structured data - Safe because it's a serialized object we control
 *
 * Both uses are legitimate and necessary for:
 * - Performance optimization (critical CSS)
 * - SEO enhancement (structured data)
 *
 * The content is NOT user-generated and poses no XSS risk.
 *
 * @returns JSX elements for HTML head content
 */
export default function HeadContent() {
  return (
    <>
      {/* Emoji Favicon */}
      <link rel="icon" href={faviconSvg} />
      <link rel="apple-touch-icon" href={faviconSvg} />

      {/* Critical CSS for above-the-fold content */}
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

      {/* Accessibility and performance meta tags */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content={siteConfig.theme.color} />
      <meta name="color-scheme" content="light" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preconnect to font providers */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Enhanced security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />

      {/* Accessibility improvements */}
      <meta
        name="format-detection"
        content="telephone=no, date=no, address=no, email=no, url=no"
      />

      {/* Apple specific */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

      {/* Microsoft specific */}
      <meta name="msapplication-TileColor" content={siteConfig.theme.color} />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Resource hints for performance */}
      <link rel="prefetch" href="/components/Projects" />
      <link rel="prefetch" href="/components/About" />

      {/* Structured data for accessibility and SEO */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
