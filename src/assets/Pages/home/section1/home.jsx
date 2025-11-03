import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home1() {
  const navigate = useNavigate();

  const startProject = () => {
    navigate('/login');
  };

  return (
    <section className="py-5" style={{ background: '#161616' }}>
      <div className="container py-5">
        <div className="text-center mx-auto" style={{ maxWidth: 1100 }}>
          <h1 className="fw-bold mb-3" style={{ lineHeight: 1.15 }}>
            <span className="display-3 text-white d-block">We Build Apps That</span>
            <span className="display-3 text-warning d-block">Drive Results</span>
          </h1>
          <p className="fs-5 text-secondary mb-4 mx-auto" style={{ maxWidth: 980 }}>
            From startups to enterprises, we create powerful mobile and web applications that solve real
            problems and deliver measurable business value.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning rounded-pill px-4 py-3 fw-semibold" onClick={startProject}>
              Start Your Project <i className="bi bi-arrow-right-short ms-1"></i>
            </button>
          </div>
        </div>

        <div className="text-center text-secondary mt-4">Join industry leaders who trust Z.Apps</div>
        <div className="row row-cols-2 row-cols-md-4 g-4 mt-2 mx-auto text-center" style={{ maxWidth: 900 }}>
          {['TechCorp', 'InnovateX', 'DataFlow', 'CloudFirst'].map((brand) => (
            <div className="col" key={brand}>
              <span className="text-secondary fw-semibold">{brand}</span>
            </div>
          ))}
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-4 mt-4 mx-auto" style={{ maxWidth: 1000 }}>
          <div className="col text-center">
            <div className="display-6 fw-bold text-warning mb-1">100+</div>
            <div className="text-secondary">Projects Delivered</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-warning mb-1">50+</div>
            <div className="text-secondary">Happy Clients</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-warning mb-1">99.9%</div>
            <div className="text-secondary">Uptime Guarantee</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-warning mb-1">24/7</div>
            <div className="text-secondary">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home1;