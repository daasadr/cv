'use client';

import { useEffect, useRef, useState } from 'react';
import { ThreeJSScene } from '@/lib/threejs-scene';

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<ThreeJSScene | null>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        sceneRef.current?.setVisibility(visible);
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize Three.js scene
    const scene = new ThreeJSScene({
      onSceneReady: () => setSceneReady(true),
    });
    sceneRef.current = scene;

    scene.initialize(mountRef.current);

    // Handle resize
    const handleResize = () => {
      scene.handleResize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      setSceneReady(false);

      // Remove canvas from DOM before disposing
      const rendererElement = scene.getRendererElement();
      if (mountRef.current && rendererElement) {
        mountRef.current.removeChild(rendererElement);
      }

      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-full sm:h-screen min-h-[50rem] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 pb-20 md:pb-10"
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* 3D Background */}
      <div
        ref={mountRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
          sceneReady ? 'opacity-30' : 'opacity-0'
        }`}
        aria-hidden="true"
        role="presentation"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-[10rem] sm:pt-[5rem] md:pt-0">
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight text-wrap-balance no-orphans"
          data-macaly="hero-title"
        >
          Dagmar Drbálková
        </h1>

        <div className="text-2xl md:text-3xl text-indigo-600 font-light mb-8 space-y-2 text-wrap-balance no-orphans">
          <div data-macaly="hero-subtitle-1">Full Stack Developer</div>
          <div data-macaly="hero-subtitle-2">& 3D Printing Enthusiast</div>
        </div>

        <div className="space-y-6 mb-12">
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
            data-macaly="hero-description"
          >
            Fascinuje mě schopnost kódu vytvořit velkou přidanou hodnotu
            prakticky z&nbsp;ničeho. Zaměřuju se na Typescript, Node a React
            stack. Na frontendu Next.js, Tailwind, Shadcn. Na backendu
            PostgreSQL, Prisma nebo Directus.
          </p>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
            data-macaly="hero-description"
          >
            Jsem orientovaná na profesní růst - ráda a hodně se vzdělávám. Kromě
            běžících projektů teď jedu kurz na Coursera s IBM coby jeho garantem
            a mám (možná až moc) rozečtených knížek&nbsp;z&nbsp;O'Railly.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          role="group"
          aria-label="Hlavní akce"
        >
          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-indigo-600/80 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700/90 focus:bg-indigo-700/90 transform hover:scale-105 focus:scale-105 transition-all duration-200 shadow-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            aria-describedby="projects-button-desc"
            type="button"
          >
            Moje tvorba
            <span id="projects-button-desc" className="sr-only">
              - zobrazí sekci s projekty a zkušenostmi
            </span>
          </button>

          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="border-2 border-gray-900/50 backdrop-blur-md bg-white/20 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900/80 hover:text-white focus:bg-gray-900/80 focus:text-white transform hover:scale-105 focus:scale-105 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            aria-describedby="contact-button-desc"
            type="button"
          >
            Kontaktujte mě
            <span id="contact-button-desc" className="sr-only">
              - přejde na kontaktní sekci s informacemi a formulářem
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
        aria-hidden="true"
        role="presentation"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
