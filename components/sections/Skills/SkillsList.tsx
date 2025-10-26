'use client';

import { useTranslation } from '@/hooks/useTranslation';
import SkillCategory from './SkillCategory';
import { type Skill, skills } from '@/content/skills';
import SkillsLegend from './SkillsLegend';

interface SkillsListProps {
  isAnimated: boolean;
}

export default function SkillsList({ isAnimated }: SkillsListProps) {
  const { t } = useTranslation();

  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div role="region" aria-label={t('skills.overview')}>
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={categorySkills}
              isAnimated={isAnimated}
            />
          ))}
        </div>

        <SkillsLegend />
      </div>
    </div>
  );
}
