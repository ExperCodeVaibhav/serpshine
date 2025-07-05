
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title floating">Welcome to SerpShine</h1>
          <p className="hero-subtitle">Advanced SEO Solutions & Digital Marketing Excellence</p>
          <p style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
            Boost your online presence with our proven SEO strategies, content marketing, and digital solutions. 
            We help businesses rank higher, drive more traffic, and increase conversions.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link to="/website-audit" className="cta-button pulse">
              Get Free Website Audit
            </Link>
            <Link to="/contact" className="cta-button" style={{ background: 'transparent', border: '2px solid #fff' }}>
              Get Started Today
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>500+</div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Happy Clients</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>95%</div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Success Rate</div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>24/7</div>
              <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container" style={{ padding: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
            Our Core Services
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
            <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.4rem' }}>SEO Optimization</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Boost your search rankings with our proven SEO strategies and techniques that deliver real results.</p>
            <Link to="/seo-services" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>Learn More →</Link>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.2s', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
            <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.4rem' }}>Analytics & Insights</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Get detailed insights and analytics to track your digital marketing performance and ROI.</p>
            <Link to="/services" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>Learn More →</Link>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.4s', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚡</div>
            <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.4rem' }}>Fast Results</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>See improvements in your online visibility and traffic within weeks of implementation.</p>
            <Link to="/portfolio" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>View Results →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
              Why Choose SerpShine?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              We provide cutting-edge SEO strategies and digital marketing solutions that drive real results
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>Proven Results</h3>
              <p style={{ color: '#666' }}>Over 500+ successful campaigns with an average of 300% traffic increase for our clients.</p>
            </div>

            <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.2s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔧</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>Expert Team</h3>
              <p style={{ color: '#666' }}>Certified SEO specialists with 10+ years of experience in digital marketing.</p>
            </div>

            <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.4s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📈</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>Data-Driven</h3>
              <p style={{ color: '#666' }}>Every strategy is backed by comprehensive analytics and market research.</p>
            </div>

            <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.6s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>Fast Delivery</h3>
              <p style={{ color: '#666' }}>Quick turnaround times without compromising on quality or effectiveness.</p>
            </div>

            <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '0.8s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>Full Support</h3>
              <p style={{ color: '#666' }}>24/7 customer support and dedicated account managers for all clients.</p>
            </div>

            <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', animationDelay: '1s' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔒</div>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>White Hat SEO</h3>
              <p style={{ color: '#666' }}>Ethical, sustainable SEO practices that ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container" style={{ padding: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
            Our Process
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            A proven methodology that delivers consistent results for businesses of all sizes
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ background: '#667eea', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>1</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Audit & Analysis</h3>
            <p style={{ color: '#666' }}>Comprehensive website audit and competitor analysis to identify opportunities.</p>
          </div>

          <div className="floating" style={{ textAlign: 'center', position: 'relative', animationDelay: '0.2s' }}>
            <div style={{ background: '#667eea', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>2</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Strategy Development</h3>
            <p style={{ color: '#666' }}>Custom SEO strategy tailored to your business goals and target audience.</p>
          </div>

          <div className="floating" style={{ textAlign: 'center', position: 'relative', animationDelay: '0.4s' }}>
            <div style={{ background: '#667eea', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>3</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Implementation</h3>
            <p style={{ color: '#666' }}>Execute the strategy with on-page optimization, content creation, and technical fixes.</p>
          </div>

          <div className="floating" style={{ textAlign: 'center', position: 'relative', animationDelay: '0.6s' }}>
            <div style={{ background: '#667eea', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 20px' }}>4</div>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>Monitor & Optimize</h3>
            <p style={{ color: '#666' }}>Continuous monitoring and optimization to ensure sustained growth and results.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '80px 0', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>
            Ready to Dominate Search Results?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: '0.9', maxWidth: '600px', margin: '0 auto 40px' }}>
            Join hundreds of businesses that have achieved remarkable growth with our SEO expertise
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/website-audit" className="cta-button" style={{ background: 'white', color: '#667eea' }}>
              Get Free Audit
            </Link>
            <Link to="/contact" className="cta-button" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="container" style={{ padding: '60px 0' }}>
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
