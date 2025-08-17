import React, { useState } from 'react';
import { clusters } from '../data/info';
import './Clusters.css';

const Clusters = () => {
  const [activeCluster, setActiveCluster] = useState('marketing');

  const clusterData = {
    marketing: clusters.marketing,
    businessAdmin: clusters.businessAdmin,
    hospitality: clusters.hospitality,
    finance: clusters.finance
  };

  return (
    <div className="clusters-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">DECA Clusters</h1>
            <p className="hero-description">
              Explore our four specialized business clusters and find your passion
            </p>
          </div>
        </div>
      </section>

      {/* Cluster Navigation */}
      <section className="cluster-nav-section">
        <div className="container">
          <div className="cluster-nav">
            {Object.entries(clusterData).map(([key, cluster]) => (
              <button
                key={key}
                className={`cluster-nav-btn ${activeCluster === key ? 'active' : ''}`}
                onClick={() => setActiveCluster(key)}
              >
                <span className="cluster-icon">{cluster.icon}</span>
                <span className="cluster-name">{cluster.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Cluster Details */}
      <section className="cluster-details section-padding">
        <div className="container">
          <div className="cluster-content">
            <div className="cluster-header">
              <div className="cluster-title-section">
                <span className="cluster-large-icon">{clusterData[activeCluster].icon}</span>
                <div>
                  <h2 className="cluster-title">{clusterData[activeCluster].name}</h2>
                  <p className="cluster-description">{clusterData[activeCluster].description}</p>
                </div>
              </div>
            </div>

            <div className="cluster-info-grid grid grid-3">
              {/* Events */}
              <div className="info-card card">
                <h3 className="info-title">🎯 Upcoming Events</h3>
                <ul className="info-list">
                  {clusterData[activeCluster].events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="info-card card">
                <h3 className="info-title">📚 Resources</h3>
                <div className="resources-list">
                  {clusterData[activeCluster].resources.map((resource, index) => (
                    <div key={index} className="resource-item">
                      <h4>{resource.title}</h4>
                      <p>{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitions */}
              <div className="info-card card">
                <h3 className="info-title">🏆 Competitions</h3>
                <ul className="info-list">
                  {clusterData[activeCluster].competitions.map((competition, index) => (
                    <li key={index}>{competition}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Clusters Overview */}
      <section className="all-clusters-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">All Clusters at a Glance</h2>
          <div className="all-clusters-grid grid grid-2">
            {Object.entries(clusterData).map(([key, cluster]) => (
              <div key={key} className="cluster-overview-card card">
                <div className="cluster-overview-header">
                  <span className="cluster-icon">{cluster.icon}</span>
                  <h3>{cluster.name}</h3>
                </div>
                <p>{cluster.description}</p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveCluster(key)}
                >
                  Explore {cluster.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="join-cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Join a Cluster?</h2>
            <p>Connect with like-minded students and develop your business skills</p>
            <a href="/contact" className="btn btn-primary">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clusters;
