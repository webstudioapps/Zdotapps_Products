import React, { useState } from "react";
import styles from "./z.merit.module.css";
import meritImage from "../../../images/merit.png";
import { useNavigate } from "react-router-dom";

const Zmerit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleButtonClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in Z.merit! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Assess. Trust. <span className={styles.highlight}>Z.merit</span>
        </h1>
        <p className={styles.subtitle}>Intelligent Evaluation Platform</p>
        <p className={styles.description}>
          Z.merit provides advanced proctoring and evaluation tools with enterprise-grade
          security for comprehensive skill assessment and merit evaluation.
        </p>
        <ul className={styles.features}>
          <li>Advanced proctoring system</li>
          <li>Plug-and-play setup</li>
          <li>Rich evaluation metrics</li>
          <li>Scalable & secure testing</li>
        </ul>
        <button className={`btn btn-warning btn-lg ${styles.cta}`} onClick={handleButtonClick}>
          Access Z.merit
        </button>
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5>Find Your Next Star Player. Explore</h5>
          <img src={meritImage} alt="z.merit Logo" className={styles.formLogo} />
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
            <textarea name="message" placeholder="Tell us about your assessment requirements" value={formData.message} onChange={handleChange} style={{ height: "90px" }} />
          </label>
          <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Zmerit;
