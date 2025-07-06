
import React from 'react';
import { Link } from 'react-router-dom';

export default function VeterinarySEO() {
  const services = [
    {
      title: 'Veterinary Clinic SEO',
      description: 'Attract pet owners to your veterinary practice.',
      icon: '🐾'
    },
    {
      title: 'Emergency Vet SEO',
      description: 'Be found when pet owners need urgent veterinary care.',
      icon: '🚨'
    },
    {
      title: 'Specialty Vet SEO',
      description: 'Market specialized veterinary services and treatments.',
      icon: '🔬'
    },
    {
      title: 'Mobile Vet SEO',
      description: 'Reach pet owners looking for in-home veterinary services.',
      icon: '🚐'
    }
  ];

  const benefits = [
    '300% increase in new clients',
    'More emergency appointments',
    'Higher value case bookings',
    'Improved local visibility',
    'Enhanced pet owner trust',
    'Competitive market advantage'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Veterinary SEO Services</h1>
              <p className="hero-description-exact">
                Specialized SEO for veterinary practices and animal hospitals. 
                Help pet owners find your services when their furry friends need care.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Veterinary Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🐾</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Veterinary Practice Marketing</h2>
            <p>Digital marketing solutions tailored for animal care professionals</p>
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
            <h2>Why Veterinarians Choose SerpShine</h2>
            <p>Proven strategies that help animal care practices thrive</p>
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
            <h2>Ready to Help More Pets?</h2>
            <p>Get a free SEO audit and learn how to attract more pet owners to your practice.</p>
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
