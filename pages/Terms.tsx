
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-10 md:p-16">
        <h1 className="text-3xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Algemene Voorwaarden</h1>
        <div className="prose prose-blue max-w-none text-slate-600">
          <p className="font-bold">Geldig voor alle rijlespakketten bij VersneldRijbewijs.nl.</p>
          
          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">1. De Rijlessen</h2>
          <p>
            Een rijles bij VersneldRijbewijs.nl duurt standaard 60 minuten, tenzij anders afgesproken (bijvoorbeeld blokuren van 120 of 180 minuten voor spoedcursussen).
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">2. Betaling via Factuur</h2>
          <p>
            Zoals vermeld op onze website werken wij met facturen. Na aanvraag van een pakket ontvang je een factuur met de gemaakte afspraken. Betaling dient te geschieden voor aanvang van de eerste reeks lessen. Betaling in termijnen is alleen mogelijk na schriftelijke bevestiging door onze administratie.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">3. Annuleren van Lessen</h2>
          <p>
            Geplande rijlessen dienen minimaal 48 uur van tevoren te worden afgezegd. Bij annulering binnen 48 uur wordt de les volledig in rekening gebracht, ongeacht de reden.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">4. Herexamengarantie</h2>
          <p>
            De herexamengarantie houdt in dat VersneldRijbewijs.nl de kosten van één herexamen (inkoopwaarde CBR + administratiekosten) vergoedt indien de leerling de eerste keer niet slaagt. De leerling dient echter wel zelf de benodigde extra rijlessen voor het herexamen te bekostigen.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">5. 100% Tevredenheidsgarantie</h2>
          <p>
            Mocht je na de allereerste rijles van je pakket besluiten dat de rijschool niet bij je past, dan storten wij het volledige pakketbedrag (minus de kosten voor de gereden eerste les) terug op je rekening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
