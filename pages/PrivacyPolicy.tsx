
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl p-10 md:p-16">
        <h1 className="text-3xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Privacybeleid</h1>
        <div className="prose prose-blue max-w-none text-slate-600">
          <p className="font-bold">Laatst bijgewerkt: 1 mei 2024</p>
          <p>
            Bij VersneldRijbewijs.nl nemen we de privacy van onze leerlingen en bezoekers serieus. In dit document leggen we uit hoe we omgaan met je persoonsgegevens.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">1. Persoonsgegevens die wij verwerken</h2>
          <p>
            Wanneer je contact met ons opneemt via WhatsApp of telefoon, verwerken wij je telefoonnummer en naam om je van dienst te kunnen zijn. Voor het opstellen van facturen en het inplannen van rijlessen verwerken wij tevens je adresgegevens en e-mailadres.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">2. Doel van de verwerking</h2>
          <p>
            Wij verwerken je gegevens uitsluitend voor:
          </p>
          <ul className="list-disc pl-5">
            <li>Het inplannen van rijlessen en examens.</li>
            <li>Het versturen van facturen voor de afgenomen pakketten.</li>
            <li>Het onderhouden van contact over je voortgang.</li>
            <li>Het voldoen aan wettelijke verplichtingen (zoals belastingaangifte).</li>
          </ul>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">3. Delen met derden</h2>
          <p>
            Je gegevens worden alleen gedeeld met derden als dit noodzakelijk is voor onze dienstverlening. Denk hierbij aan het CBR voor het reserveren van examens of onze boekhoudsoftware voor facturatie. Wij verkopen je gegevens nooit aan externe partijen.
          </p>

          <h2 className="text-xl font-bold text-blue-900 mt-8 mb-4">4. Jouw rechten</h2>
          <p>
            Je hebt altijd het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via de bekende kanalen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
