import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          SerpShine
        </Link>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-trigger" 
              onClick={() => toggleMobileDropdown('services')}
            >
              Services <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
              <div className="dropdown-section">
                <h4>Digital Marketing</h4>
                <Link to="/seo-services" className="dropdown-item">SEO Services</Link>
                <Link to="/local-seo" className="dropdown-item">Local SEO</Link>
                <Link to="/technical-seo" className="dropdown-item">Technical SEO</Link>
                <Link to="/ecommerce-seo" className="dropdown-item">E-commerce SEO</Link>
                <Link to="/content-marketing" className="dropdown-item">Content Marketing</Link>
                <Link to="/social-media-marketing" className="dropdown-item">Social Media Marketing</Link>
                <Link to="/ppc-management" className="dropdown-item">PPC Management</Link>
                <Link to="/email-marketing" className="dropdown-item">Email Marketing</Link>
              </div>
              <div className="dropdown-section">
                <h4>Web Development</h4>
                <Link to="/web-development" className="dropdown-item">Web Development</Link>
                <Link to="/wordpress-development" className="dropdown-item">WordPress Development</Link>
                <Link to="/ecommerce-development" className="dropdown-item">E-commerce Development</Link>
                <Link to="/custom-web-applications" className="dropdown-item">Custom Web Applications</Link>
                <Link to="/api-development" className="dropdown-item">API Development</Link>
                <Link to="/cms-development" className="dropdown-item">CMS Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>Mobile Development</h4>
                <Link to="/mobile-app-development" className="dropdown-item">Mobile App Development</Link>
                <Link to="/ios-development" className="dropdown-item">iOS Development</Link>
                <Link to="/android-development" className="dropdown-item">Android Development</Link>
                <Link to="/react-native-development" className="dropdown-item">React Native Development</Link>
                <Link to="/flutter-development" className="dropdown-item">Flutter Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>UI/UX Design</h4>
                <Link to="/ui-ux-design" className="dropdown-item">UI/UX Design</Link>
                <Link to="/web-design" className="dropdown-item">Web Design</Link>
                <Link to="/graphic-design" className="dropdown-item">Graphic Design</Link>
                <Link to="/logo-design" className="dropdown-item">Logo Design</Link>
                <Link to="/branding" className="dropdown-item">Branding</Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-trigger" 
              onClick={() => toggleMobileDropdown('technologies')}
            >
              Technologies <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${activeDropdown === 'technologies' ? 'mobile-active' : ''}`}>
              <div className="dropdown-section">
                <h4>Frontend Technologies</h4>
                <Link to="/react-development" className="dropdown-item">React Development</Link>
                <Link to="/angular-development" className="dropdown-item">Angular Development</Link>
                <Link to="/vue-development" className="dropdown-item">Vue.js Development</Link>
                <Link to="/javascript-development" className="dropdown-item">JavaScript Development</Link>
                <Link to="/typescript-development" className="dropdown-item">TypeScript Development</Link>
                <Link to="/nextjs-development" className="dropdown-item">Next.js Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>Backend Technologies</h4>
                <Link to="/nodejs-development" className="dropdown-item">Node.js Development</Link>
                <Link to="/python-development" className="dropdown-item">Python Development</Link>
                <Link to="/php-development" className="dropdown-item">PHP Development</Link>
                <Link to="/dotnet-development" className="dropdown-item">.NET Development</Link>
                <Link to="/java-development" className="dropdown-item">Java Development</Link>
                <Link to="/ruby-development" className="dropdown-item">Ruby Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>Database & Cloud</h4>
                <Link to="/mysql-development" className="dropdown-item">MySQL Database</Link>
                <Link to="/mongodb-development" className="dropdown-item">MongoDB</Link>
                <Link to="/postgresql-development" className="dropdown-item">PostgreSQL</Link>
                <Link to="/firebase-development" className="dropdown-item">Firebase</Link>
                <Link to="/aws-development" className="dropdown-item">AWS Solutions</Link>
                <Link to="/azure-development" className="dropdown-item">Azure Solutions</Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-trigger" 
              onClick={() => toggleMobileDropdown('industries')}
            >
              Industries <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${activeDropdown === 'industries' ? 'mobile-active' : ''}`}>
              <div className="dropdown-section">
                <h4>Healthcare & Medical</h4>
                <Link to="/healthcare-solutions" className="dropdown-item">Healthcare Solutions</Link>
                <Link to="/telemedicine-development" className="dropdown-item">Telemedicine Apps</Link>
                <Link to="/medical-software" className="dropdown-item">Medical Software</Link>
              </div>
              <div className="dropdown-section">
                <h4>Finance & Business</h4>
                <Link to="/fintech-solutions" className="dropdown-item">Fintech Solutions</Link>
                <Link to="/banking-software" className="dropdown-item">Banking Software</Link>
                <Link to="/insurance-solutions" className="dropdown-item">Insurance Solutions</Link>
              </div>
              <div className="dropdown-section">
                <h4>E-commerce & Retail</h4>
                <Link to="/ecommerce-solutions" className="dropdown-item">E-commerce Solutions</Link>
                <Link to="/retail-software" className="dropdown-item">Retail Management</Link>
                <Link to="/marketplace-development" className="dropdown-item">Marketplace Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>Other Industries</h4>
                <Link to="/education-solutions" className="dropdown-item">Education Technology</Link>
                <Link to="/real-estate-solutions" className="dropdown-item">Real Estate Solutions</Link>
                <Link to="/automotive-solutions" className="dropdown-item">Automotive Solutions</Link>
                <Link to="/restaurant-solutions" className="dropdown-item">Restaurant Management</Link>
                <Link to="/travel-solutions" className="dropdown-item">Travel & Tourism</Link>
                <Link to="/media-solutions" className="dropdown-item">Media & Entertainment</Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-trigger" 
              onClick={() => toggleMobileDropdown('portfolio')}
            >
              Portfolio <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${activeDropdown === 'portfolio' ? 'mobile-active' : ''}`}>
              <div className="dropdown-section">
                <h4>Development Projects</h4>
                <Link to="/web-portfolio" className="dropdown-item">Web Development</Link>
                <Link to="/mobile-portfolio" className="dropdown-item">Mobile Applications</Link>
                <Link to="/enterprise-portfolio" className="dropdown-item">Enterprise Solutions</Link>
              </div>
              <div className="dropdown-section">
                <h4>Design & Marketing</h4>
                <Link to="/design-portfolio" className="dropdown-item">UI/UX Design</Link>
                <Link to="/branding-portfolio" className="dropdown-item">Branding Projects</Link>
                <Link to="/seo-portfolio" className="dropdown-item">SEO Case Studies</Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-trigger" 
              onClick={() => toggleMobileDropdown('company')}
            >
              Company <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${activeDropdown === 'company' ? 'mobile-active' : ''}`}>
              <div className="dropdown-section">
                <h4>About SerpShine</h4>
                <Link to="/about" className="dropdown-item">About Us</Link>
                <Link to="/our-story" className="dropdown-item">Our Story</Link>
                <Link to="/mission-vision" className="dropdown-item">Mission & Vision</Link>
              </div>
              <div className="dropdown-section">
                <h4>Team & Culture</h4>
                <Link to="/team" className="dropdown-item">Our Team</Link>
                <Link to="/careers" className="dropdown-item">Careers</Link>
                <Link to="/company-culture" className="dropdown-item">Company Culture</Link>
              </div>
              <div className="dropdown-section">
                <h4>Trust & Quality</h4>
                <Link to="/testimonials" className="dropdown-item">Client Testimonials</Link>
                <Link to="/why-choose-us" className="dropdown-item">Why Choose Us</Link>
                <Link to="/certifications" className="dropdown-item">Certifications</Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav-link dropdown-trigger" 
              onClick={() => toggleMobileDropdown('resources')}
            >
              Resources <span className="dropdown-arrow">▼</span>
            </span>
            <div className={`dropdown-menu ${activeDropdown === 'resources' ? 'mobile-active' : ''}`}>
              <div className="dropdown-section">
                <h4>Learning Resources</h4>
                <Link to="/blog" className="dropdown-item">Blog & Articles</Link>
                <Link to="/guides" className="dropdown-item">SEO Guides</Link>
                <Link to="/tutorials" className="dropdown-item">Video Tutorials</Link>
              </div>
              <div className="dropdown-section">
                <h4>Business Resources</h4>
                <Link to="/case-studies" className="dropdown-item">Case Studies</Link>
                <Link to="/whitepapers" className="dropdown-item">Whitepapers</Link>
                <Link to="/webinars" className="dropdown-item">Webinars</Link>
              </div>
              <div className="dropdown-section">
                <h4>Tools & Support</h4>
                <Link to="/free-tools" className="dropdown-item">Free SEO Tools</Link>
                <Link to="/calculators" className="dropdown-item">ROI Calculators</Link>
                <Link to="/faqs" className="dropdown-item">FAQs</Link>
                <Link to="/support" className="dropdown-item">Support Center</Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>

          <li className="nav-item cta-nav">
            <Link to="/get-quote" className="nav-link-cta">Get Quote</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}