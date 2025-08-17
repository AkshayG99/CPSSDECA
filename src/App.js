import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Executives from './pages/Executives';
import Memories from './pages/Memories';
import Marketing from './pages/clusters/Marketing';
import BusinessAdmin from './pages/clusters/BusinessAdmin';
import Hospitality from './pages/clusters/Hospitality';
import Finance from './pages/clusters/Finance';
import './App.css';

function App() {
  return (
    <Router basename="/CPSSDECA">
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/executives" element={<Executives />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/clusters/marketing" element={<Marketing />} />
            <Route path="/clusters/business-admin" element={<BusinessAdmin />} />
            <Route path="/clusters/hospitality" element={<Hospitality />} />
            <Route path="/clusters/finance" element={<Finance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
