import React, { useState } from 'react';
import { contact, siteInfo } from '../data/info';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    cluster: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      grade: '',
      cluster: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-description">
              Ready to join CPSS DECA? Have questions? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <h2 className="section-title">Join CPSS DECA</h2>
              <p className="section-description">
                Fill out the form below and we'll get back to you with more information about joining our chapter.
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="grade">Grade *</label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cluster">Interested Cluster</label>
                    <select
                      id="cluster"
                      name="cluster"
                      value={formData.cluster}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Cluster</option>
                      <option value="marketing">Marketing</option>
                      <option value="business">Business Administration</option>
                      <option value="hospitality">Hospitality & Tourism</option>
                      <option value="finance">Finance</option>
                      <option value="undecided">Undecided</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself and why you're interested in DECA..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h3>Contact Information</h3>
              
              <div className="contact-info-card card">
                <div className="info-item">
                  <div className="info-icon">🏫</div>
                  <div className="info-details">
                    <h4>School</h4>
                    <p>{contact.school}</p>
                    <p>{contact.address}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-details">
                    <h4>Email</h4>
                    <p>{contact.email}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div className="info-details">
                    <h4>Social Media</h4>
                    <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer">
                      {contact.instagram}
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-details">
                    <h4>Meeting Times</h4>
                    <p>{contact.meetingTime}</p>
                    <p>{contact.room}</p>
                  </div>
                </div>
              </div>

              <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/clusters">Explore Clusters</a></li>
                  <li><a href="/executives">Meet the Team</a></li>
                  <li><a href="/memories">View Our Memories</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item card">
              <h3>When can I join DECA?</h3>
              <p>You can join DECA at any time during the school year! We welcome new members from all grades (9-12).</p>
            </div>
            <div className="faq-item card">
              <h3>Do I need business experience?</h3>
              <p>Not at all! DECA is designed to teach you business skills from the ground up. All you need is enthusiasm and willingness to learn.</p>
            </div>
            <div className="faq-item card">
              <h3>What are the time commitments?</h3>
              <p>We meet twice a week after school. Additional time may be needed for competition preparation, but it's flexible based on your availability.</p>
            </div>
            <div className="faq-item card">
              <h3>Are there any fees?</h3>
              <p>There may be small fees for competitions and events, but we work to keep costs minimal and offer support for those who need it.</p>
            </div>
            <div className="faq-item card">
              <h3>What competitions can I participate in?</h3>
              <p>DECA offers over 60 different competition categories across our four clusters, so there's something for everyone!</p>
            </div>
            <div className="faq-item card">
              <h3>How do I choose a cluster?</h3>
              <p>Don't worry about choosing right away! You can explore different clusters and find what interests you most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <span className="map-icon">📍</span>
                <h3>Central Peel Secondary School</h3>
                <p>{contact.address}</p>
                <p>Room 201 - DECA Meeting Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
