
import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileAppDevelopment() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Mobile App Development
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Native and cross-platform mobile applications that engage users and drive business growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📱 iOS Development</h3>
            <p style={{ color: '#666' }}>
              Native iOS apps built with Swift and Objective-C for optimal performance and user experience.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🤖 Android Development</h3>
            <p style={{ color: '#666' }}>
              Native Android apps using Java and Kotlin for seamless integration with the Android ecosystem.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔄 Cross-Platform</h3>
            <p style={{ color: '#666' }}>
              React Native and Flutter apps that run on both iOS and Android platforms.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Build Your App
          </Link>
        </div>
      </div>
    </div>
  );
}
