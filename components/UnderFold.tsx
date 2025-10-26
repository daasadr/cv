'use client';

import dynamic from 'next/dynamic';

// Lazy load non-critical components with individual loading states
// Note: Each component has its own loading state via the dynamic() config,
// so we don't need an additional Suspense boundary wrapper
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

export default function UnderFold() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
