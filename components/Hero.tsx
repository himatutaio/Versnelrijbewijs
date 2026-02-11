
import React, { useState } from 'react';

interface HeroProps {
  onSearch: (zip: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [zip, setZip] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length >= 4) {
      onSearch(zip);
    }
  };

  return (
    <section id="hero-top" className="relative bg-white pt-10 pb-20 overflow-hidden scroll-mt-20">
      {/* Background Driving Car Animation */}
      <div className="car-bg-animation">
        <i className="fas fa-car-side"></i>
      </div>
      <div className="car-bg-animation" style={{ animationDelay: '7.5s', bottom: '15%', fontSize: '1.5rem', opacity: '0.1' }}>
        <i className="fas fa-car-side"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="flex items-center space-x-2 mb-6 animate-float">
              <span className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-xs"></i>)}
              </span>
              <span className="text-blue-900 font-bold">'Uitstekend'</span>
              <span className="text-slate-500 text-sm">1.662+ reviews</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight mb-6">
              Spoedcursus <br/>
              <span className="text-blue-600">Rijbewijs</span>
            </h1>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-lg text-slate-700 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check text-xs"></i>
                </div>
                Binnen 30 dagen je rijbewijs
              </li>
              <li className="flex items-center text-lg text-slate-700 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check text-xs"></i>
                </div>
                Meerdere rijlessen per week
              </li>
              <li className="flex items-center text-lg text-slate-700 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check text-xs"></i>
                </div>
                1e les niet goed? 100% Geld terug!
              </li>
            </ul>

            <button 
              onClick={() => {
                const element = document.getElementById('pakketten');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white text-xl font-bold px-10 py-5 rounded-2xl hover:bg-blue-700 transition shadow-2xl shadow-blue-200 transform hover:scale-105 active:scale-95"
            >
              Bekijk onze pakketten
            </button>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-blue p-8 md:p-10 lg:p-12 rounded-[2.5rem] shadow-3xl text-white relative overflow-hidden">
              {/* Subtle light pulse effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="text-sm font-bold opacity-80 mb-1 text-blue-100">Directe start mogelijk</div>
                  <div className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Snel & Zeker</div>
                  <div className="text-xl font-medium opacity-90 uppercase tracking-[0.2em] mt-2 text-blue-200">Naar je rijbewijs</div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center font-semibold">
                    <i className="fas fa-bolt mr-3 text-yellow-300"></i>
                    Direct plannen, morgen beginnen!
                  </div>
                  <div className="flex items-center font-semibold">
                    <i className="fas fa-shield-alt mr-3 text-yellow-300"></i>
                    Niet tevreden? Geld terug garantie
                  </div>
                  <div className="flex items-center font-semibold">
                    <i className="fas fa-user-check mr-3 text-yellow-300"></i>
                    Beste instructeurs van Nederland
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-inner overflow-hidden">
                  <div className="relative flex-1">
                     <i className="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"></i>
                     <input 
                      type="text" 
                      placeholder="Postcode" 
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-xl bg-slate-50 text-blue-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
                    />
                  </div>
                  <button className="bg-blue-600 text-white font-black px-6 py-4 rounded-xl hover:bg-blue-700 transition whitespace-nowrap uppercase text-xs tracking-widest shadow-md">
                    Check beschikbaarheid
                  </button>
                </form>
                <p className="mt-4 text-[10px] opacity-70 text-center uppercase tracking-widest font-bold">Plan direct je eerste rijles van je pakket.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center transform hover:-translate-y-1 transition">
                  <div className="text-xl font-black text-blue-600">45.824</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Geslaagden</div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center transform hover:-translate-y-1 transition" style={{ transitionDelay: '0.1s' }}>
                  <div className="text-xl font-black text-blue-600">98%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Succes</div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center transform hover:-translate-y-1 transition" style={{ transitionDelay: '0.2s' }}>
                  <div className="text-xl font-black text-blue-600">100%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Garantie</div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full -z-0 opacity-50"></div>
    </section>
  );
};

export default Hero;