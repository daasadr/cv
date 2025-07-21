'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    console.log('Hero component mounted, initializing 3D scene');
    
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    rendererRef.current = renderer;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(2.5, 2.5, 2.5),
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.ConeGeometry(1.6, 2.8, 8),
      new THREE.OctahedronGeometry(1.5),
    ];

    const materials = [
      new THREE.MeshNormalMaterial({ wireframe: true }),
      new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.7 }),
      new THREE.MeshNormalMaterial({ wireframe: true }),
      new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.5 }),
    ];

    const meshes: THREE.Mesh[] = [];
    const meshMovement: { velocityX: number; velocityY: number; velocityZ: number }[] = [];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 12;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 6;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Random slow movement velocities
      meshMovement.push({
        velocityX: (Math.random() - 0.5) * 0.01,
        velocityY: (Math.random() - 0.5) * 0.008,
        velocityZ: (Math.random() - 0.5) * 0.006
      });
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;

    // Animation loop
    let isFirstRender = true;
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        // Rotation animation
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.005 + index * 0.001;
        
        // Slow random movement
        const movement = meshMovement[index];
        mesh.position.x += movement.velocityX;
        mesh.position.y += movement.velocityY;
        mesh.position.z += movement.velocityZ;
        
        // Boundary checking and velocity reversal to keep shapes visible
        if (mesh.position.x > 8 || mesh.position.x < -8) {
          movement.velocityX *= -1;
        }
        if (mesh.position.y > 6 || mesh.position.y < -6) {
          movement.velocityY *= -1;
        }
        if (mesh.position.z > 4 || mesh.position.z < -4) {
          movement.velocityZ *= -1;
        }
        
        // Add subtle floating motion
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
      
      // Set scene as ready after first render
      if (isFirstRender) {
        setTimeout(() => setSceneReady(true), 100);
        isFirstRender = false;
      }
    };

    animate();
    console.log('3D animation started with', meshes.length, 'shapes');

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      console.log('3D scene resized to:', window.innerWidth, 'x', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      console.log('Cleaning up 3D scene');
      window.removeEventListener('resize', handleResize);
      setSceneReady(false);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-full sm:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50 pb-20 md:pb-10"
    >
      {/* 3D Background */}
      <div 
        ref={mountRef} 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
          sceneReady ? 'opacity-30' : 'opacity-0'
        }`}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-[20rem] sm:pt-[5rem] md:pt-0">
        <h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight text-wrap-balance no-orphans"
          data-macaly="hero-title"
        >
          Dagmar Drbálková
        </h1>
        
        <div className="text-2xl md:text-3xl text-indigo-600 font-light mb-8 space-y-2 text-wrap-balance no-orphans">
          <div data-macaly="hero-subtitle-1">Full Stack Developer</div>
          <div data-macaly="hero-subtitle-2">& 3D Printing Enthusiast</div>
        </div>
        
        <p 
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
          data-macaly="hero-description"
        >
          Fascinuje mě schopnost kódu vytvořit velkou přidanou hodnotu prakticky z&nbsp;ničeho. Zaměřuju se na Typescript, Node a React stack. Na frontendu Next.js, Tailwind, Shadcn. Na backendu PostgreSQL, Prisma nebo Directus.
        </p>
        <p 
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-wrap-pretty hyphens-auto break-word-smart no-orphans"
          data-macaly="hero-description"
        >
          Jsem orientovaná na profesní růst - ráda a hodně se vzdělávám. Kromě běžících projektů teď jedu kurz na Coursera s IBM coby jeho garantem a mám (možná až moc) rozečtených knížek&nbsp;z&nbsp;O'Railly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600/80 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700/90 transform hover:scale-105 transition-all duration-200 shadow-lg border border-white/20"
          >
            Moje tvorba
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-900/50 backdrop-blur-md bg-white/20 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900/80 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Kontaktujte mě
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}