'use client';

import { useEffect, useState } from 'react';

interface Skill {
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

const categoryColors = {
  frontend: '#6366F1',
  backend: '#F59E0B',
  tools: '#10B981',
  languages: '#EF4444',
};

const categoryLabels = {
  frontend: 'Frontend technologie',
  backend: 'Backend technologie',
  tools: 'Nástroje a workflow',
  languages: 'Programovací jazyky',
};

export default function Skills() {
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getExperienceLevel = (months: number): string => {
    if (months >= 18) return 'Pokročilý';
    if (months >= 10) return 'Střední';
    if (months >= 6) return 'Začínající';
    return 'Základní';
  };

  const getExperienceDescription = (months: number): string => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0) {
      return remainingMonths > 0
        ? `${years} rok${years > 1 ? 'y' : ''} a ${remainingMonths} měsíc${remainingMonths > 1 ? 'ů' : ''}`
        : `${years} rok${years > 1 ? 'y' : ''}`;
    }
    return `${months} měsíc${months > 1 ? 'ů' : ''}`;
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2
            id="skills-title"
            className="text-5xl font-bold text-gray-900 mb-6"
            data-macaly="skills-title"
          >
            Technické znalosti
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-macaly="skills-description"
          >
            Ucelený set znalostí a dovedností vytvořený zkušenostmi z praxe a
            kontinuálním vzděláváním v neustále se měnícím technologickém
            prostředí.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Skills List */}
          <div
            role="region"
            aria-label="Přehled technických dovedností podle kategorií"
          >
            <div className="space-y-8">
              {Object.entries(
                skills.reduce(
                  (acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                  },
                  {} as Record<string, Skill[]>
                )
              ).map(([category, categorySkills]) => (
                <section
                  key={category}
                  className="space-y-4"
                  aria-labelledby={`category-${category}`}
                >
                  <h3
                    id={`category-${category}`}
                    className="text-xl font-bold text-gray-900 capitalize mb-4"
                    style={{
                      color:
                        categoryColors[category as keyof typeof categoryColors],
                    }}
                  >
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>

                  <div
                    className="space-y-4"
                    role="list"
                    aria-label={`Seznam dovedností v kategorii ${categoryLabels[category as keyof typeof categoryLabels]}`}
                  >
                    {categorySkills
                      .sort((a, b) => b.months - a.months)
                      .map((skill) => {
                        const progressPercentage = Math.min(
                          (skill.months / 24) * 100,
                          100
                        );
                        const experienceLevel = getExperienceLevel(
                          skill.months
                        );
                        const experienceDesc = getExperienceDescription(
                          skill.months
                        );

                        return (
                          <div
                            key={skill.name}
                            className="space-y-2"
                            role="listitem"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700">
                                {skill.name}
                              </span>
                              <div className="text-right">
                                <span
                                  className="text-sm text-gray-500"
                                  aria-label={`Zkušenost: ${experienceDesc}`}
                                >
                                  {experienceDesc}
                                </span>
                                {/* <div className="text-xs text-gray-400">
                                {experienceLevel}
                              </div> */}
                              </div>
                            </div>

                            <div className="relative">
                              <div
                                className="w-full bg-gray-200 rounded-full h-3"
                                role="img"
                                aria-label={`Úroveň dovednosti pro ${skill.name}`}
                              >
                                <div
                                  className="h-3 rounded-full transition-all duration-1000 ease-out"
                                  style={{
                                    width: isAnimated
                                      ? `${progressPercentage}%`
                                      : '0%',
                                    backgroundColor:
                                      categoryColors[skill.category],
                                  }}
                                  role="progressbar"
                                  aria-valuenow={Math.round(progressPercentage)}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  aria-label={`${skill.name}: ${Math.round(progressPercentage)}% pokročilosti (${experienceLevel})`}
                                />
                              </div>

                              {/* Screen reader only progress description */}
                              <div className="sr-only">
                                Pokrok v dovednosti {skill.name}:{' '}
                                {Math.round(progressPercentage)} procent, úroveň{' '}
                                {experienceLevel}, zkušenost {experienceDesc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </section>
              ))}
            </div>

            {/* Legend for screen readers */}
            <div className="sr-only">
              <h3>Vysvětlení úrovní dovedností:</h3>
              <ul>
                <li>Základní: méně než 6 měsíců zkušeností</li>
                <li>Začínající: 6 až 9 měsíců zkušeností</li>
                <li>Střední: 10 až 17 měsíců zkušeností</li>
                <li>Pokročilý: 18 a více měsíců zkušeností</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
