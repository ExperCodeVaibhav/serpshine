
import React from 'react';
import { Link } from 'react-router-dom';

export default function RealEstateSEO() {
  const services = [
    {
      title: 'Realtor SEO',
      description: 'Get more listings and buyers with targeted real estate SEO.',
      icon: '🏠'
    },
    {
      title: 'Property Management SEO',
      description: 'Attract property owners and quality tenants to your business.',
      icon: '🏢'
    },
    {
      title: 'Commercial Real Estate SEO',
      description: 'Specialized SEO for commercial property professionals.',
      icon: '🏗️'
    },
    {
      title: 'Real Estate Investment SEO',
      description: 'Target investors and wholesale opportunities online.',
      icon: '💰'
    }
  ];

  const benefits = [
    '400% increase in qualified leads',
    'Higher listing visibility',
    'More buyer and seller inquiries',
    'Local market domination',
    'Enhanced brand recognition',
    'Competitive advantage'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Real Estate SEO Services</h1>
              <p className="hero-description-exact">
                Generate more leads for real estate agents, brokers, and property companies. 
                Dominate local searches and attract qualified buyers and sellers.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Real Estate Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🏠</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Real Estate SEO Solutions</h2>
            <p>Comprehensive digital marketing for real estate professionals</p>
          </div>
          <div className="services-grid-exact">
            {services.map((service, index) => (
              <div key={index} className="service-item-exact">
                <div className="service-icon-exact">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="service-link-exact">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="features-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Why Real Estate Professionals Choose Us</h2>
            <p>Results that help you close more deals and grow your business</p>
          </div>
          <div className="features-grid-exact">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-box">
                <div className="feature-icon-exact">✅</div>
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-exact">
        <div className="container">
          <div className="cta-content-exact">
            <h2>Ready to Dominate Your Local Market?</h2>
            <p>Get a free SEO audit and discover how to generate more real estate leads online.</p>
            <div className="cta-buttons-exact">
              <Link to="/website-audit" className="btn-get-started">Get Free Audit</Link>
              <Link to="/contact" className="btn-contact">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
