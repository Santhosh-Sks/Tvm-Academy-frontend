import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    fetchFeaturedCourses();
  }, []);

  const fetchFeaturedCourses = async () => {
    try {
      const courses = await api.getCourses();
      // Get first 3 courses as featured courses
      setFeaturedCourses(Array.isArray(courses) ? courses.slice(0, 3) : []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setFeaturedCourses([]);
    }
  };
  const getCourseImage = (courseTitle) => {
    const title = courseTitle.toLowerCase();
    
    if (title.includes('full stack') || title.includes('web development')) {
      return '💻';
    } else if (title.includes('data science') || title.includes('analytics')) {
      return '📊';
    } else if (title.includes('mobile') || title.includes('app development')) {
      return '📱';
    } else if (title.includes('digital marketing') || title.includes('marketing')) {
      return '📈';
    } else if (title.includes('ui/ux') || title.includes('design')) {
      return '🎨';
    } else if (title.includes('cybersecurity') || title.includes('security')) {
      return '🛡️';
    } else if (title.includes('cloud') || title.includes('devops')) {
      return '☁️';
    } else if (title.includes('ai') || title.includes('artificial intelligence') || title.includes('machine learning')) {
      return '🤖';
    } else if (title.includes('python')) {
      return '🐍';
    } else if (title.includes('java')) {
      return '☕';
    } else {
      return '📖';
    }
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">TVM Academy Professional Learning Center</h1>
          <p className="hero-subtitle">
            Advanced educational institute with streamlined enrollment workflows and 
            comprehensive student lifecycle management. Experience our efficient 
            enquiry-to-enrollment process designed for modern learners.
          </p>
          <div className="hero-cta">
            <a href="/courses" className="btn-hero primary">
              Browse Programs
              <span>→</span>
            </a>
            <a href="/enquiry" className="btn-hero secondary">
              Start Your Journey
              <span>🚀</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="main-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose TVM Academy?</h2>
          <p className="section-subtitle">
            We provide comprehensive education with industry-relevant curriculum and expert guidance
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🏆</span>
            <h3 className="feature-title">Expert Faculty</h3>
            <p className="feature-description">
              Learn from industry professionals with years of real-world experience and proven track records.
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3 className="feature-title">Streamlined Enrollment</h3>
            <p className="feature-description">
              Efficient enquiry-to-enrollment workflow with automated payment processing and status tracking.
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🔄</span>
            <h3 className="feature-title">Workflow Management</h3>
            <p className="feature-description">
              Advanced student lifecycle management from initial enquiry through course completion.
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🏢</span>
            <h3 className="feature-title">Professional Operations</h3>
            <p className="feature-description">
              State-of-the-art learning environment with comprehensive administrative support systems.
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">💼</span>
            <h3 className="feature-title">Career Integration</h3>
            <p className="feature-description">
              Comprehensive placement assistance with industry partnerships and career guidance programs.
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3 className="feature-title">Progress Tracking</h3>
            <p className="feature-description">
              Real-time enrollment analytics and student progress monitoring for optimal outcomes.
            </p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3 className="feature-title">Strategic Learning</h3>
            <p className="feature-description">
              Industry-aligned curriculum with systematic approach to skill development and assessment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="main-section" style={{ background: 'hsl(210 40% 98%)' }}>
        <div className="section-header">
          <h2 className="section-title">Experience Professional Enrollment Management</h2>
          <p className="section-subtitle">
            Join our streamlined workflow system designed for efficient student onboarding and comprehensive learning support
          </p>
        </div>
        
        <div className="grid grid-cols-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center', padding: '24px' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📞</span>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'hsl(222 84% 5%)' }}>Call us</h3>
              <p style={{ fontSize: '14px', color: 'hsl(215 16% 47%)' }}>+91-9876543210</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center', padding: '24px' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📧</span>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'hsl(222 84% 5%)' }}>Email</h3>
              <p style={{ fontSize: '14px', color: 'hsl(215 16% 47%)' }}>info@tvm.ac.in</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center', padding: '24px' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📍</span>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'hsl(222 84% 5%)' }}>Address</h3>
              <p style={{ fontSize: '14px', color: 'hsl(215 16% 47%)' }}>TVM Academy Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="main-section">
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">
            Discover our most popular courses designed by industry experts
          </p>
        </div>
        
        <div className="courses-grid">
          {featuredCourses.slice(0, 3).map((course) => (
            <div key={course._id} className="course-card">
              <div className="course-image" style={{
                backgroundColor: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                borderRadius: '8px'
              }}>
                <span style={{ 
                  fontSize: '36px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}>
                  {getCourseImage(course.title)}
                </span>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">
                  {course.description}
                </p>
                
                <div className="course-meta" style={{ marginBottom: '12px' }}>
                  <span className="course-duration">
                    ⏱️ {course.duration}
                  </span>
                </div>

                <div className="course-pricing" style={{ marginBottom: '16px' }}>
                  <span className="course-price" style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: 'var(--primary-blue)' 
                  }}>
                    ₹{course.fee?.toLocaleString() || 'Contact for pricing'}
                  </span>
                </div>
              </div>
              <div style={{ padding: '0 24px 24px' }}>
                <a href="/enquiry" className="btn btn-primary w-full">
                  Enquire Now
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="/courses" className="btn btn-outline">
            View All Courses
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="main-section">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Ready to start your learning journey? Contact us today!</p>
        </div>
        
        <div className="grid grid-cols-3">
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center', padding: '24px' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📞</span>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'hsl(222 84% 5%)' }}>Call us</h3>
              <p style={{ fontSize: '14px', color: 'hsl(215 16% 47%)' }}>+91-9876543210</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center', padding: '24px' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📧</span>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'hsl(222 84% 5%)' }}>Email</h3>
              <p style={{ fontSize: '14px', color: 'hsl(215 16% 47%)' }}>info@tvm.ac.in</p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content" style={{ textAlign: 'center', padding: '24px' }}>
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '8px' }}>📍</span>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px', color: 'hsl(222 84% 5%)' }}>Address</h3>
              <p style={{ fontSize: '14px', color: 'hsl(215 16% 47%)' }}>TVM Academy Campus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
