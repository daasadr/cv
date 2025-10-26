'use client';

import dynamic from 'next/dynamic';

/**
 * Lazy-loaded Web Vitals Reporter component
 * This component is dynamically imported with SSR disabled to avoid hydration issues
 */
export const WebVitalsReporterLoader = () => {
  const WebVitalsReporter = dynamic(
    () => import('@/components/WebVitalsReporter'),
    {
      ssr: false,
    }
  );

  return <WebVitalsReporter />;
};

