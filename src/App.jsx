import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import GST from './GST';
import ServicePage from './ServicePage';
import TeamPage from './TeamPage';
import Navbar from './Navbar';
import Footer from './Footer';
import WhoWeAre from './WhoWeArePage';
import Contact from './ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
   
        <Route path="/gst" element={<GST />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/services" element={<ServicePage />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
