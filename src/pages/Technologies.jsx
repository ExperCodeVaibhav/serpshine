
import React from 'react';
import { Link } from 'react-router-dom';

export default function Technologies() {
  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Technologies We Use
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Cutting-edge technologies and frameworks to build robust, scalable solutions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⚛️ Frontend Technologies</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              React, Angular, Vue.js, JavaScript, TypeScript, HTML5, CSS3
            </p>
            <Link to="/react-development" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Learn More →
            </Link>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🔧 Backend Technologies</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Node.js, Python, PHP, .NET, Java, Express.js, Django, Laravel
            </p>
            <Link to="/nodejs-development" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Learn More →
            </Link>
          </div>

          <div className="floating" style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#667eea', marginBottom: '20px' }}>🗄️ Database Technologies</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              MySQL, MongoDB, PostgreSQL, Firebase, Redis, SQLite
            </p>
            <Link to="/mysql-development" style={{ color: '#2563eb', textDecoration: 'none' }}>
              Learn More →
            </Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
