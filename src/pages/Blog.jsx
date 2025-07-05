
import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: '10 SEO Trends That Will Dominate 2024',
      excerpt: 'Stay ahead of the curve with these emerging SEO trends and algorithm updates.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'SEO Trends'
    },
    {
      title: 'The Complete Guide to Technical SEO',
      excerpt: 'Master the technical aspects of SEO to improve your website\'s performance and rankings.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Technical SEO'
    },
    {
      title: 'Content Marketing Strategies That Actually Work',
      excerpt: 'Proven content marketing tactics to drive traffic and engagement.',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Content Marketing'
    },
    {
      title: 'Local SEO: Dominate Your Local Market',
      excerpt: 'Complete guide to local SEO optimization for businesses targeting local customers.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Local SEO'
    },
    {
      title: 'PPC vs SEO: Which Strategy is Right for You?',
      excerpt: 'Compare the benefits and ROI of paid advertising versus organic search optimization.',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Digital Marketing'
    },
    {
      title: 'Website Speed Optimization: A Complete Guide',
      excerpt: 'Learn how to optimize your website speed for better user experience and SEO rankings.',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Technical SEO'
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            SEO & Marketing Blog
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with the latest SEO trends, strategies, and insights from our experts.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {posts.map((post, index) => (
            <article 
              key={index}
              className="floating"
              style={{ 
                background: 'white', 
                padding: '30px', 
                borderRadius: '20px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '0.8rem',
                marginBottom: '15px'
              }}>
                {post.category}
              </div>
              
              <h2 style={{ 
                marginBottom: '15px', 
                color: '#333', 
                fontSize: '1.3rem',
                lineHeight: 1.4
              }}>
                {post.title}
              </h2>
              
              <p style={{ 
                color: '#666', 
                marginBottom: '20px', 
                lineHeight: 1.6 
              }}>
                {post.excerpt}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                fontSize: '0.9rem',
                color: '#999'
              }}>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Want to stay updated with our latest insights?
          </p>
          <a href="/contact" className="cta-button">
            Subscribe to Our Newsletter
          </a>
        </div>
      </div>
    </div>
  );
}
