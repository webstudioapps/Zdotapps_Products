import React, { useState } from 'react';
import { FiCheckCircle, FiMail, FiUser, FiMessageSquare, FiPaperclip } from 'react-icons/fi';
import styles from './ContactPage.module.css';


// ✅ Correct image imports for ContactPage.jsx
// ✅ Clean & Correct Logo Imports
// ✅ All Logo Imports — Clean & Complete
import kryonLogo from '../../images/Logos/Logos/Kryon_Logo.png';
import tnsLogo from '../../images/Logos/Logos/gnan_circle_ventures.png';
import ontropiLogo from '../../images/Logos/Logos/eco_mall.png';
import stationSLogo from '../../images/Logos/Logos/fusion_streat.png';
import lifeCyclulLogo from '../../images/Logos/Logos/TNS.png';

import campusLifeLogo from '../../images/Logos/Logos/mango_resort.png';
import factOpsLogo from '../../images/Logos/Logos/factops.png';
import gcvLogo from '../../images/Logos/Logos/sef.png'; // ✅ Added missing import
import apexaImg from '../../images/Logos/Logos/apexa_living.png';





const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('full_name', formData.name);
      formDataToSend.append('work_email', formData.email);
      formDataToSend.append('message', formData.message);
      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }

      const response = await fetch('http://127.0.0.1:8000/contact/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', attachment: null });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setError('Failed to submit. Please check your input.');
      }
    } catch (err) {
      console.error('Request Error:', err);
      setError('An error occurred while submitting the form.');
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* Left Side - Logos */}
        <div className={styles.logosSection}>
          <div className={styles.logosContent}>
            <h1>Trusted by Industry Leaders</h1>
            <p className={styles.logosSubtitle}>
              Join hundreds of companies worldwide who trust us to deliver exceptional digital experiences.
            </p>
            
            {(() => {
              const logos = [
                { key: 'l1', src: kryonLogo, alt: 'Kryon', cls: styles.logoItem1 },
                { key: 'l5', src: tnsLogo, alt: 'TNS', cls: styles.logoItem5 },
                { key: 'l3', src: ontropiLogo, alt: 'Ontropi', cls: styles.logoItem3 },
                { key: 'l4', src: stationSLogo, alt: 'Station S', cls: styles.logoItem4 },
                { key: 'l2', src: lifeCyclulLogo, alt: 'Life Cykul', cls: styles.logoItem2 },
                { key: 'l6', src: campusLifeLogo, alt: 'Campus Life', cls: styles.logoItem6 },
                { key: 'l7', src: factOpsLogo, alt: 'Fact-Ops', cls: styles.logoItem7 },
                { key: 'l8', src: gcvLogo, alt: 'GCV', cls: styles.logoItem8 },
                { key: 'l9', src: apexaImg, alt: 'Apexa', cls: styles.logoItem9 },
              ];
              return (
                <div className={styles.logosMarquee}>
                  <div className={styles.logoGrid}>
                    {logos.map((l) => (
                      <div key={l.key} className={l.cls}><img src={l.src} alt={l.alt} /></div>
                    ))}
                    {logos.map((l) => (
                      <div key={`${l.key}-clone`} className={`${l.cls} ${styles.clone}`}><img src={l.src} alt={l.alt} /></div>
                    ))}
                  </div>
                </div>
              );
            })()}

          </div>
        </div>

        {/* Right Side - Form */}
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2>Start Your Project With Us</h2>
            <p className={styles.formSubtitle}>
              Ready to transform your digital experience? Schedule a demo and see how we can help.
            </p>
          </div>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>
                <FiCheckCircle />
              </div>
             
              <p>Our team will get back to you within 24 hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className={styles.backButton}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <div className={styles.inputContainer}>
                  <FiUser className={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Work Email"
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message (Optional)"
                    rows="4"
                    className={styles.formTextarea}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.fileUploadContainer}>
                  <FiPaperclip className={styles.attachmentIcon} />
                  <label htmlFor="attachment" className={styles.fileUploadLabel}>
                    {formData.attachment ? formData.attachment.name : 'Add Attachment (Optional)'}
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    onChange={handleChange}
                    className={styles.fileInput}
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Submit</span>
  
              </button>

              {error && <div className={styles.errorMessage}>{error}</div>}

             
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;