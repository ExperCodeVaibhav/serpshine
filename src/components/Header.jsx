import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <Link to="/services" className="nav-link">Services</Link>
            <div className="dropdown-menu">
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
            <Link to="/technologies" className="nav-link">Technologies</Link>
            <div className="dropdown-menu">
              <div className="dropdown-section">
                <h4>Frontend</h4>
                <Link to="/react-development" className="dropdown-item">React Development</Link>
                <Link to="/angular-development" className="dropdown-item">Angular Development</Link>
                <Link to="/vue-development" className="dropdown-item">Vue.js Development</Link>
                <Link to="/javascript-development" className="dropdown-item">JavaScript Development</Link>
                <Link to="/typescript-development" className="dropdown-item">TypeScript Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>Backend</h4>
                <Link to="/nodejs-development" className="dropdown-item">Node.js Development</Link>
                <Link to="/python-development" className="dropdown-item">Python Development</Link>
                <Link to="/php-development" className="dropdown-item">PHP Development</Link>
                <Link to="/dotnet-development" className="dropdown-item">.NET Development</Link>
                <Link to="/java-development" className="dropdown-item">Java Development</Link>
              </div>
              <div className="dropdown-section">
                <h4>Database</h4>
                <Link to="/mysql-development" className="dropdown-item">MySQL</Link>
                <Link to="/mongodb-development" className="dropdown-item">MongoDB</Link>
                <Link to="/postgresql-development" className="dropdown-item">PostgreSQL</Link>
                <Link to="/firebase-development" className="dropdown-item">Firebase</Link>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link to="/industries" className="nav-link">Industries</Link>
            <div className="dropdown-menu">
              <Link to="/healthcare-solutions" className="dropdown-item">Healthcare</Link>
              <Link to="/fintech-solutions" className="dropdown-item">Fintech</Link>
              <Link to="/ecommerce-solutions" className="dropdown-item">E-commerce</Link>
              <Link to="/education-solutions" className="dropdown-item">Education</Link>
              <Link to="/real-estate-solutions" className="dropdown-item">Real Estate</Link>
              <Link to="/automotive-solutions" className="dropdown-item">Automotive</Link>
              <Link to="/restaurant-solutions" className="dropdown-item">Restaurant</Link>
              <Link to="/travel-solutions" className="dropdown-item">Travel & Tourism</Link>
              <Link to="/media-solutions" className="dropdown-item">Media & Entertainment</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <div className="dropdown-menu">
              <Link to="/web-portfolio" className="dropdown-item">Web Development</Link>
              <Link to="/mobile-portfolio" className="dropdown-item">Mobile Apps</Link>
              <Link to="/design-portfolio" className="dropdown-item">UI/UX Design</Link>
              <Link to="/seo-portfolio" className="dropdown-item">SEO Case Studies</Link>
              <Link to="/branding-portfolio" className="dropdown-item">Branding Projects</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link to="/company" className="nav-link">Company</Link>
            <div className="dropdown-menu">
              <Link to="/about" className="dropdown-item">About Us</Link>
              <Link to="/team" className="dropdown-item">Our Team</Link>
              <Link to="/careers" className="dropdown-item">Careers</Link>
              <Link to="/testimonials" className="dropdown-item">Testimonials</Link>
              <Link to="/why-choose-us" className="dropdown-item">Why Choose Us</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link to="/resources" className="nav-link">Resources</Link>
            <div className="dropdown-menu">
              <Link to="/blog" className="dropdown-item">Blog</Link>
              <Link to="/case-studies" className="dropdown-item">Case Studies</Link>
              <Link to="/whitepapers" className="dropdown-item">Whitepapers</Link>
              <Link to="/tools" className="dropdown-item">Free Tools</Link>
              <Link to="/guides" className="dropdown-item">Guides</Link>
              <Link to="/webinars" className="dropdown-item">Webinars</Link>
              <Link to="/faqs" className="dropdown-item">FAQs</Link>
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