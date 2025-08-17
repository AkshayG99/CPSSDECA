import React from 'react';
import { Link } from 'react-router-dom';
import { siteInfo } from '../data/info';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title fade-in-up">
              CPSS DECA
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About CPSS DECA</h2>
              <p className="section-description">
                {siteInfo.description}
              </p>
              <p>
                Participants engage in real-world business scenarios, honing their abilities to think 
                critically and creatively. Through a combination of classroom learning and practical 
                experiences, CPSS DECA empowers students to thrive in the dynamic and competitive 
                landscape of business and entrepreneurship.
              </p>
            </div>
            <div className="about-image slide-in-right">
              <img src={`${process.env.PUBLIC_URL}/team.png`} alt="CPSS DECA Team" className="team-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Clusters Preview */}
      <section className="clusters-preview section-padding">
        <div className="container">
          <h2 className="section-title text-center">Four Paths to Success</h2>
          <div className="clusters-grid grid grid-4">
            <Link to="/clusters/marketing" className="cluster-card card stagger-item">
              <img src={`${process.env.PUBLIC_URL}/marketing-logo.webp`} alt="Marketing" className="cluster-logo" />
              <h3>Marketing</h3>
              <p>Digital campaigns & brand strategy</p>
            </Link>
            <Link to="/clusters/business-admin" className="cluster-card card stagger-item">
              <img src={`${process.env.PUBLIC_URL}/business-admin-logo.webp`} alt="Business Admin" className="cluster-logo" />
              <h3>Business Admin</h3>
              <p>Leadership & entrepreneurship</p>
            </Link>
            <Link to="/clusters/hospitality" className="cluster-card card stagger-item">
              <img src={`${process.env.PUBLIC_URL}/hospitality-logo.webp`} alt="Hospitality" className="cluster-logo" />
              <h3>Hospitality</h3>
              <p>Events & customer experience</p>
            </Link>
            <Link to="/clusters/finance" className="cluster-card card stagger-item">
              <img src={`${process.env.PUBLIC_URL}/finance-logo.webp`} alt="Finance" className="cluster-logo" />
              <h3>Finance</h3>
              <p>Investment & financial planning</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Our Achievements</h2>
          <div className="achievements-grid grid grid-3">
            <div className="achievement-card card stagger-item">
              <div className="achievement-number pulse-animation">25+</div>
              <h3>Provincial Winners</h3>
            </div>
            <div className="achievement-card card stagger-item">
              <div className="achievement-number pulse-animation">100+</div>
              <h3>Active Members</h3>
            </div>
            <div className="achievement-card card stagger-item">
              <div className="achievement-number pulse-animation">4</div>
              <h3>Years Strong</h3>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
