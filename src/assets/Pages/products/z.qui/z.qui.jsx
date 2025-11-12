import React, { useState } from "react";
import styles from "./z.qui.module.css";
import { useNavigate } from "react-router-dom";
import quiLogo from "../../../images/qui.png";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const quizData = {
  web: [
    { title: "HTML Basics", questions: 10 },
    { title: "CSS Styling", questions: 8 },
    { title: "JavaScript Fundamentals", questions: 12 },
  ],
  android: [
    { title: "Kotlin Essentials", questions: 10 },
    { title: "UI Design", questions: 7 },
    { title: "Android Architecture", questions: 9 },
  ],
  ios: [
    { title: "Swift Syntax", questions: 8 },
    { title: "iOS UI Design", questions: 9 },
    { title: "App Lifecycle", questions: 10 },
  ],
};

const QuizCard = ({ title, questions }) => (
  <div className={styles.quizCard}>
    <h5>{title}</h5>
    <p>{questions} Questions</p>
  </div>
);

const ZQui = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("web");

  const handleButtonClick = () => {
    navigate("/Coming-soon");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We will get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <>
      {/* HERO SECTION (Your Latest) */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Simplify. Track. <span className={styles.highlight}>Z.Qui</span>
          </h1>
          <p className={styles.subtitle}>Interactive Quiz Platform</p>
          <p className={styles.description}>
            Z.Qui helps educators and trainers create engaging quizzes and
            assessments. Track progress, analyze results, and enhance learning
            outcomes with our intuitive quiz platform.
          </p>
          <ul className={styles.features}>
            <li>Create Interactive Quizzes</li>
            <li>Real-time Results</li>
            <li>Detailed Analytics</li>
            <li>Seamless Integration</li>
          </ul>
          <button
            className={`btn btn-warning btn-lg ${styles.cta}`}
            onClick={handleButtonClick}
          >
            Login to Z.Qui
          </button>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h5 className={styles.formTitle}>Start creating quizzes with</h5>
            <div className={styles.logoContainer}>
              <img src={quiLogo} alt="Z.Qui Logo" className={styles.logoImage} />
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

      
    </>
  );
};

export default ZQui;