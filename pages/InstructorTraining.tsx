
import React, { useState } from 'react';

const InstructorTraining: React.FC = () => {
  const faqs = [
    { q: "Is het kennismakingsgesprek vrijblijvend?", a: "Ja, het gesprek is geheel vrijblijvend. Je zit nergens aan vast en we kijken samen of dit vak bij je past." },
    { q: "Waar vinden de lessen plaats?", a: "Onze opleiding wordt volledig op locatie gegeven in Alphen aan den Rijn. Wij geloven in persoonlijke begeleiding in de praktijk." },
    { q: "Kan ik de opleiding combineren met werk?", a: "Zeker. De opleiding is zo opgezet dat je de theorie en praktijk in overleg kunt inplannen, ideaal naast een huidige baan." },
    { q: "Wanneer ontvang ik de cursusinformatie?", a: "Zodra de inschrijving en betaling zijn verwerkt, sturen wij alle relevante informatie, lesdata en materialen direct naar je e-mailadres." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-blue py-24 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <i className="fas fa-graduation-cap absolute -top-10 -right-10 text-[20rem] rotate-12"></i>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Opleiding tot Rijinstructeur</h1>
          <p className="text-xl md:text-2xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
            Start jouw carrière in de rijopleidingbranche en leer het vak persoonlijk op locatie.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a href="https://wa.me/31620151648" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-slate-100 transition transform hover:-translate-y-1 flex items-center gap-3">
               <i className="fab fa-whatsapp text-2xl"></i>
               Meld je aan via WhatsApp
             </a>
          </div>
        </div>
      </section>

      {/* Intro & Benefits */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-8 uppercase tracking-tight">Waarom kiezen voor onze opleiding?</h2>
              <div className="space-y-6">
                {[
                  { title: "Persoonlijke begeleiding op locatie", desc: "Geen anonieme online modules, maar echte lessen van ervaren professionals in Alphen aan den Rijn." },
                  { title: "Flexibel en praktijkgericht", desc: "Leer het vak in de praktijk op een tempo dat bij jouw situatie past." },
                  { title: "Alle info via e-mail", desc: "Direct na je aanmelding ontvang je alle benodigde documentatie en lesmaterialen in je mailbox." },
                  { title: "Toekomstgarantie", desc: "Goede instructeurs zijn altijd nodig. Wij helpen je direct op weg naar een erkend instructeurschap." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                      <i className="fas fa-check text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 text-lg">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-900 rounded-[3rem] p-10 md:p-16 text-white shadow-3xl relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mb-32 -mr-32 blur-3xl opacity-50"></div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Wat krijg je van ons?</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3"><i className="fas fa-chevron-right text-blue-400"></i> Lessen op locatie (niet online)</li>
                <li className="flex items-center gap-3"><i className="fas fa-chevron-right text-blue-400"></i> Theorie- en praktijkmodules</li>
                <li className="flex items-center gap-3"><i className="fas fa-chevron-right text-blue-400"></i> Voorbereiding op alle examens</li>
                <li className="flex items-center gap-3"><i className="fas fa-chevron-right text-blue-400"></i> Informatievoorziening via e-mail</li>
                <li className="flex items-center gap-3"><i className="fas fa-chevron-right text-blue-400"></i> Directe support via WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-blue-900 mb-16 text-center uppercase tracking-tight">Het Aanmeldproces</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "WhatsApp Bericht", desc: "Stuur ons een bericht om je interesse te tonen." },
              { step: "2", title: "Kennismaking", desc: "Telefonisch of een bakkie koffie op locatie." },
              { step: "3", title: "Factuur & Mail", desc: "Je ontvangt alle info en de factuur via de e-mail." },
              { step: "4", title: "Starten op Locatie", desc: "Begin direct met je lessen in Alphen aan den Rijn." }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl group-hover:scale-110 transition duration-300">
                  {item.step}
                </div>
                <h4 className="font-extrabold text-blue-900 mb-2 uppercase text-sm tracking-widest">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section id="aanmelden" className="py-24 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6 uppercase tracking-tighter">Klaar om te starten?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              Wij werken uitsluitend via WhatsApp voor aanmeldingen. Stuur ons een bericht en wij nemen zo snel mogelijk contact met je op voor een vrijblijvend kennismakingsgesprek.
            </p>
            
            <a 
              href="https://wa.me/31620151648" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-4 bg-green-500 text-white font-black py-6 px-12 rounded-[2rem] hover:bg-green-600 transition shadow-2xl shadow-green-100 uppercase tracking-widest transform hover:-translate-y-1 active:scale-95 text-xl"
            >
              <i className="fab fa-whatsapp text-4xl"></i>
              Meld je aan via WhatsApp
            </a>
            
            <p className="mt-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
              Direct antwoord op al je vragen
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-blue-900 mb-12 text-center uppercase tracking-tight">Veelgestelde vragen</h2>
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
                  <div className="p-6 bg-white border-t border-slate-100 text-slate-600 leading-relaxed animate-in slide-in-from-top-1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorTraining;
