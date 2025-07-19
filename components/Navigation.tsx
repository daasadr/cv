'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log('Navigation component mounted');
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      console.log('Scroll position:', window.scrollY, 'IsScrolled:', scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    console.log('Scrolling to section:', id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'O mně', id: 'about' },
              { label: 'Dovednosti', id: 'skills' },
              { label: 'Zkušenosti', id: 'projects' },
              { label: 'Kontakty', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            Kontaktujte mě
          </button>
        </div>
      </div>
    </nav>
  );
}