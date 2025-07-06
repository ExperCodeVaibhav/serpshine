
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdownName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          SerpShine
        </Link>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-trigger" 
                onClick={(e) => toggleMobileDropdown('services', e)}
                aria-expanded={activeDropdown === 'services'}
              >
                Services <span className={`dropdown-arrow ${activeDropdown === 'services' ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu services-dropdown ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
                <div className="dropdown-grid">
                  <div className="dropdown-section">
                    <h4>SEO Services</h4>
                    <Link to="/seo-services" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">🎯</span>
                      <div>
                        <strong>SEO Optimization</strong>
                        <small>Boost your search rankings</small>
                      </div>
                    </Link>
                    <Link to="/local-seo" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">📍</span>
                      <div>
                        <strong>Local SEO</strong>
                        <small>Dominate local search</small>
                      </div>
                    </Link>
                    <Link to="/technical-seo" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">⚙️</span>
                      <div>
                        <strong>Technical SEO</strong>
                        <small>Optimize site performance</small>
                      </div>
                    </Link>
                    <Link to="/ecommerce-seo" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">🛒</span>
                      <div>
                        <strong>E-commerce SEO</strong>
                        <small>Drive more sales</small>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-section">
                    <h4>Digital Marketing</h4>
                    <Link to="/content-marketing" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">📝</span>
                      <div>
                        <strong>Content Marketing</strong>
                        <small>Engage your audience</small>
                      </div>
                    </Link>
                    <Link to="/social-media-marketing" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">📱</span>
                      <div>
                        <strong>Social Media</strong>
                        <small>Build your brand</small>
                      </div>
                    </Link>
                    <Link to="/ppc-management" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">💰</span>
                      <div>
                        <strong>PPC Management</strong>
                        <small>Maximize ad ROI</small>
                      </div>
                    </Link>
                    <Link to="/email-marketing" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">✉️</span>
                      <div>
                        <strong>Email Marketing</strong>
                        <small>Nurture your leads</small>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-section">
                    <h4>Development</h4>
                    <Link to="/web-development" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">💻</span>
                      <div>
                        <strong>Web Development</strong>
                        <small>Custom websites</small>
                      </div>
                    </Link>
                    <Link to="/mobile-app-development" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">📱</span>
                      <div>
                        <strong>Mobile Apps</strong>
                        <small>iOS & Android apps</small>
                      </div>
                    </Link>
                    <Link to="/ui-ux-design" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">🎨</span>
                      <div>
                        <strong>UI/UX Design</strong>
                        <small>Beautiful interfaces</small>
                      </div>
                    </Link>
                    <Link to="/wordpress-development" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">🔧</span>
                      <div>
                        <strong>WordPress</strong>
                        <small>CMS solutions</small>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={handleLinkClick}>Portfolio</Link>
            </li>

            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-trigger" 
                onClick={(e) => toggleMobileDropdown('company', e)}
                aria-expanded={activeDropdown === 'company'}
              >
                Company <span className={`dropdown-arrow ${activeDropdown === 'company' ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`dropdown-menu company-dropdown ${activeDropdown === 'company' ? 'mobile-active' : ''}`}>
                <div className="dropdown-grid">
                  <div className="dropdown-section">
                    <h4>About Us</h4>
                    <Link to="/about" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">🏢</span>
                      <div>
                        <strong>About SerpShine</strong>
                        <small>Our story & mission</small>
                      </div>
                    </Link>
                    <Link to="/team" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">👥</span>
                      <div>
                        <strong>Our Team</strong>
                        <small>Meet the experts</small>
                      </div>
                    </Link>
                    <Link to="/careers" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">💼</span>
                      <div>
                        <strong>Careers</strong>
                        <small>Join our team</small>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-section">
                    <h4>Resources</h4>
                    <Link to="/blog" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">📚</span>
                      <div>
                        <strong>Blog</strong>
                        <small>Latest insights</small>
                      </div>
                    </Link>
                    <Link to="/case-studies" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">📊</span>
                      <div>
                        <strong>Case Studies</strong>
                        <small>Success stories</small>
                      </div>
                    </Link>
                    <Link to="/testimonials" className="dropdown-item" onClick={handleLinkClick}>
                      <span className="item-icon">⭐</span>
                      <div>
                        <strong>Testimonials</strong>
                        <small>Client reviews</small>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
            </li>

            <li className="nav-item cta-nav">
              <Link to="/website-audit" className="nav-link-cta" onClick={handleLinkClick}>
                Get Free Audit
              </Link>
            </li>
          </ul>
        </nav>

        {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
      </div>
    </header>
  );
}
