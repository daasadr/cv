'use client';

import { useTranslation } from '@/hooks/useTranslation';
import SkillItem from './SkillItem';
import { categoryColors, type Skill } from '@/content/skills';

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
  const { t } = useTranslation();
  const sortedSkills = skills.sort((a, b) => b.months - a.months);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'languages':
        return t('skills.categories.languages');
      case 'frontend':
        return t('skills.categories.frontend');
      case 'backend':
        return t('skills.categories.backend');
      case 'tools':
        return t('skills.categories.tools');
      default:
        return cat;
    }
  };

  const isCategoryKey = (
    key: string
  ): key is keyof typeof categoryColors => {
    return key in categoryColors;
  };

  const getCategoryColor = (cat: string): string => {
    return isCategoryKey(cat) ? categoryColors[cat] : '#000000';
  };

  const categoryLabel = getCategoryLabel(category);

  return (
    <section className="space-y-4" aria-labelledby={`category-${category}`}>
      <h3
        id={`category-${category}`}
        className="text-xl font-bold text-gray-900 capitalize mb-4"
        style={{
          color: getCategoryColor(category),
        }}
      >
        {categoryLabel}
      </h3>

      <div
        className="space-y-4"
        role="list"
        aria-label={`Seznam dovedností v kategorii ${categoryLabel}`}
      >
        {sortedSkills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} isAnimated={isAnimated} />
        ))}
      </div>
    </section>
  );
}
