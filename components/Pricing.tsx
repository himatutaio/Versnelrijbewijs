
import React, { useRef } from 'react';
import { Package } from '../types';

const PACKAGES: Package[] = [
  {
    id: 1,
    title: 'Basispakket',
    price: 795,
    oldPrice: 985,
    lessons: 15,
    features: ['15 rijlessen', 'Gratis herexamen t.w.v. €350', 'Dit pakket als spoedcursus', '1e les niet goed? Geld terug!'],
    badge: 'Basis'
  },
  {
    id: 2,
    title: 'Spoedpakket',
    price: 995,
    oldPrice: 1185,
    lessons: 15,
    features: ['15 rijlessen', 'Gratis herexamen t.w.v. €350', 'Altijd een spoedcursus', 'Meest gekozen optie'],
    isPopular: true,
    badge: 'Meest gekozen'
  },
  {
    id: 3,
    title: 'Gevorderd',
    price: 1325,
    oldPrice: 1575,
    lessons: 25,
    features: ['25 rijlessen', 'Gratis herexamen t.w.v. €350', 'Dit pakket als spoedcursus', 'Voor wie al wat ervaring heeft'],
    badge: 'Gevorderd'
  },
  {
    id: 4,
    title: 'Premium',
    price: 1855,
    oldPrice: 2165,
    lessons: 35,
    features: ['35 rijlessen', 'Gratis herexamen t.w.v. €350', 'Dit pakket als spoedcursus', 'Complete ontzorging'],
    badge: 'Premium'
  },
  {
    id: 5,
    title: 'Gegarandeerd',
    price: 2120,
    oldPrice: 2460,
    lessons: 40,
    features: ['40 rijlessen', 'Gratis herexamen t.w.v. €350', 'Dit pakket als spoedcursus', 'Maximale zekerheid'],
    badge: 'Gegarandeerd'
  },
  {
    id: 6,
    title: 'Zekerheid',
    price: 2650,
    oldPrice: 3050,
    lessons: 50,
    features: ['50 rijlessen', 'Gratis herexamen t.w.v. €350', 'Dit pakket als spoedcursus', 'Voor de voorzichtige leerling'],
    badge: 'Zekerheid'
  }
];

const Pricing: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleRequest = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 320 : scrollLeft + 320;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-4">Rijlespakketten voor jouw autorijbewijs</h2>
          <p className="text-blue-200">Kies je pakket en vraag een koppeling aan met een instructeur.</p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-between mb-6 md:hidden">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 flex items-center">
                <i className="fas fa-arrows-left-right mr-2 animate-pulse"></i>
                Veeg om te bekijken
            </span>
        </div>
        
        <div className="hidden md:flex justify-end gap-2 mb-6">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center hover:bg-blue-800 transition"><i className="fas fa-chevron-left"></i></button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-blue-700 flex items-center justify-center hover:bg-blue-800 transition"><i className="fas fa-chevron-right"></i></button>
            <span className="ml-4 text-xs font-bold uppercase tracking-widest text-blue-300 flex items-center">Scroll naar rechts</span>
        </div>

        {/* pt-12 added here to prevent absolute badges from being clipped */}
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pt-12 pb-10 no-scrollbar snap-x snap-mandatory">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className={`min-w-[300px] md:min-w-[350px] bg-white rounded-[2.5rem] p-8 text-blue-900 shadow-2xl flex flex-col relative transition-all snap-start ${pkg.isPopular ? 'ring-4 ring-blue-400 scale-105 z-20 my-2' : 'my-2'}`}>
              {pkg.badge && (
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${pkg.isPopular ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500 shadow-sm'}`}>
                  {pkg.badge}
                </div>
              )}
              <h3 className="text-2xl font-black mb-1">{pkg.title}</h3>
              <div className="text-blue-600 text-sm font-bold mb-6">{pkg.lessons} rijlessen</div>
              <div className="mb-8">
                {pkg.oldPrice && <div className="text-slate-300 line-through text-lg font-bold">€{pkg.oldPrice}</div>}
                <div className="flex items-baseline">
                    <span className="text-5xl font-black text-blue-900">€{pkg.price}</span>
                    <span className="text-slate-400 font-medium ml-2">totaal</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-sm font-medium leading-tight">
                    <i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 shrink-0"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button onClick={handleRequest} className={`w-full py-4 rounded-2xl font-black transition-all transform active:scale-95 ${pkg.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-blue-900 hover:bg-slate-200'}`}>
                Pakket Aanvragen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
