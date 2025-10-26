import { useEffect } from 'react';
import { sendCustomMetric } from './utils';

/**
 * Hook to monitor Three.js scene loading performance
 */
export function useThreeJSMonitor() {
  useEffect(() => {
    const startTime = performance.now();

    const checkForCanvas = () => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const loadTime = performance.now() - startTime;
        const rating =
          loadTime < 1000
            ? 'good'
            : loadTime < 2500
              ? 'needs-improvement'
              : 'poor';

        if (process.env.NODE_ENV === 'development') {
          const emoji =
            rating === 'good'
              ? '🎮✅'
              : rating === 'needs-improvement'
                ? '🎮⚠️'
                : '🎮❌';
          console.log(`${emoji} Three.js Load Time: ${loadTime.toFixed(2)}ms`);
        }

        // Send Three.js loading metric to Vercel Analytics
        if (process.env.NODE_ENV === 'production') {
          sendCustomMetric('threejs-load-time', loadTime);
        }
      } else {
        // Keep checking for canvas element (max 10 seconds)
        if (performance.now() - startTime < 10000) {
          setTimeout(checkForCanvas, 100);
        }
      }
    };

    setTimeout(checkForCanvas, 100);
  }, []);
}

