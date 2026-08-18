import React from 'react';

/**
 * WelcomeHeader Component
 * Displays application introduction, heading, and overview cards.
 * Demonstrates the use of React Fragment shorthand syntax (<>...</>) to group elements cleanly.
 */
const WelcomeHeader = () => {
  return (
    <>
      <div className="welcome-hero p-4 p-md-5 mb-4 position-relative">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <span className="badge bg-info text-dark px-3 py-2 rounded-pill fw-semibold mb-3">
              <i className="bi bi-rocket-takeoff-fill me-1"></i> Interactive Learning Portal
            </span>
            <h1 className="display-5 fw-extrabold mb-3">Welcome to React Learning Hub</h1>
            <p className="lead text-light-50 mb-4 opacity-90">
              Master modern frontend architecture using Vite, custom reusable components, props-based data flow,
              dynamic array rendering, Bootstrap UI, conditional logic, and React Fragments.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#learners" className="btn btn-info btn-lg text-dark fw-bold rounded-pill px-4 me-2">
                <i className="bi bi-people-fill me-2"></i> View Learners
              </a>
              <a href="#topics" className="btn btn-outline-light btn-lg rounded-pill px-4">
                <i className="bi bi-list-check me-2"></i> Explore Topics
              </a>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block text-center position-relative">
            <div className="p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-25 shadow text-start text-white">
              <h5 className="fw-bold mb-2">
                <i className="bi bi-lightbulb-fill text-warning me-2"></i> Lab 5 Objectives
              </h5>
              <ul className="list-unstyled mb-0 small text-light opacity-90">
                <li className="mb-2"><i className="bi bi-check2-circle text-info me-2"></i> Custom Components & Props</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-info me-2"></i> Array Rendering & Keys</li>
                <li className="mb-2"><i className="bi bi-check2-circle text-info me-2"></i> Conditional Messages</li>
                <li className="mb-0"><i className="bi bi-check2-circle text-info me-2"></i> React Fragment Grouping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;
