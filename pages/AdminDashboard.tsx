
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Instructor, MediaItem } from '../types';

const AdminDashboard: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState<'image' | 'video'>('image');
  const [msg, setMsg] = useState({ text: '', error: false });
  const [user, setUser] = useState<any>(null);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [mediaCount, setMediaCount] = useState(0);
  
  const [showAddInstructor, setShowAddInstructor] = useState(false);
  const [newInstructor, setNewInstructor] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    zip_code: '',
    status: 'Beschikbaar' as 'Vol' | 'Beschikbaar',
    manager: '',
    image_url: ''
  });
  const [instructorMsg, setInstructorMsg] = useState({ text: '', error: false });

  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
      } else {
        setUser(session.user);
        fetchStatsAndData();
      }
    };
    checkUser();
  }, [navigate]);

  const fetchStatsAndData = async () => {
    try {
      const { data: instData, count: instCount } = await supabase
        .from('instructors')
        .select('*', { count: 'exact' });
      
      const { data: mData, count: medCount } = await supabase
        .from('media')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

      setInstructors(instData || []);
      setMediaItems(mData || []);
      setInstructorsCount(instCount || 0);
      setMediaCount(medCount || 0);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setMsg({ text: 'Bezig met uploaden...', error: false });

    try {
      const fileName = `${Date.now()}-${file.name}`;
      
      // Let op: 'media' bucket moet bestaan in Supabase Storage en op PUBLIC staan
      const { error: storageError } = await supabase.storage
        .from('media')
        .upload(fileName, file);

      if (storageError) {
        if (storageError.message.includes('Bucket not found')) {
          throw new Error('De opslag-map (Bucket) "media" is niet gevonden in Supabase. Maak in Supabase een nieuwe Public Bucket aan met de naam "media".');
        }
        throw storageError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('media')
        .insert([{ url: publicUrl, type: type }]);

      if (dbError) throw dbError;

      setMsg({ text: 'Succes! De foto is toegevoegd en vervangt een van de placeholders.', error: false });
      setFile(null);
      fetchStatsAndData();
    } catch (err: any) {
      setMsg({ text: err.message, error: true });
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteMedia = async (id: string) => {
    if (!confirm('Weet je zeker dat je deze foto wilt verwijderen? De standaard placeholder komt dan weer terug.')) return;
    try {
      const { error } = await supabase.from('media').delete().eq('id', id);
      if (error) throw error;
      fetchStatsAndData();
    } catch (err: any) {
      alert(`Fout bij verwijderen: ${err.message}`);
    }
  };

  const handleAddInstructor = async (e: React.FormEvent) => {
    e.preventDefault();
    setInstructorMsg({ text: 'Toevoegen...', error: false });

    try {
      const { error } = await supabase
        .from('instructors')
        .insert([{
          first_name: newInstructor.first_name,
          last_name: newInstructor.last_name,
          email: newInstructor.email,
          phone: newInstructor.phone,
          city: newInstructor.city,
          zip_code: newInstructor.zip_code,
          status: newInstructor.status,
          manager: newInstructor.manager,
          image_url: newInstructor.image_url || `https://ui-avatars.com/api/?name=${newInstructor.first_name}+${newInstructor.last_name}&background=random`,
          rating: 5.0,
          reviews: 0
        }]);

      if (error) throw error;

      setInstructorMsg({ text: 'Instructeur toegevoegd!', error: false });
      setNewInstructor({ first_name: '', last_name: '', email: '', phone: '', city: '', zip_code: '', status: 'Beschikbaar', manager: '', image_url: '' });
      setShowAddInstructor(false);
      fetchStatsAndData();
    } catch (err: any) {
      setInstructorMsg({ text: `Fout: ${err.message}`, error: true });
    }
  };

  const handleDeleteInstructor = async (id: string) => {
    if(!confirm('Instructeur verwijderen?')) return;
    try {
      const { error } = await supabase.from('instructors').delete().eq('id', id);
      if (error) throw error;
      fetchStatsAndData();
    } catch (err: any) {
      alert(`Fout: ${err.message}`);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-100 pb-8 gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-blue-900">Beheerpaneel</h1>
              <p className="text-slate-500 text-sm">Ingelogd als: <span className="text-blue-600 font-bold">{user.email}</span></p>
            </div>
            <button onClick={handleLogout} className="bg-slate-100 text-slate-600 px-6 py-2 rounded-xl text-sm font-bold hover:bg-red-50 hover:text-red-600 transition">Uitloggen</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-10">
              
              {/* GALERIJ BEHEER - FOTO'S VERVANGEN */}
              <section className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Foto's op de Homepagina</h2>
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-black uppercase tracking-widest">{mediaCount} Geüpload</span>
                 </div>

                 <p className="text-slate-500 text-sm mb-6">
                   Hieronder zie je de foto's die momenteel de placeholders op de homepagina vervangen. De eerste 3 foto's die je hier ziet, staan direct op de site.
                 </p>
                 
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    {mediaItems.length > 0 ? (
                      mediaItems.map((item, index) => (
                        <div key={item.id} className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200">
                          <img src={item.url} className="w-full h-full object-cover" alt="" />
                          <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">Positie {index + 1}</div>
                          <button 
                            onClick={() => handleDeleteMedia(item.id)}
                            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg flex items-center justify-center"
                          >
                            <i className="fas fa-trash-alt text-xs"></i>
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-8 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <i className="fas fa-images text-2xl mb-2 opacity-20"></i>
                        <p className="text-xs">Nog geen eigen foto's. De site toont nu standaard placeholders.</p>
                      </div>
                    )}
                 </div>

                 <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h3 className="text-sm font-bold text-blue-900 mb-4 flex items-center"><i className="fas fa-plus-circle mr-2"></i>Nieuwe foto toevoegen</h3>
                    <form onSubmit={handleUpload} className="space-y-4">
                      <div className="border-2 border-dashed border-blue-200 p-6 rounded-xl text-center cursor-pointer bg-white hover:border-blue-400 transition" onClick={() => document.getElementById('file-input')?.click()}>
                        <i className="fas fa-cloud-upload-alt text-blue-300 text-2xl mb-2"></i>
                        <p className="text-blue-900 font-bold text-sm">{file ? file.name : 'Klik om een bestand te kiezen'}</p>
                        <input id="file-input" type="file" className="hidden" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                      </div>
                      
                      {msg.text && (
                        <div className={`p-4 rounded-xl text-xs font-bold ${msg.error ? 'bg-red-100 text-red-600 border border-red-200' : 'bg-green-100 text-green-600 border border-green-200'}`}>
                          <i className={`fas ${msg.error ? 'fa-exclamation-triangle' : 'fa-check-circle'} mr-2`}></i>
                          {msg.text}
                        </div>
                      )}

                      <button disabled={!file || uploading} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl disabled:opacity-50 shadow-lg shadow-blue-100 uppercase tracking-widest text-xs transition-all hover:bg-blue-700">
                        {uploading ? <i className="fas fa-spinner fa-spin mr-2"></i> : 'Foto Uploaden & Plaatsen'}
                      </button>
                    </form>
                 </div>
              </section>

              {/* INSTRUCTEURS BEHEER */}
              <section className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                 <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Instructeurs</h2>
                    <button onClick={() => setShowAddInstructor(!showAddInstructor)} className="text-xs bg-blue-600 text-white px-4 py-2 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700">
                       {showAddInstructor ? 'Sluiten' : '+ Toevoegen'}
                    </button>
                 </div>

                 {showAddInstructor && (
                   <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl animate-in slide-in-from-top-2">
                     <form onSubmit={handleAddInstructor} className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                         <input required type="text" placeholder="Voornaam" value={newInstructor.first_name} onChange={e => setNewInstructor({...newInstructor, first_name: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                         <input required type="text" placeholder="Achternaam" value={newInstructor.last_name} onChange={e => setNewInstructor({...newInstructor, last_name: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                         <input required type="email" placeholder="Email" value={newInstructor.email} onChange={e => setNewInstructor({...newInstructor, email: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                         <input required type="tel" placeholder="Telefoon" value={newInstructor.phone} onChange={e => setNewInstructor({...newInstructor, phone: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                       </div>
                       <div className="grid grid-cols-3 gap-4">
                         <input required type="text" placeholder="Stad" value={newInstructor.city} onChange={e => setNewInstructor({...newInstructor, city: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                         <input required type="text" placeholder="Postcode" value={newInstructor.zip_code} onChange={e => setNewInstructor({...newInstructor, zip_code: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                         <input required type="text" placeholder="Beheerder" value={newInstructor.manager} onChange={e => setNewInstructor({...newInstructor, manager: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200" />
                       </div>
                       <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs">Opslaan</button>
                     </form>
                   </div>
                 )}

                 <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-400 text-[10px] font-black uppercase">
                          <th className="py-4">Naam</th>
                          <th className="py-4">Regio</th>
                          <th className="py-4">Status</th>
                          <th className="py-4 text-right">Actie</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {instructors.map(inst => (
                          <tr key={inst.id}>
                            <td className="py-4 font-bold text-blue-900">{inst.first_name} {inst.last_name}</td>
                            <td className="py-4 text-slate-500">{inst.zip_code}</td>
                            <td className="py-4">
                               <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${inst.status === 'Beschikbaar' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{inst.status}</span>
                            </td>
                            <td className="py-4 text-right">
                               <button onClick={() => handleDeleteInstructor(inst.id)} className="text-slate-300 hover:text-red-500 transition"><i className="fas fa-trash"></i></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-900 rounded-[2rem] p-8 text-white shadow-xl">
                 <h2 className="text-xl font-bold mb-6">Status</h2>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center"><span className="opacity-70">Instructeurs</span><span className="font-black text-xl">{instructorsCount}</span></div>
                    <div className="flex justify-between items-center"><span className="opacity-70">Media Items</span><span className="font-black text-xl">{mediaCount}</span></div>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-[2rem] border border-slate-200 text-slate-500 text-xs leading-relaxed">
                 <h4 className="font-bold text-blue-900 mb-2 uppercase tracking-widest">Belangrijk</h4>
                 <p className="mb-2">1. Maak in Supabase een bucket aan met de naam <span className="font-mono font-bold bg-slate-100 px-1">media</span>.</p>
                 <p className="mb-2">2. Zet deze bucket op <span className="font-bold text-blue-600">Public</span>.</p>
                 <p>3. Nieuwe foto's vervangen automatisch de placeholders op de site (maximaal de eerste 3).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
