
import React from 'react';

export default function WordPressDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header" style={{ padding: '60px 0' }}>
          <h1>WordPress Development Services</h1>
          <p>Professional WordPress solutions for businesses of all sizes</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Custom WordPress Themes</h3>
            <p>Unique, responsive themes tailored to your brand and requirements.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔌</div>
            <h3>Plugin Development</h3>
            <p>Custom plugins to extend WordPress functionality for your specific needs.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Performance Optimization</h3>
            <p>Speed up your WordPress site with advanced optimization techniques.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3>Security Hardening</h3>
            <p>Comprehensive security measures to protect your WordPress website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
