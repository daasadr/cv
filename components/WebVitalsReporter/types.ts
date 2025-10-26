export interface WebVital {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  navigationType?: string;
}

export interface VercelAnalyticsWindow {
  va?: (
    event: string,
    data: { name: string; data: Record<string, unknown> }
  ) => void;
}

export interface LoadingMetrics {
  domContentLoaded: number;
  loadComplete: number;
  domInteractive: number;
  firstPaint: number;
  firstContentfulPaint: number;
}

