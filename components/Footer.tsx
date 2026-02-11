
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleScrollToPakketten = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pakketten');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group logo-hover mb-6">
              <div className="animate-car-front text-blue-600 text-3xl transition-colors">
                <i className="fas fa-car"></i>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-blue-900 tracking-tighter group-hover:text-blue-600 transition-colors">VERSNELD</span>
                <span className="text-[11px] font-black text-slate-400 tracking-[0.2em] -mt-0.5 uppercase">RIJBEWIJS<span className="text-blue-500">.NL</span></span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Dé specialist in spoedcursussen voor je autorijbewijs in Alphen aan den Rijn. Snel, veilig en betaalbaar de weg op binnen 30 dagen.
            </p>
            <div className="flex space-x-4">
               <a href="https://www.tiktok.com/@versneldrijbewijs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-black hover:text-white transition shadow-sm">
                 <i className="fab fa-tiktok"></i>
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-sm">Onze Pakketten</h4>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li><button onClick={handleScrollToPakketten} className="hover:text-blue-600 transition text-left">Basispakket (15 lessen)</button></li>
              <li><button onClick={handleScrollToPakketten} className="hover:text-blue-600 transition text-left">Spoedpakket (15 lessen)</button></li>
              <li><button onClick={handleScrollToPakketten} className="hover:text-blue-600 transition text-left">Gevorderd Pakket (25 lessen)</button></li>
              <li><button onClick={handleScrollToPakketten} className="hover:text-blue-600 transition text-left">Zekerheid Pakket (50 lessen)</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-sm">Bedrijf</h4>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li><Link to="/over-ons" className="hover:text-blue-600 transition">Over ons</Link></li>
              <li><Link to="/opleiding-rijinstructeur" className="hover:text-blue-600 transition">Opleiding Instructeur</Link></li>
              <li><Link to="/solliciteren" className="hover:text-blue-600 transition">Werken bij ons</Link></li>
              <li><Link to="/klantenservice" className="hover:text-blue-600 transition">Klantenservice</Link></li>
              <li><Link to="/admin" className="text-blue-500 font-bold hover:text-blue-700 transition flex items-center"><i className="fas fa-lock text-[10px] mr-1"></i> Admin Portaal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li className="flex items-center"><i className="fas fa-phone-alt mr-3 text-blue-500"></i> +31 6 20151648</li>
              <li className="flex items-center"><i className="fab fa-whatsapp mr-3 text-blue-500"></i> WhatsApp direct</li>
              <li className="flex items-center"><i className="fas fa-map-marker-alt mr-3 text-blue-500"></i> Alphen aan den Rijn, NL</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
          <div>&copy; 2024 VersneldRijbewijs.nl. Alle rechten voorbehouden.</div>
          <div className="flex space-x-6">
            <Link to="/privacybeleid" className="hover:text-blue-600">Privacybeleid</Link>
            <Link to="/algemene-voorwaarden" className="hover:text-blue-600">Algemene Voorwaarden</Link>
            <Link to="/cookies" className="hover:text-blue-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
