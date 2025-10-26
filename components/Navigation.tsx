'use client';

import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { siteConfig } from '@/content/site-config';
import LanguageSwitcher from './LanguageSwitcher';

// Constants defined outside component to avoid recreation
const SECTIONS = ['hero', 'about', 'skills', 'projects', 'contact'];
const SCROLL_THRESHOLD = 50;
const SCROLL_OFFSET = 100;
const MOBILE_BREAKPOINT = 768;
const THROTTLE_DELAY = 100;

// Throttle utility
function throttle<T extends (...args: never[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    const callFunction = () => {
      lastCall = now;
      func(...args);
    };

    if (timeSinceLastCall >= delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      callFunction();
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        callFunction();
        timeoutId = null;
      }, delay - timeSinceLastCall);
    }
  };
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const { t } = useTranslation();

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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled(scrolled);
      updateCurrentSection();
    };

    // Create throttled version
    const throttledScroll = throttle(handleScroll, THROTTLE_DELAY);

    // Run once on mount
    handleScroll();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [updateCurrentSection]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Create throttled version
    const throttledResize = throttle(handleResize, THROTTLE_DELAY);

    // Run once on mount
    handleResize();

    window.addEventListener('resize', throttledResize);
    return () => window.removeEventListener('resize', throttledResize);
  }, []);

  const navigationItems = [
    { label: t('nav.about'), id: 'about', mobile: true },
    { label: t('nav.skills'), id: 'skills', mobile: true },
    { label: t('nav.projects'), id: 'projects', mobile: true },
    { label: t('nav.contact'), id: 'contact', mobile: false },
  ];

  return (
    <>
      {/* Skip Navigation Link - uses CSS :focus for visibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        {t('nav.skipToContent')}
      </a>

      <header>
        <nav
          aria-label="Hlavní navigace"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || isMobile
              ? 'bg-white/80 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-center items-center md:justify-between">
              <ul className="flex space-x-8">
                {navigationItems
                  .filter((item) => !isMobile || item.mobile)
                  .map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`${
                          currentSection === item.id
                            ? 'text-indigo-600'
                            : 'text-gray-700'
                        } hover:text-indigo-600 focus:text-indigo-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-md px-2 py-1 inline-block`}
                        aria-current={
                          currentSection === item.id ? 'page' : undefined
                        }
                        aria-describedby={`nav-${item.id}-desc`}
                      >
                        {item.label}
                        <span id={`nav-${item.id}-desc`} className="sr-only">
                          - {t('nav.goToSection')} {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:bg-indigo-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  aria-describedby="github-button-desc"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t('nav.github')}
                  <span id="github-button-desc" className="sr-only">
                    - {t('nav.githubDesc')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
