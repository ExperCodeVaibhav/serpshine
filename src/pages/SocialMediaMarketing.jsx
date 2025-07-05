
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialMediaMarketing() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Social Media Marketing
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Build your brand presence and engage with your audience across all social media platforms.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📱 Platform Management</h3>
            <p style={{ color: '#666' }}>
              Complete management of your social media accounts across Facebook, Instagram, Twitter, LinkedIn, and more.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📊 Analytics & Reporting</h3>
            <p style={{ color: '#666' }}>
              Track your social media performance with detailed analytics and comprehensive reporting.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🎯 Targeted Advertising</h3>
            <p style={{ color: '#666' }}>
              Reach your ideal audience with precisely targeted social media advertising campaigns.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
