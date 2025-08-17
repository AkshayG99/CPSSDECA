import React, { useState } from 'react';
import { executives } from '../data/info';
import './Executives.css';

const Executives = () => {
  const [selectedTeam, setSelectedTeam] = useState('presidents');

  const renderExecutiveCard = (executive, isPresident = false, isDirector = false) => (
    <div key={executive.name} className={`executive-card ${isPresident ? 'president-card' : ''} ${isDirector ? 'director-card' : ''}`}>
      <div className="executive-image">
        <div className="image-placeholder">
          <span className="placeholder-icon">👤</span>
        </div>
      </div>
      <div className="executive-info">
        <h3 className="executive-name">{executive.name}</h3>
        <p className="executive-role">{executive.role}</p>
      </div>
    </div>
  );

  const renderTeamSection = (title, members, isPresident = false, gridClass = 'grid-3') => (
    <section className="executives-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">{title}</h2>
        <div className={`executives-grid ${gridClass}`}>
          {Array.isArray(members) ? 
            members.map(member => renderExecutiveCard(member, isPresident)) :
            renderExecutiveCard(members, isPresident)
          }
        </div>
      </div>
    </section>
  );

  return (
    <div className="executives-page">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">Meet Your Executive Team</h1>
          </div>
        </div>
      </section>

      {/* Team Selection */}
      <section className="team-selection section-padding">
        <div className="container">
          <div className="team-tabs">
            <button 
              className={`team-tab ${selectedTeam === 'presidents' ? 'active' : ''}`}
              onClick={() => setSelectedTeam('presidents')}
            >
              Presidents
            </button>
            <button 
              className={`team-tab ${selectedTeam === 'core' ? 'active' : ''}`}
              onClick={() => setSelectedTeam('core')}
            >
              Core Team
            </button>
            <button 
              className={`team-tab ${selectedTeam === 'finance' ? 'active' : ''}`}
              onClick={() => setSelectedTeam('finance')}
            >
              Finance
            </button>
            <button 
              className={`team-tab ${selectedTeam === 'marketing' ? 'active' : ''}`}
              onClick={() => setSelectedTeam('marketing')}
            >
              Marketing
            </button>
            <button 
              className={`team-tab ${selectedTeam === 'business-admin' ? 'active' : ''}`}
              onClick={() => setSelectedTeam('business-admin')}
            >
              Business Admin
            </button>
            <button 
              className={`team-tab ${selectedTeam === 'hospitality' ? 'active' : ''}`}
              onClick={() => setSelectedTeam('hospitality')}
            >
              Hospitality
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Selection */}
      {(selectedTeam === 'presidents') && (
        <section className="executives-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Presidents</h2>
            <div className="presidents-grid">
              {executives.presidents.map(president => renderExecutiveCard(president, true))}
            </div>
          </div>
        </section>
      )}

      {(selectedTeam === 'all' || selectedTeam === 'core') && (
        <section className="executives-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Core Team</h2>
            <div className="cluster-row">
              {executives.leadership.map(leader => renderExecutiveCard(leader))}
            </div>
          </div>
        </section>
      )}

      {(selectedTeam === 'all' || selectedTeam === 'finance') && (
        <section className="executives-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Finance Team</h2>
            <div className="cluster-row">
              {renderExecutiveCard(executives.clusters.finance.director, false, true)}
              {executives.clusters.finance.trainers.map(trainer => renderExecutiveCard(trainer))}
            </div>
          </div>
        </section>
      )}

      {(selectedTeam === 'all' || selectedTeam === 'marketing') && (
        <section className="executives-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Marketing Team</h2>
            <div className="cluster-row">
              {executives.clusters.marketing.directors.map(director => renderExecutiveCard(director, false, true))}
              {executives.clusters.marketing.trainers.map(trainer => renderExecutiveCard(trainer))}
            </div>
          </div>
        </section>
      )}

      {(selectedTeam === 'all' || selectedTeam === 'business-admin') && (
        <section className="executives-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Business Admin Team</h2>
            <div className="cluster-row">
              {renderExecutiveCard(executives.clusters.businessAdmin.director, false, true)}
              {executives.clusters.businessAdmin.trainers.map(trainer => renderExecutiveCard(trainer))}
            </div>
          </div>
        </section>
      )}

      {(selectedTeam === 'all' || selectedTeam === 'hospitality') && (
        <section className="executives-section section-padding">
          <div className="container">
            <h2 className="section-title text-center">Hospitality Team</h2>
            <div className="cluster-row">
              {renderExecutiveCard(executives.clusters.hospitality.director, false, true)}
              {executives.clusters.hospitality.trainers.map(trainer => renderExecutiveCard(trainer))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Executives;
