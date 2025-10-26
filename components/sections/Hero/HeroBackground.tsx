'use client';

import { useEffect, useRef, useState } from 'react';
import { ThreeJSScene } from '@/lib/threejs-scene';

export default function HeroBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<ThreeJSScene | null>(null);
  const [_isVisible, setIsVisible] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);

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
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
        sceneReady ? 'opacity-30' : 'opacity-0'
      }`}
      aria-hidden="true"
      role="presentation"
    />
  );
}
