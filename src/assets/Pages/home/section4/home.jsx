import React from "react";

function Home4() {
  const services = [
    {
      icon: "bi-palette",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive designs that users love",
    },
    {
      icon: "bi-cpu",
      title: "AI Integration",
      desc: "Smart features powered by artificial intelligence",
    },
    {
      icon: "bi-cloud",
      title: "Cloud Solutions",
      desc: "Scalable infrastructure and deployment",
    },
    {
      icon: "bi-code-slash",
      title: "Development",
      desc: "Full-stack development with modern technologies",
    },
  ];

  return (
    <section style={{ background: '#161616' }}>
      <div className="container py-5 text-center">
        <h2 className="fw-bold display-5 text-white mb-3">Our Services</h2>
        <p className="text-white-50 mx-auto mb-5" style={{ maxWidth: 900 }}>
          End-to-end solutions for your digital transformation journey
        </p>

        <div className="row g-5 justify-content-center">
          {services.map((s) => (
            <div className="col-12 col-md-6 col-lg-3" key={s.title}>
              <div className="d-flex flex-column align-items-center h-100">
                <div className="bg-warning rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: 96, height: 96 }}>
                  <i className={`bi ${s.icon} fs-1 text-dark`}></i>
                </div>
                <h3 className="h4 fw-bold text-white mb-2">{s.title}</h3>
                <p className="text-white-50 mb-0" style={{ maxWidth: 320 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home4;