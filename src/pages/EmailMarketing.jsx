
import React from 'react';
import { Link } from 'react-router-dom';

export default function EmailMarketing() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Email Marketing Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Connect with your audience through targeted email campaigns that drive engagement and conversions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📧 Campaign Design</h3>
            <p style={{ color: '#666' }}>
              Beautiful, responsive email templates that engage your audience and drive action.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🎯 List Segmentation</h3>
            <p style={{ color: '#666' }}>
              Targeted messaging based on customer behavior, preferences, and demographics.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📈 Automation</h3>
            <p style={{ color: '#666' }}>
              Automated email sequences that nurture leads and convert prospects into customers.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Launch Your Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
