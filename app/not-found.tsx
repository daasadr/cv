'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { FileQuestion, Home, Mail, FolderOpen } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          {/* 404 Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/10">
            <FileQuestion className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>

          {/* 404 Title */}
          <h1 className="text-6xl font-bold mb-3 text-primary">404</h1>
          <h2 className="text-3xl font-semibold mb-3 text-foreground">
            {t('error.notFound.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            {t('error.notFound.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
            {t('error.notFound.description')}
          </p>
        </div>

        {/* Suggestions Card */}
        <Card className="mb-8 p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            {t('error.notFound.suggestions.title')}
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{t('error.notFound.suggestions.home')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{t('error.notFound.suggestions.projects')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{t('error.notFound.suggestions.contact')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{t('error.notFound.suggestions.check')}</span>
            </li>
          </ul>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <Link href="/" aria-label={t('error.notFound.suggestions.home')}>
              <Home className="w-4 h-4" aria-hidden="true" />
              {t('error.actions.goHome')}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <Link 
              href="/#projects" 
              aria-label={t('error.notFound.suggestions.projects')}
            >
              <FolderOpen className="w-4 h-4" aria-hidden="true" />
              {t('nav.projects')}
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto gap-2"
          >
            <Link 
              href="/#contact" 
              aria-label={t('error.notFound.suggestions.contact')}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {t('nav.contact')}
            </Link>
          </Button>
        </div>

        {/* Visual separator */}
        <div className="mt-12 text-center">
          <div className="inline-block text-8xl font-bold text-primary/5 select-none">
            404
          </div>
        </div>
      </div>
    </div>
  );
}

