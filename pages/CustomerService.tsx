
import React from 'react';

const CustomerService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-blue py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Klantenservice</h1>
          <p className="text-xl opacity-90 font-medium">Hoe kunnen we je helpen?</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-4xl mb-6">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Stuur een bericht</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                De snelste manier om antwoord te krijgen op je vragen. Wij reageren meestal binnen 5 minuten.
              </p>
              <a 
                href="https://wa.me/31620151648" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-green-500 text-white font-black py-5 rounded-2xl hover:bg-green-600 transition shadow-lg shadow-green-100 uppercase tracking-widest"
              >
                Start WhatsApp gesprek
              </a>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-4xl mb-6">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Bel ons direct</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Spreek je liever iemand persoonlijk? Onze medewerkers staan klaar om al je vragen te beantwoorden.
              </p>
              <a 
                href="tel:+31620151648" 
                className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-100 uppercase tracking-widest"
              >
                Bel +31 6 20151648
              </a>
            </div>
          </div>

          {/* Support Info */}
          <div className="bg-blue-900 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-10 uppercase tracking-tight">Veelgestelde vragen & Support</h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-bold text-blue-200 mb-2 uppercase tracking-widest text-sm">Betalingen</h4>
                  <p className="text-blue-50/70 text-sm leading-relaxed">
                    Heb je vragen over je factuur of de betalingsvoorwaarden? Onze administratie helpt je graag verder via WhatsApp.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-200 mb-2 uppercase tracking-widest text-sm">Planning</h4>
                  <p className="text-blue-50/70 text-sm leading-relaxed">
                    Wil je je rijlessen verzetten of je examen inplannen? Neem direct contact op met je eigen instructeur of onze centrale planning.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-200 mb-2 uppercase tracking-widest text-sm">Openingstijden</h4>
                  <p className="text-blue-50/70 text-sm leading-relaxed">
                    Onze klantenservice is bereikbaar van maandag t/m zaterdag tussen 09:00 en 21:00 uur.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-200 mb-2 uppercase tracking-widest text-sm">Klachten</h4>
                  <p className="text-blue-50/70 text-sm leading-relaxed">
                    Ben je niet tevreden? Wij lossen het graag op. Bel ons direct zodat we samen naar een oplossing kunnen kijken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerService;
