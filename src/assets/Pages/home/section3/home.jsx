import React from "react";

function Home3() {
  const problems = [
    {
      icon: "bi-exclamation-triangle-fill",
      title: "Slow Development Cycles",
      text: "Traditional development takes months or years to deliver results",
    },
    {
      icon: "bi-badge-cc-fill",
      title: "Poor User Experience",
      text: "Apps that are confusing, slow, or fail to meet user needs",
    },
    {
      icon: "bi-shield-exclamation",
      title: "Security Vulnerabilities",
      text: "Weak security measures expose businesses to costly data breaches",
    },
  ];

  const solutions = [
    {
      icon: "bi-lightning-charge-fill",
      title: "Rapid Development",
      text: "Our streamlined process delivers high-quality apps in weeks, not months",
    },
    {
      icon: "bi-people-fill",
      title: "User-Centered Design",
      text: "We create intuitive, engaging experiences that users love to use",
    },
    {
      icon: "bi-shield-lock-fill",
      title: "Enterprise Security",
      text: "Built-in security best practices protect your data and users",
    },
  ];

  const Card = ({ icon, title, text }) => (
    <div className="bg-warning rounded-3 p-3 p-md-4 d-flex align-items-start gap-3">
      <div className="d-inline-flex align-items-center justify-content-center text-warning bg-dark rounded-3" style={{ width: 40, height: 40 }}>
        <i className={`bi ${icon}`}></i>
      </div>
      <div>
        <div className="fw-bold text-dark">{title}</div>
        <small className="text-dark" style={{ opacity: 0.8 }}>{text}</small>
      </div>
    </div>
  );

  return (
    <section style={{ background: '#161616' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-white mb-2">Why Choose Z.Apps?</h2>
          <p className="text-white-50 m-0">We understand the challenges modern businesses face with app development</p>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-6">
            <h5 className="text-white mb-3">The Problem</h5>
            <div className="d-grid gap-3">
              {problems.map((p) => (
                <Card key={p.title} icon={p.icon} title={p.title} text={p.text} />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h5 className="text-white mb-3">Our Solution</h5>
            <div className="d-grid gap-3">
              {solutions.map((s) => (
                <Card key={s.title} icon={s.icon} title={s.title} text={s.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home3;