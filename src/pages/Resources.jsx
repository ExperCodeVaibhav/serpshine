
import React from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
  const resources = [
    {
      title: 'SEO Blog',
      description: 'Latest SEO tips, strategies, and industry insights.',
      icon: '📝',
      link: '/blog'
    },
    {
      title: 'Case Studies',
      description: 'Real results from our successful SEO campaigns.',
      icon: '📊',
      link: '/case-studies'
    },
    {
      title: 'SEO Tools',
      description: 'Free tools to analyze and improve your SEO performance.',
      icon: '🔧',
      link: '/seo-tools'
    },
    {
      title: 'SEO Guides',
      description: 'Comprehensive guides to master SEO fundamentals.',
      icon: '📚',
      link: '/guides'
    },
    {
      title: 'Webinars',
      description: 'Expert-led webinars on advanced SEO topics.',
      icon: '🎥',
      link: '/webinars'
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            SEO Resources
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Access valuable SEO resources to improve your knowledge and website performance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bounce-in hover-scale"
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{resource.icon}</div>
              <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.5rem' }}>{resource.title}</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>{resource.description}</p>
              <Link 
                to={resource.link} 
                className="btn-primary"
                style={{ display: 'inline-block' }}
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
