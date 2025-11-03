import React from "react";

function Home6() {
  return (
    <section style={{ background: '#F1C232' }}>
      <div className="container py-5 text-center">
        <div className="d-inline-flex align-items-center gap-2 bg-warning rounded-pill px-3 py-2 mb-3">
          <span className="bi bi-stars"></span>
          <span className="fw-semibold">Ready to get started?</span>
        </div>
        <h2 className="display-4 fw-bold text-dark mb-3">Ready to Build the Future?</h2>
        <p className="fs-4 text-dark mb-4 mx-auto" style={{ maxWidth: 1100 }}>
          Let's transform your ideas into powerful applications that drive real business results. Our team is ready to make it happen.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
          <button className="btn btn-dark rounded-pill px-4 py-3">
            Get In Touch <span className="bi bi-arrow-right ms-1"></span>
          </button>
          <button className="btn btn-outline-dark rounded-pill px-4 py-3 bg-white">
            View Our Work
          </button>
        </div>

        <div className="row g-4 pt-3">
          <div className="col-12 col-md-4">
            <div className="text-center">
              <h3 className="h3 fw-bold text-dark mb-1">Free Consultation</h3>
              <div className="text-dark">30-minute strategy call</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center">
              <h3 className="h3 fw-bold text-dark mb-1">Fast Delivery</h3>
              <div className="text-dark">MVP in 4–8 weeks</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center">
              <h3 className="h3 fw-bold text-dark mb-1">Full Support</h3>
              <div className="text-dark">Launch & maintenance included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home6;