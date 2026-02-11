
import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-10 md:p-16">
        <h1 className="text-3xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Cookiebeleid</h1>
        <div className="prose prose-blue max-w-none text-slate-600">
          <p>
            VersneldRijbewijs.nl maakt gebruik van een beperkt aantal cookies om de website goed te laten functioneren.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">1. Functionele cookies</h2>
          <p>
            Deze zijn noodzakelijk voor de technische werking van de website. Wij gebruiken Supabase voor ons beheerdersportaal, welke een cookie kan plaatsen voor de beveiliging en authenticatie van sessies.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">2. Analytische cookies</h2>
          <p>
            Wij kunnen gebruikmaken van geanonimiseerde statistieken om te zien hoe vaak onze website wordt bezocht en welke locaties het meest gezocht worden, om onze dienstverlening te verbeteren.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">3. Geen tracking cookies</h2>
          <p>
            Wij maken geen gebruik van commerciële tracking cookies of cookies die je surfgedrag over andere websites volgen voor advertentiedoeleinden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
