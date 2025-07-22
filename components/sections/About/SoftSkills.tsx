const softSkills = [
  'Komunikační dovednosti',
  'Self-driven',
  'Problem solving',
  'Spolehlivost',
  'Kreativita',
  'Vytrvalost',
  'Growth mindset',
];

export default function SoftSkills() {
  return (
    <section aria-labelledby="soft-skills-title">
      <h3
        id="soft-skills-title"
        className="text-2xl font-bold text-gray-900 mb-8 mt-10"
      >
        Soft skills a vlastnosti
      </h3>
      <div
        className="mt-10 flex flex-wrap gap-4"
        role="list"
        aria-label="Seznam soft skills"
      >
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium"
            role="listitem"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
