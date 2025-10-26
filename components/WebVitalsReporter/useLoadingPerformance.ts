import { useEffect } from 'react';
import type { LoadingMetrics } from './types';
import { sendCustomMetric } from './utils';

/**
 * Hook to monitor loading performance metrics
 */
export function useLoadingPerformance() {
  useEffect(() => {
    const measureLoadingPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigationEntries = performance.getEntriesByType('navigation');
        const navigation =
          navigationEntries.length > 0 &&
          navigationEntries[0] instanceof PerformanceNavigationTiming
            ? navigationEntries[0]
            : null;

        if (navigation) {
          const loadingMetrics: LoadingMetrics = {
            domContentLoaded:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            domInteractive: navigation.domInteractive - navigation.startTime,
            firstPaint: 0,
            firstContentfulPaint: 0,
          };

          // Get paint timings
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach((entry) => {
            if (entry.name === 'first-paint') {
              loadingMetrics.firstPaint = entry.startTime;
            }
            if (entry.name === 'first-contentful-paint') {
              loadingMetrics.firstContentfulPaint = entry.startTime;
            }
          });

          if (process.env.NODE_ENV === 'development') {
            console.log('📊 Loading Performance:', {
              'DOM Content Loaded': `${loadingMetrics.domContentLoaded.toFixed(2)}ms`,
              'Load Complete': `${loadingMetrics.loadComplete.toFixed(2)}ms`,
              'DOM Interactive': `${loadingMetrics.domInteractive.toFixed(2)}ms`,
              'First Paint': `${loadingMetrics.firstPaint.toFixed(2)}ms`,
              'First Contentful Paint': `${loadingMetrics.firstContentfulPaint.toFixed(2)}ms`,
            });
          }

          // Send custom metrics to Vercel Analytics
          if (process.env.NODE_ENV === 'production') {
            sendCustomMetric(
              'dom-content-loaded',
              loadingMetrics.domContentLoaded
            );
            sendCustomMetric('first-paint', loadingMetrics.firstPaint);
          }
        }
      }
    };

    measureLoadingPerformance();
  }, []);
}

