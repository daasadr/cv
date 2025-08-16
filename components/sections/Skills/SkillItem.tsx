'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { formatExperienceDuration } from '@/lib/translations';
import { categoryColors, getExperienceLevel, type Skill } from './SkillsData';

interface SkillItemProps {
  skill: Skill;
  isAnimated: boolean;
}

export default function SkillItem({ skill, isAnimated }: SkillItemProps) {
  const { language } = useLanguage();

  const progressPercentage = Math.min((skill.months / 24) * 100, 100);
  const experienceLevel = getExperienceLevel(skill.months);
  const experienceDesc = formatExperienceDuration(skill.months, language);

  return (
    <div className="space-y-2" role="listitem">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <div className="text-right">
          <span
            className="text-sm text-gray-500"
            aria-label={`Zkušenost: ${experienceDesc}`}
          >
            {experienceDesc}
          </span>
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
              width: isAnimated ? `${progressPercentage}%` : '0%',
              backgroundColor: categoryColors[skill.category],
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
          Pokrok v dovednosti {skill.name}: {Math.round(progressPercentage)}{' '}
          procent, úroveň {experienceLevel}, zkušenost {experienceDesc}
        </div>
      </div>
    </div>
  );
}
