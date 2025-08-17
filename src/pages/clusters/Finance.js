import React from 'react';
import { clusters } from '../../data/info';
import ClusterResources from '../../components/ClusterResources';
import './ClusterPage.css';

const Finance = () => {
  const cluster = clusters.finance;

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
              <h2 className="section-title">Future Financial Leaders</h2>
              <p>Our finance cluster has produced successful investment advisors, financial planners, and banking professionals. Students gain real-world experience through stock market simulations and case competitions.</p>
              <p>Graduates have secured positions at major banks, investment firms, and financial planning companies across North America.</p>
            </div>
            <div className="success-stats">
              <div className="stat-card">
                <div className="stat-number">$2M+</div>
                <div className="stat-label">Portfolio Value Managed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">18</div>
                <div className="stat-label">Finance Scholarships Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ClusterResources clusterKey="finance" clusterName="Finance" />
    </div>
  );
};

export default Finance;
