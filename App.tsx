
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InstructorApplication from './pages/InstructorApplication';
import InstructorTraining from './pages/InstructorTraining';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import AboutUs from './pages/AboutUs';
import CustomerService from './pages/CustomerService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-ons" element={<AboutUs />} />
            <Route path="/klantenservice" element={<CustomerService />} />
            <Route path="/solliciteren" element={<InstructorApplication />} />
            <Route path="/opleiding-rijinstructeur" element={<InstructorTraining />} />
            <Route path="/privacybeleid" element={<PrivacyPolicy />} />
            <Route path="/algemene-voorwaarden" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* Catch-all route redirects to home to prevent error pages */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
