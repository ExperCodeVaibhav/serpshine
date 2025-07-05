
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentMarketing() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Content Marketing Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Engage your audience with compelling content that drives traffic and converts visitors into customers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📝 Blog Writing</h3>
            <p style={{ color: '#666' }}>
              High-quality, SEO-optimized blog posts that establish your expertise and drive organic traffic.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.2s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📱 Social Media Content</h3>
            <p style={{ color: '#666' }}>
              Engaging social media posts and campaigns that build brand awareness and community.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.4s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>📧 Email Marketing</h3>
            <p style={{ color: '#666' }}>
              Targeted email campaigns that nurture leads and drive conversions with personalized messaging.
            </p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', animationDelay: '0.6s' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🎥 Video Content</h3>
            <p style={{ color: '#666' }}>
              Compelling video content for YouTube, social media, and your website to boost engagement.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', background: '#f8f9fa', padding: '60px 40px', borderRadius: '20px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Transform Your Content Strategy</h2>
          <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>
            Let us create content that resonates with your audience and drives results.
          </p>
          <Link to="/contact" className="cta-button">Get Started Today</Link>
        </div>
      </div>
    </div>
  );
}
