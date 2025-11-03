import React from 'react';

const products = [
  { icon: 'bi-phone', title: 'Mobile Apps', desc: 'Native iOS and Android applications with seamless performance' },
  { icon: 'bi-window', title: 'Web Applications', desc: 'Responsive web apps built with modern frameworks' },
  { icon: 'bi-bag', title: 'E-Commerce Solutions', desc: 'Complete online stores with payment integration' },
  { icon: 'bi-cpu', title: 'AI-Powered Apps', desc: 'Intelligent applications leveraging machine learning' },
  { icon: 'bi-controller', title: 'Gaming Solutions', desc: 'Engaging mobile games and interactive experiences' },
  { icon: 'bi-heart-pulse', title: 'Healthcare Apps', desc: 'HIPAA-compliant solutions for healthcare providers' },
];

const programs = [
  { icon: 'bi-mortarboard', title: 'Z.University', desc: 'Learn app development from industry experts with hands-on projects', cta: 'Enroll Now' },
  { icon: 'bi-code-square', title: 'Full Stack Program', desc: 'Complete web development bootcamp covering frontend and backend', cta: 'Join Program' },
  { icon: 'bi-phone', title: 'Mobile Dev Academy', desc: 'Master iOS and Android development with real-world projects', cta: 'Get Started' },
  { icon: 'bi-gpu-card', title: 'Hardware Integration', desc: 'Learn IoT and hardware connectivity for modern applications', cta: 'Explore' },
];

function Home2() {
  return (
    <section style={{ background: '#161616' }}>
      <div className="container py-5">
        {/* Our Products */}
        <div className="text-center mb-4">
          <h2 className="fw-bold display-6 text-white mb-2">Our Products</h2>
          <p className="text-white-50 mb-0">From concept to deployment, we build applications that drive business growth</p>
        </div>

        <div className="row g-4 mb-5">
          {products.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.title}>
              <div className="bg-warning rounded-3 p-4 text-center h-100">
                <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-3 mb-3" style={{ width: 56, height: 56 }}>
                  <i className={`bi ${p.icon} fs-4`}></i>
                </div>
                <h3 className="h6 fw-bold text-dark mb-1">{p.title}</h3>
                <small className="d-block text-dark-50" style={{ opacity: 0.8 }}>{p.desc}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Programs */}
        <div className="text-center mb-4">
          <h2 className="fw-bold display-6 text-white mb-2">Learning Programs</h2>
          <p className="text-white-50 mb-0">Level up your skills with our comprehensive training programs designed by industry professionals</p>
        </div>

        <div className="row g-4">
          {programs.map((p) => (
            <div className="col-12 col-md-6 col-lg-3" key={p.title}>
              <div className="bg-warning rounded-3 p-4 text-center h-100 d-flex flex-column">
                <div className="d-inline-flex align-items-center justify-content-center bg-dark text-warning rounded-3 mb-3" style={{ width: 56, height: 56 }}>
                  <i className={`bi ${p.icon} fs-4`}></i>
                </div>
                <h3 className="h6 fw-bold text-dark mb-1">{p.title}</h3>
                <small className="d-block text-dark-50 mb-3" style={{ opacity: 0.8 }}>{p.desc}</small>
                <div className="mt-auto">
                  <button className="btn btn-dark text-warning w-100 py-2 rounded-3">{p.cta}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home2;