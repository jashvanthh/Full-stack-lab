import React from 'react';

/**
 * @param {{ 
 *   type?: string, 
 *   icon?: any, 
 *   title?: string, 
 *   description?: string, 
 *   iconBgColor?: string, 
 *   iconColor?: string, 
 *   onAction?: (() => void) | null, 
 *   email?: string, 
 *   phone?: string, 
 *   location?: string 
 * }} props
 */
export default function LearnerCard({ 
  type = 'feature', 
  icon = null, 
  title = '', 
  description = '', 
  iconBgColor = '', 
  iconColor = '',
  onAction = () => {}, 
  email = 'info@reactlearn.com', 
  phone = '+91 98765 43210', 
  location = 'Bangalore, India' 
}) {
  if (type === 'feature') {
    return (
      <div className="card h-100 border border-light-subtle shadow-sm rounded-4 p-3 bg-white feature-card">
        <div className="card-body d-flex flex-column align-items-start">
          <div 
            className="rounded-3 d-flex align-items-center justify-content-center mb-3 fs-4"
            style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: iconBgColor || '#f8f9fa',
              color: iconColor || '#0d6efd'
            }}
          >
            {icon}
          </div>
          <h5 className="card-title fw-bold text-dark mb-2">{title}</h5>
          <p className="card-text text-secondary small mb-0 lh-sm">{description}</p>
        </div>
      </div>
    );
  }

  if (type === 'courseDetail') {
    return (
      <div className="card border border-light-subtle shadow-sm rounded-4 p-4 bg-white h-100">
        <div className="card-body d-flex flex-column align-items-start justify-content-between p-0">
          <div>
            <h4 className="fw-bold text-dark mb-3">{title}</h4>
            <p className="text-secondary small mb-4 lh-base">{description}</p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary px-4 py-2 fw-medium rounded-2"
            onClick={onAction || undefined}
          >
            View Details
          </button>
        </div>
      </div>
    );
  }

  if (type === 'contactInfo') {
    return (
      <div className="card border border-light-subtle shadow-sm rounded-4 p-4 bg-light-subtle h-100" style={{ backgroundColor: '#f8fafc' }}>
        <div className="card-body p-0">
          <h5 className="fw-bold text-dark mb-4">Contact Information</h5>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '40px', height: '40px' }}
              >
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <div className="text-secondary small fw-semibold">Email</div>
                <div className="fw-bold text-dark small">{email}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div 
                className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '40px', height: '40px' }}
              >
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <div className="text-secondary small fw-semibold">Phone</div>
                <div className="fw-bold text-dark small">{phone}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div 
                className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '40px', height: '40px' }}
              >
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <div className="text-secondary small fw-semibold">Location</div>
                <div className="fw-bold text-dark small">{location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
