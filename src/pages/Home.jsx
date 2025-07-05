import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section-exact">
        <div className="container">
          <div className="hero-content-exact">
            <div className="hero-text-exact slide-in-left">
              <h1 className="hero-title-exact typewriter">
                The Best SEO Agency to Grow Your Business Online
              </h1>
              <p className="hero-description-exact fade-in" style={{ animationDelay: '1s' }}>
                Drive more traffic, increase rankings and grow your business with our data-driven SEO strategies. Get started today and see real results.
              </p>
              <div className="hero-buttons-exact bounce-in" style={{ animationDelay: '1.5s' }}>
                <Link to="/website-audit" className="btn-get-started hover-glow">
                  Get Started
                </Link>
                <Link to="/contact" className="btn-learn-more hover-scale">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image-exact slide-in-right">
              <div className="hero-graphic">
                <div className="graphic-circle-1 glow"></div>
                <div className="graphic-circle-2 glow"></div>
                <div className="graphic-circle-3 glow"></div>
                <div className="hero-icon pulse">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-exact">
        <div className="container">
          <div className="features-grid-exact">
            <div className="feature-box floating hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon-exact bounce-in">📈</div>
              <h3>Increase Traffic</h3>
              <p>Boost your organic search traffic with proven SEO strategies</p>
            </div>
            <div className="feature-box floating hover-lift" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon-exact bounce-in" style={{ animationDelay: '0.2s' }}>🎯</div>
              <h3>Higher Rankings</h3>
              <p>Rank higher on Google for keywords that matter to your business</p>
            </div>
            <div className="feature-box floating hover-lift" style={{ animationDelay: '0.6s' }}>
              <div className="feature-icon-exact bounce-in" style={{ animationDelay: '0.4s' }}>💰</div>
              <h3>More Revenue</h3>
              <p>Convert visitors into customers with optimized landing pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-exact">
        <div className="container">
          <div className="about-content-exact">
            <div className="about-text-exact">
              <h2 className="about-title-exact">About SerpShine</h2>
              <p className="about-description-exact">
                We are a full-service digital marketing agency specializing in SEO, content marketing, and paid advertising. Our team of experts helps businesses of all sizes improve their online presence and drive more qualified traffic to their websites.
              </p>
              <p className="about-description-exact">
                With over 10 years of experience in the industry, we have helped hundreds of clients achieve their digital marketing goals. Our data-driven approach ensures that every strategy we implement is backed by solid research and analytics.
              </p>
              <Link to="/about" className="btn-learn-more-about">Learn More About Us</Link>
            </div>
            <div className="about-image-exact">
              <div className="about-graphic">
                <div className="about-icon">💼</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Our Services</h2>
            <p>We offer comprehensive digital marketing solutions to help your business grow</p>
          </div>
          <div className="services-grid-exact">
            <div className="service-item-exact">
              <div className="service-icon-exact">🔍</div>
              <h3>SEO Services</h3>
              <p>Improve your search engine rankings with our proven SEO strategies and techniques.</p>
              <Link to="/seo-services" className="service-link-exact">Learn More →</Link>
            </div>
            <div className="service-item-exact">
              <div className="service-icon-exact">📝</div>
              <h3>Content Marketing</h3>
              <p>Engage your audience with high-quality content that drives traffic and conversions.</p>
              <Link to="/content-marketing" className="service-link-exact">Learn More →</Link>
            </div>
            <div className="service-item-exact">
              <div className="service-icon-exact">💰</div>
              <h3>Paid Advertising</h3>
              <p>Maximize your ROI with targeted PPC campaigns across Google Ads and social media.</p>
              <Link to="/paid-advertising" className="service-link-exact">Learn More →</Link>
            </div>
            <div className="service-item-exact">
              <div className="service-icon-exact">🔧</div>
              <h3>Website Audit</h3>
              <p>Get a comprehensive analysis of your website's SEO performance and opportunities.</p>
              <Link to="/website-audit" className="service-link-exact">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Latest SEO Insights</h2>
            <p>Stay updated with the latest SEO trends, strategies, and insights from our experts</p>
          </div>
          <div className="blog-grid-exact">
            <article className="blog-card floating hover-lift" style={{ animationDelay: '0.1s' }}>
              <div className="blog-category">SEO Trends</div>
              <h3>10 SEO Trends That Will Dominate 2024</h3>
              <p>Stay ahead of the curve with these emerging SEO trends and algorithm updates.</p>
              <div className="blog-meta">
                <span>January 15, 2024</span>
                <span>5 min read</span>
              </div>
              <Link to="/blog" className="blog-read-more">Read More →</Link>
            </article>
            
            <article className="blog-card floating hover-lift" style={{ animationDelay: '0.2s' }}>
              <div className="blog-category">Technical SEO</div>
              <h3>The Complete Guide to Technical SEO</h3>
              <p>Master the technical aspects of SEO to improve your website's performance and rankings.</p>
              <div className="blog-meta">
                <span>January 10, 2024</span>
                <span>12 min read</span>
              </div>
              <Link to="/blog" className="blog-read-more">Read More →</Link>
            </article>
            
            <article className="blog-card floating hover-lift" style={{ animationDelay: '0.3s' }}>
              <div className="blog-category">Content Marketing</div>
              <h3>Content Marketing Strategies That Actually Work</h3>
              <p>Proven content marketing tactics to drive traffic and engagement.</p>
              <div className="blog-meta">
                <span>January 5, 2024</span>
                <span>8 min read</span>
              </div>
              <Link to="/blog" className="blog-read-more">Read More →</Link>
            </article>
          </div>
          <div className="blog-cta">
            <Link to="/blog" className="btn-view-all-posts">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="partners-section-exact">
        <div className="container">
          <div className="section-header-exact">
            <h2>Trusted by Leading Brands</h2>
            <p>We work with companies of all sizes to deliver exceptional results</p>
          </div>
          <div className="partners-grid-exact">
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x80/4A90E2/FFFFFF?text=Google" alt="Google Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x80/1877F2/FFFFFF?text=Facebook" alt="Facebook Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x80/FF6B6B/FFFFFF?text=Shopify" alt="Shopify Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x80/50E3C2/FFFFFF?text=HubSpot" alt="HubSpot Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x80/7B68EE/FFFFFF?text=Mailchimp" alt="Mailchimp Partner" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x80/FF9500/FFFFFF?text=Amazon" alt="Amazon Partner" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-exact">
        <div className="container">
          <div className="cta-content-exact">
            <h2>Ready to Grow Your Business?</h2>
            <p>Contact us today for a free consultation and see how we can help you achieve your digital marketing goals.</p>
            <div className="cta-buttons-exact">
              <Link to="/website-audit" className="btn-get-started">
                Get Free Audit
              </Link>
              <Link to="/contact" className="btn-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact Match */}
      <footer className="footer-exact">
        <div className="container">
          <div className="footer-content-exact">
            <div className="footer-main">
              <div className="footer-logo-section">
                <h3 className="footer-logo">SerpShine</h3>
                <p className="footer-description">
                  Professional SEO and digital marketing services to help your business grow online. We deliver results that matter.
                </p>
                <div className="footer-social">
                  <a href="https://www.facebook.com/serpshine" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
                  <a href="https://twitter.com/serpshine" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
                  <a href="https://www.linkedin.com/company/serpshine" target="_blank" rel="noopener noreferrer" className="social-icon">💼</a>
                  <a href="https://www.instagram.com/serpshine" target="_blank" rel="noopener noreferrer" className="social-icon">📷</a>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="footer-column">
                  <h4>Services</h4>
                  <ul>
                    <li><Link to="/seo-services">SEO Services</Link></li>
                    <li><Link to="/content-marketing">Content Marketing</Link></li>
                    <li><Link to="/paid-advertising">PPC Advertising</Link></li>
                    <li><Link to="/website-audit">Website Audit</Link></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4>Company</h4>
                  <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4>Resources</h4>
                  <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#support">Support</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>📧 seo@serpshine.com</li>
                    <li>🌐 serpshine.com</li>
                    <li>📞 (555) 123-4567</li>
                    <li>📍 New York, NY</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-bottom-exact">
              <div className="footer-bottom-content">
                <p>&copy; 2024 SerpShine. All rights reserved.</p>
                <div className="footer-bottom-links">
                  <a href="#privacy">Privacy Policy</a>
                  <span>|</span>
                  <a href="#terms">Terms of Service</a>
                  <span>|</span>
                  <a href="#cookies">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}