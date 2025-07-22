import SkillItem from './SkillItem';
import { categoryColors, categoryLabels, type Skill } from './SkillsData';

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  isAnimated: boolean;
}

export default function SkillCategory({
  category,
  skills,
  isAnimated,
}: SkillCategoryProps) {
  const sortedSkills = skills.sort((a, b) => b.months - a.months);

  return (
    <section className="space-y-4" aria-labelledby={`category-${category}`}>
      <h3
        id={`category-${category}`}
        className="text-xl font-bold text-gray-900 capitalize mb-4"
        style={{
          color: categoryColors[category as keyof typeof categoryColors],
        }}
      >
        {categoryLabels[category as keyof typeof categoryLabels]}
      </h3>

      <div
        className="space-y-4"
        role="list"
        aria-label={`Seznam dovedností v kategorii ${categoryLabels[category as keyof typeof categoryLabels]}`}
      >
        {sortedSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} isAnimated={isAnimated} />
        ))}
      </div>
    </section>
  );
}
