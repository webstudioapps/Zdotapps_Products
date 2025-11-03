import React, { useState } from "react";
import styles from "./z.box.module.css";
import zboxImage from "../../../images/box.png";
import { useNavigate } from "react-router-dom";

const ZBox = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    message: '' 
  });

  const handleButtonClick = () => {
    navigate("/login"); // Redirects to z.box login page
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in z.box! We will get back to you soon.');
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
          <h5>Start securing your documents with</h5>
          <img src={zboxImage} alt="Z.Box Logo" className={styles.formLogo} />

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
              placeholder="Share your document security requirements"
              value={formData.message}
              onChange={handleChange}
              style={{ height: "90px" }}
            />
          </label>
          <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ZBox;
