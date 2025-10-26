'use client';

import { useEffect, useState, useCallback } from 'react';
import { useThrottle } from '@/hooks/useThrottle';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { SkipNavigation } from './SkipNavigation';
import { NavigationLinks } from './NavigationLinks';
import { GitHubButton } from './GitHubButton';
import {
  SECTIONS,
  SCROLL_THRESHOLD,
  SCROLL_OFFSET,
  MOBILE_BREAKPOINT,
  THROTTLE_DELAY,
} from './constants';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  // Update current section based on scroll position
  const updateCurrentSection = useCallback(() => {
    const scrollPosition = window.scrollY + SCROLL_OFFSET;

    for (const sectionId of SECTIONS) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setCurrentSection(sectionId);
          break;
        }
      }
    }
  }, []);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    setIsScrolled(scrolled);
    updateCurrentSection();
  }, [updateCurrentSection]);

  const throttledScroll = useThrottle(handleScroll, THROTTLE_DELAY);

  // Throttled resize handler
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  const throttledResize = useThrottle(handleResize, THROTTLE_DELAY);

  useEffect(() => {
    // Run once on mount
    handleScroll();
    handleResize();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledResize);
    };
  }, [handleScroll, handleResize, throttledScroll, throttledResize]);

  return (
    <>
      <SkipNavigation />

      <header>
        <nav
          aria-label="Hlavní navigace"
          className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled || isMobile
              ? 'bg-white/80 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          )}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-center items-center md:justify-between">
              <NavigationLinks
                currentSection={currentSection}
                isMobile={isMobile}
              />

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <GitHubButton />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
