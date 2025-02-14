import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import ForYou from './components/ForYou';
import CreatorStudio from './components/CreatorStudio';
import WhyChooseAutomascale from './components/WhyChooseAutomascale';
import CsoAssocies from './components/CsoAssocies';
import FrenchRoleplay from './components/FrenchRoleplay';
import Pricing from './components/Pricing';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ForYou />
      <CreatorStudio />
      <WhyChooseAutomascale />
      <CsoAssocies />
      <Benefits />
      <FrenchRoleplay />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
