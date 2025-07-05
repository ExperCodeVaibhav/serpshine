
import React from 'react';
import { Link } from 'react-router-dom';

export default function TechnicalSEO() {
  return (
    <div className="page">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Technical SEO Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Fix technical issues that prevent search engines from properly crawling and indexing your website.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="bounce-in hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⚡ Site Speed</h3>
            <p style={{ color: '#666' }}>
              Optimize your website's loading speed to improve user experience and search rankings.
            </p>
          </div>

          <div className="bounce-in hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.2s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📱 Mobile Optimization</h3>
            <p style={{ color: '#666' }}>
              Ensure your website is fully mobile-responsive and passes Google's mobile-friendly test.
            </p>
          </div>

          <div className="bounce-in hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.4s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔒 HTTPS Security</h3>
            <p style={{ color: '#666' }}>
              Implement SSL certificates and secure your website for better trust and rankings.
            </p>
          </div>

          <div className="bounce-in hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.6s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🗂️ Schema Markup</h3>
            <p style={{ color: '#666' }}>
              Add structured data to help search engines understand your content better.
            </p>
          </div>
        </div>

        <div className="slide-in-right" style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary">
            Get Technical Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
