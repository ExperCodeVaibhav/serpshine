
import React from 'react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const industries = [
    {
      title: 'Healthcare SEO',
      description: 'Specialized SEO for medical practices, hospitals, and healthcare providers.',
      icon: '🏥',
      link: '/healthcare-seo'
    },
    {
      title: 'Legal SEO',
      description: 'Drive more clients to your law firm with targeted legal SEO strategies.',
      icon: '⚖️',
      link: '/legal-seo'
    },
    {
      title: 'Real Estate SEO',
      description: 'Generate more leads for real estate agents and property companies.',
      icon: '🏠',
      link: '/real-estate-seo'
    },
    {
      title: 'Automotive SEO',
      description: 'Increase visibility for car dealerships and automotive services.',
      icon: '🚗',
      link: '/automotive-seo'
    },
    {
      title: 'Restaurant SEO',
      description: 'Attract more diners with local SEO for restaurants and food businesses.',
      icon: '🍽️',
      link: '/restaurant-seo'
    },
    {
      title: 'Finance SEO',
      description: 'Build trust and attract clients in the competitive finance industry.',
      icon: '💼',
      link: '/finance-seo'
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Industry-Specific SEO Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Tailored SEO strategies for different industries to maximize your online presence and results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="floating hover-lift"
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{industry.icon}</div>
              <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.5rem' }}>{industry.title}</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>{industry.description}</p>
              <Link 
                to={industry.link} 
                className="btn-primary"
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
