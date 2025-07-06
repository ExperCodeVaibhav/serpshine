
import React from 'react';
import { Link } from 'react-router-dom';

export default function ConsultingSEO() {
  const services = [
    {
      title: 'Business Consulting SEO',
      description: 'Attract clients seeking strategic business guidance and growth.',
      icon: '🎯'
    },
    {
      title: 'Management Consulting SEO',
      description: 'Target executives and organizations needing operational expertise.',
      icon: '📈'
    },
    {
      title: 'IT Consulting SEO',
      description: 'Reach businesses needing technology solutions and support.',
      icon: '💻'
    },
    {
      title: 'Marketing Consulting SEO',
      description: 'Connect with companies seeking marketing strategy and expertise.',
      icon: '📊'
    }
  ];

  const benefits = [
    '450% increase in qualified inquiries',
    'Higher value project acquisition',
    'Enhanced professional authority',
    'Thought leadership positioning',
    'Competitive differentiation',
    'Sustainable client pipeline'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Consulting SEO Services</h1>
              <p className="hero-description-exact">
                Specialized SEO for business consultants and professional advisors. 
                Build authority, attract ideal clients, and establish thought leadership online.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Consulting Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🎯</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Consulting Practice Marketing</h2>
            <p>Digital marketing strategies for professional consultants</p>
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
            <h2>Why Consultants Choose SerpShine</h2>
            <p>Proven strategies that help consulting professionals stand out</p>
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
            <h2>Ready to Build Your Consulting Authority?</h2>
            <p>Get a free SEO audit and learn how to attract more high-value consulting clients.</p>
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
