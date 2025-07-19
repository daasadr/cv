'use client';

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
                Neco
              </p>
              
              <p data-macaly="about-paragraph-2">
                Pekneho
              </p>
              
              <p data-macaly="about-paragraph-3">
                Tady
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-8 mt-10">
              Soft skills a vlastnosti
            </h3>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                'Komunikační dovednosti',
                'Self-driven',
                'Problem solving',
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
              <div className="text-4xl font-bold text-amber-600 mb-2">{"<CISLO>"}</div>
              <div className="text-gray-700 font-medium">Projektů</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">{"<CISLO>"}</div>
              <div className="text-gray-700 font-medium">Technologií</div>
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