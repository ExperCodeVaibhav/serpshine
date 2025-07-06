
import React from 'react';
import { Link } from 'react-router-dom';

export default function DentalSEO() {
  const services = [
    {
      title: 'General Dentistry SEO',
      description: 'Attract new patients to your general dental practice.',
      icon: '🦷'
    },
    {
      title: 'Orthodontics SEO',
      description: 'Target patients seeking braces and alignment treatments.',
      icon: '😁'
    },
    {
      title: 'Cosmetic Dentistry SEO',
      description: 'Market high-value cosmetic dental procedures effectively.',
      icon: '✨'
    },
    {
      title: 'Dental Implants SEO',
      description: 'Reach patients looking for implant and restoration services.',
      icon: '🔧'
    }
  ];

  const benefits = [
    '400% increase in new patients',
    'Higher case value bookings',
    'Improved online reputation',
    'Local search dominance',
    'Enhanced patient trust',
    'Reduced marketing costs'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Dental SEO Services</h1>
              <p className="hero-description-exact">
                Specialized SEO for dental practices and oral health professionals. 
                Attract more patients and grow your practice with targeted digital marketing.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Dental SEO Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🦷</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Dental Practice Marketing</h2>
            <p>Comprehensive SEO solutions for dental professionals</p>
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
            <h2>Why Dental Practices Trust Us</h2>
            <p>Proven results that help dentists grow their patient base</p>
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
            <h2>Ready to Grow Your Dental Practice?</h2>
            <p>Get a free SEO audit and discover how to attract more patients to your practice.</p>
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
