import React, { useState } from "react";
import styles from "./giDER.module.css";
import gidERImage from "../../../images/gider_black.png";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const GiDER = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    window.location.href = "https://zdotapps.com/gidER/login.php";
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

        <button
          className={`btn btn-warning btn-lg ${styles.cta}`}
          onClick={handleButtonClick}
        >
          Login to gidER
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5 className={styles.formTitle}>Start executing your projects with</h5>
          <div className={styles.logoContainer}>
            <img src={gidERImage} alt="giDER Logo" className={styles.logoImage} />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <FiUser className={styles.inputIcon} />
              <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <FiUser className={styles.inputIcon} />
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <FiMail className={styles.inputIcon} />
              <input 
                type="email" 
                name="email" 
                placeholder="Email ID" 
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputContainer}>
              <FiMessageSquare className={`${styles.inputIcon} ${styles.textareaIcon}`} />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                rows="4"
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GiDER;