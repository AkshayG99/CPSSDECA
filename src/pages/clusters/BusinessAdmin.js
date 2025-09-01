import React from 'react';
import { clusters } from '../../data/info';
import ClusterResources from '../../components/ClusterResources';
import './ClusterPage.css';

const BusinessAdmin = () => {
  const cluster = clusters.businessAdmin;

  return (
    <div className="cluster-page">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">{cluster.name}</h1>
          </div>
        </div>
      </section>


      {/* Success Stories */}
      <section className="success-section section-padding">
        <div className="container">
          <div className="success-content">
            <div className="success-text">
              <h2 className="section-title">Business Leaders in the Making</h2>
              <p>Our business administration cluster prepares future CEOs and entrepreneurs. Members have launched successful startups and secured leadership positions in major corporations.</p>
              <p>The cluster emphasizes practical experience through case studies, business plan competitions, and mentorship opportunities.</p>
            </div>
            <div className="success-stats">
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Student Organizations/Startups</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12+</div>
                <div className="stat-label">Competition Winners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ClusterResources clusterKey="businessAdmin" clusterName="Business Administration" />
    </div>
  );
};

export default BusinessAdmin;
