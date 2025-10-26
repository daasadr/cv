import type { VercelAnalyticsWindow, WebVital } from './types';

/**
 * Get the unit for a given metric
 */
export function getMetricUnit(metricName: string): string {
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

/**
 * Get an emoji representation for a metric based on its name and rating
 */
export function getMetricEmoji(metricName: string, rating: string): string {
  const ratingEmoji =
    rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';

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

/**
 * Type guard for Vercel Analytics Window
 */
export function isVercelAnalyticsWindow(
  win: Window
): win is Window & VercelAnalyticsWindow {
  return 'va' in win && typeof win.va === 'function';
}

/**
 * Send Web Vital metrics to Vercel Analytics
 */
export function sendToVercelAnalytics(metric: WebVital): void {
  // Vercel Analytics automatically captures Web Vitals when using useReportWebVitals
  // We can also send additional tracking data
  if (typeof window !== 'undefined' && isVercelAnalyticsWindow(window)) {
    window.va?.('event', {
      name: 'web-vital-detail',
      data: {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_rating: metric.rating,
        metric_id: metric.id,
        navigation_type: metric.navigationType || 'unknown',
      },
    });
  }
}

/**
 * Send custom performance metrics to Vercel Analytics
 */
export function sendCustomMetric(name: string, value: number): void {
  if (typeof window !== 'undefined' && isVercelAnalyticsWindow(window)) {
    window.va?.('event', {
      name: 'performance-metric',
      data: {
        metric_name: name,
        metric_value: value,
        timestamp: Date.now(),
      },
    });
  }
}

/**
 * Log Web Vital metric to console in development mode
 */
export function logMetricToConsole(metric: WebVital): void {
  if (process.env.NODE_ENV === 'development') {
    const emoji = getMetricEmoji(metric.name, metric.rating);
    console.log(`${emoji} Web Vital: ${metric.name}`, {
      value: `${metric.value.toFixed(2)}${getMetricUnit(metric.name)}`,
      rating: metric.rating,
      id: metric.id,
      delta: metric.delta,
      navigationType: metric.navigationType,
    });
  }
}

