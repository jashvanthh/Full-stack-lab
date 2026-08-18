import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar navbar-expand navbar-light bg-white border-bottom py-3 px-3 px-md-4">
      <div className="container-fluid max-w-6xl">
        <a 
          className="navbar-brand fw-bold fs-4 text-dark me-auto" 
          href="#" 
          onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
        >
          ReactLearn
        </a>
        <div className="navbar-nav gap-2 gap-md-4 align-items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`nav-link btn btn-link text-decoration-none px-2 fw-semibold position-relative border-0 ${
                  isActive ? 'text-primary active-nav-item' : 'text-dark opacity-75'
                }`}
                style={{ background: 'none', cursor: 'pointer' }}
              >
                {item.label}
                {isActive && (
                  <span 
                    className="position-absolute bottom-0 start-0 end-0 bg-primary rounded-pill"
                    style={{ height: '3px', marginBottom: '-8px' }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
