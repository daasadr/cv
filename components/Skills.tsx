'use client';

interface Skill {
  name: string;
  months: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
}

const skills: Skill[] = [
  { name: 'TypeScript/JavaScript', months: 24, category: 'languages' },
  { name: 'React', months: 18, category: 'frontend' },
  { name: 'Next.js', months: 14, category: 'frontend' },
  { name: 'Node.js', months: 20, category: 'backend' },
  { name: 'Three.js', months: 2, category: 'frontend' },
  { name: 'Tailwind', months: 18, category: 'frontend' },
  { name: 'PostgreSQL', months: 10, category: 'backend' },
  { name: 'Prisma', months: 10, category: 'backend' },
  { name: 'Directus', months: 3, category: 'backend' },
  { name: 'Shadcn', months: 6, category: 'frontend' },
  { name: 'Docker', months: 12, category: 'tools' },
  { name: 'Figma', months: 8, category: 'tools' },
  { name: 'Git & CI/CD', months: 20, category: 'tools' },
];

const categoryColors = {
  frontend: '#6366F1',
  backend: '#F59E0B', 
  tools: '#10B981',
  languages: '#EF4444'
};

export default function Skills() {
  console.log('Skills component mounted with', skills.length, 'skills');

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            data-macaly="skills-title"
          >
            Technické znalosti
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-macaly="skills-description"
          >
            Ucelený set znalostí a dovedností vytvořený zkušenostmi z praxe a kontinuálním vzděláváním v neustále se měnícím technologickém prostředí.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Skills List */}
          <div>
            <div className="space-y-6">
              {Object.entries(
                skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, Skill[]>)
              ).map(([category, categorySkills]) => (
                <div key={category} className="space-y-3">
                  <h3 
                    className="text-lg font-semibold text-gray-900 capitalize"
                    style={{ color: categoryColors[category as keyof typeof categoryColors] }}
                  >
                    {category}
                  </h3>
                  
                  <div className="space-y-3">
                    {categorySkills.sort((a, b) => b.months - a.months).map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.months} měsíců</span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${Math.min((skill.months / 24) * 100, 100)}%`,
                              backgroundColor: categoryColors[skill.category]
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}