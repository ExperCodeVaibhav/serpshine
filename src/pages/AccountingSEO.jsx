
import React from 'react';
import { Link } from 'react-router-dom';

export default function AccountingSEO() {
  const services = [
    {
      title: 'CPA Firm SEO',
      description: 'Attract high-value clients to your accounting practice.',
      icon: '💼'
    },
    {
      title: 'Tax Preparation SEO',
      description: 'Be found during tax season and year-round tax planning.',
      icon: '📊'
    },
    {
      title: 'Bookkeeping SEO',
      description: 'Target small businesses needing bookkeeping services.',
      icon: '📚'
    },
    {
      title: 'Financial Advisory SEO',
      description: 'Reach clients seeking financial planning and advice.',
      icon: '💰'
    }
  ];

  const benefits = [
    '350% increase in qualified leads',
    'Higher value client acquisition',
    'Improved professional credibility',
    'Local market dominance',
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
              <h1 className="hero-title-exact">Accounting SEO Services</h1>
              <p className="hero-description-exact">
                Specialized SEO for CPAs, tax professionals, and accounting firms. 
                Attract more clients and build trust in the competitive financial services market.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Accounting Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">💼</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Accounting Firm Marketing</h2>
            <p>Digital marketing solutions for financial professionals</p>
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
            <h2>Why Accounting Firms Trust Us</h2>
            <p>Proven results that help financial professionals grow their practice</p>
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
            <h2>Ready to Grow Your Accounting Practice?</h2>
            <p>Get a free SEO audit and discover how to attract more high-value clients.</p>
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
