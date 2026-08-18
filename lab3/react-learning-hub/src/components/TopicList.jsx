import React from 'react';

/**
 * @param {{ items?: any[], selectedIndex?: number, onSelect?: ((index: number) => void) | null, type?: string }} props
 */
export default function TopicList({ items = [], selectedIndex = 0, onSelect = null, type = 'courses' }) {
  if (type === 'highlights') {
    return (
      <div className="d-flex flex-column gap-3 mt-3">
        {items.map((highlight, index) => (
          <div key={index} className="d-flex align-items-center gap-3">
            <div 
              className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: '22px', height: '22px', fontSize: '12px' }}
            >
              <i className="bi bi-check-lg"></i>
            </div>
            <span className="fw-semibold text-dark small">{highlight}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="list-group border-0 shadow-sm rounded-3 overflow-hidden">
      {items.map((course, index) => {
        const isActive = selectedIndex === index;
        const title = typeof course === 'string' ? course : course.title;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect && onSelect(index)}
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3 px-4 border-light-subtle text-start ${
              isActive 
                ? 'bg-primary text-white active fw-semibold' 
                : 'bg-white text-dark fw-medium'
            }`}
            style={{ transition: 'all 0.15s ease-in-out' }}
          >
            <span>{title}</span>
            <span className={`fs-5 ${isActive ? 'text-white' : 'text-secondary'}`}>
              &rsaquo;
            </span>
          </button>
        );
      })}
    </div>
  );
}
