'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { AlertCircle, Home, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const { t } = useTranslation();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-destructive/10">
            <AlertCircle className="w-10 h-10 text-destructive" aria-hidden="true" />
          </div>

          {/* Error Title */}
          <h1 className="text-4xl font-bold mb-3 text-foreground">
            {t('error.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {t('error.subtitle')}
          </p>

          {/* Error Description */}
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
            {t('error.description')}
          </p>
        </div>

        {/* Technical Details Card (for developers) */}
        {process.env.NODE_ENV === 'development' && (
          <Card className="mb-8 border-destructive/50">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                {t('error.technical.title')}
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {t('error.technical.message')}:
                  </p>
                  <code className="block p-3 bg-secondary rounded text-sm overflow-x-auto">
                    {error.message}
                  </code>
                </div>
                {error.digest && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Error Digest:
                    </p>
                    <code className="block p-3 bg-secondary rounded text-sm overflow-x-auto">
                      {error.digest}
                    </code>
                  </div>
                )}
                {error.stack && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Stack Trace:
                    </p>
                    <code className="block p-3 bg-secondary rounded text-xs overflow-x-auto whitespace-pre">
                      {error.stack}
                    </code>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={reset}
            size="lg"
            className="w-full sm:w-auto gap-2"
            aria-label={t('error.actions.tryAgain')}
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            {t('error.actions.tryAgain')}
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <Link href="/" aria-label={t('error.actions.goHome')}>
              <Home className="w-4 h-4" aria-hidden="true" />
              {t('error.actions.goHome')}
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <Link href="/#contact" aria-label={t('error.actions.contact')}>
              {t('error.actions.contact')}
            </Link>
          </Button>
        </div>

        {/* Additional Help Text */}
        {error.digest && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            Reference ID: <code className="font-mono">{error.digest}</code>
          </p>
        )}
      </div>
    </div>
  );
}

