export interface Skill {
  name: string;
  // Datum zahájení (ISO). Doba praxe se z něj počítá dynamicky – viz getMonthsSince().
  startDate: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

// startDate je nastaveno tak, aby k červenci 2026 odpovídalo uvedené délce praxe
// (původní hodnoty + 6 měsíců; Python zůstává na 8). Dále doba narůstá sama.
export const skills: Skill[] = [
  {
    name: 'TypeScript/JavaScript',
    startDate: '2024-01-01',
    category: 'languages',
  }, // 30 měs.
  { name: 'Python', startDate: '2025-11-01', category: 'languages' }, // 8 měs.
  { name: 'React', startDate: '2024-07-01', category: 'frontend' }, // 24 měs.
  { name: 'Next.js', startDate: '2024-11-01', category: 'frontend' }, // 20 měs.
  { name: 'Node.js', startDate: '2024-05-01', category: 'backend' }, // 26 měs.
  { name: 'Three.js', startDate: '2025-11-01', category: 'frontend' }, // 8 měs.
  { name: 'Tailwind', startDate: '2024-07-01', category: 'frontend' }, // 24 měs.
  { name: 'Jest', startDate: '2025-05-01', category: 'frontend' }, // 14 měs.
  { name: 'PostgreSQL', startDate: '2025-03-01', category: 'backend' }, // 16 měs.
  { name: 'Directus', startDate: '2025-10-01', category: 'backend' }, // 9 měs.
  { name: 'MUI/Shadcn', startDate: '2025-07-01', category: 'frontend' }, // 12 měs.
  { name: 'Docker', startDate: '2025-01-01', category: 'tools' }, // 18 měs.
  { name: 'Git & CI/CD', startDate: '2024-05-01', category: 'tools' }, // 26 měs.
];

export const categoryColors = {
  frontend: '#6366F1',
  backend: '#F59E0B',
  tools: '#10B981',
  languages: '#EF4444',
};

// Category labels are now in messages files under skills.categories
