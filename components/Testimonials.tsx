
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-16 text-center">Ervaringen van onze leerlingen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sander K.", text: "Binnen 3 weken mijn rijbewijs gehaald! De spoedcursus was intensief maar de instructeur was super geduldig.", city: "Alphen aan den Rijn" },
            { name: "Melissa V.", text: "De proefles was erg fijn. Meteen een planning gemaakt voor de komende weken. Echt een aanrader!", city: "Alphen aan den Rijn" },
            { name: "Ahmed B.", text: "Duidelijke prijs, geen verborgen kosten. En de herexamengarantie gaf me veel rust.", city: "Alphen aan den Rijn" }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl relative">
              <div className="text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-xs"></i>)}
              </div>
              <p className="text-slate-700 italic mb-6">"{item.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-bold text-blue-900">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
