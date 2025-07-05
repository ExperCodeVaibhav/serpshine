
import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to improve your search rankings and organic traffic.',
      icon: '🚀',
      link: '/seo-services',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      title: 'Content Marketing',
      description: 'Engaging content that drives traffic and converts visitors into customers.',
      icon: '📝',
      link: '/content-marketing',
      features: ['Content Strategy', 'Blog Writing', 'Social Media Content', 'Email Marketing']
    },
    {
      title: 'Paid Advertising',
      description: 'ROI-focused PPC campaigns across Google Ads, Facebook, and other platforms.',
      icon: '💰',
      link: '/paid-advertising',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign Optimization']
    },
    {
      title: 'Website Audit',
      description: 'AI-powered website analysis to identify SEO issues and opportunities.',
      icon: '🔍',
      link: '/website-audit',
      features: ['SEO Analysis', 'Performance Check', 'Technical Issues', 'Recommendations']
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive digital marketing solutions to grow your online presence and drive results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="floating"
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.5rem' }}>{service.title}</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>{service.description}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    padding: '5px 0', 
                    color: '#666',
                    borderBottom: idx < service.features.length - 1 ? '1px solid #eee' : 'none'
                  }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                to={service.link} 
                className="cta-button"
                style={{ display: 'inline-block' }}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
