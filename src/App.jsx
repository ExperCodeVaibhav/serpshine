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
          
          {/* Development Services */}
          <Route path="/web-development" element={<Services />} />
          <Route path="/wordpress-development" element={<Services />} />
          <Route path="/ecommerce-development" element={<Services />} />
          <Route path="/custom-web-applications" element={<Services />} />
          <Route path="/api-development" element={<Services />} />
          <Route path="/cms-development" element={<Services />} />
          <Route path="/mobile-app-development" element={<Services />} />
          <Route path="/ios-development" element={<Services />} />
          <Route path="/android-development" element={<Services />} />
          <Route path="/react-native-development" element={<Services />} />
          <Route path="/flutter-development" element={<Services />} />
          <Route path="/ui-ux-design" element={<Services />} />
          <Route path="/graphic-design" element={<Services />} />
          <Route path="/logo-design" element={<Services />} />
          <Route path="/branding" element={<Services />} />
          
          {/* Technology Pages */}
          <Route path="/technologies" element={<Services />} />
          <Route path="/react-development" element={<Services />} />
          <Route path="/angular-development" element={<Services />} />
          <Route path="/vue-development" element={<Services />} />
          <Route path="/javascript-development" element={<Services />} />
          <Route path="/typescript-development" element={<Services />} />
          <Route path="/nodejs-development" element={<Services />} />
          <Route path="/python-development" element={<Services />} />
          <Route path="/php-development" element={<Services />} />
          <Route path="/dotnet-development" element={<Services />} />
          <Route path="/java-development" element={<Services />} />
          <Route path="/mysql-development" element={<Services />} />
          <Route path="/mongodb-development" element={<Services />} />
          <Route path="/postgresql-development" element={<Services />} />
          <Route path="/firebase-development" element={<Services />} />
          
          {/* Industry Solutions */}
          <Route path="/healthcare-solutions" element={<Industries />} />
          <Route path="/fintech-solutions" element={<Industries />} />
          <Route path="/ecommerce-solutions" element={<Industries />} />
          <Route path="/education-solutions" element={<Industries />} />
          <Route path="/real-estate-solutions" element={<Industries />} />
          <Route path="/automotive-solutions" element={<Industries />} />
          <Route path="/restaurant-solutions" element={<Industries />} />
          <Route path="/travel-solutions" element={<Industries />} />
          <Route path="/media-solutions" element={<Industries />} />
          
          {/* Company Pages */}
          <Route path="/company" element={<About />} />
          <Route path="/team" element={<About />} />
          <Route path="/careers" element={<About />} />
          <Route path="/testimonials" element={<About />} />
          <Route path="/why-choose-us" element={<About />} />
          
          {/* Portfolio Pages */}
          <Route path="/web-portfolio" element={<Portfolio />} />
          <Route path="/mobile-portfolio" element={<Portfolio />} />
          <Route path="/design-portfolio" element={<Portfolio />} />
          <Route path="/seo-portfolio" element={<Portfolio />} />
          <Route path="/branding-portfolio" element={<Portfolio />} />
          
          {/* Resource Pages */}
          <Route path="/whitepapers" element={<Resources />} />
          <Route path="/tools" element={<WebsiteAudit />} />
          <Route path="/faqs" element={<Resources />} />
          
          {/* Marketing Services */}
          <Route path="/email-marketing" element={<ContentMarketing />} />
          <Route path="/get-quote" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}