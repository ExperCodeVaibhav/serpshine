
import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce SEO Success',
      description: 'Increased organic traffic by 300% for a major e-commerce client',
      results: ['300% Traffic Increase', '150% Revenue Growth', '#1 Rankings for 50+ Keywords'],
      industry: 'E-commerce'
    },
    {
      title: 'Local Business Domination',
      description: 'Helped a local service business dominate local search results',
      results: ['500% Local Visibility', '10x More Leads', 'Top 3 for All Target Keywords'],
      industry: 'Local Services'
    },
    {
      title: 'SaaS Company Growth',
      description: 'Scaled a SaaS startup from 0 to 100k monthly organic visitors',
      results: ['100k Monthly Visitors', '400% Lead Increase', 'Category Leadership'],
      industry: 'Technology'
    },
    {
      title: 'Healthcare Authority Building',
      description: 'Established a healthcare practice as a trusted local authority',
      results: ['250% Patient Inquiries', 'Medical Authority', 'Competitor Outranking'],
      industry: 'Healthcare'
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Our Portfolio
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            See how we've helped businesses across various industries achieve remarkable SEO success.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="floating"
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                display: 'inline-block',
                fontSize: '0.9rem',
                marginBottom: '20px'
              }}>
                {project.industry}
              </div>
              
              <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '1.5rem' }}>
                {project.title}
              </h3>
              
              <p style={{ color: '#666', marginBottom: '25px', lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div>
                <h4 style={{ color: '#667eea', marginBottom: '15px' }}>Key Results:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.results.map((result, idx) => (
                    <li key={idx} style={{ 
                      padding: '8px 0', 
                      color: '#666',
                      borderBottom: idx < project.results.length - 1 ? '1px solid #eee' : 'none'
                    }}>
                      🎯 {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px', background: '#f8f9fa', padding: '60px 40px', borderRadius: '20px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Ready to Join Our Success Stories?</h2>
          <p style={{ marginBottom: '30px', color: '#666', fontSize: '1.1rem' }}>
            Let us create a custom strategy that delivers exceptional results for your business.
          </p>
          <a href="/contact" className="cta-button">Start Your Success Story</a>
        </div>
      </div>
    </div>
  );
}
