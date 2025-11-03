import React from 'react';

export default function LandingHeader() {
  return (
    <header className="bg-dark border-bottom border-secondary">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-warning d-flex align-items-center justify-content-center rounded" style={{ width: 32, height: 32 }}>
              <span className="fw-bold text-dark">Z</span>
            </div>
            <span className="text-white fs-5 fw-bold">Z-Apps</span>
          </div>
          <nav className="d-none d-md-flex align-items-center gap-4">
            <a href="#web" className="text-secondary text-decoration-none">Web Studio</a>
            <a href="#app_studio" className="text-secondary text-decoration-none">App Studio</a>
            <a href="#agent" className="text-secondary text-decoration-none">Agent Studio</a>
            <a href="#about" className="text-secondary text-decoration-none">About Us</a>
            <a href="#careers" className="text-secondary text-decoration-none">Careers</a>
          </nav>
          <button className="btn btn-warning text-dark fw-semibold">Login / Sign up</button>
        </div>
      </div>
    </header>
  );
}


