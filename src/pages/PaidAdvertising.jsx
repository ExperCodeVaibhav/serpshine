
import React from 'react';
import { Link } from 'react-router-dom';

export default function PaidAdvertising() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Paid Advertising Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Maximize your ROI with targeted PPC campaigns across Google, Facebook, and other platforms.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔍 Google Ads</h3>
            <p style={{ color: '#666' }}>
              Strategic Google Ads campaigns that target high-intent keywords and drive qualified traffic.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.2s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📘 Facebook Ads</h3>
            <p style={{ color: '#666' }}>
              Engaging Facebook and Instagram ad campaigns that reach your ideal customers with precision.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.4s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>💼 LinkedIn Ads</h3>
            <p style={{ color: '#666' }}>
              B2B-focused LinkedIn advertising campaigns that connect with decision-makers and professionals.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.6s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⚡ Campaign Optimization</h3>
            <p style={{ color: '#666' }}>
              Continuous optimization and A/B testing to maximize your ad performance and ROI.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', background: '#f8f9fa', padding: '60px 40px', borderRadius: '20px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Ready to Scale Your Business?</h2>
          <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>
            Start driving qualified traffic and conversions with our expert PPC management.
          </p>
          <Link to="/contact" className="cta-button">Launch Your Campaign</Link>
        </div>
      </div>
    </div>
  );
}
