import React from "react";

function Home5() {
  const brands = [
    "TechCorp",
    "InnovateX",
    "DataFlow",
    "CloudFirst",
    "MobileMax",
    "StartupHub",
    "DigitalEdge",
    "AppSphere",
  ];

  const stats = [
    { value: "20+", label: "PRODUCTS BUILT" },
    { value: "50+", label: "HAPPY CLIENTS" },
    { value: "100k+", label: "ACTIVE USERS" },
    { value: "99.9%", label: "UPTIME" },
  ];

  return (
    <section style={{ background: '#161616' }}>
      <div className="container py-5 text-center">
        <h2 className="fw-bold display-5 text-white mb-2">Trusted by Industry Leaders</h2>
        <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 900 }}>
          From startups to enterprises, we've helped businesses transform their ideas into successful applications
        </p>

        {/* Brand tiles */}
        <div className="row g-3 g-md-4 mb-4">
          {brands.map((b) => (
            <div className="col-12 col-sm-6 col-lg-3" key={b}>
              <div className="bg-white rounded-4 py-4 px-3 fw-semibold text-dark shadow-sm">
                {b}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="row g-4 mt-3">
          {stats.map((s) => (
            <div className="col-6 col-lg-3" key={s.label}>
              <div className="text-center">
                <div className="display-5 fw-bold text-warning">{s.value}</div>
                <div className="text-white-50 mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home5;