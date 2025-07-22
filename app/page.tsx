'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';

// Lazy load non-critical components
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
  ssr: true,
});

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
  ssr: true,
});

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
  ssr: true,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
  ssr: true,
});

// Lazy load Web Vitals reporter
const WebVitalsReporter = dynamic(
  () => import('@/components/WebVitalsReporter'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      {/* Web Vitals monitoring */}
      <WebVitalsReporter />

      {/* Critical above-the-fold content - loads immediately */}
      <Navigation />
      <main id="main-content">
        <Hero />

        {/* Lazy loaded sections with Suspense boundaries */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="animate-pulse text-gray-400">
                Loading sections...
              </div>
            </div>
          }
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
