import React from 'react';

/**
 * Footer Component
 * Displays the application name, Lab details, and dynamic current year.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-auto border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold mb-1 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-journal-code text-info"></i> React Learning Hub
            </h5>
            <p className="text-muted small mb-0">
              Full Stack Development Lab Assignment 5 &bull; Vite, Components, Props & Fragments
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-light opacity-75">
              &copy; {currentYear} <strong>React Learning Hub</strong>. All rights reserved.
            </p>
            <small className="text-muted">Built with React + Vite & Bootstrap</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
