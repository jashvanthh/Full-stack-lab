import React from 'react';

/**
 * @param {{ title?: string, subtitle?: string }} props
 */
export default function WelcomeHeader({ title = '', subtitle = '' }) {
  return (
    <div className="welcome-header mb-3">
      <h2 className="fw-bold text-dark mb-2" style={{ fontSize: '2.25rem', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary mb-0 fs-6" style={{ maxWidth: '600px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
