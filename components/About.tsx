'use client';

import { skills } from "./Skills";

export default function About() {
  console.log('About component rendered');
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 
              className="text-5xl font-bold text-gray-900 mb-8"
              data-macaly="about-title"
            >
              O mně
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p data-macaly="about-paragraph-1">
                Jsem Frontend-heavy Full Stack Developerka zaměřující se na technologický stack založený na TypeScriptu, Node.js a&nbsp;Reactu (<a href="#skills" className="text-indigo-600 hover:text-indigo-700">podrobněji níže</a>).
              </p>
              
              <p data-macaly="about-paragraph-2">
                K IT mě přivedli bratři, oba odjakživa programátoři, a&nbsp;já se rozhodla k&nbsp;nim přidat. Začala jsem intenzivním IT kurzem z&nbsp;programu IT Network s.r.o. a pokračovala samostudiem za pomocí knih z&nbsp;O'Reilly a Coursera, ale hlavně přes řadu větších i menších projektů.
              </p>              
            </div>

             {/* Download CV Button */}
             <div className="mt-12">
              <a
                href="/CV_Dagmar_Drbalkova.pdf"
                download={`CV Dagmar Drbalkova ${new Date().getFullYear()}.pdf`}
                className="inline-flex items-center gap-3 border-2 border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                data-macaly="cv-download-button"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Stáhnout CV
              </a>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8 mt-10">
              Soft skills a vlastnosti
            </h3>
            <div className="mt-10 flex flex-wrap gap-4">
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
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right side - Stats/Info cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
              <div className="text-4xl font-bold text-indigo-600 mb-2">2</div>
              <div className="text-gray-700 font-medium">Roky zkušeností</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">11</div>
              <div className="text-gray-700 font-medium">Projektů
                (<a href="#projects" className="text-indigo-600 hover:text-indigo-700">seznam</a>)
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">{skills.length}</div>
              <div className="text-gray-700 font-medium">Technologií
                (<a href="#skills" className="text-indigo-600 hover:text-indigo-700">seznam</a>)
              </div>
            </div>
            
            {/* <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}