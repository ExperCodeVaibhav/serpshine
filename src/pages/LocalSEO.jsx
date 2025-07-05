
import React from 'react';
import { Link } from 'react-router-dom';

export default function LocalSEO() {
  return (
    <div className="page">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Local SEO Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Dominate local search results and attract more customers in your area with our proven local SEO strategies.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🗺️ Google My Business</h3>
            <p style={{ color: '#666' }}>
              Optimize your Google My Business profile to appear in local map results and attract nearby customers.
            </p>
          </div>

          <div className="floating hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.2s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📍 Local Citations</h3>
            <p style={{ color: '#666' }}>
              Build consistent NAP (Name, Address, Phone) citations across local directories and platforms.
            </p>
          </div>

          <div className="floating hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.4s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⭐ Review Management</h3>
            <p style={{ color: '#666' }}>
              Manage and optimize your online reviews to build trust and improve local search rankings.
            </p>
          </div>

          <div className="floating hover-lift" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.6s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🏪 Local Content</h3>
            <p style={{ color: '#666' }}>
              Create location-specific content that resonates with your local audience and improves rankings.
            </p>
          </div>
        </div>

        <div className="slide-in-left" style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
