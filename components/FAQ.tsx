
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Kan ik eerst een proefles doen?", a: "Wij werken niet met proeflessen, omdat we direct tempo willen maken met je rijbewijs. Je betaalt het pakket vooraf, maar mocht je na de allereerste les niet tevreden zijn, dan krijg je gewoon je geld terug." },
    { q: "Hoe snel kan ik echt mijn rijbewijs halen?", a: "Bij onze spoedcursus kun je al binnen 2 tot 4 weken je praktijkexamen doen, afhankelijk van je eigen beschikbaarheid en leertempo." },
    { q: "Moet ik mijn theorie al hebben voor de spoedcursus?", a: "Het is sterk aanbevolen om je theorie-certificaat al op zak te hebben of er bijna klaar voor te zijn, omdat we anders het praktijkexamen niet kunnen inplannen." },
    { q: "Wat houdt de herexamengarantie in?", a: "Mocht je de eerste keer niet slagen, dan betalen wij jouw volgende praktijkexamen t.w.v. €350,-. Zo heb je minder stress tijdens het rijden." },
    { q: "Kan ik in termijnen betalen?", a: "Zeker! Wij werken met facturen zodat je alle afspraken eerst goed en bewust kunt lezen alvorens er betaald wordt. Het is mogelijk om je pakket in 2 of 3 termijnen te voldoen." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Veelgestelde vragen</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-blue-50 transition"
              >
                <span className="font-bold text-blue-900">{faq.q}</span>
                <i className={`fas fa-chevron-${openIdx === idx ? 'up' : 'down'} text-blue-400`}></i>
              </button>
              {openIdx === idx && (
                <div className="p-6 bg-white border-t border-slate-100 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
