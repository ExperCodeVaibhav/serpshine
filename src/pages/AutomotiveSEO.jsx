
import React from 'react';
import { Link } from 'react-router-dom';

export default function AutomotiveSEO() {
  const services = [
    {
      title: 'Car Dealership SEO',
      description: 'Drive more traffic to your showroom and increase vehicle sales.',
      icon: '🚗'
    },
    {
      title: 'Auto Repair SEO',
      description: 'Attract customers in need of automotive repair and maintenance.',
      icon: '🔧'
    },
    {
      title: 'Auto Parts SEO',
      description: 'Optimize for parts searches and aftermarket automotive products.',
      icon: '⚙️'
    },
    {
      title: 'Auto Service SEO',
      description: 'Target customers looking for oil changes, inspections, and services.',
      icon: '🛠️'
    }
  ];

  const benefits = [
    '250% increase in service bookings',
    'Higher quality leads',
    'Improved local visibility',
    'More showroom traffic',
    'Enhanced online reputation',
    'Competitive advantage'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Automotive SEO Services</h1>
              <p className="hero-description-exact">
                Increase visibility for car dealerships and automotive service businesses. 
                Drive more customers to your lot and service bays.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Automotive Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🚗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Automotive Digital Marketing</h2>
            <p>Comprehensive SEO solutions for the automotive industry</p>
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
            <h2>Why Automotive Businesses Choose Us</h2>
            <p>Proven strategies that drive results for automotive companies</p>
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
            <h2>Ready to Drive More Business?</h2>
            <p>Get a free SEO audit and discover how to attract more automotive customers online.</p>
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
