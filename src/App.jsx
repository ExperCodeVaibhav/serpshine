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
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import PPCManagement from './pages/PPCManagement';
import EmailMarketing from './pages/EmailMarketing';
import WebDevelopment from './pages/WebDevelopment';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import Technologies from './pages/Technologies';
import Company from './pages/Company';
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
          {/* Marketing Services */}
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/ppc-management" element={<PPCManagement />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/web-design" element={<UIUXDesign />} />
          
          {/* Development Services */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/wordpress-development" element={<WebDevelopment />} />
          <Route path="/ecommerce-development" element={<WebDevelopment />} />
          <Route path="/custom-web-applications" element={<WebDevelopment />} />
          <Route path="/api-development" element={<WebDevelopment />} />
          <Route path="/cms-development" element={<WebDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/ios-development" element={<MobileAppDevelopment />} />
          <Route path="/android-development" element={<MobileAppDevelopment />} />
          <Route path="/react-native-development" element={<MobileAppDevelopment />} />
          <Route path="/flutter-development" element={<MobileAppDevelopment />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/graphic-design" element={<UIUXDesign />} />
          <Route path="/logo-design" element={<UIUXDesign />} />
          <Route path="/branding" element={<UIUXDesign />} />
          
          {/* Technology Pages */}
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/react-development" element={<Technologies />} />
          <Route path="/angular-development" element={<Technologies />} />
          <Route path="/vue-development" element={<Technologies />} />
          <Route path="/javascript-development" element={<Technologies />} />
          <Route path="/typescript-development" element={<Technologies />} />
          <Route path="/nodejs-development" element={<Technologies />} />
          <Route path="/python-development" element={<Technologies />} />
          <Route path="/php-development" element={<Technologies />} />
          <Route path="/dotnet-development" element={<Technologies />} />
          <Route path="/java-development" element={<Technologies />} />
          <Route path="/mysql-development" element={<Technologies />} />
          <Route path="/mongodb-development" element={<Technologies />} />
          <Route path="/postgresql-development" element={<Technologies />} />
          <Route path="/firebase-development" element={<Technologies />} />
          
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
          <Route path="/company" element={<Company />} />
          <Route path="/team" element={<Company />} />
          <Route path="/careers" element={<Company />} />
          <Route path="/testimonials" element={<Company />} />
          <Route path="/why-choose-us" element={<Company />} />
          
          {/* Portfolio Pages */}
          <Route path="/web-portfolio" element={<Portfolio />} />
          <Route path="/mobile-portfolio" element={<Portfolio />} />
          <Route path="/design-portfolio" element={<Portfolio />} />
          <Route path="/seo-portfolio" element={<Portfolio />} />
          <Route path="/branding-portfolio" element={<Portfolio />} />
          
          {/* Resource Pages */}
          <Route path="/case-studies" element={<Resources />} />
          <Route path="/whitepapers" element={<Resources />} />
          <Route path="/tools" element={<WebsiteAudit />} />
          <Route path="/guides" element={<Resources />} />
          <Route path="/webinars" element={<Resources />} />
          <Route path="/faqs" element={<Resources />} />
          
          {/* Additional Pages */}
          <Route path="/get-quote" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}