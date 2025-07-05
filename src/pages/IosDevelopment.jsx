
import React from 'react';

export default function IosDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-header" style={{ padding: '60px 0' }}>
          <h1>iOS App Development</h1>
          <p>Native iOS applications that deliver exceptional user experiences</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Native iOS Apps</h3>
            <p>High-performance native iOS applications using Swift and Objective-C.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful, intuitive interfaces following Apple's design guidelines.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>App Store Optimization</h3>
            <p>Optimize your app for better visibility and downloads on the App Store.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🛠️</div>
            <h3>Maintenance & Support</h3>
            <p>Ongoing support and updates to keep your app running smoothly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
