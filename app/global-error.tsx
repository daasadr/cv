'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="cs">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle 
                className="w-10 h-10 text-red-600 dark:text-red-400" 
                aria-hidden="true" 
              />
            </div>

            {/* Error Title */}
            <h1 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">
              Critical Error
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
              Something went wrong with the application
            </p>

            {/* Error Description */}
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
              A critical error occurred that prevented the application from loading properly. 
              Please try refreshing the page or contact support if the problem persists.
            </p>

            {/* Technical Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-left">
                <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
                  Technical Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                      Error Message:
                    </p>
                    <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-sm overflow-x-auto text-slate-900 dark:text-slate-100">
                      {error.message}
                    </code>
                  </div>
                  {error.digest && (
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Error Digest:
                      </p>
                      <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-sm overflow-x-auto text-slate-900 dark:text-slate-100">
                        {error.digest}
                      </code>
                    </div>
                  )}
                  {error.stack && (
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                        Stack Trace:
                      </p>
                      <code className="block p-3 bg-slate-100 dark:bg-slate-900 rounded text-xs overflow-x-auto whitespace-pre text-slate-900 dark:text-slate-100">
                        {error.stack}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={reset}
                size="lg"
                className="w-full sm:w-auto"
              >
                Try Again
              </Button>

              <Button
                onClick={() => {
                  window.location.href = '/';
                }}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Go to Homepage
              </Button>
            </div>

            {/* Reference ID */}
            {error.digest && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
                Reference ID: <code className="font-mono">{error.digest}</code>
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

