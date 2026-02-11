
import React from 'react';

const InstructorApplication: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
        <div className="bg-gradient-blue p-12 text-white text-center">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Word Instructeur</h1>
          <p className="opacity-90 font-medium">Sluit je aan bij het team van Alphen aan den Rijn.</p>
        </div>

        <div className="p-12">
          <div className="prose prose-blue mb-10 text-center max-w-none">
            <h2 className="text-2xl font-bold text-blue-900">Gezocht: Gedreven Rijinstructeurs</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Ben jij een gecertificeerde rijinstructeur in de regio Alphen aan den Rijn en wil je leerlingen helpen op een snelle, moderne manier hun rijbewijs te halen? 
              Wij zoeken versterking!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left my-10">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="font-bold text-blue-900 mb-2 flex items-center"><i className="fas fa-check-circle mr-2 text-green-500"></i> Flexibiliteit</div>
                <p className="text-sm text-slate-500">Beheer je eigen agenda via ons systeem en bepaal zelf wanneer je leerlingen aanneemt.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="font-bold text-blue-900 mb-2 flex items-center"><i className="fas fa-check-circle mr-2 text-green-500"></i> Goede Vergoeding</div>
                <p className="text-sm text-slate-500">Wij zorgen voor een constante stroom van gemotiveerde leerlingen voor jouw spoedcursussen.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-[2rem] border-2 border-dashed border-slate-200 text-center">
            <h3 className="text-xl font-black text-blue-900 mb-6 uppercase tracking-wider">Interesse?</h3>
            <p className="text-slate-500 mb-8">
              Wij werken niet met ingewikkelde formulieren. Stuur onze manager Khalid direct een bericht via WhatsApp voor een kennismakingsgesprek.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/31620151648" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white font-black py-6 rounded-2xl hover:bg-green-600 transition shadow-xl shadow-green-100 flex items-center justify-center gap-4 text-xl"
              >
                <i className="fab fa-whatsapp text-3xl"></i>
                Solliciteer via WhatsApp
              </a>
              <a 
                href="tel:+31620151648" 
                className="text-blue-600 font-bold hover:underline py-2"
              >
                Of bel direct: +31 6 20151648
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorApplication;
