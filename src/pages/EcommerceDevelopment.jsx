
import React from 'react';

export default function EcommerceDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header" style={{ padding: '60px 0' }}>
          <h1>E-commerce Development</h1>
          <p>Build powerful online stores that drive sales and growth</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>Shopify Development</h3>
            <p>Custom Shopify stores with advanced features and integrations.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏪</div>
            <h3>WooCommerce Solutions</h3>
            <p>Powerful WordPress-based e-commerce solutions for any business.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Payment Gateway Integration</h3>
            <p>Secure payment processing with multiple gateway options.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Commerce</h3>
            <p>Mobile-optimized shopping experiences for maximum conversions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
