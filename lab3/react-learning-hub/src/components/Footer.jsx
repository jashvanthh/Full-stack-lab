import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <div className="container text-center text-secondary small">
        <p className="mb-0">
          © {new Date().getFullYear()} ReactLearn. Simple React Application built with Vite & Bootstrap.
        </p>
      </div>
    </footer>
  );
}
