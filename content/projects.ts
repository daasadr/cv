export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Office automations',
    description:
      'Moderní webová aplikace pro automatické zpracování PDF dokumentů průběžné evidence odpadů s AI integrací.',
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
    title: 'Interaktivní komponenta pro výrobce laboratorního vybavení',
    description:
      'Dropshipping e-commerce řešení s autentizací uživatelů, správou produktů, funkcí nákupního košíku, zpracováním plateb a newslettery.',
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
    title: 'Aplikace pro lektora střeleckého výcviku',
    description: '',
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025,
    inProgress: true,
  },

  {
    title: 'Tato prezentace',
    description:
      'Moderní a rychlá portfolio prezentace vytvořená pomocí Next.js, obsahující 3D animace a design zaměřený na přístupnost.',
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
    title: 'No-code generování PWA',
    description: 'Drag & drop sestavení a generování PWA.',
    technologies: ['React Brics', 'Next.js', 'Directus'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    year: 2025,
    inProgress: true,
  },
  {
    title: 'Dropshipping e-commerce řešení',
    description:
      'Dropshipping e-commerce řešení s autentizací uživatelů, správou produktů, funkcí nákupního košíku, zpracováním plateb a newslettery.',
    technologies: ['Next.js', 'Directus'],
    image: 'images/happy.png',
    year: 2024,
    inProgress: true,
  },
  {
    title: 'Práce s mapami',
    description:
      'Appka pro zobrazení mapy a práci s ní - měření vzdáleností ap. Využívá OpenStreetMap a OpenLayers.',
    technologies: ['React', 'Github Actions', 'OpenLayers', 'MUI'],
    image: '/images/mapa.png',
    liveUrl: 'https://daasadr.github.io/vrg-demo3/',
    githubUrl: 'https://github.com/daasadr/vrg-demo3',
    year: 2024,
  },
];

