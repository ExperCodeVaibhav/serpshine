
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-new">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title-new">
                Boost Your Online Presence with Expert SEO Services
              </h1>
              <p className="hero-subtitle-new">
                Drive organic traffic, increase rankings, and grow your business with our proven SEO strategies. 
                Get started today and see real results within 30 days.
              </p>
              <div className="hero-buttons">
                <Link to="/website-audit" className="btn-primary">
                  Get Free SEO Audit
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Start Your Project
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">📈</div>
                  <div className="card-text">Traffic +300%</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🎯</div>
                  <div className="card-text">Top Rankings</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">💰</div>
                  <div className="card-text">ROI +250%</div>
                </div>
                <div className="hero-main-visual">
                  <div className="visual-circle"></div>
                  <div className="visual-text">SEO<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>Comprehensive digital marketing solutions to accelerate your business growth</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>SEO Optimization</h3>
              <p>Boost your search rankings with our proven SEO strategies that deliver measurable results.</p>
              <Link to="/seo-services" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Content Marketing</h3>
              <p>Engaging content that drives traffic and converts visitors into loyal customers.</p>
              <Link to="/content-marketing" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Paid Advertising</h3>
              <p>ROI-focused PPC campaigns across Google Ads, Facebook, and other platforms.</p>
              <Link to="/paid-advertising" className="service-link">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Website Audit</h3>
              <p>AI-powered analysis to identify SEO issues and optimization opportunities.</p>
              <Link to="/website-audit" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SerpShine?</h2>
            <p>We deliver results that matter for your business growth</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Proven Results</h3>
              <p>Over 500+ successful campaigns with measurable improvements in rankings and traffic.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Fast Implementation</h3>
              <p>Quick turnaround times without compromising on quality or effectiveness.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Data-Driven Approach</h3>
              <p>Every strategy is backed by comprehensive analytics and market research.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3>Expert Team</h3>
              <p>Certified SEO specialists with 10+ years of experience in digital marketing.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>Full Support</h3>
              <p>24/7 customer support and dedicated account managers for all clients.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>White Hat SEO</h3>
              <p>Ethical, sustainable practices that ensure long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Proven Process</h2>
            <p>A systematic approach that delivers consistent results</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Audit & Analysis</h3>
                <p>Comprehensive website audit and competitor analysis to identify opportunities.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Strategy Development</h3>
                <p>Custom SEO strategy tailored to your business goals and target audience.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Execute the strategy with on-page optimization, content creation, and technical fixes.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Monitor & Optimize</h3>
                <p>Continuous monitoring and optimization to ensure sustained growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Dominate Search Results?</h2>
            <p>Join hundreds of businesses that have transformed their online presence with our expertise</p>
            <div className="cta-buttons">
              <Link to="/website-audit" className="btn-primary">
                Get Free Audit
              </Link>
              <Link to="/contact" className="btn-outline">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-new">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SerpShine</h3>
              <p>Advanced SEO & Digital Marketing Solutions</p>
              <div className="social-links-footer">
                <a href="https://serpshine.com/" target="_blank" rel="noopener noreferrer">🌐</a>
                <a href="https://www.facebook.com/serpshine" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://twitter.com/serpshine" target="_blank" rel="noopener noreferrer">🐦</a>
                <a href="https://www.linkedin.com/company/serpshine" target="_blank" rel="noopener noreferrer">💼</a>
                <a href="https://www.instagram.com/serpshine" target="_blank" rel="noopener noreferrer">📷</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/seo-services">SEO Services</Link></li>
                <li><Link to="/content-marketing">Content Marketing</Link></li>
                <li><Link to="/paid-advertising">Paid Advertising</Link></li>
                <li><Link to="/website-audit">Website Audit</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 seo@serpshine.com</p>
              <p>🌐 serpshine.com</p>
              <p>⏰ Mon-Fri: 9AM-6PM</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SerpShine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
