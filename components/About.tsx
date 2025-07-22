'use client';

import { skills } from "./Skills";

export default function About() {
  
  
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <header>
              <h2 
                id="about-title"
                className="text-5xl font-bold text-gray-900 mb-8"
                data-macaly="about-title"
              >
                O mně
              </h2>
            </header>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p data-macaly="about-paragraph-1">
                Jsem Frontend-heavy Full Stack Developerka zaměřující se na technologický stack založený na TypeScriptu, Node.js a&nbsp;Reactu (<a 
                  href="#skills" 
                  className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
                  aria-describedby="skills-link-desc"
                >
                  podrobněji níže
                  <span id="skills-link-desc" className="sr-only">
                    - přejde na sekci s dovednostmi a technologiemi
                  </span>
                </a>).
              </p>
              
              <p data-macaly="about-paragraph-2">
                K IT mě přivedli bratři - oba odjakživa programátoři, a&nbsp;já se rozhodla k&nbsp;nim přidat. Začala jsem intenzivním IT kurzem z&nbsp;programu IT Network s.r.o. a pokračovala samostudiem za pomocí Coursera a knih z&nbsp;O'Reilly, ale hlavně skrze řadu větších i&nbsp;menších projektů.
              </p>              
            </div>

            {/* Download CV and GitHub Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4" role="group" aria-label="Akce a odkazy">
              <a
                href="/CV_Dagmar_Drbalkova.pdf"
                download={`CV Dagmar Drbalkova ${new Date().getFullYear()}.pdf`}
                className="inline-flex items-center gap-3 border-2 border-indigo-600 hover:bg-indigo-600 focus:bg-indigo-600 text-indigo-600 hover:text-white focus:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                data-macaly="cv-download-button"
                aria-describedby="cv-download-desc"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Stáhnout CV
                <span id="cv-download-desc" className="sr-only">
                  - stáhne můj životopis ve formátu PDF
                </span>
              </a>
              
              <a
                href="https://github.com/daasadr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-gray-300 hover:border-gray-900 focus:border-gray-900 text-gray-700 hover:text-gray-900 focus:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                data-macaly="github-profile-button"
                aria-describedby="github-profile-desc"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profil
                <span id="github-profile-desc" className="sr-only">
                  - otevře můj GitHub profil v novém okně
                </span>
              </a>
            </div>
            
            <section aria-labelledby="soft-skills-title">
              <h3 id="soft-skills-title" className="text-2xl font-bold text-gray-900 mb-8 mt-10">
                Soft skills a vlastnosti
              </h3>
              <div className="mt-10 flex flex-wrap gap-4" role="list" aria-label="Seznam soft skills">
                {[
                  'Komunikační dovednosti',
                  'Self-driven',
                  'Problem solving',
                  'Spolehlivost',
                  'Kreativita',
                  'Vytrvalost',
                  'Growth mindset',
                ].map((skill) => (
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
          </div>
          
          {/* Right side - Stats/Info cards */}
          <aside aria-labelledby="stats-title">
            <h3 id="stats-title" className="sr-only">Statistiky a informace</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100" role="group" aria-labelledby="experience-stat">
                <div className="text-4xl font-bold text-indigo-600 mb-2" aria-label="2 roky">2</div>
                <div id="experience-stat" className="text-gray-700 font-medium">Roky zkušeností</div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100" role="group" aria-labelledby="projects-stat">
                <div className="text-4xl font-bold text-amber-600 mb-2" aria-label="11 projektů">11</div>
                <div id="projects-stat" className="text-gray-700 font-medium">
                  Projektů
                  (<a 
                    href="#projects" 
                    className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
                    aria-describedby="projects-list-desc"
                  >
                    seznam
                    <span id="projects-list-desc" className="sr-only">
                      - přejde na sekci se seznamem všech projektů
                    </span>
                  </a>)
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100" role="group" aria-labelledby="technologies-stat">
                <div className="text-4xl font-bold text-green-600 mb-2" aria-label={`${skills.length} technologií`}>{skills.length}</div>
                <div id="technologies-stat" className="text-gray-700 font-medium">
                  Technologií
                  (<a 
                    href="#skills" 
                    className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 rounded-sm"
                    aria-describedby="skills-list-desc"
                  >
                    seznam
                    <span id="skills-list-desc" className="sr-only">
                      - přejde na sekci se seznamem všech technologií a dovedností
                    </span>
                  </a>)
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}