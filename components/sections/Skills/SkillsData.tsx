export interface Skill {
  name: string;
  months: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

export const skills: Skill[] = [
  { name: 'TypeScript/JavaScript', months: 24, category: 'languages' },
  { name: 'React', months: 18, category: 'frontend' },
  { name: 'Next.js', months: 14, category: 'frontend' },
  { name: 'Node.js', months: 20, category: 'backend' },
  { name: 'Three.js', months: 2, category: 'frontend' },
  { name: 'Tailwind', months: 18, category: 'frontend' },
  { name: 'Jest', months: 8, category: 'frontend' },
  { name: 'PostgreSQL', months: 10, category: 'backend' },
  { name: 'Prisma', months: 10, category: 'backend' },
  { name: 'Directus', months: 3, category: 'backend' },
  { name: 'MUI/Shadcn', months: 6, category: 'frontend' },
  { name: 'Docker', months: 12, category: 'tools' },
  { name: 'Figma', months: 8, category: 'tools' },
  { name: 'Git & CI/CD', months: 20, category: 'tools' },
];

export const categoryColors = {
  frontend: '#6366F1',
  backend: '#F59E0B',
  tools: '#10B981',
  languages: '#EF4444',
};

export const categoryLabels = {
  frontend: 'Frontend technologie',
  backend: 'Backend technologie',
  tools: 'Nástroje a workflow',
  languages: 'Programovací jazyky',
};

export const getExperienceLevel = (months: number): string => {
  if (months >= 18) return 'Pokročilý';
  if (months >= 10) return 'Střední';
  if (months >= 6) return 'Začínající';
  return 'Základní';
};

export const getExperienceDescription = (months: number): string => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0) {
    return remainingMonths > 0
      ? `${years} rok${years > 1 ? 'y' : ''} a ${remainingMonths} měsíc${remainingMonths > 1 ? 'ů' : ''}`
      : `${years} rok${years > 1 ? 'y' : ''}`;
  }
  return `${months} měsíc${months > 1 ? 'ů' : ''}`;
};
