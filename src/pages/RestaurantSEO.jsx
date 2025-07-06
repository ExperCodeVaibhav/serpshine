
import React from 'react';
import { Link } from 'react-router-dom';

export default function RestaurantSEO() {
  const services = [
    {
      title: 'Local Restaurant SEO',
      description: 'Attract more diners with local search optimization and Google My Business.',
      icon: '🍽️'
    },
    {
      title: 'Food Delivery SEO',
      description: 'Optimize for delivery apps and online ordering platforms.',
      icon: '🚚'
    },
    {
      title: 'Catering SEO',
      description: 'Target catering clients and event planners in your area.',
      icon: '🎉'
    },
    {
      title: 'Multi-Location SEO',
      description: 'Manage SEO for restaurant chains and franchises.',
      icon: '🌐'
    }
  ];

  const benefits = [
    '350% increase in reservations',
    'Higher foot traffic',
    'Improved online reviews',
    'Local search domination',
    'Enhanced brand visibility',
    'More catering bookings'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Restaurant SEO Services</h1>
              <p className="hero-description-exact">
                Attract more diners with local SEO for restaurants and food businesses. 
                Increase reservations, delivery orders, and foot traffic.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Restaurant Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🍽️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Restaurant Marketing Solutions</h2>
            <p>Specialized SEO and digital marketing for food service businesses</p>
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
            <h2>Why Restaurants Choose SerpShine</h2>
            <p>Proven results that help food businesses attract more customers</p>
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
            <h2>Ready to Fill More Tables?</h2>
            <p>Get a free SEO audit and learn how to attract more diners to your restaurant.</p>
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
