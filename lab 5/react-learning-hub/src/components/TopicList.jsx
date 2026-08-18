import React from 'react';

/**
 * TopicList Component
 * Renders an array of React topics using a Bootstrap List Group dynamically with unique keys.
 */
const TopicList = ({ topics }) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-5">
      <div className="card-header bg-dark text-white p-4 d-flex justify-content-between align-items-center">
        <div>
          <h4 className="card-title fw-bold mb-1 d-flex align-items-center gap-2">
            <i className="bi bi-stack text-info"></i> React Curriculum & Topics
          </h4>
          <p className="card-subtitle text-light opacity-75 small mb-0">
            Core concepts demonstrated dynamically in React Learning Hub
          </p>
        </div>
        <span className="badge bg-info text-dark rounded-pill px-3 py-2 fw-bold">
          {topics.length} Modules
        </span>
      </div>

      <div className="card-body p-4 bg-light">
        {/* Bootstrap List Group (Requirement 7 & 10) */}
        <ul className="list-group custom-list-group shadow-sm">
          {topics.map((topic) => (
            <li
              key={topic.id}
              className="list-group-item d-flex justify-content-between align-items-center p-3 border-0 bg-white mb-2 rounded-3"
            >
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle text-primary p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <i className={`bi ${topic.icon || 'bi-code-square'} fs-5`}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">{topic.title}</h6>
                  <small className="text-muted">{topic.description}</small>
                </div>
              </div>
              <span className={`badge ${topic.difficulty === 'Core' ? 'bg-primary' : topic.difficulty === 'Intermediate' ? 'bg-warning text-dark' : 'bg-success'} rounded-pill px-3 py-2`}>
                {topic.difficulty}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicList;
