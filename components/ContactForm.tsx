
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden">
          {/* Decoratieve achtergrond elementen */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">Meteen starten? <br/><span className="text-blue-600">Neem contact op!</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Wij werken niet met formulieren, maar houden van direct contact. Stuur ons een bericht via WhatsApp of bel ons direct voor het inplannen van je eerste les.
              </p>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 text-blue-900 font-bold bg-white p-4 rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-widest">Bereikbaar</div>
                      <span>Ma t/m Za: 09:00 - 21:00</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-blue-900 font-bold bg-white p-4 rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-widest">Locatie</div>
                      <span>Alphen aan den Rijn</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
               <a 
                href="https://wa.me/31620151648" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center gap-4 bg-green-500 text-white p-8 rounded-[2rem] font-black text-2xl hover:bg-green-600 transition shadow-xl shadow-green-100 transform hover:-translate-y-1"
               >
                 <i className="fab fa-whatsapp text-4xl group-hover:scale-110 transition"></i>
                 <span>App ons nu</span>
               </a>

               <a 
                href="tel:+31620151648" 
                className="group flex items-center justify-center gap-4 bg-blue-600 text-white p-8 rounded-[2rem] font-black text-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-100 transform hover:-translate-y-1"
               >
                 <i className="fas fa-phone-alt text-3xl group-hover:scale-110 transition"></i>
                 <span>Bel direct</span>
               </a>
               
               <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                 Meestal binnen 5 minuten antwoord via WhatsApp
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
