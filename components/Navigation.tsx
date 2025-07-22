'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Update current section for aria-current
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const _scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Set focus to the section for screen readers
      element.setAttribute('tabindex', '-1');
      element.focus();
      // Remove tabindex after focusing
      setTimeout(() => element.removeAttribute('tabindex'), 1000);
    }
  };

  const navigationItems = [
    { label: 'O mně', id: 'about', mobile: true },
    { label: 'Dovednosti', id: 'skills', mobile: true },
    { label: 'Zkušenosti', id: 'projects', mobile: true },
    { label: 'Kontakty', id: 'contact', mobile: false },
  ];

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-indigo-400"
        onFocus={(e) => {
          e.target.classList.remove('sr-only');
        }}
        onBlur={(e) => {
          e.target.classList.add('sr-only');
        }}
      >
        Přeskočit na hlavní obsah
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
                      <a href={`#${item.id}`}>
                        <button
                          type="button"
                          className="text-gray-700 hover:text-indigo-600 focus:text-indigo-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-md px-2 py-1"
                          aria-current={
                            currentSection === item.id ? 'page' : undefined
                          }
                          aria-describedby={`nav-${item.id}-desc`}
                        >
                          {item.label}
                          <span id={`nav-${item.id}-desc`} className="sr-only">
                            - přejít na sekci {item.label}
                          </span>
                        </button>
                      </a>
                    </li>
                  ))}
              </ul>

              <a href={`#contact`}>
                <button
                  type="button"
                  className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:bg-indigo-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                  aria-describedby="cta-button-desc"
                >
                  Kontaktujte mě
                  <span id="cta-button-desc" className="sr-only">
                    - otevře kontaktní formulář
                  </span>
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
