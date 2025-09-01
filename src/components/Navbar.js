import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clustersOpen, setClustersOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);
  const location = useLocation();

  // Handle window resize for mobile view detection
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/executives', label: 'Executives' },
    { path: '/memories', label: 'Memories' },
    { path: '/calendar', label: 'Calendar' }
  ];
  
  const clusterItems = [
    { path: '/clusters/marketing', label: 'Marketing' },
    { path: '/clusters/business-admin', label: 'Business Admin' },
    { path: '/clusters/hospitality', label: 'Hospitality & Tourism' },
    { path: '/clusters/finance', label: 'Finance' }
  ];

  // Helper function to determine active link
  const isActive = (path) => {
    const currentPath = window.location.pathname;
    const basePath = '/CPSSDECA';
    
    // If we're checking a cluster path
    if (path === '/clusters') {
      return currentPath.includes('/clusters/') || 
             currentPath.endsWith('/clusters') ||
             currentPath.includes(`${basePath}/clusters/`) ||
             currentPath.endsWith(`${basePath}/clusters`);
    }
    
    // For all other paths
    return currentPath === path || 
           currentPath === `${path}/` ||
           (basePath && (currentPath === `${basePath}${path}` || 
                         currentPath === `${basePath}${path}/`));
  };

  // Close dropdown when clicking outside or when route changes
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (clustersOpen && !event.target.closest('.nav-dropdown')) {
        setClustersOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clustersOpen]);

  // Close dropdown when route changes
  React.useEffect(() => {
    setClustersOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <img src={`${process.env.PUBLIC_URL}/deca-logo.png`} alt="DECA Logo" className="logo-image" />
            <span className="logo-text">CPSS DECA</span>
          </Link>
          
          <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => {
                  setIsOpen(false);
                  setClustersOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            
            <div 
              className={`nav-dropdown ${clustersOpen ? 'dropdown-open' : ''}`}
              onMouseEnter={() => !isMobileView && setClustersOpen(true)}
              onMouseLeave={() => !isMobileView && setClustersOpen(false)}
            >
              <button 
                className={`nav-link dropdown-trigger ${isActive('/clusters') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setClustersOpen(prev => !prev);
                }}
                aria-expanded={clustersOpen}
                aria-haspopup="true"
              >
                Clusters
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                {clusterItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => { 
                      setIsOpen(false); 
                      setClustersOpen(false); 
                    }}
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
