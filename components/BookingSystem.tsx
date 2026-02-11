
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface BookingSystemProps {
  initialZip?: string;
  active: boolean;
}

const BookingSystem: React.FC<BookingSystemProps> = ({ initialZip, active }) => {
  const [zip, setZip] = useState(initialZip || '');
  const [searching, setSearching] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState<'none' | 'available' | 'full' | 'other_region'>('none');

  useEffect(() => {
    if (active && initialZip) {
      setZip(initialZip);
      handleSearch(initialZip);
    }
  }, [active, initialZip]);

  const handleSearch = async (zipToSearch: string) => {
    if (!zipToSearch || zipToSearch.length < 4) return;
    setSearching(true);
    setAvailabilityStatus('none');
    
    try {
      const cleanZip = zipToSearch.toUpperCase().replace(/\s/g, '');
      const prefix = cleanZip.substring(0, 4);
      const prefixInt = parseInt(prefix);

      // Check of postcode in de regio Alphen aan den Rijn ligt (2400 - 2409)
      const isAlphen = prefixInt >= 2400 && prefixInt <= 2409;

      const { data, error } = await supabase
        .from('instructors')
        .select('id, status, zip_code')
        .or(`zip_code.ilike.%${prefix}%`);

      if (error) throw error;

      if (data && data.length > 0) {
        const hasAvailable = data.some(inst => inst.status === 'Beschikbaar');
        setAvailabilityStatus(hasAvailable ? 'available' : 'full');
      } else {
        // Als we geen specifieke instructeur in DB hebben, checken we of de regio klopt
        if (isAlphen) {
          setAvailabilityStatus('available');
        } else {
          setAvailabilityStatus('other_region');
        }
      }
    } catch (err) {
      console.error('Error checking availability:', err);
      setAvailabilityStatus('available'); 
    } finally {
      setSearching(false);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="min-h-[100px] flex items-center justify-center">
        {searching ? (
          <div className="text-center animate-pulse py-10">
            <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-blue-900 font-bold">Agenda's controleren voor {zip}...</p>
          </div>
        ) : availabilityStatus === 'available' ? (
          <div className="w-full bg-blue-600 p-8 md:p-12 rounded-[2.5rem] text-white text-center shadow-2xl animate-in zoom-in duration-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                     <i className="fas fa-calendar-check text-white"></i>
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tight">Direct plek in {zip}!</h3>
                </div>
                <p className="text-blue-100 leading-relaxed max-w-md">
                  Onze instructeurs hebben momenteel ruimte voor nieuwe leerlingen in jouw regio. Je kunt <strong>morgen al beginnen</strong>.
                </p>
              </div>
              <button 
                onClick={scrollToContact}
                className="whitespace-nowrap bg-white text-blue-900 px-10 py-4 rounded-xl font-black hover:bg-slate-100 transition shadow-xl uppercase tracking-widest transform hover:-translate-y-1 active:scale-95 text-sm"
              >
                Claim je plek
              </button>
            </div>
          </div>
        ) : availabilityStatus === 'other_region' ? (
          <div className="w-full bg-slate-100 p-10 rounded-[2.5rem] text-center border border-slate-200 border-dashed animate-in fade-in">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 shadow-sm">
               <i className="fas fa-map-marked-alt"></i>
             </div>
             <h3 className="text-xl font-bold text-slate-800 mb-2">Nog niet actief in {zip}</h3>
             <p className="text-slate-500 mb-6 max-w-lg mx-auto leading-relaxed">
               Op dit moment focussen wij ons volledig op <strong>Alphen aan den Rijn</strong> om de hoogste kwaliteit te garanderen. 
               We zijn echter hard bezig met uitbreiden!
             </p>
             <button onClick={scrollToContact} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-md uppercase tracking-wider text-xs">
               Hou me op de hoogte
             </button>
          </div>
        ) : availabilityStatus === 'full' ? (
          <div className="w-full bg-slate-100 p-10 rounded-[2.5rem] text-center border border-slate-200">
             <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
               <i className="fas fa-clock"></i>
             </div>
             <h3 className="text-xl font-bold text-slate-800 mb-1">Momenteel druk in {zip}</h3>
             <p className="text-slate-500 mb-4">Alle instructeurs in deze regio zitten momenteel vol. Laat je gegevens achter voor de wachtlijst.</p>
             <button onClick={scrollToContact} className="text-blue-600 font-bold hover:underline">Zet mij op de wachtlijst</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BookingSystem;
