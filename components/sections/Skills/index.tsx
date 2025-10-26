'use client';

import { useEffect, useState } from 'react';
import SkillsHeader from './SkillsHeader';
import SkillsList from './SkillsList';

export { skills } from '@/content/skills';

export default function Skills() {
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SkillsHeader />
        <SkillsList isAnimated={isAnimated} />
      </div>
    </section>
  );
}
