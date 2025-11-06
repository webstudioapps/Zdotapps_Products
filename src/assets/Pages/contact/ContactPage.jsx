import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './ContactPage.module.css';

// Import company logos
import kryonLogo from '../../../assets/images/Logos/Logos/kryonlogo.png';
import lifeCyclulLogo from '../../../assets/images/Logos/Logos/life_cykul.png';
import ontropiLogo from '../../../assets/images/Logos/Logos/Ontropi_Purple_Logo.png';
import siuLogo from '../../../assets/images/Logos/Logos/SIU.png';
import stationSLogo from '../../../assets/images/Logos/Logos/Station-S_steel_grey.png';
import tnsLogo from '../../../assets/images/Logos/Logos/TNS.jpg';
import campusLifeLogo from '../../../assets/images/Logos/Logos/campuslife_logo 1.png';
import factOpsLogo from '../../../assets/images/Logos/Logos/Fact-Ops.png';
import gcvLogo from '../../../assets/images/Logos/Logos/GCV.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachment: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* Left Side - Content */}
        <div className={styles.contentSection}>
          <div className={styles.headerContent}>
            <h1>Schedule a demo</h1>
            <p className={styles.tagline}>
              Trusted by leading companies worldwide to deliver exceptional digital experiences.
            </p>
          </div>
          
          <div className={styles.logoGrid}>
            <img 
              src={kryonLogo} 
              alt="Kryon" 
              style={{
                maxWidth: '180px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={lifeCyclulLogo} 
              alt="Life Cykul" 
              style={{
                maxWidth: '170px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={ontropiLogo} 
              alt="Ontropi" 
              style={{
                maxWidth: '155px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={siuLogo} 
              alt="SIU" 
              style={{
                maxWidth: '190px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={stationSLogo} 
              alt="Station S" 
              style={{
                maxWidth: '190px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={tnsLogo} 
              alt="TNS" 
              style={{
                maxWidth: '100px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={campusLifeLogo} 
              alt="Campus Life" 
              style={{
                maxWidth: '220px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={factOpsLogo} 
              alt="Fact-Ops" 
              style={{
                maxWidth: '160px',
                height: 'auto',
                opacity: 0.9,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
            <img 
              src={gcvLogo} 
              alt="GCV" 
              style={{
                maxWidth: '220px',
                height: 'auto',
                opacity: 1.5,
                transition: 'all 0.3s ease',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.85'}
            />
          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2>Get in touch</h2>
            <p className={styles.formSubtitle}>Our team will get back to you within 24 hours</p>
            
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="attachment">Attachment (Optional)</label>
                  <div className={styles.fileInputContainer}>
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      onChange={handleChange}
                      className={styles.fileInput}
                    />
                    <label htmlFor="attachment" className={styles.fileInputLabel}>
                      {formData.attachment ? formData.attachment.name : 'Choose a file...'}
                    </label>
                  </div>
                </div>
                
                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    Submit
                    <span className={styles.arrowIcon}>→</span>
                  </button>
                </div>
                
                <p className={styles.privacyText}>
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
