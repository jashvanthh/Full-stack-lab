import React, { useState } from 'react';
// @ts-ignore
import Navbar from './components/Navbar.jsx';
// @ts-ignore
import WelcomeHeader from './components/WelcomeHeader.jsx';
// @ts-ignore
import TopicList from './components/TopicList.jsx';
// @ts-ignore
import LearnerCard from './components/LearnerCard.jsx';
// @ts-ignore
import Footer from './components/Footer.jsx';
import './App.css';

interface Course {
  id: string;
  title: string;
  description: string;
}

const COURSES_DATA: Course[] = [
  {
    id: 'react-beginners',
    title: 'React for Beginners',
    description: 'Learn the basics of React, components, props, state and more.'
  },
  {
    id: 'advanced-react',
    title: 'Advanced React',
    description: 'Master advanced React patterns, performance optimization, and custom hooks.'
  },
  {
    id: 'react-router',
    title: 'React Router & Navigation',
    description: 'Learn dynamic routing, nested routes, and navigation strategies in React apps.'
  },
  {
    id: 'state-management',
    title: 'State Management with Context API',
    description: 'Manage global application state efficiently using Context API and Redux.'
  },
  {
    id: 'react-hooks',
    title: 'React Hooks Deep Dive',
    description: 'Deep dive into useState, useEffect, useMemo, useCallback and custom hooks.'
  },
  {
    id: 'fullstack-react',
    title: 'Full Stack Development with React',
    description: 'Build full-stack applications combining React with backend APIs and databases.'
  }
];

const ABOUT_HIGHLIGHTS = [
  'Component based architecture',
  'Props for passing data',
  'Bootstrap for styling',
  'React Router for navigation',
  'Responsive design'
];

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<number>(0);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const selectedCourse = COURSES_DATA[selectedCourseIndex] || COURSES_DATA[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container */}
      <main className="container max-w-6xl py-4 py-md-5 flex-grow-1">
        {/* ----------------- 1. HOME PAGE ----------------- */}
        {activeTab === 'home' && (
          <div className="d-flex flex-column gap-4 gap-md-5">
            {/* Hero Card */}
            <div className="hero-box rounded-4 p-4 p-md-5 bg-light-blue position-relative overflow-hidden">
              <div className="row align-items-center">
                <div className="col-lg-7 mb-4 mb-lg-0">
                  <WelcomeHeader
                    title="Learn React the Modern Way"
                    subtitle="This is a simple React application built with Vite, custom components and Bootstrap."
                  />
                  <button
                    type="button"
                    className="btn btn-primary px-4 py-2 mt-3 fw-medium rounded-2"
                    onClick={() => setActiveTab('courses')}
                  >
                    Explore Courses
                  </button>
                </div>
                <div className="col-lg-5 text-center">
                  <div className="hero-illustration-wrapper position-relative d-inline-block">
                    {/* SVG Illustration matching screenshot 1 */}
                    <svg viewBox="0 0 340 220" className="img-fluid hero-illustration" style={{ maxHeight: '200px' }}>
                      {/* Background pill */}
                      <rect x="20" y="30" width="300" height="160" rx="80" fill="#e0f2fe" opacity="0.6" />
                      {/* Plant Left */}
                      <path d="M 65 130 C 55 110, 45 120, 55 105 C 65 90, 75 110, 65 130 Z" fill="#4ade80" />
                      <path d="M 65 130 C 75 115, 85 125, 75 110 C 65 95, 55 115, 65 130 Z" fill="#22c55e" />
                      <path d="M 60 130 L 70 130 L 67 150 L 63 150 Z" fill="#0284c7" />
                      {/* Monitor Frame */}
                      <rect x="90" y="25" width="170" height="115" rx="8" fill="#1e293b" />
                      <rect x="96" y="31" width="158" height="103" rx="4" fill="#0f172a" />
                      {/* React Atom Logo on screen */}
                      <circle cx="175" cy="82.5" r="8" fill="#38bdf8" />
                      <ellipse cx="175" cy="82.5" rx="35" ry="12" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(0, 175, 82.5)" />
                      <ellipse cx="175" cy="82.5" rx="35" ry="12" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(60, 175, 82.5)" />
                      <ellipse cx="175" cy="82.5" rx="35" ry="12" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(120, 175, 82.5)" />
                      {/* Monitor Stand */}
                      <rect x="165" y="140" width="20" height="20" fill="#94a3b8" />
                      <rect x="145" y="160" width="60" height="6" rx="3" fill="#cbd5e1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards Row */}
            <div className="row g-3 g-md-4">
              <div className="col-md-4">
                <LearnerCard
                  type="feature"
                  icon={<i className="bi bi-lightning-charge-fill"></i>}
                  iconBgColor="#fef9c3"
                  iconColor="#ca8a04"
                  title="Fast"
                  description="Built with Vite for blazing fast development."
                />
              </div>
              <div className="col-md-4">
                <LearnerCard
                  type="feature"
                  icon={<i className="bi bi-box-fill"></i>}
                  iconBgColor="#dbeafe"
                  iconColor="#2563eb"
                  title="Reusable"
                  description="Using reusable React components."
                />
              </div>
              <div className="col-md-4">
                <LearnerCard
                  type="feature"
                  icon={<i className="bi bi-bootstrap-fill"></i>}
                  iconBgColor="#f3e8ff"
                  iconColor="#9333ea"
                  title="Responsive"
                  description="Styled with Bootstrap to build responsive UI."
                />
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 2. ABOUT PAGE ----------------- */}
        {activeTab === 'about' && (
          <div className="d-flex flex-column gap-4">
            <WelcomeHeader title="About This App" />
            <p className="text-secondary fs-6 mb-4 max-w-3xl" style={{ maxWidth: '750px' }}>
              This application demonstrates how to build a React application using Vite, create reusable components and integrate Bootstrap components like List Group.
            </p>

            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <h5 className="fw-bold text-dark mb-3">Key Highlights</h5>
                <TopicList items={ABOUT_HIGHLIGHTS} type="highlights" />
              </div>

              <div className="col-lg-6 text-center">
                <div className="about-illustration-wrapper position-relative d-inline-block">
                  {/* SVG Illustration matching screenshot 2 */}
                  <svg viewBox="0 0 340 220" className="img-fluid" style={{ maxHeight: '220px' }}>
                    {/* Background shape */}
                    <path d="M 40 40 Q 170 10, 300 40 Q 330 110, 300 180 Q 170 210, 40 180 Q 10 110, 40 40 Z" fill="#e0f2fe" opacity="0.7" />
                    {/* Laptop Screen */}
                    <rect x="70" y="45" width="170" height="110" rx="8" fill="#1e293b" />
                    <rect x="76" y="51" width="158" height="98" rx="4" fill="#0f172a" />
                    {/* </ > Symbol on Screen */}
                    <text x="155" y="112" fill="#38bdf8" fontSize="36" fontFamily="monospace" fontWeight="bold" textAnchor="middle">&lt;/&gt;</text>
                    {/* Laptop Base */}
                    <path d="M 50 155 L 260 155 Q 265 155 260 162 L 245 168 Q 240 170 235 170 L 75 170 Q 70 170 65 168 L 50 162 Q 45 155 50 155 Z" fill="#cbd5e1" />
                    {/* Plant Right */}
                    <path d="M 275 140 C 265 120, 255 130, 265 115 C 275 100, 285 120, 275 140 Z" fill="#4ade80" />
                    <path d="M 275 140 C 285 125, 295 135, 285 120 C 275 105, 265 125, 275 140 Z" fill="#22c55e" />
                    <path d="M 270 140 L 280 140 L 277 160 L 273 160 Z" fill="#2563eb" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 3. COURSES PAGE ----------------- */}
        {activeTab === 'courses' && (
          <div className="d-flex flex-column gap-4">
            <WelcomeHeader
              title="Our Popular Courses"
              subtitle="Explore our list of courses below."
            />

            <div className="row g-4">
              {/* Left Column: Bootstrap List Group */}
              <div className="col-lg-6">
                <TopicList
                  type="courses"
                  items={COURSES_DATA}
                  selectedIndex={selectedCourseIndex}
                  onSelect={(idx: number) => setSelectedCourseIndex(idx)}
                />
              </div>

              {/* Right Column: Course Detail Card */}
              <div className="col-lg-6">
                <LearnerCard
                  type="courseDetail"
                  title={selectedCourse.title}
                  description={selectedCourse.description}
                  onAction={() => alert(`Enrolled in ${selectedCourse.title}!`)}
                />
              </div>
            </div>

            {/* Bottom Alert Banner */}
            <div className="alert border-0 rounded-3 p-3 d-flex align-items-center gap-3 mt-3" style={{ backgroundColor: '#fef3c7', color: '#78350f' }}>
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '32px', height: '32px', backgroundColor: '#fde68a', color: '#b45309' }}
              >
                <i className="bi bi-lightbulb-fill"></i>
              </div>
              <span className="small fw-medium">
                This page uses Bootstrap List Group to display the list of courses.
              </span>
            </div>
          </div>
        )}

        {/* ----------------- 4. CONTACT PAGE ----------------- */}
        {activeTab === 'contact' && (
          <div className="d-flex flex-column gap-4">
            <WelcomeHeader
              title="Contact Us"
              subtitle="We would love to hear from you!"
            />

            <div className="row g-4">
              {/* Left Column: Contact Form */}
              <div className="col-lg-7">
                {formSubmitted ? (
                  <div className="alert alert-success rounded-4 p-4 mb-0">
                    <h5 className="fw-bold mb-2">Thank you!</h5>
                    <p className="mb-0">Your message has been received. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <label className="form-label fw-semibold small text-dark">Your Name</label>
                      <input
                        type="text"
                        className="form-control py-2 px-3 rounded-2 border-light-subtle"
                        placeholder="Enter your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label fw-semibold small text-dark">Email Address</label>
                      <input
                        type="email"
                        className="form-control py-2 px-3 rounded-2 border-light-subtle"
                        placeholder="Enter your email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label fw-semibold small text-dark">Message</label>
                      <textarea
                        className="form-control py-2 px-3 rounded-2 border-light-subtle"
                        rows={4}
                        placeholder="Type your message..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary px-4 py-2 fw-medium rounded-2">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column: Contact Info Card */}
              <div className="col-lg-5">
                <LearnerCard type="contactInfo" />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
