import React, { useState } from "react";
import styles from "./z.iot.module.css";
import kirazeeImage from "../../../images/kirazee_new.png";
import { useNavigate } from "react-router-dom";

const Ziot = () => {
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
    alert('Thank you for your interest in Kirazee! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Connect. Deliver. <span className={styles.highlight}>Kirazee</span>
        </h1>
        <p className={styles.subtitle}>Unified Platform for Kirana Stores</p>
        <p className={styles.description}>
          Kirazee connects consumers, businesses, and delivery partners in one powerful
          platform for seamless ordering, management, and delivery operations.
        </p>
        <ul className={styles.features}>
          <li>Unified marketplace platform</li>
          <li>Seamless order management</li>
          <li>Integrated delivery network</li>
          <li>Real-time tracking system</li>
        </ul>
        <button className={`btn btn-warning btn-lg ${styles.cta}`} onClick={handleButtonClick}>
          Access Kirazee
        </button>
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h5 style={{ textAlign: 'center' }}>Launch Your Digital Store.</h5>
           <h5 style={{ textAlign: 'center', marginTop: '-10px' }}>Unlock 3X Sales</h5>
          <img src={kirazeeImage} alt="Kirazee Logo" className={styles.formLogo} />
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
            <textarea name="message" placeholder="Tell us about your business requirements" value={formData.message} onChange={handleChange} style={{ height: "90px" }} />
          </label>
          <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Ziot;
