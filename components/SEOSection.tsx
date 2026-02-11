
import React from 'react';

const SEOSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="prose prose-blue lg:prose-xl">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-8">Snel & goedkoop je rijbewijs halen</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Het verschil tussen een gewone cursus en een snelcursus rijbewijs is dat je er veel minder lang over doet. 
            Al je rijlessen volgen elkaar op binnen de <strong>2 tot 4 weken</strong>. Je kan ervoor kiezen om al je lessen in 1 week te nemen of wat meer gespreid over 4 weken. 
            Zo kan jij snel je rijbewijs halen. Een mogelijkheid bij de spoedcursus is om binnen één maand je praktijkexamen af te leggen. 
            Het betekent dat je in een week tijd bijvoorbeeld 5 lessen afneemt, elke dag drie uur rijlessen achtereen. Dan neem je in vijf dagen tijd al 15 lessen af.
          </p>

          <h3 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Spoedcursus rijlessen duren 3 tot 4 uren</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            De rijlessen van de spoedcursus rijbewijs duren 3 tot 4 uur. Lange rijlessen kunnen vermoeiend zijn omdat je je erg lang moet concentreren en veel informatie absorbeert. 
            Het voordeel van een snelcursus rijbewijs is dat je meer achter het stuur zit dan bij gewone lessen. Daardoor leer je sneller en gemakkelijker.
          </p>

          <div className="bg-blue-600 p-8 rounded-[2rem] text-white my-12 text-center shadow-2xl shadow-blue-200">
            <h4 className="text-2xl font-bold mb-4">Klaar om te beginnen?</h4>
            <a href="#pakketten" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition">
              Bekijk onze lespakketten
            </a>
          </div>

          <h3 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Kosten van de snelcursus autorijbewijs</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Snel je rijbewijs halen is een slimme investering, zeker wanneer je je rijbewijs nodig hebt voor je baan. 
            Je rijbewijs heb je bovendien voor de rest van je leven.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>Je bent verzekerd van een snelle examendatum.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>Je krijgt extra aandacht van je leraar of lerares.</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
              <span>Je krijgt je vervolgexamens helemaal gratis als je niet van de eerste keer slaagt.</span>
            </li>
          </ul>

          <div className="bg-slate-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-12">
            <p className="text-lg font-medium text-slate-800 mb-4">
              Voor een snelcursus betaal je een vaste lage prijs vanaf <span className="text-blue-600 font-bold">€ 795,-</span>. 
              Niet te vergeten dat je je rijbewijs snel in handen hebt en de baan op kan, die vrijheid en flexibiliteit is onbetaalbaar. 
              Slaag je niet de eerste keer? Dan krijg je je vervolgexamens geheel gratis via onze herexamengarantie!
            </p>
          </div>

          <h3 className="text-2xl font-bold text-blue-800 mt-12 mb-6">Direct starten met je 1e rijles</h3>
          <p className="text-slate-600 leading-relaxed">
            Bij VersneldRijbewijs.nl hebben we geen wachttijden. Je kiest direct je pakket en plant je eerste les in. 
            We bieden een <strong>100% tevredenheidsgarantie</strong>. Ben je na die eerste les niet tevreden? 
            Neem dan contact met ons op en we storten het volledige bedrag van je pakket terug.
          </p>
          <p className="mt-4 text-sm font-bold text-slate-500 italic">
            Let op: Wij bieden enkel autorijlessen aan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOSection;
