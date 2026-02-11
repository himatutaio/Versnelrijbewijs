
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { MediaItem } from '../types';

const MediaGallery: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMedia(data || []);
    } catch (err) {
      console.error('Error fetching media:', err);
    } finally {
      setLoading(false);
    }
  };

  // De placeholders die worden getoond als er nog geen eigen foto's zijn geüpload
  const placeholders = [
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800'
  ];

  // We willen ALTIJD 3 foto's tonen. Geüploade foto's komen eerst, daarna placeholders.
  const displayItems = [...media.slice(0, 3)];
  while (displayItems.length < 3) {
    const placeholderUrl = placeholders[displayItems.length];
    displayItems.push({ 
      id: `placeholder-${displayItems.length}`, 
      url: placeholderUrl, 
      type: 'image', 
      created_at: '' 
    } as any);
  }

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-blue-900 mb-4">Kijkje in de praktijk</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Bij VersneldRijbewijs.nl staat kwaliteit voorop. Bekijk hier onze instructeurs en leerlingen in actie op de weg.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayItems.map((item, index) => (
          <div key={item.id} className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-square bg-slate-100 border-4 border-white transform transition-all duration-500 hover:-translate-y-2">
            {item.type === 'video' ? (
              <video src={item.url} className="w-full h-full object-cover" controls />
            ) : (
              <img 
                src={item.url} 
                alt="Rijles impressie" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-8">
               <div>
                  <span className="text-white font-black text-xl block transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    {item.id.includes('placeholder') ? 'Kwaliteit Rijlessen' : 'Praktijk Moment'}
                  </span>
                  <span className="text-blue-200 text-sm opacity-0 group-hover:opacity-100 transition delay-100 duration-500">
                    VersneldRijbewijs.nl
                  </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;
