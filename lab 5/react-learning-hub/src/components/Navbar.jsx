import React from 'react';

/**
 * Navbar Component
 * Displays the application title and navigation links using Bootstrap Navbar classes.
 */
const Navbar = ({ totalLearners, activeCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#home">
          <i className="bi bi-journal-code text-cyan fs-3 text-info"></i>
          <span>React Learning Hub</span>
          <span className="brand-badge ms-1">FSD Lab 5</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-lg-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                <i className="bi bi-house-door me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#learners">
                <i className="bi bi-people me-1"></i> Learners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#topics">
                <i className="bi bi-book me-1"></i> Topics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#test-controls">
                <i className="bi bi-sliders me-1"></i> Test Suite
              </a>
            </li>
          </ul>

          {/* Quick Metrics Badge */}
          <div className="d-flex align-items-center gap-2 text-light">
            <span className="badge bg-primary rounded-pill px-3 py-2">
              <i className="bi bi-person-fill me-1"></i> Total: {totalLearners}
            </span>
            <span className="badge bg-success rounded-pill px-3 py-2">
              <i className="bi bi-check-circle-fill me-1"></i> Active: {activeCount}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
