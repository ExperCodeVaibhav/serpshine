
import React from 'react';
import { Link } from 'react-router-dom';

export default function HealthcareSEO() {
  const services = [
    {
      title: 'Medical Practice SEO',
      description: 'Optimize your medical practice for local search and attract more patients.',
      icon: '🏥'
    },
    {
      title: 'Hospital SEO',
      description: 'Comprehensive SEO strategies for hospitals and healthcare systems.',
      icon: '🩺'
    },
    {
      title: 'Specialist SEO',
      description: 'Targeted SEO for medical specialists and subspecialties.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Telehealth SEO',
      description: 'Digital marketing for telemedicine and virtual healthcare services.',
      icon: '💻'
    }
  ];

  const benefits = [
    '500% increase in patient inquiries',
    'Top 3 rankings for medical keywords',
    'Improved online reputation management',
    'HIPAA-compliant marketing strategies',
    'Local search domination',
    'Enhanced patient trust and credibility'
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact">
              <h1 className="hero-title-exact">Healthcare SEO Services</h1>
              <p className="hero-description-exact">
                Specialized SEO strategies for medical practices, hospitals, and healthcare providers. 
                Attract more patients and build trust with HIPAA-compliant digital marketing.
              </p>
              <div className="hero-buttons-exact">
                <Link to="/contact" className="btn-get-started">Get Started Today</Link>
                <Link to="/website-audit" className="btn-learn-more">Free Healthcare Audit</Link>
              </div>
            </div>
            <div className="hero-image-exact">
              <div className="hero-graphic">
                <div className="graphic-circle-1"></div>
                <div className="graphic-circle-2"></div>
                <div className="graphic-circle-3"></div>
                <div className="hero-icon">🏥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Healthcare SEO Solutions</h2>
            <p>Comprehensive digital marketing services tailored for the healthcare industry</p>
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
            <h2>Why Healthcare Providers Choose Us</h2>
            <p>Proven results that help medical practices grow their patient base</p>
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
            <h2>Ready to Grow Your Healthcare Practice?</h2>
            <p>Get a free SEO audit and discover how we can help you attract more patients online.</p>
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
