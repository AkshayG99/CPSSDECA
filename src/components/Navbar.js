import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clustersOpen, setClustersOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/executives', label: 'Executives' },
    { path: '/memories', label: 'Memories' }
  ];

  const clusterItems = [
    { path: '/clusters/marketing', label: 'Marketing' },
    { path: '/clusters/business-admin', label: 'Business Admin' },
    { path: '/clusters/hospitality', label: 'Hospitality & Tourism' },
    { path: '/clusters/finance', label: 'Finance' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <img src="/deca-logo.png" alt="DECA Logo" className="logo-image" />
            <span className="logo-text">CPSS DECA</span>
          </Link>
          
          <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div 
              className={`nav-dropdown ${clustersOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => setClustersOpen(true)}
              onMouseLeave={() => setClustersOpen(false)}
            >
              <span className={`nav-link dropdown-trigger ${location.pathname.startsWith('/clusters') ? 'active' : ''}`}>
                Clusters ▼
              </span>
              <div className="dropdown-menu">
                {clusterItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => { setIsOpen(false); setClustersOpen(false); }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
