import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
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
                <h4>SEO Services</h4>
                <Link to="/seo-services" className="dropdown-item" onClick={closeMobileMenu}>SEO Optimization</Link>
                <Link to="/local-seo" className="dropdown-item" onClick={closeMobileMenu}>Local SEO</Link>
                <Link to="/technical-seo" className="dropdown-item" onClick={closeMobileMenu}>Technical SEO</Link>
                <Link to="/ecommerce-seo" className="dropdown-item" onClick={closeMobileMenu}>E-commerce SEO</Link>
              </div>
              <div className="dropdown-section">
                <h4>Digital Marketing</h4>
                <Link to="/content-marketing" className="dropdown-item" onClick={closeMobileMenu}>Content Marketing</Link>
                <Link to="/social-media-marketing" className="dropdown-item" onClick={closeMobileMenu}>Social Media</Link>
                <Link to="/ppc-management" className="dropdown-item" onClick={closeMobileMenu}>PPC Management</Link>
                <Link to="/email-marketing" className="dropdown-item" onClick={closeMobileMenu}>Email Marketing</Link>
              </div>
              <div className="dropdown-section">
                <h4>Development</h4>
                <Link to="/web-development" className="dropdown-item" onClick={closeMobileMenu}>Web Development</Link>
                <Link to="/mobile-app-development" className="dropdown-item" onClick={closeMobileMenu}>Mobile Apps</Link>
                <Link to="/ui-ux-design" className="dropdown-item" onClick={closeMobileMenu}>UI/UX Design</Link>
                <Link to="/wordpress-development" className="dropdown-item" onClick={closeMobileMenu}>WordPress</Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={closeMobileMenu}>Portfolio</Link>
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
                <h4>About Us</h4>
                <Link to="/about" className="dropdown-item" onClick={closeMobileMenu}>About SerpShine</Link>
                <Link to="/team" className="dropdown-item" onClick={closeMobileMenu}>Our Team</Link>
                <Link to="/careers" className="dropdown-item" onClick={closeMobileMenu}>Careers</Link>
              </div>
              <div className="dropdown-section">
                <h4>Resources</h4>
                <Link to="/blog" className="dropdown-item" onClick={closeMobileMenu}>Blog</Link>
                <Link to="/case-studies" className="dropdown-item" onClick={closeMobileMenu}>Case Studies</Link>
                <Link to="/testimonials" className="dropdown-item" onClick={closeMobileMenu}>Testimonials</Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
          </li>

          <li className="nav-item cta-nav">
            <Link to="/get-quote" className="nav-link-cta" onClick={closeMobileMenu}>Get Quote</Link>
          </li>
        </nav>
      </div>
    </header>
  );
} 