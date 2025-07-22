import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

interface BodyWrapperProps {
  children: React.ReactNode;
  fontClass: string;
}

export default function BodyWrapper({ children, fontClass }: BodyWrapperProps) {
  return (
    <body className={`${fontClass} antialiased`}>
      {/* Skip to main content for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Přeskočit na hlavní obsah
      </a>

      {/* Main application */}
      <div
        id="app"
        className="bg-gray-50"
        role="application"
        aria-label="Portfolio Dagmar Drbálková"
      >
        {children}
      </div>

      {/* Vercel Analytics & Performance Monitoring */}
      <Analytics />
      <SpeedInsights />

      {/* Screen reader only site info */}
      <div className="sr-only">
        <p>
          Tato stránka je optimalizována pro přístupnost a podporuje čtečky
          obrazovky, klávesovou navigaci a další asistivní technologie.
        </p>
      </div>
    </body>
  );
}
