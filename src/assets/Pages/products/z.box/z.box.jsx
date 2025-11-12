import React, { useState } from "react";
import styles from "./z.box.module.css";
import zboxImage from "../../../images/box.png";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ZBox = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    navigate("/Coming-soon"); // Redirects to z.box login page
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in Z.Box! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Secure. Organize. <span className={styles.highlight}>Z.Box</span>
        </h1>

        <p className={styles.subtitle}>Advanced Digital Vault Platform</p>

        <p className={styles.description}>
          Z.Box is an advanced digital vault that applies enterprise-grade security 
          to keep your documents protected, organized, and instantly accessible.
        </p>

        <ul className={styles.features}>
          <li>Secure by design with advanced encryption</li>
          <li>Always accessible without downtime</li>
          <li>Effortless sharing with complete control</li>
          <li>Smart organization and intelligent storage</li>
        </ul>

        <button
          className={`btn btn-warning btn-lg ${styles.cta}`}
          onClick={handleButtonClick}
        >
          Access Z.Box
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5 className={styles.formTitle}>Start securing your documents with</h5>
          <div className={styles.logoContainer}>
            <img src={zboxImage} alt="Z.Box Logo" className={styles.logoImage} />
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
                placeholder="Share your document security requirements"
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

export default ZBox;