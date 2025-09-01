import React from 'react';
import { clusters } from '../../data/info';
import ClusterResources from '../../components/ClusterResources';
import './ClusterPage.css';

const Hospitality = () => {
  const cluster = clusters.hospitality;

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
              <h2 className="section-title">Creating Exceptional Experiences</h2>
              <p>Our hospitality cluster has produced award-winning event planners and hotel managers. Students gain simulated hands-on experience through case studies.</p>
              <p>Many graduates have secured positions at luxury hotels, event management companies, and tourism boards across Canada.</p>
            </div>
            <div className="success-stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Partnered Companies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30+</div>
                <div className="stat-label">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ClusterResources clusterKey="hospitality" clusterName="Hospitality & Tourism" />
    </div>
  );
};

export default Hospitality;
