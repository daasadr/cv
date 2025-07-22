export default function AboutContent() {
  return (
    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
      <p data-macaly="about-paragraph-1">
        Jsem Frontend-heavy Full Stack Developerka zaměřující se na
        technologický stack založený na TypeScriptu, Node.js a&nbsp;Reactu (
        <a
          href="#skills"
          className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
          aria-describedby="skills-link-desc"
        >
          podrobněji níže
          <span id="skills-link-desc" className="sr-only">
            - přejde na sekci s dovednostmi a technologiemi
          </span>
        </a>
        ).
      </p>

      <p data-macaly="about-paragraph-2">
        K IT mě přivedli bratři - oba odjakživa programátoři, a&nbsp;já se
        rozhodla k&nbsp;nim přidat. Začala jsem intenzivním IT kurzem
        z&nbsp;programu IT Network s.r.o. a pokračovala samostudiem za pomocí
        Coursera a knih z&nbsp;O'Reilly, ale hlavně skrze řadu větších
        i&nbsp;menších projektů.
      </p>
    </div>
  );
}
