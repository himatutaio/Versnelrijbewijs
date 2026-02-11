
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sluit menu als de route verandert
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group logo-hover">
              <div className="animate-car-front text-blue-600 text-3xl transition-colors drop-shadow-sm">
                <i className="fas fa-car"></i>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-blue-900 tracking-tighter group-hover:text-blue-600 transition-colors">VERSNELD</span>
                <span className="text-[11px] font-black text-slate-400 tracking-[0.2em] -mt-0.5 uppercase">RIJBEWIJS<span className="text-blue-500">.NL</span></span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center text-sm font-semibold text-blue-900">
            <button 
              onClick={(e) => handleNavClick(e, 'seo-start')} 
              className="hover:text-blue-600 transition"
            >
              Spoedcursus
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'pakketten')} 
              className="hover:text-blue-600 transition"
            >
              Rijlespakketten
            </button>
            <Link to="/opleiding-rijinstructeur" className="hover:text-blue-600 transition">Opleiding</Link>
            <Link to="/over-ons" className="hover:text-blue-600 transition">Over ons</Link>
            <Link to="/solliciteren" className="hover:text-blue-600 transition">Werken bij ons</Link>
            <a 
              href="tel:+31620151648"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <i className="fas fa-phone-alt text-xs"></i>
              Bel direct
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-900 p-2 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-white border-b border-blue-100 shadow-2xl transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2 bg-slate-50">
          <button 
            onClick={(e) => handleNavClick(e, 'seo-start')} 
            className="block w-full text-left px-6 py-4 rounded-xl text-blue-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <i className="fas fa-bolt mr-3 text-blue-400"></i> Spoedcursus
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'pakketten')} 
            className="block w-full text-left px-6 py-4 rounded-xl text-blue-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <i className="fas fa-tags mr-3 text-blue-400"></i> Rijlespakketten
          </button>
          <Link 
            to="/opleiding-rijinstructeur" 
            className="block px-6 py-4 rounded-xl text-blue-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <i className="fas fa-graduation-cap mr-3 text-blue-400"></i> Opleiding
          </Link>
          <Link 
            to="/over-ons" 
            className="block px-6 py-4 rounded-xl text-blue-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <i className="fas fa-info-circle mr-3 text-blue-400"></i> Over ons
          </Link>
          <Link 
            to="/solliciteren" 
            className="block px-6 py-4 rounded-xl text-blue-900 font-bold hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <i className="fas fa-user-tie mr-3 text-blue-400"></i> Werken bij ons
          </Link>
          <div className="pt-4 border-t border-slate-200 mt-4">
            <a 
              href="tel:+31620151648"
              className="flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-blue-100"
            >
              <i className="fas fa-phone-alt"></i>
              Bel direct +31 6 20151648
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
