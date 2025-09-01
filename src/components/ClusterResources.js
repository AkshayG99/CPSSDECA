import React from 'react';
import { resources } from '../data/info';
import './ClusterResources.css';

const ClusterResources = ({ clusterKey, clusterName }) => {
  const clusterResources = resources[clusterKey];

  return (
    <section className="cluster-resources-section section-padding bg-light">
      <div className="container">
        <h2 className="section-title text-center">{clusterName} Resources</h2>
        <div className="resources-grid grid grid-4">
          <a href={clusterResources.sampleCases} target="_blank" rel="noopener noreferrer" className="resource-card card">
            <div className="resource-icon">📋</div>
            <h3>Sample Cases</h3>
            <p>Practice with {clusterName} case studies and scenarios</p>
          </a>
          <a href={clusterResources.performanceIndicators} target="_blank" rel="noopener noreferrer" className="resource-card card">
            <div className="resource-icon">📊</div>
            <h3>Performance Indicators</h3>
            <p>Key metrics for {clusterName} competitions</p>
          </a>
          <a href={clusterResources.instructionalAreas} target="_blank" rel="noopener noreferrer" className="resource-card card">
            <div className="resource-icon">📚</div>
            <h3>Instructional Areas</h3>
            <p>Core concepts in {clusterName}</p>
          </a>
          <a href={clusterResources.practiceExams} target="_blank" rel="noopener noreferrer" className="resource-card card">
            <div className="resource-icon">✏️</div>
            <h3>Practice Exams</h3>
            <p>Test your {clusterName} knowledge</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClusterResources;
