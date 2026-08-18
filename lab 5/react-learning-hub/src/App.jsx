import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WelcomeHeader from './components/WelcomeHeader';
import LearnerCard from './components/LearnerCard';
import TopicList from './components/TopicList';
import Footer from './components/Footer';

/**
 * Initial Learner Data Array (Requirement 8 & 9)
 */
const initialLearners = [
  {
    id: 101,
    name: 'Aarav Sharma',
    role: 'Frontend Developer Trainee',
    skill: 'React Components & Props',
    status: 'Active',
  },
  {
    id: 102,
    name: 'Priya Patel',
    role: 'Full Stack Learner',
    skill: 'Conditional Rendering & Hooks',
    status: 'Active',
  },
  {
    id: 103,
    name: 'Rohan Gupta',
    role: 'UI/UX Designer & Dev',
    skill: 'Bootstrap Grid & Styling',
    status: 'Inactive',
  },
  {
    id: 104,
    name: 'Ananya Verma',
    role: 'Software Engineering Intern',
    skill: 'React Fragments & JSX',
    status: 'Active',
  },
  {
    id: 105,
    name: 'Vikram Singh',
    role: 'Junior Web Developer',
    skill: 'State & Event Handling',
    status: 'Inactive',
  },
];

/**
 * Initial React Topics Array (Requirement 9)
 */
const reactTopics = [
  {
    id: 1,
    title: 'Vite & Project Scaffolding',
    description: 'Fast modern build tooling and dev server setup for React applications.',
    icon: 'bi-lightning-charge-fill',
    difficulty: 'Core',
  },
  {
    id: 2,
    title: 'Custom Components & Modular Architecture',
    description: 'Building reusable, encapsulated UI components with clean imports/exports.',
    icon: 'bi-box-seam-fill',
    difficulty: 'Core',
  },
  {
    id: 3,
    title: 'Props & Unidirectional Data Flow',
    description: 'Passing data seamlessly from parent components down to child components.',
    icon: 'bi-arrow-down-up',
    difficulty: 'Core',
  },
  {
    id: 4,
    title: 'Dynamic Array Rendering & Unique Keys',
    description: 'Rendering lists using JavaScript map() with unique key prop identification.',
    icon: 'bi-list-stars',
    difficulty: 'Core',
  },
  {
    id: 5,
    title: 'Bootstrap 5 Integration',
    description: 'Styling components with responsive grid system, cards, badges, and list groups.',
    icon: 'bi-bootstrap-fill',
    difficulty: 'Intermediate',
  },
  {
    id: 6,
    title: 'Conditional Rendering & Custom Messages',
    description: 'Dynamically displaying visual elements and messages based on state values.',
    icon: 'bi-diagram-3-fill',
    difficulty: 'Intermediate',
  },
  {
    id: 7,
    title: 'React Fragments (<React.Fragment> & <></>)',
    description: 'Grouping multiple JSX elements without introducing unnecessary wrapper DOM nodes.',
    icon: 'bi-code-slash',
    difficulty: 'Intermediate',
  },
];

function App() {
  // State for learners array (allows dynamic modification and empty-state testing)
  const [learners, setLearners] = useState(initialLearners);

  // New learner form inputs state
  const [newLearner, setNewLearner] = useState({
    name: '',
    role: '',
    skill: '',
    status: 'Active',
  });

  // Show/Hide Add Learner Form toggle
  const [showAddForm, setShowAddForm] = useState(false);

  // Toggle status of a specific learner (Active <-> Inactive)
  const handleToggleStatus = (id) => {
    setLearners((prevLearners) =>
      prevLearners.map((learner) =>
        learner.id === id
          ? {
              ...learner,
              status: learner.status === 'Active' ? 'Inactive' : 'Active',
            }
          : learner
      )
    );
  };

  // Clear all learners to test Empty State (Test Case 3)
  const handleClearLearners = () => {
    setLearners([]);
  };

  // Restore initial learner list
  const handleRestoreLearners = () => {
    setLearners(initialLearners);
  };

  // Add a new learner dynamically (Test Case 4)
  const handleAddLearnerSubmit = (e) => {
    e.preventDefault();
    if (!newLearner.name.trim() || !newLearner.skill.trim()) return;

    const createdLearner = {
      id: Date.now(),
      name: newLearner.name.trim(),
      role: newLearner.role.trim() || 'React Developer',
      skill: newLearner.skill.trim(),
      status: newLearner.status,
    };

    setLearners((prev) => [createdLearner, ...prev]);
    setNewLearner({ name: '', role: '', skill: '', status: 'Active' });
    setShowAddForm(false);
  };

  // Calculate stats
  const activeCount = learners.filter((l) => l.status.toLowerCase() === 'active').length;

  return (
    // Explicit React.Fragment usage demonstrating Fragment root (Requirement 14)
    <React.Fragment>
      {/* Navigation Bar Component */}
      <Navbar totalLearners={learners.length} activeCount={activeCount} />

      <main className="container py-4 flex-grow-1">
        {/* Welcome Header Component (Demonstrates Fragment shorthand <>...</>) */}
        <section id="home">
          <WelcomeHeader />
        </section>

        {/* Test Control & Assignment Verification Panel (Requirement 15) */}
        <section id="test-controls" className="mb-4">
          <div className="control-panel p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
              <div>
                <h5 className="fw-bold text-dark mb-1 d-flex align-items-center gap-2">
                  <i className="bi bi-flask-fill text-primary"></i> Lab 5 Assignment Test Suite
                </h5>
                <p className="text-muted small mb-0">
                  Interactive controls to verify Test Case 1 to 5 required by lab evaluation criteria.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {/* Button to toggle Add Learner Form (Test Case 4) */}
                <button
                  className="btn btn-primary rounded-pill px-3 fw-semibold"
                  onClick={() => setShowAddForm(!showAddForm)}
                >
                  <i className={`bi ${showAddForm ? 'bi-dash-circle' : 'bi-plus-circle'} me-1`}></i>
                  {showAddForm ? 'Close Form' : 'Add Learner (Test Case 4)'}
                </button>

                {/* Button to test Empty State (Test Case 3) */}
                {learners.length > 0 ? (
                  <button
                    className="btn btn-outline-danger rounded-pill px-3 fw-semibold"
                    onClick={handleClearLearners}
                    title="Remove all learners to test empty state warning message"
                  >
                    <i className="bi bi-trash3 me-1"></i> Empty List (Test Case 3)
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-success rounded-pill px-3 fw-semibold"
                    onClick={handleRestoreLearners}
                  >
                    <i className="bi bi-arrow-counterclockwise me-1"></i> Restore Learner List
                  </button>
                )}
              </div>
            </div>

            {/* Dynamic Add Learner Form (Test Case 4) */}
            {showAddForm && (
              <div className="mt-4 pt-3 border-top bg-light p-3 rounded-3">
                <h6 className="fw-bold mb-3 text-primary">
                  <i className="bi bi-person-plus-fill me-1"></i> Add New Learner
                </h6>
                <form onSubmit={handleAddLearnerSubmit}>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Learner Full Name *"
                        value={newLearner.name}
                        onChange={(e) => setNewLearner({ ...newLearner, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Role / Title (e.g. Intern)"
                        value={newLearner.role}
                        onChange={(e) => setNewLearner({ ...newLearner, role: e.target.value })}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Learning Skill / Focus *"
                        value={newLearner.skill}
                        onChange={(e) => setNewLearner({ ...newLearner, skill: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select"
                        value={newLearner.status}
                        onChange={(e) => setNewLearner({ ...newLearner, status: e.target.value })}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    <div className="col-md-1">
                      <button type="submit" className="btn btn-success w-100 fw-bold">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Learner Cards Section */}
        <section id="learners" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h3 className="fw-bold mb-1 text-dark">Learner Roster</h3>
              <p className="text-muted small mb-0">
                Learners passed via props & dynamically rendered with conditional status styling.
              </p>
            </div>
            {learners.length > 0 && (
              <span className="badge bg-secondary rounded-pill px-3 py-2">
                Showing {learners.length} learners
              </span>
            )}
          </div>

          {/* Conditional Rendering for Empty-State vs Learner Cards List (Requirement 13) */}
          {learners.length > 0 ? (
            <div className="row">
              {/* Dynamic Array Rendering using map() with Unique Keys (Requirement 9) */}
              {learners.map((learner) => (
                <LearnerCard
                  key={learner.id}
                  learner={learner}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
            </div>
          ) : (
            /* Empty State Alert Message (Requirement 13 & Test Case 3) */
            <div className="alert alert-warning border-warning shadow-sm rounded-4 p-4 text-center my-4">
              <div className="display-6 text-warning mb-2">
                <i className="bi bi-exclamation-triangle-fill"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">No Learners Available</h4>
              <p className="text-muted max-w-md mx-auto mb-3">
                There are currently no learners in the roster. This empty-state message is conditionally rendered when the learner dataset is empty.
              </p>
              <button
                className="btn btn-warning fw-bold rounded-pill px-4"
                onClick={handleRestoreLearners}
              >
                <i className="bi bi-arrow-counterclockwise me-2"></i> Restore Learner Data
              </button>
            </div>
          )}
        </section>

        {/* React Topics Section (Bootstrap List Group) */}
        <section id="topics">
          <TopicList topics={reactTopics} />
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
