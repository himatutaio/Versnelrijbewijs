
import React, { useState } from 'react';
import Hero from '../components/Hero';
import BookingSystem from '../components/BookingSystem';
import SEOSection from '../components/SEOSection';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import MediaGallery from '../components/MediaGallery';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const handleSearch = (zip: string) => {
    setZipCode(zip);
    setShowBooking(true);
    // Scroll naar de resultaten die net onder de hero verschijnen
    setTimeout(() => {
      const element = document.getElementById('resultaten');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <Hero onSearch={handleSearch} />
      
      {/* De resultaten verschijnen nu direct hier als er gezocht is */}
      {showBooking && (
        <div id="resultaten" className="bg-slate-50 py-12 border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <BookingSystem initialZip={zipCode} active={showBooking} />
          </div>
        </div>
      )}

      <section id="seo-start" className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <i className="fas fa-graduation-cap text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-blue-900">Hoog succespercentage</h4>
              <p className="text-sm text-slate-500">En een herexamengarantie t.w.v. €350 voor als het niet de eerste keer lukt.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <i className="fas fa-shipping-fast text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-blue-900">Geen wachttijden</h4>
              <p className="text-sm text-slate-500">Kies je pakket en we koppelen je direct aan een instructeur in jouw omgeving.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <i className="fas fa-undo text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-blue-900">100% Tevredenheid</h4>
              <p className="text-sm text-slate-500">Niet tevreden na de eerste les van je pakket? Contacteer ons voor een volledige refund.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-y border-slate-200">
         <MediaGallery />
      </div>

      <SEOSection />

      <div id="pakketten" className="scroll-mt-20">
        <Pricing />
      </div>

      <ContactForm />

      <Testimonials />

      <FAQ />

      <section id="locaties" className="py-24 bg-blue-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Onze Locaties</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Op dit moment zijn wij exclusief actief in <span className="text-blue-600 font-bold">Alphen aan den Rijn</span>. 
            We zijn hard bezig om onze unieke spoedcursussen snel naar andere steden te brengen!
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white p-6 px-12 rounded-[2rem] shadow-xl border-2 border-blue-200 text-blue-900 font-black text-2xl transform hover:scale-105 transition">
              <i className="fas fa-map-marker-alt text-blue-600 animate-bounce"></i>
              Alphen aan den Rijn
            </div>
          </div>
          <div className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
            Meer locaties volgen binnenkort...
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
