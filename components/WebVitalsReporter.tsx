'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { useEffect } from 'react';

interface WebVital {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  navigationType?: string;
}

export default function WebVitalsReporter() {
  useReportWebVitals((metric: WebVital) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      const emoji = getMetricEmoji(metric.name, metric.rating);
      console.log(`${emoji} Web Vital: ${metric.name}`, {
        value: `${metric.value.toFixed(2)}${getMetricUnit(metric.name)}`,
        rating: metric.rating,
        id: metric.id,
        delta: metric.delta,
        navigationType: metric.navigationType
      });
    }

    // Send to Vercel Analytics in production
    if (process.env.NODE_ENV === 'production') {
      sendToVercelAnalytics(metric);
    }
  });

  // Additional performance monitoring
  useEffect(() => {
    // Monitor loading performance
    const measureLoadingPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadingMetrics = {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            domInteractive: navigation.domInteractive - navigation.startTime,
            firstPaint: 0,
            firstContentfulPaint: 0
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
              'First Contentful Paint': `${loadingMetrics.firstContentfulPaint.toFixed(2)}ms`
            });
          }

          // Send custom metrics to Vercel Analytics
          if (process.env.NODE_ENV === 'production') {
            sendCustomMetric('dom-content-loaded', loadingMetrics.domContentLoaded);
            sendCustomMetric('first-paint', loadingMetrics.firstPaint);
          }
        }
      }
    };

    // Monitor Three.js scene loading
    const monitorThreeJSLoading = () => {
      const startTime = performance.now();
      
      const checkForCanvas = () => {
        const canvas = document.querySelector('canvas');
        if (canvas) {
          const loadTime = performance.now() - startTime;
          const rating = loadTime < 1000 ? 'good' : loadTime < 2500 ? 'needs-improvement' : 'poor';
          
          if (process.env.NODE_ENV === 'development') {
            const emoji = rating === 'good' ? '🎮✅' : rating === 'needs-improvement' ? '🎮⚠️' : '🎮❌';
            console.log(`${emoji} Three.js Scene Load Time: ${loadTime.toFixed(2)}ms (${rating})`);
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
    };

    // Monitor bundle size and resource loading
    const trackResourceLoading = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') && 
        !resource.name.includes('polyfills') &&
        resource.name.includes('_next/static')
      );

      let totalJSSize = 0;
      let totalLoadTime = 0;
      let threeJSSize = 0;

      jsResources.forEach(resource => {
        if (resource.transferSize) {
          totalJSSize += resource.transferSize;
          totalLoadTime += resource.responseEnd - resource.startTime;
          
          // Track Three.js bundle size separately
          if (resource.name.includes('three') || resource.name.includes('Three')) {
            threeJSSize += resource.transferSize;
          }
        }
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('📦 Resource Loading:', {
          'Total JS Size': `${(totalJSSize / 1024).toFixed(2)} KB`,
          'Three.js Size': `${(threeJSSize / 1024).toFixed(2)} KB`,
          'Average Load Time': `${(totalLoadTime / jsResources.length).toFixed(2)}ms`,
          'Resource Count': jsResources.length
        });
      }

      // Report bundle metrics to Vercel Analytics
      if (process.env.NODE_ENV === 'production') {
        sendCustomMetric('total-js-bundle-size', totalJSSize);
        sendCustomMetric('threejs-bundle-size', threeJSSize);
      }
    };

    // Run measurements
    measureLoadingPerformance();
    monitorThreeJSLoading();
    
    // Delay resource tracking to ensure all resources are loaded
    setTimeout(trackResourceLoading, 3000);

  }, []);

  return null; // This component doesn't render anything
}

// Helper function to get metric unit
function getMetricUnit(metricName: string): string {
  switch (metricName) {
    case 'CLS':
      return '';
    case 'FID':
    case 'FCP':
    case 'LCP':
    case 'TTFB':
      return 'ms';
    case 'INP':
      return 'ms';
    default:
      return 'ms';
  }
}

// Helper function to get emoji for metrics
function getMetricEmoji(metricName: string, rating: string): string {
  const ratingEmoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
  
  switch (metricName) {
    case 'CLS':
      return `📏${ratingEmoji}`;
    case 'FID':
      return `⚡${ratingEmoji}`;
    case 'FCP':
      return `🎨${ratingEmoji}`;
    case 'LCP':
      return `🖼️${ratingEmoji}`;
    case 'TTFB':
      return `🌐${ratingEmoji}`;
    case 'INP':
      return `🖱️${ratingEmoji}`;
    default:
      return `📊${ratingEmoji}`;
  }
}

// Send metrics to Vercel Analytics
function sendToVercelAnalytics(metric: WebVital) {
  // Vercel Analytics automatically captures Web Vitals when using useReportWebVitals
  // We can also send additional tracking data
  if (typeof window !== 'undefined' && (window as any).va) {
    // Use the correct Vercel Analytics API
    (window as any).va('event', {
      name: 'web-vital-detail',
      data: {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating,
        metric_id: metric.id,
        navigation_type: metric.navigationType || 'unknown'
      }
    });
  }

  console.log(`📈 Vercel Analytics: ${metric.name} - ${metric.value.toFixed(2)}${getMetricUnit(metric.name)} (${metric.rating})`);
}

// Send custom metrics to Vercel Analytics
function sendCustomMetric(name: string, value: number) {
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('event', {
      name: 'performance-metric',
      data: {
        metric_name: name,
        metric_value: value,
        timestamp: Date.now()
      }
    });
  }
} 