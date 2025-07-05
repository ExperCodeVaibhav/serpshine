
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            About SerpShine
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Your trusted partner for advanced SEO solutions and digital marketing excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#333' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8, marginBottom: '20px' }}>
              At SerpShine, we're dedicated to helping businesses dominate search results and achieve sustainable online growth. Our team of SEO experts combines cutting-edge strategies with proven techniques to deliver measurable results.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8 }}>
              We believe in transparency, data-driven decisions, and building long-term partnerships with our clients. Every strategy we implement is tailored to your unique business goals and target audience.
            </p>
          </div>
          <div className="floating" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '8rem', marginBottom: '20px' }}>🚀</div>
          </div>
        </div>

        <div style={{ background: '#f8f9fa', padding: '60px 40px', borderRadius: '20px', marginBottom: '60px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div className="floating" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Data-Driven</h3>
              <p style={{ color: '#666' }}>Every decision backed by comprehensive analytics and research</p>
            </div>
            <div className="floating" style={{ textAlign: 'center', animationDelay: '0.2s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Results-Focused</h3>
              <p style={{ color: '#666' }}>Proven track record of improving rankings and driving traffic</p>
            </div>
            <div className="floating" style={{ textAlign: 'center', animationDelay: '0.4s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🤝</div>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Partnership</h3>
              <p style={{ color: '#666' }}>Long-term relationships built on trust and transparency</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Ready to Start Your Journey?</h2>
          <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>
            Let's discuss how we can help grow your online presence.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/website-audit" className="cta-button">Get Free Audit</Link>
            <Link to="/contact" className="cta-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
