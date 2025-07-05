
import React from 'react';
import { Link } from 'react-router-dom';

export default function EcommerceSEO() {
  return (
    <div className="page">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            E-commerce SEO Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Drive more qualified traffic and increase sales with specialized SEO strategies for online stores.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="scale-up hover-glow" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🛍️ Product Optimization</h3>
            <p style={{ color: '#666' }}>
              Optimize product pages with keyword-rich titles, descriptions, and images for better visibility.
            </p>
          </div>

          <div className="scale-up hover-glow" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.2s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📊 Category Pages</h3>
            <p style={{ color: '#666' }}>
              Structure and optimize category pages to rank for high-volume commercial keywords.
            </p>
          </div>

          <div className="scale-up hover-glow" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.4s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔍 Shopping Feed</h3>
            <p style={{ color: '#666' }}>
              Optimize Google Shopping feeds to increase product visibility in search results.
            </p>
          </div>

          <div className="scale-up hover-glow" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.6s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>💰 Conversion Rate</h3>
            <p style={{ color: '#666' }}>
              Improve user experience and conversion rates through strategic SEO improvements.
            </p>
          </div>
        </div>

        <div className="slide-in-left" style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary">
            Boost E-commerce Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
