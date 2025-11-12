import React, { useState } from "react";
import styles from "./hire.module.css";
import hireImage from "../../../images/hire.png";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const Zhire = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    window.location.href = "http://13.234.41.119/devenv/zdotHire_V1/login.php";
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in Z.Hire! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hire. Match. <span className={styles.highlight}>Z.hire</span>
        </h1>
        <p className={styles.subtitle}>Smart Recruitment Platform</p>
        <p className={styles.description}>
          Z.hire revolutionizes recruitment with AI-powered candidate matching,
          streamlined sourcing, and automated shortlisting for faster, smarter hiring decisions.
        </p>
        <ul className={styles.features}>
          <li>Intelligent candidate matching</li>
          <li>Automated shortlisting</li>
          <li>Streamlined sourcing pipeline</li>
          <li>Seamless communication tools</li>
        </ul>
        <button className={`btn btn-warning btn-lg ${styles.cta}`} onClick={handleButtonClick}>
          Access Z.hire
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5 className="text-black">Smarter Hiring Starts with</h5>
          <div className={styles.logoContainer}>
            <img src={hireImage} alt="Z.Hire Logo" className={styles.logoImage} />
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
                placeholder="Tell us about your hiring requirements"
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

export default Zhire;