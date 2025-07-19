'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

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
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.4, 8),
      new THREE.OctahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshNormalMaterial({ wireframe: true }),
      new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.7 }),
      new THREE.MeshNormalMaterial({ wireframe: true }),
      new THREE.MeshNormalMaterial({ transparent: true, opacity: 0.5 }),
    ];

    const meshes: THREE.Mesh[] = [];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 10;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.005 + index * 0.001;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });
      
      renderer.render(scene, camera);
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
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50"
    >
      {/* 3D Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 pointer-events-none opacity-30"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          data-macaly="hero-title"
        >
          Dagmar Drbálková
        </h1>
        
        <div className="text-2xl md:text-3xl text-indigo-600 font-light mb-8 space-y-2">
          <div data-macaly="hero-subtitle-1">Full Stack Developer</div>
          <div data-macaly="hero-subtitle-2">& 3D Printing Enthusiast</div>
        </div>
        
        <p 
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          data-macaly="hero-description"
        >
          Fascinuje mě schopnost kódu vytvořit velkou přidanou hodnotu prakticky z ničeho. Zaměřuju se na Typescript, Node, React stack. Na frontendu Next.js, Tailwind, Shadcn. Na backendu PostgreSQL, Prisma nebo Directus.
        </p>
        <p 
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          data-macaly="hero-description"
        >
          Jsem zaměřena na odborný růst - ráda a hodně se vzdělávám. Kromě běžících projektů teď jedu například kurz na Coursera a mám (možná až moc) rozečtených knížek ORailly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Moje tvorba
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            Kontaktujte mě
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}