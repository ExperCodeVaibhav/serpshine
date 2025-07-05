
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission to seo@serpshine.com
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'seo@serpshine.com'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Ready to boost your online presence? Get in touch with our SEO experts today.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div>
            <div className="contact-form">
              <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Get Your Free Consultation
              </h2>
              
              {submitStatus === 'success' && (
                <div style={{ 
                  background: '#d4edda', 
                  color: '#155724', 
                  padding: '15px', 
                  borderRadius: '10px', 
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ 
                  background: '#f8d7da', 
                  color: '#721c24', 
                  padding: '15px', 
                  borderRadius: '10px', 
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company/Website</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-control"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Services</option>
                    <option value="content">Content Marketing</option>
                    <option value="ppc">Paid Advertising</option>
                    <option value="audit">Website Audit</option>
                    <option value="consultation">SEO Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <span className="loading"></span> : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '30px', color: '#333' }}>Contact Information</h3>
              
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '10px' }}>📧 Email</h4>
                <p style={{ color: '#666' }}>seo@serpshine.com</p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '10px' }}>🌐 Website</h4>
                <p style={{ color: '#666' }}>
                  <a href="https://serpshine.com/" target="_blank" rel="noopener noreferrer">
                    https://serpshine.com/
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '10px' }}>⏰ Business Hours</h4>
                <p style={{ color: '#666' }}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h4 style={{ color: '#667eea', marginBottom: '15px' }}>Follow Us</h4>
                <div className="social-links" style={{ justifyContent: 'flex-start' }}>
                  <a href="https://www.facebook.com/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">📘</a>
                  <a href="https://twitter.com/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">🐦</a>
                  <a href="https://www.linkedin.com/company/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">💼</a>
                  <a href="https://www.instagram.com/serpshine" className="social-link" target="_blank" rel="noopener noreferrer">📷</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
