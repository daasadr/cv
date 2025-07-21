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
      console.log(`🔍 Web Vital: ${metric.name}`, {
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        delta: metric.delta,
        navigationType: metric.navigationType
      });
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // You can replace this with your analytics service
      // Examples: Google Analytics, Vercel Analytics, etc.
      sendToAnalytics(metric);
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
            console.log('📊 Loading Performance:', loadingMetrics);
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
          if (process.env.NODE_ENV === 'development') {
            console.log(`🎮 Three.js Scene Load Time: ${loadTime.toFixed(2)}ms`);
          }
          
          // Send Three.js loading metric
          if (process.env.NODE_ENV === 'production') {
            sendToAnalytics({
              name: 'threejs-load-time',
              value: loadTime,
              rating: loadTime < 1000 ? 'good' : loadTime < 2500 ? 'needs-improvement' : 'poor'
            } as WebVital);
          }
        } else {
          // Keep checking for canvas element
          setTimeout(checkForCanvas, 100);
        }
      };
      
      setTimeout(checkForCanvas, 100);
    };

    // Run measurements
    measureLoadingPerformance();
    monitorThreeJSLoading();

    // Monitor bundle size and resource loading
    const trackResourceLoading = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') && 
        !resource.name.includes('polyfills')
      );

      let totalJSSize = 0;
      let totalLoadTime = 0;

      jsResources.forEach(resource => {
        if (resource.transferSize) {
          totalJSSize += resource.transferSize;
          totalLoadTime += resource.responseEnd - resource.startTime;
        }
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('📦 Resource Loading:', {
          totalJSSize: `${(totalJSSize / 1024).toFixed(2)} KB`,
          averageLoadTime: `${(totalLoadTime / jsResources.length).toFixed(2)}ms`,
          resourceCount: jsResources.length
        });
      }

      // Report bundle size metric
      if (process.env.NODE_ENV === 'production') {
        sendToAnalytics({
          name: 'bundle-size',
          value: totalJSSize,
          rating: totalJSSize < 200000 ? 'good' : totalJSSize < 500000 ? 'needs-improvement' : 'poor'
        } as WebVital);
      }
    };

    // Delay resource tracking to ensure all resources are loaded
    setTimeout(trackResourceLoading, 2000);

  }, []);

  return null; // This component doesn't render anything
}

// Analytics function - customize based on your analytics provider
function sendToAnalytics(metric: WebVital) {
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_rating: metric.rating,
        metric_delta: metric.delta
      }
    });
  }

  // Example: Send to Vercel Analytics
  if (typeof window !== 'undefined' && window.va) {
    window.va('track', 'Web Vital', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id
    });
  }

  // Example: Send to custom endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(metric)
  // });

  console.log(`📈 Analytics: ${metric.name} - ${metric.value} (${metric.rating})`);
}

// Extend window type for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    va?: (...args: any[]) => void;
  }
} 