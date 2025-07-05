
import React from 'react';
import { Link } from 'react-router-dom';

export default function PPCManagement() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            PPC Management Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Maximize your ROI with expertly managed pay-per-click advertising campaigns.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🎯 Google Ads</h3>
            <p style={{ color: '#666' }}>
              Comprehensive Google Ads management including Search, Display, Shopping, and YouTube campaigns.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📊 Performance Tracking</h3>
            <p style={{ color: '#666' }}>
              Real-time monitoring and optimization of your PPC campaigns for maximum performance.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>💰 Budget Optimization</h3>
            <p style={{ color: '#666' }}>
              Strategic budget allocation and bid management to maximize your advertising ROI.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Start Your Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
