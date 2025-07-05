
import React from 'react';

export default function AngularDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header" style={{ padding: '60px 0' }}>
          <h1>Angular Development Services</h1>
          <p>Enterprise-grade Angular applications with robust architecture</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🅰️</div>
            <h3>Angular Web Apps</h3>
            <p>Full-featured web applications built with Angular framework.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏗️</div>
            <h3>Enterprise Solutions</h3>
            <p>Large-scale enterprise applications with complex requirements.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>PWA Development</h3>
            <p>Progressive Web Apps that work offline and feel native.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Angular Migration</h3>
            <p>Upgrade your Angular applications to the latest version.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
