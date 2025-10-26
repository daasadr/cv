'use client';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

export default function HeroActions() {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      role="group"
      aria-label="Hlavní akce"
    >
      <Button
        onClick={() =>
          document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        size="lg"
        className="bg-indigo-600/80 backdrop-blur-md text-white px-8 py-7 rounded-full text-lg font-semibold hover:bg-indigo-700/90 focus:bg-indigo-700/90 transform hover:scale-105 focus:scale-105 transition-all duration-200 shadow-lg border border-white/20"
        aria-describedby="projects-button-desc"
        type="button"
      >
        {t('hero.actions.projects')}
        <span id="projects-button-desc" className="sr-only">
          - {t('hero.actions.projectsDesc')}
        </span>
      </Button>

      <Button
        onClick={() =>
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        variant="outline"
        size="lg"
        className="border-2 border-gray-900/50 backdrop-blur-md bg-white/20 text-gray-900 px-8 py-7 rounded-full text-lg font-semibold hover:bg-gray-900/80 hover:text-white focus:bg-gray-900/80 focus:text-white transform hover:scale-105 focus:scale-105 transition-all duration-200 shadow-lg"
        aria-describedby="contact-button-desc"
        type="button"
      >
        {t('hero.actions.contact')}
        <span id="contact-button-desc" className="sr-only">
          - {t('hero.actions.contactDesc')}
        </span>
      </Button>
    </div>
  );
}
