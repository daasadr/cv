const qualities = [
  '2 roky zkušeností s full-stack vývojem',
  'Zaměření na odborný růst - ráda a hodně se vzdělávám',
  'Odbornost v moderních webových technologiích',
  'Silné zaměření na výkon a uživatelskou zkušenost',
  'Samostatnost a proaktivita',
  'Spolupracující přístup a jasná komunikace',
];

export default function WhyMeSection() {
  return (
    <aside aria-labelledby="why-me-title">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
        <h4 id="why-me-title" className="text-xl font-bold text-gray-900 mb-4">
          Proč já?
        </h4>
        <ul
          className="space-y-3 text-gray-700"
          aria-label="Mé klíčové vlastnosti"
        >
          {qualities.map((quality, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div
                className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"
                aria-hidden="true"
              ></div>
              <span>{quality}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
