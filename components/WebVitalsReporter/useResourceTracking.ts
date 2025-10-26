import { useEffect } from 'react';
import { sendCustomMetric } from './utils';

/**
 * Hook to track resource loading (bundle size and load times)
 */
export function useResourceTracking() {
  useEffect(() => {
    const trackResourceLoading = () => {
      const resources = performance.getEntriesByType('resource');
      const isResourceTiming = (
        entry: PerformanceEntry
      ): entry is PerformanceResourceTiming => {
        return 'transferSize' in entry;
      };

      const jsResources = resources
        .filter(isResourceTiming)
        .filter(
          (resource) =>
            resource.name.includes('.js') &&
            !resource.name.includes('polyfills') &&
            resource.name.includes('_next/static')
        );

      let totalJSSize = 0;
      let totalLoadTime = 0;
      let threeJSSize = 0;

      jsResources.forEach((resource) => {
        if (resource.transferSize) {
          totalJSSize += resource.transferSize;
          totalLoadTime += resource.responseEnd - resource.startTime;

          // Track Three.js bundle size separately
          if (
            resource.name.includes('three') ||
            resource.name.includes('Three')
          ) {
            threeJSSize += resource.transferSize;
          }
        }
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('📦 Resource Loading:', {
          'Total JS Size': `${(totalJSSize / 1024).toFixed(2)} KB`,
          'Three.js Size': `${(threeJSSize / 1024).toFixed(2)} KB`,
          'Average Load Time': `${(totalLoadTime / jsResources.length).toFixed(2)}ms`,
          'Resource Count': jsResources.length,
        });
      }

      // Report bundle metrics to Vercel Analytics
      if (process.env.NODE_ENV === 'production') {
        sendCustomMetric('total-js-bundle-size', totalJSSize);
        sendCustomMetric('threejs-bundle-size', threeJSSize);
      }
    };

    // Delay resource tracking to ensure all resources are loaded
    setTimeout(trackResourceLoading, 3000);
  }, []);
}

