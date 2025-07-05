
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SEOServices from './pages/SEOServices';
import ContentMarketing from './pages/ContentMarketing';
import PaidAdvertising from './pages/PaidAdvertising';
import WebsiteAudit from './pages/WebsiteAudit';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/seo-services" element={<SEOServices />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/paid-advertising" element={<PaidAdvertising />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-audit" element={<WebsiteAudit />} />
        </Routes>
      </div>
    </Router>
  );
}
