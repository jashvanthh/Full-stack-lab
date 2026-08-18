import React from 'react';

/**
 * LearnerCard Component
 * Displays learner info passed via props.
 * Demonstrates conditional rendering (status visual indicators and dynamic custom messages).
 */
const LearnerCard = ({ learner, onToggleStatus }) => {
  const { id, name, role, skill, status } = learner;

  // Determine if learner is active
  const isActive = status.toLowerCase() === 'active';

  // Dynamic custom message generation based on status and learner data (Requirement 11 & 12)
  const customMessage = isActive
    ? `${name} is actively learning React with a focus on ${skill}. Keep up the momentum!`
    : `${name} is currently taking a break from React learning. Previous focus was ${skill}.`;

  // Get initials for avatar display
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className={`card h-100 learner-card ${isActive ? 'active-card' : 'inactive-card'}`}>
        <div className="card-body p-4 d-flex flex-column">
          {/* Card Header with Avatar & Status Badge */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center gap-3">
              <div className={`learner-avatar ${isActive ? 'active-avatar' : 'inactive-avatar'}`}>
                {initials}
              </div>
              <div>
                <h5 className="card-title fw-bold mb-0 text-dark">{name}</h5>
                <small className="text-muted fw-semibold">{role}</small>
              </div>
            </div>
            {/* Conditional Status Badge (Requirement 11) */}
            {isActive ? (
              <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill fw-bold">
                <span className="pulse-dot active"></span> Active
              </span>
            ) : (
              <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle px-3 py-2 rounded-pill fw-semibold">
                <span className="pulse-dot inactive"></span> Inactive
              </span>
            )}
          </div>

          {/* Skill / Focus Info */}
          <div className="mb-3">
            <div className="small text-uppercase text-muted fw-bold mb-1">Learning Focus</div>
            <span className="badge bg-light text-primary border border-primary-subtle px-3 py-2 rounded-3 fs-7 fw-semibold">
              <i className="bi bi-code-slash me-1"></i> {skill}
            </span>
          </div>

          {/* Conditional Custom Message Box (Requirement 11 & 12) */}
          <div className={`learner-msg-box mt-auto ${isActive ? 'bg-success-subtle text-success-emphasis border border-success-subtle' : 'bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle'}`}>
            <div className="d-flex align-items-start gap-2">
              <i className={`bi ${isActive ? 'bi-check-circle-fill text-success' : 'bi-pause-circle-fill text-secondary'} fs-5 mt-1`}></i>
              <div>
                <strong className="d-block mb-1">{isActive ? 'Status Message:' : 'Status Message:'}</strong>
                <span>{customMessage}</span>
              </div>
            </div>
          </div>

          {/* Interactive Action Button to Toggle Status */}
          <div className="mt-3 pt-2 border-top d-flex justify-content-between align-items-center">
            <small className="text-muted">ID: #{id}</small>
            <button
              onClick={() => onToggleStatus(id)}
              className={`btn btn-sm ${isActive ? 'btn-outline-secondary' : 'btn-outline-success'} rounded-pill px-3`}
              title="Toggle status to test Active/Inactive conditional rendering"
            >
              <i className={`bi ${isActive ? 'bi-pause-fill' : 'bi-play-fill'} me-1`}></i>
              Mark {isActive ? 'Inactive' : 'Active'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerCard;
