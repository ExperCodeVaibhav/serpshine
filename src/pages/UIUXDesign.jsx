
import React from 'react';
import { Link } from 'react-router-dom';

export default function UIUXDesign() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            UI/UX Design Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Create exceptional user experiences with intuitive design that converts visitors into customers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🎨 User Interface Design</h3>
            <p style={{ color: '#666' }}>
              Beautiful, modern interfaces that engage users and reflect your brand identity.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>👥 User Experience Design</h3>
            <p style={{ color: '#666' }}>
              Intuitive user journeys that guide visitors toward your desired actions and goals.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📊 User Research</h3>
            <p style={{ color: '#666' }}>
              Data-driven design decisions based on user behavior analysis and testing.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Design Your Experience
          </Link>
        </div>
      </div>
    </div>
  );
}
