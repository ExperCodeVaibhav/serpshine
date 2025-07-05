
import React from 'react';

export default function ReactDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header" style={{ padding: '60px 0' }}>
          <h1>React Development Services</h1>
          <p>Modern React applications with excellent performance and user experience</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⚛️</div>
            <h3>React Web Apps</h3>
            <p>Dynamic single-page applications built with React and modern tools.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Component Development</h3>
            <p>Reusable React components for scalable application architecture.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Performance Optimization</h3>
            <p>Optimize React apps for fast loading and smooth user interactions.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>React Migration</h3>
            <p>Migrate existing applications to React with minimal disruption.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
