export interface Project {
  id: string; // Translation key for projects.items.{id}
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 'officeAutomations',
    technologies: [
      'Astro',
      'React',
      'Docker',
      'Directus',
      'Node.js',
      'Express',
      'PostgreSQL',
      // 'Temporal',
      // '...',
    ],
    image: '/images/d-p.png',
    githubUrl: 'https://github.com/daasadr/cv',
    year: 2025,
    inProgress: true,
  },
  // {
  //   title: 'NextGen Coders',
  //   description:
  //     'NextGen Coders je platforma pro výuku programování pro žáky základních škol.',
  //   longDescription:
  //     'Spolupráce s mým synem na vývoji platformy pro výuku programování pro žáky základních škol. Platforma je vytvořena pomocí FastApi a JavaScriptu.',
  //   technologies: [
  //     'Python',
  //     'FastApi',
  //     'JavaScript',
  //     'css',
  //     'Directus',
  //     'PostgreSQL',
  //     'SQLite',
  //   ],
  //   image: '/images/nextgen.png',
  //   liveUrl: 'https://pythonprojekt-ten.vercel.app/',
  //   githubUrl: 'https://github.com/Xebro123/Pythonprojekt',
  //   year: 2025,
  //   inProgress: true,
  // },
  {
    id: 'interactiveComponent',
    technologies: [
      'Accessibility',
      'CSS only interactivity',
      'Performance',
      'Figma',
    ],
    githubUrl: 'https://github.com/daasadr/interaktivni_linka',
    liveUrl: '/examples/interactive_component/interaktivni_linka.html',
    image: '/images/linka.png',
    year: 2025,
  },
  {
    id: 'shootingApp',
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025,
    inProgress: true,
  },

  {
    id: 'thisPresentation',
    technologies: [
      'Next.js',
      'Three.js',
      'Accessibility',
      'Performance',
      'Shadcn',
    ],
    githubUrl: 'https://github.com/daasadr/cv',
    image: '/images/cv.png',
    year: 2025,
  },
  {
    id: 'nocodePWA',
    technologies: ['React Brics', 'Next.js', 'Directus'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025,
    inProgress: true,
  },
  {
    id: 'dropshipping',
    technologies: ['Next.js', 'Directus'],
    image: 'images/happy.png',
    year: 2024,
    inProgress: true,
  },
  {
    id: 'maps',
    technologies: ['React', 'Github Actions', 'OpenLayers', 'MUI'],
    image: '/images/mapa.png',
    liveUrl: 'https://daasadr.github.io/vrg-demo3/',
    githubUrl: 'https://github.com/daasadr/vrg-demo3',
    year: 2024,
  },
];

