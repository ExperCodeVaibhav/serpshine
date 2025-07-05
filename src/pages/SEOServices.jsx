
import React from 'react';
import { Link } from 'react-router-dom';

export default function SEOServices() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Professional SEO Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Boost your search rankings and drive organic traffic with our proven SEO strategies.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔍 Keyword Research</h3>
            <p style={{ color: '#666' }}>
              Comprehensive keyword analysis to identify high-value opportunities and create a targeted SEO strategy.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.2s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📄 On-Page SEO</h3>
            <p style={{ color: '#666' }}>
              Optimize your website content, meta tags, headers, and internal structure for better search visibility.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.4s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⚙️ Technical SEO</h3>
            <p style={{ color: '#666' }}>
              Fix technical issues, improve site speed, mobile optimization, and ensure proper indexing.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.6s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔗 Link Building</h3>
            <p style={{ color: '#666' }}>
              Build high-quality backlinks from authoritative websites to boost your domain authority.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.8s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📊 SEO Analytics</h3>
            <p style={{ color: '#666' }}>
              Track rankings, traffic, and conversions with detailed reporting and analytics.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '1s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🏪 Local SEO</h3>
            <p style={{ color: '#666' }}>
              Optimize your local presence with Google My Business and local citation management.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', background: '#f8f9fa', padding: '60px 40px', borderRadius: '20px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Ready to Dominate Search Results?</h2>
          <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>
            Let our SEO experts create a custom strategy for your business.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/website-audit" className="cta-button">Get Free Audit</Link>
            <Link to="/contact" className="cta-button">Start Your Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
