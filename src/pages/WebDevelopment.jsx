
import React from 'react';
import { Link } from 'react-router-dom';

export default function WebDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Web Development Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Custom web solutions that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🌐 Custom Websites</h3>
            <p style={{ color: '#666' }}>
              Bespoke web development solutions tailored to your business needs and objectives.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📱 Responsive Design</h3>
            <p style={{ color: '#666' }}>
              Mobile-first designs that work seamlessly across all devices and screen sizes.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⚡ Performance Optimization</h3>
            <p style={{ color: '#666' }}>
              Fast-loading websites optimized for speed, SEO, and user experience.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
