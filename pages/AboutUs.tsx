
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-blue py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Over VersneldRijbewijs.nl</h1>
          <p className="text-xl opacity-90 font-medium">De persoonlijke rijschool van Alphen aan den Rijn</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl p-10 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50"></div>
          
          <div className="relative z-10 prose prose-blue lg:prose-xl max-w-none">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Onze Missie</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              VersneldRijbewijs.nl is ontstaan uit een simpele observatie: het halen van een rijbewijs duurt tegenwoordig vaak veel te lang. 
              Bij ons geloven we dat het anders kan. Door focus, intensieve begeleiding en een slimme planning helpen wij leerlingen in 
              <strong> Alphen aan den Rijn</strong> om binnen 30 dagen veilig en zelfverzekerd de weg op te gaan.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4 text-xl shadow-lg shadow-blue-100">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Snelheid</h3>
                <p className="text-sm text-slate-500">Geen maandenlange trajecten, maar een gefocuste spoedcursus die aansluit op jouw tempo.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4 text-xl shadow-lg shadow-blue-100">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Persoonlijk</h3>
                <p className="text-sm text-slate-500">Direct contact via WhatsApp of telefoon. Wij zijn geen grote fabriek, maar een betrokken team.</p>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Waarom Alphen aan den Rijn?</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Wij hebben er bewust voor gekozen om ons momenteel volledig te richten op Alphen aan den Rijn. 
              Door lokaal te opereren kennen onze instructeurs elke straat, elk kruispunt en elke examenroute op hun duimpje. 
              Dit verhoogt het succespercentage van onze leerlingen aanzienlijk.
            </p>

            <div className="bg-blue-600 p-10 rounded-[2rem] text-white text-center shadow-2xl">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Klaar om te beginnen?</h3>
              <p className="mb-8 opacity-90">Sluit je aan bij de duizenden geslaagden en haal deze maand nog je rijbewijs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/31620151648" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-black hover:bg-slate-100 transition shadow-lg">
                  App ons direct
                </a>
                <a href="tel:+31620151648" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-800 transition">
                  Bel voor info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
