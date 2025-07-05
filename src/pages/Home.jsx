
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title floating">Welcome to SerpShine</h1>
          <p className="hero-subtitle">Advanced SEO Solutions & Digital Marketing Excellence</p>
          <Link to="/website-audit" className="cta-button pulse">
            Get Free Website Audit
          </Link>
        </div>
      </section>

      <section className="container" style={{ padding: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
            Why Choose SerpShine?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            We provide cutting-edge SEO strategies and digital marketing solutions that drive real results for your business.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Advanced SEO</h3>
            <p style={{ color: '#666' }}>Boost your search rankings with our proven SEO strategies and techniques.</p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.2s' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Analytics & Insights</h3>
            <p style={{ color: '#666' }}>Get detailed insights and analytics to track your digital marketing performance.</p>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.4s' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚡</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Fast Results</h3>
            <p style={{ color: '#666' }}>See improvements in your online visibility and traffic within weeks.</p>
          </div>
        </div>

        <div className="social-links">
          <a href="https://serpshine.com/" className="social-link" target="_blank" rel="noopener noreferrer">🌐</a>
          <a href="https://www.facebook.com/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">📘</a>
          <a href="https://twitter.com/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://www.linkedin.com/company/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">💼</a>
          <a href="https://www.instagram.com/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">📷</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 SerpShine. All rights reserved. | Advanced SEO & Digital Marketing Solutions</p>
      </footer>
    </div>
  );
}
