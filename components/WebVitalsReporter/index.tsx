'use client';

import { useReportWebVitals } from 'next/web-vitals';
import type { WebVital } from './types';
import { logMetricToConsole, sendToVercelAnalytics } from './utils';
import { useLoadingPerformance } from './useLoadingPerformance';
import { useThreeJSMonitor } from './useThreeJSMonitor';
import { useResourceTracking } from './useResourceTracking';

/**
 * Web Vitals Reporter Component
 * Monitors and reports web vitals and custom performance metrics
 */
export default function WebVitalsReporter() {
  // Report core web vitals
  useReportWebVitals((metric: WebVital) => {
    // Log to console in development
    logMetricToConsole(metric);

    // Send to Vercel Analytics in production
    if (process.env.NODE_ENV === 'production') {
      sendToVercelAnalytics(metric);
    }
  });

  // Monitor additional performance metrics
  useLoadingPerformance();
  useThreeJSMonitor();
  useResourceTracking();

  return null; // This component doesn't render anything
}

// Re-export the loader for convenience
export { WebVitalsReporterLoader } from './WebVitalsLoader';
