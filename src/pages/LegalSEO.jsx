
import React from 'react';
import { Link } from 'react-router-dom';

export default function LegalSEO() {
  const services = [
    {
      title: 'Personal Injury SEO',
      description: 'Dominate personal injury searches and attract high-value clients.',
      icon: '⚖️'
    },
    {
      title: 'Criminal Defense SEO',
      description: 'Build trust and visibility for criminal defense attorneys.',
      icon: '🛡️'
    },
    {
      title: 'Corporate Law SEO',
      description: 'Target business clients with specialized B2B legal SEO.',
      icon: '🏢'
    },
    {
      title: 'Family Law SEO',
      description: 'Connect with families in need of legal guidance and support.',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  const benefits = [
    '300% increase in qualified leads',
    'Top rankings for legal keywords',
    'Enhanced reputation management',
    'Ethical marketing compliance',
    'Local search visibility',
    'Client trust and credibility'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Legal SEO Services</h1>
              <p className="hero-description-exact">
                Drive more qualified clients to your law firm with ethical, results-driven SEO strategies. 
                Specializing in legal marketing that builds trust and authority.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Legal SEO Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">⚖️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Legal SEO Specializations</h2>
            <p>Targeted SEO strategies for different areas of legal practice</p>
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
            <h2>Why Law Firms Trust SerpShine</h2>
            <p>Proven track record of helping legal professionals grow their practice</p>
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
            <h2>Ready to Grow Your Legal Practice?</h2>
            <p>Get a free SEO audit and see how we can help you attract more qualified clients.</p>
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
