'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error boundary caught:', error);
  }, [error]);

  return (
    <html lang="cs">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 opacity-20 blur-xl rounded-full animate-pulse" />
                <AlertTriangle className="w-24 h-24 text-red-500 relative" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 mb-12">
              <h1 className="text-4xl font-bold text-gray-900">
                Oops! Something went wrong
              </h1>
              <p className="text-lg text-gray-600">
                We apologize for the inconvenience
              </p>
              <p className="text-base text-gray-500 max-w-md mx-auto">
                An unexpected error occurred. The team has been automatically
                notified and we are working on resolving the issue.
              </p>
            </div>

            {/* Technical Details (if available) */}
            {error.digest && (
              <div className="bg-gray-100 rounded-lg p-4 mb-8 text-left">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Technical Information
                </h3>
                <p className="text-xs text-gray-600 font-mono break-all">
                  Error ID: {error.digest}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <RefreshCcw className="w-5 h-5" />
                Try Again
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
