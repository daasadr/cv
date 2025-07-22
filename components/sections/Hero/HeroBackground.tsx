'use client';

import { useEffect, useRef, useState } from 'react';
import { ThreeJSScene } from '@/lib/threejs-scene';

interface HeroBackgroundProps {
  onSceneReady: (ready: boolean) => void;
  sceneReady: boolean;
}

export default function HeroBackground({
  onSceneReady,
  sceneReady,
}: HeroBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<ThreeJSScene | null>(null);
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
      onSceneReady: () => onSceneReady(true),
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
      onSceneReady(false);

      // Remove canvas from DOM before disposing
      const rendererElement = scene.getRendererElement();
      if (mountRef.current && rendererElement) {
        mountRef.current.removeChild(rendererElement);
      }

      scene.dispose();
      sceneRef.current = null;
    };
  }, [onSceneReady]);

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
