import React from 'react';
import { clusters } from '../../data/info';
import ClusterResources from '../../components/ClusterResources';
import './ClusterPage.css';

const Marketing = () => {
  const cluster = clusters.marketing;

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
              <h2 className="section-title">Marketing Success at CPSS</h2>
              <p>Our marketing cluster has consistently excelled at provincial competitions, with members winning top placements in advertising campaigns and marketing communications.</p>
              <p>Students have gone on to pursue marketing degrees at top universities and secure internships at leading advertising agencies.</p>
            </div>
            <div className="success-stats">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Provincial Winners</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Years Running</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ClusterResources clusterKey="marketing" clusterName="Marketing" />
    </div>
  );
};

export default Marketing;
