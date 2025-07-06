
import React from 'react';
import { Link } from 'react-router-dom';

export default function PPCPricing() {
  const packages = [
    {
      name: 'Starter',
      price: '$799',
      period: '/month',
      adSpend: '$2,000',
      description: 'Perfect for small businesses new to PPC advertising',
      features: [
        'Google Ads management',
        'Keyword research & selection',
        'Ad copy creation (5 variants)',
        'Landing page optimization',
        'Monthly performance reports',
        'Basic conversion tracking',
        'Email support',
        'Monthly strategy review'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      adSpend: '$5,000',
      description: 'Most popular choice for growing businesses',
      features: [
        'Google & Bing Ads management',
        'Advanced keyword research',
        'A/B testing (10+ variants)',
        'Landing page creation',
        'Bi-weekly reports',
        'Advanced conversion tracking',
        'Remarketing campaigns',
        'Competitor analysis',
        'Phone & email support'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      adSpend: '$15,000+',
      description: 'Comprehensive PPC for large businesses',
      features: [
        'Multi-platform management',
        'Advanced bidding strategies',
        'Custom ad creation',
        'Multiple landing pages',
        'Weekly detailed reports',
        'Advanced analytics setup',
        'Shopping & display campaigns',
        'Dedicated account manager',
        'Priority support',
        'Monthly strategy calls'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            PPC Management Pricing
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Professional PPC management to maximize your ad spend ROI. Pricing based on management fee + your ad spend budget.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px', 
          marginBottom: '60px' 
        }}>
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`scale-up pricing-card ${pkg.popular ? 'popular' : ''}`}
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                boxShadow: pkg.popular ? '0 20px 60px rgba(102, 126, 234, 0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
                border: pkg.popular ? '3px solid #667eea' : '1px solid #e1e5e9',
                position: 'relative'
              }}
            >
              {pkg.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#667eea',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  MOST POPULAR
                </div>
              )}
              
              <h3 style={{ color: '#333', marginBottom: '10px', fontSize: '1.5rem' }}>{pkg.name}</h3>
              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#667eea' }}>{pkg.price}</span>
                <span style={{ color: '#666', fontSize: '1.1rem' }}>{pkg.period}</span>
              </div>
              <div style={{ marginBottom: '20px', color: '#888', fontSize: '0.9rem' }}>
                + {pkg.adSpend} ad spend budget
              </div>
              <p style={{ color: '#666', marginBottom: '30px' }}>{pkg.description}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {pkg.features.map((feature, i) => (
                  <li key={i} style={{ 
                    padding: '8px 0', 
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ color: '#4CAF50', marginRight: '10px' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className="cta-button"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '15px 30px',
                  background: pkg.popular ? '#667eea' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', background: '#f8f9fa', padding: '40px', borderRadius: '20px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>What's Included in All Plans</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div>✓ Account setup & optimization</div>
            <div>✓ Conversion tracking setup</div>
            <div>✓ Regular performance monitoring</div>
            <div>✓ Monthly optimization</div>
          </div>
          <Link to="/contact" className="cta-button">
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
