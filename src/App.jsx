import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import SEOServices from './pages/SEOServices';
import LocalSEO from './pages/LocalSEO';
import TechnicalSEO from './pages/TechnicalSEO';
import EcommerceSEO from './pages/EcommerceSEO';
import ContentMarketing from './pages/ContentMarketing';
import PaidAdvertising from './pages/PaidAdvertising';
import WebsiteAudit from './pages/WebsiteAudit';
import Industries from './pages/Industries';
import Resources from './pages/Resources';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
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
          <Route path="/local-seo" element={<LocalSEO />} />
          <Route path="/technical-seo" element={<TechnicalSEO />} />
          <Route path="/ecommerce-seo" element={<EcommerceSEO />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/paid-advertising" element={<PaidAdvertising />} />
          <Route path="/website-audit" element={<WebsiteAudit />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholder routes for additional pages */}
          <Route path="/social-media-marketing" element={<Services />} />
          <Route path="/ppc-management" element={<PaidAdvertising />} />
          <Route path="/web-design" element={<Services />} />
          <Route path="/healthcare-seo" element={<Industries />} />
          <Route path="/legal-seo" element={<Industries />} />
          <Route path="/real-estate-seo" element={<Industries />} />
          <Route path="/automotive-seo" element={<Industries />} />
          <Route path="/restaurant-seo" element={<Industries />} />
          <Route path="/finance-seo" element={<Industries />} />
          <Route path="/case-studies" element={<Resources />} />
          <Route path="/seo-tools" element={<WebsiteAudit />} />
          <Route path="/guides" element={<Resources />} />
          <Route path="/webinars" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}