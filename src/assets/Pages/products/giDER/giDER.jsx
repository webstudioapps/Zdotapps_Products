import React, { useState } from "react";
import styles from "./giDER.module.css";
import gidERImage from "../../../images/gider_black.png";
import { useNavigate } from "react-router-dom";

const GiDER = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleButtonClick = () => {
    navigate("/login"); // Redirects to gidER login page
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Simplify. Track. <span className={styles.highlight}>gidER</span>
        </h1>

        <p className={styles.subtitle}>Laser-Focused Task Execution Platform</p>

        <p className={styles.description}>
          giDER helps developers, teams, and managers cut the noise and stay in
          pure execution mode. Bulk upload tasks, set priority & deadlines, and
          maintain a crystal-clear view from top to bottom.
        </p>

        <ul className={styles.features}>
          <li>Granular Task Breakdown</li>
          <li>Bulk Upload via CSV</li>
          <li>Priority, Status & Timeline</li>
          <li>gidBOX & gidNOTES Integrations</li>
        </ul>

        {/* Updated Login button */}
        <button
          className={`btn btn-warning btn-lg ${styles.cta}`}
          onClick={handleButtonClick}
        >
          Login to gidER
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5>Start executing your projects with</h5>
          <img src={gidERImage} alt="giDER Logo" className={styles.formLogo} />

          <label>
            First Name
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input 
              type="email" 
              name="email" 
              placeholder="Email ID" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{ height: "90px" }}
            />
          </label>
          <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default GiDER;
