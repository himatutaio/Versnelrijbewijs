
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Inloggen mislukt: Controleer je gegevens.");
      setLoading(false);
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10">
        <div className="text-center mb-10">
          <div className="text-blue-600 text-4xl mb-4">
            <i className="fas fa-user-shield"></i>
          </div>
          <h1 className="text-2xl font-black text-blue-900 uppercase">Admin Login</h1>
          <p className="text-slate-500 text-sm mt-2">VersneldRijbewijs.nl Beheer</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Emailadres</label>
            <input 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="admin@versneldrijbewijs.nl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Wachtwoord</label>
            <input 
              required 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-100 uppercase tracking-widest disabled:opacity-50"
          >
            {loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : 'Inloggen'}
          </button>
        </form>
        
        <p className="mt-8 text-center text-xs text-slate-400">
          Wachtwoord vergeten? Neem contact op met de systeembeheerder.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
