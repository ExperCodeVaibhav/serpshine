
import React, { useState } from 'react';

export default function WebsiteAudit() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [auditResults, setAuditResults] = useState(null);

  const analyzeWebsite = async () => {
    if (!url) return;
    
    setIsLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const seoScore = Math.floor(Math.random() * 40) + 60; // 60-100
      const performanceScore = Math.floor(Math.random() * 30) + 70; // 70-100
      const accessibilityScore = Math.floor(Math.random() * 35) + 65; // 65-100
      
      setAuditResults({
        url,
        seoScore,
        performanceScore,
        accessibilityScore,
        overallScore: Math.floor((seoScore + performanceScore + accessibilityScore) / 3),
        issues: [
          'Missing meta descriptions on 3 pages',
          'Image alt tags need optimization',
          'Page loading speed could be improved',
          'Mobile responsiveness needs attention',
          'Internal linking structure needs improvement'
        ],
        recommendations: [
          'Add meta descriptions to all pages',
          'Optimize images for faster loading',
          'Implement lazy loading for images',
          'Improve mobile viewport settings',
          'Create a comprehensive internal linking strategy'
        ]
      });
      setIsLoading(false);
    }, 3000);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#4CAF50';
    if (score >= 70) return '#FF9800';
    return '#F44336';
  };

  return (
    <div className="page">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            AI Website Audit Tool
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Get a comprehensive SEO and performance analysis of any website using our AI-powered audit tool.
          </p>
        </div>

        <div className="audit-tool">
          <div className="audit-input">
            <input
              type="url"
              className="form-control"
              placeholder="Enter website URL (e.g., https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ flex: 1 }}
            />
            <button
              className="btn-submit"
              onClick={analyzeWebsite}
              disabled={isLoading || !url}
              style={{ width: 'auto', minWidth: '150px' }}
            >
              {isLoading ? <span className="loading"></span> : 'Analyze Website'}
            </button>
          </div>

          {auditResults && (
            <div className="audit-results">
              <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
                Audit Results for {auditResults.url}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div 
                    className="score-circle"
                    style={{ backgroundColor: getScoreColor(auditResults.overallScore) }}
                  >
                    {auditResults.overallScore}
                  </div>
                  <h3>Overall Score</h3>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div 
                    className="score-circle"
                    style={{ backgroundColor: getScoreColor(auditResults.seoScore) }}
                  >
                    {auditResults.seoScore}
                  </div>
                  <h3>SEO Score</h3>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div 
                    className="score-circle"
                    style={{ backgroundColor: getScoreColor(auditResults.performanceScore) }}
                  >
                    {auditResults.performanceScore}
                  </div>
                  <h3>Performance</h3>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div 
                    className="score-circle"
                    style={{ backgroundColor: getScoreColor(auditResults.accessibilityScore) }}
                  >
                    {auditResults.accessibilityScore}
                  </div>
                  <h3>Accessibility</h3>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                  <h3 style={{ color: '#F44336', marginBottom: '20px' }}>Issues Found</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {auditResults.issues.map((issue, index) => (
                      <li key={index} style={{ 
                        padding: '10px 0', 
                        borderBottom: '1px solid #eee',
                        color: '#666'
                      }}>
                        ❌ {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 style={{ color: '#4CAF50', marginBottom: '20px' }}>Recommendations</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {auditResults.recommendations.map((rec, index) => (
                      <li key={index} style={{ 
                        padding: '10px 0', 
                        borderBottom: '1px solid #eee',
                        color: '#666'
                      }}>
                        ✅ {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <p style={{ marginBottom: '20px', color: '#666' }}>
                  Want a detailed analysis and improvement plan?
                </p>
                <a href="/contact" className="cta-button">
                  Get Professional SEO Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
