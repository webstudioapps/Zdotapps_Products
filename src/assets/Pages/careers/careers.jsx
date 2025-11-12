import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./careers.module.css";

// Job data
const jobData = [
  {
    id: 1,
    title: "Product Manager",
    department: "Management",
    experience: "5 to 9 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
  {
    id: 2,
    title: "Senior Android Developer",
    department: "Technology",
    experience: "4 to 9 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
  {
    id: 3,
    title: "Senior iOS Developer",
    department: "Technology",
    experience: "4 to 9 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
  {
    id: 4,
    title: "UI/UX Developer",
    department: "Creative & Design",
    experience: "2 to 6 years",
    availability: "Immediate Joinees",
    openings: "Multiple openings",
  },
];

const departments = ["All Departments", "Technology", "Management", "Creative & Design"];

export default function Careers() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [viewMode, setViewMode] = useState("grid"); // Default to "list" to match the image
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const moreJobsAnchorRef = useRef(null);

  const filteredJobsMemo = useMemo(() => {
    return jobData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.experience.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "All Departments" || job.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  useEffect(() => {
    setFilteredJobs(filteredJobsMemo);
  }, [filteredJobsMemo]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleDepartmentFilter = (e) => setSelectedDepartment(e.target.value);
  const handleViewToggle = (mode) => setViewMode(mode);
  const handleApplyNow = (jobId) => {
    const job = jobData.find((j) => j.id === jobId);
    navigate("/careers/details", { state: { job } });
  };

  const scrollToMoreJobs = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const anchorEl = moreJobsAnchorRef.current;
    if (!anchorEl) return;
    const selectors = [
      "header",
      ".navbar",
      "nav",
      ".site-header",
      ".fixed-top",
      "[data-header]",
    ];
    const candidates = Array.from(document.querySelectorAll(selectors.join(",")));
    let headerH = 0;
    candidates.forEach((el) => {
      const cs = window.getComputedStyle(el);
      const pos = cs.position;
      const rect = el.getBoundingClientRect();
      const isTopBar = rect.top <= 1 && (pos === "fixed" || pos === "sticky");
      if (isTopBar) {
        headerH = Math.max(headerH, rect.height);
      }
    });
    if (!headerH) headerH = 180; // fallback
    const extra = 12; // breathing space
    const y = anchorEl.getBoundingClientRect().top + window.pageYOffset - (headerH + extra);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const topJobs = useMemo(() => filteredJobs.slice(0, 6), [filteredJobs]);
  const otherJobs = useMemo(() => filteredJobs.slice(6), [filteredJobs]);

  return (
    <div id="top" className={`container mt-4 py-5 ${styles.page}`}>
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-dark mt-5 py-3">Career Opportunities at Z.Apps</h1>
        <p className="text-muted mb-0" style={{ maxWidth: 900, marginInline: "auto" }}>
          Join our innovative team and work on cutting-edge projects in a dynamic, collaborative environment. We're
          looking for passionate professionals to help shape the future of our company.
        </p>
      </div>
      

      {/* Search and Filter */}
      <div className="mb-4 py-2">
        <div className="border rounded-3 p-4" style={{ backgroundColor: "#f8f9fa", border: "1px solid #e9ecef" }}>
          <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center g-2">
            
            {/* Search Input */}
            <div className="flex-grow-1 me-md-2 mb-2 mb-md-0">
              <div className={styles.searchInputWrapper}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search jobs by title, department, skills, or experience..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{
                    boxShadow: "none",
                    outline: "none",
                    height: "48px",
                    borderRadius: "8px",
                    
                    
                  }}
                />
                <i className={`bi bi-search ${styles.searchIcon}`}></i>
              </div>
            </div>

            {/* Department Filter */}
            <div className="me-md-2 mb-2 mb-md-0" style={{ minWidth: "200px" }}>
              <div className="input-group">
                <select
                  className="form-select"
                  value={selectedDepartment}
                  onChange={handleDepartmentFilter}
                   style={{
    boxShadow: "none",
    outline: "none",
    height: "48px",
    borderRadius: "8px",
    paddingRight: "30px",
    backgroundPosition: "right 0.75rem center",
    borderColor: "#ccc",
    transition: "border-color 0.3s ease",
  }}
  onFocus={(e) => (e.target.style.borderColor = "#EFC426")}
  onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <span className="input-group-text position-absolute end-0 h-100 bg-transparent border-0" style={{pointerEvents: "none", zIndex: "1"}}>
                    <i className="bi bi-chevron-down" style={{color: "#6c757d"}}></i>
                </span>
              </div>
            </div>

            {/* View Toggles - UPDATED */}
            <div className={styles.viewToggleWrapper}>
              <button
                className={`${styles.toggleButton} ${viewMode === "grid" ? styles.active : ""}`}
                onClick={() => handleViewToggle("grid")}
                aria-label="Grid View"
              >
                <i className="bi bi-grid"></i>
              </button>
              <button
                className={`${styles.toggleButton} ${viewMode === "list" ? styles.active : ""}`}
                onClick={() => handleViewToggle("list")}
                aria-label="List View"
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
          <div className={`mt-2 small ${styles.resultsText}`}>All jobs</div>
        </div>
      </div>

      {/* Section 1: top jobs (first 6) */}
      <div className="row g-4 mb-5">
        {topJobs.length > 0 ? (
          topJobs.map((job) => (
            <div key={job.id} className={viewMode === "grid" ? "col-12 col-md-6 col-lg-3 mb-4" : "col-12"}>
              <div className={`${styles.card} ${viewMode === "list" ? styles.listCard : ""}`}>
                <div className={viewMode === "list" ? styles.listContent : ""}>
                  <span className={styles.deptBadge}>{job.department.toUpperCase()}</span>
                  <h3 className={`h5 fw-bold ${styles.title}`}>{job.title}</h3>
                  <div className={styles.metaWrap}>
                    <span className={styles.pill}>
                      <i className={`bi bi-briefcase me-1 ${styles.pillIcon}`}></i>
                      {job.experience}
                    </span>
                    <span className={styles.pill}>
                      <i className={`bi bi-clock me-1 ${styles.pillIcon}`}></i>
                      {job.availability}
                    </span>
                    <span className={styles.pill}>
                      <i className={`bi bi-people me-1 ${styles.pillIcon}`}></i>
                      {job.openings}
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <button className={`btn fw-semibold ${styles.applyBtn}`} onClick={() => handleApplyNow(job.id)}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No jobs found matching your criteria.</h4>
          </div>
        )}
        {otherJobs.length > 0 && (
          <div className="col-12 d-flex justify-content-center mt-2">
            <a href="#more-jobs-anchor" onClick={scrollToMoreJobs} className={`btn fw-semibold ${styles.applyBtn}`}>View more</a>
          </div>
        )}
      </div>

      {/* Section 2: remaining jobs */}
      {otherJobs.length > 0 && (
        <>
          <div id="more-jobs-anchor" ref={moreJobsAnchorRef} className={`${styles.anchorTarget} ${styles.sectionSpacer}`} />
          <div className={`row g-4 mb-4 justify-content-center ${styles.secondSection}`}>
          {otherJobs.map((job) => (
            <div key={job.id} className={viewMode === "grid" ? "col-12 col-md-6 col-lg-4 mb-4" : "col-12"}>
              <div className={`${styles.card} ${viewMode === "list" ? styles.listCard : ""} ${styles.compactCard}`}>
                <div className={viewMode === "list" ? styles.listContent : ""}>
                  <span className={styles.deptBadge}>{job.department.toUpperCase()}</span>
                  <h3 className={`h5 fw-bold ${styles.title}`}>{job.title}</h3>
                  <div className={styles.metaWrap}>
                    <span className={styles.pill}>
                      <i className={`bi bi-briefcase me-1 ${styles.pillIcon}`}></i>
                      {job.experience}
                    </span>
                    <span className={styles.pill}>
                      <i className={`bi bi-clock me-1 ${styles.pillIcon}`}></i>
                      {job.availability}
                    </span>
                    <span className={styles.pill}>
                      <i className={`bi bi-people me-1 ${styles.pillIcon}`}></i>
                      {job.openings}
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <button className={`btn fw-semibold ${styles.applyBtn}`} onClick={() => handleApplyNow(job.id)}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </>
      )}
      {/* Floating navigation buttons */}
      {otherJobs.length > 0 && (
        <a href="#more-jobs-anchor" onClick={scrollToMoreJobs} className={`${styles.fab} ${styles.fabDown}`} aria-label="Go to more jobs">
          <i className="bi bi-arrow-down"></i>
        </a>
      )}
    </div>
  );
}