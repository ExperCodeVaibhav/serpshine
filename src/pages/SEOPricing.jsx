
import React from 'react';
import { Link } from 'react-router-dom';

export default function SEOPricing() {
  const packages = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small businesses just starting with SEO',
      features: [
        'Up to 10 target keywords',
        'Monthly SEO reports',
        'Basic on-page optimization',
        'Google My Business setup',
        'Local citation building',
        'Monthly content creation (2 blogs)',
        'Technical SEO audit',
        'Email support'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$1,599',
      period: '/month',
      description: 'Most popular choice for growing businesses',
      features: [
        'Up to 25 target keywords',
        'Bi-weekly SEO reports',
        'Advanced on-page optimization',
        'Link building campaign',
        'Competitor analysis',
        'Content creation (4 blogs/month)',
        'Technical SEO optimization',
        'Social media integration',
        'Phone & email support'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Comprehensive SEO for large businesses',
      features: [
        'Unlimited target keywords',
        'Weekly SEO reports',
        'Complete website optimization',
        'Aggressive link building',
        'Monthly strategy calls',
        'Content creation (8 blogs/month)',
        'Advanced technical SEO',
        'Multi-location optimization',
        'Dedicated account manager',
        'Priority support'
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
            SEO Pricing Packages
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Choose the perfect SEO package for your business. All plans include our proven strategies to boost your search rankings.
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
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#667eea' }}>{pkg.price}</span>
                <span style={{ color: '#666', fontSize: '1.1rem' }}>{pkg.period}</span>
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
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Need a Custom Solution?</h3>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            We also offer custom SEO packages tailored to your specific business needs and goals.
          </p>
          <Link to="/contact" className="cta-button">
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
