import React, { useState } from "react";
import styles from "./z.auth.module.css";
import authImage from "../../../images/auth.png";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const Zauth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    navigate("/coming-soon");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in Z.auth! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Secure. Authenticate. <span className={styles.highlight}>Z.auth</span>
        </h1>
        <p className={styles.subtitle}>Enterprise Identity Solutions</p>
        <p className={styles.description}>
          Z.auth provides enterprise-grade authentication and authorization
          with seamless integration and scalable cloud architecture for modern businesses.
        </p>
        <ul className={styles.features}>
          <li>Enterprise-grade security</li>
          <li>Seamless integration</li>
          <li>Scalable cloud architecture</li>
          <li>Multi-factor authentication</li>
        </ul>
        <button className={`btn btn-warning btn-lg ${styles.cta}`} onClick={handleButtonClick}>
          Access Z.auth
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5 className={styles.formTitle}>A Frictionless Gateway to a Fortified Enterprise</h5>
          <div className={styles.logoContainer}>
            <img src={authImage} alt="Z.Auth Logo" className={styles.logoImage} />
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
                placeholder="Tell us about your security requirements"
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

export default Zauth;