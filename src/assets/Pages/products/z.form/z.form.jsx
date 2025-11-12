import React, { useState } from "react";
import styles from "./z.form.module.css";
import formsImage from "../../../images/forms.png";
import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const Zform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    navigate("/Coming-soon"); // Redirects to z.forms login page
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in Z.Forms! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Build. Collect. <span className={styles.highlight}>Z.Forms</span>
        </h1>

        <p className={styles.subtitle}>Interactive Online Forms Platform</p>

        <p className={styles.description}>
          Z.Forms enables data collection, surveys, and workflows with simplicity
          and flexibility for your business success and growth.
        </p>

        <ul className={styles.features}>
          <li>Custom form builder</li>
          <li>Advanced analytics</li>
          <li>Workflow integration</li>
          <li>Secure data collection</li>
        </ul>

        <button
          className={`btn btn-warning btn-lg ${styles.cta}`}
          onClick={handleButtonClick}
        >
          Access Z.Forms
        </button>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5 className={styles.formTitle}>Create forms, collect answers, gain insights</h5>
          <div className={styles.logoContainer}>
            <img src={formsImage} alt="Z.Forms Logo" className={styles.logoImage} />
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
                placeholder="Tell us about your form requirements"
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

export default Zform;