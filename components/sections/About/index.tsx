'use client';

import { useTranslation } from '@/hooks/useTranslation';
import AboutContent from './AboutContent';
import ActionButtons from './ActionButtons';
import SoftSkills from './SoftSkills';
import StatsCards from './StatsCards';

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <header>
              <h2
                id="about-title"
                className="text-5xl font-bold text-gray-900 mb-8"
                data-macaly="about-title"
              >
                {t('about.title')}
              </h2>
            </header>

            <AboutContent />
            <ActionButtons />
            <SoftSkills />
          </div>

          {/* Right side - Stats/Info cards */}
          <StatsCards />
        </div>
      </div>
    </section>
  );
}
