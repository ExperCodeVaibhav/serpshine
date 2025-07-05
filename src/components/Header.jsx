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
              <Link to="/seo-services" className="dropdown-item">SEO Services</Link>
              <Link to="/local-seo" className="dropdown-item">Local SEO</Link>
              <Link to="/technical-seo" className="dropdown-item">Technical SEO</Link>
              <Link to="/ecommerce-seo" className="dropdown-item">E-commerce SEO</Link>
              <Link to="/content-marketing" className="dropdown-item">Content Marketing</Link>
              <Link to="/social-media-marketing" className="dropdown-item">Social Media Marketing</Link>
              <Link to="/ppc-management" className="dropdown-item">PPC Management</Link>
              <Link to="/web-design" className="dropdown-item">Web Design</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link to="/industries" className="nav-link">Industries</Link>
            <div className="dropdown-menu">
              <Link to="/healthcare-seo" className="dropdown-item">Healthcare SEO</Link>
              <Link to="/legal-seo" className="dropdown-item">Legal SEO</Link>
              <Link to="/real-estate-seo" className="dropdown-item">Real Estate SEO</Link>
              <Link to="/automotive-seo" className="dropdown-item">Automotive SEO</Link>
              <Link to="/restaurant-seo" className="dropdown-item">Restaurant SEO</Link>
              <Link to="/finance-seo" className="dropdown-item">Finance SEO</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <Link to="/resources" className="nav-link">Resources</Link>
            <div className="dropdown-menu">
              <Link to="/blog" className="dropdown-item">Blog</Link>
              <Link to="/case-studies" className="dropdown-item">Case Studies</Link>
              <Link to="/seo-tools" className="dropdown-item">SEO Tools</Link>
              <Link to="/guides" className="dropdown-item">SEO Guides</Link>
              <Link to="/webinars" className="dropdown-item">Webinars</Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}