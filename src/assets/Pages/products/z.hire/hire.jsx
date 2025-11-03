import React, { useState } from "react";
import styles from "./hire.module.css";
import hireImage from "../../../images/hire.png";
import { useNavigate } from "react-router-dom";

const Zhire = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    navigate("/login");
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
          <h5>Smarter Hiring Starts with</h5>
          <img src={hireImage} alt="z.hire Logo" className={styles.formLogo} />
          <label>
            First Name
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us about your hiring requirements" value={formData.message} onChange={handleChange} style={{ height: "90px" }} />
          </label>
          <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Zhire;
