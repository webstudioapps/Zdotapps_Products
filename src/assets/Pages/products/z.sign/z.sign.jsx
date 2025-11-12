import { useState } from 'react';
import { PenTool, Type, Scan, FileText, FolderOpen, Grid3X3, ArrowLeft, Share2 } from 'lucide-react';
import signLogo from "../../../images/sign.png";
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import styles from "./z.sign.module.css";

export default function ZSign() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <>
      {/* Bootstrap 5 CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
        crossOrigin="anonymous"
      />
      
      <div className={styles.mainContainer}>
        <div className={`container-fluid mb-5 mt-5 py-5 ${styles.contentWrapper}`} style={{ maxWidth: '1452px' }}>
          {/* Single centered heading */}
          <div className="text-center">
            <img src={signLogo} alt="z.sign" style={{ height: '80px' }} />
          </div>
          {/* Centered description above images */}
          <div className={`text-center mb-5 ${styles.descriptionBanner}`}>
            <p className={`mb-3 mt-0 fs-3 ${styles.descriptionText}`}>All-in-one e-sign solution for draw, type, and sign</p>
          </div>
          
          <div className={styles.layoutContainer}>
            {/* Phones Section */}
            <div className={styles.phonesSection}>
              {/* First Phone - Electronic Signature Maker */}
              <div className={styles.phoneWrapper}>
                <div className="mb-3">
                  <span className={styles.badgeCustom}>Electronic Signature Maker</span>
                </div>
                <div className={styles.phoneContainer}>
                  <div className={styles.phoneBorder}>
                    <div 
                      className={styles.phoneScreen}
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}
                    >
                      {/* Status Bar */}
                      <div className={`p-2 d-flex align-items-center justify-content-between ${styles.statusBar}`}>
                        <div className="d-flex align-items-center gap-1">
                          <div className={`bg-dark rounded-circle ${styles.w1} ${styles.h1}`}></div>
                          <div className={`bg-dark rounded-circle ${styles.w1} ${styles.h1}`}></div>
                          <div className={`bg-dark rounded-circle ${styles.w1} ${styles.h1}`}></div>
                        </div>
                        <small className="fw-medium">9:41</small>
                        <div className="d-flex align-items-center gap-1">
                          <div className={`bg-dark ${styles.w4} ${styles.h2} rounded-1`}></div>
                          <div className={`border border-dark ${styles.w5} ${styles.h3} rounded-1`}></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className={styles.phoneContent}>
                        <h5 className="mb-2">Electronic Signature Maker</h5>
                        <p className="text-muted small mb-3">📱 Scan, draw, type signatures and sign documents</p>
                        
                        {/* Top Row Icons */}
                        <div className="row g-2 mb-3">
                          <div className="col-4">
                            <div className={`text-center p-2 bg-light rounded ${styles.featureCard}`}>
                              <div className={`${styles.bgPrimaryCustom} text-primary-foreground rounded p-2 mb-1 d-inline-block`}>
                                <Type size={16} />
                              </div>
                              <div className={styles.textTiny}>Type Signature</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className={`text-center p-2 ${styles.featureCard}`} style={{ backgroundColor: '#fef3c7' }}>
                              <div className="bg-warning text-white rounded p-2 mb-1 d-inline-block">
                                <PenTool size={16} />
                              </div>
                              <div className={styles.textTiny}>Draw Signature</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className={`text-center p-2 ${styles.featureCard}`} style={{ backgroundColor: '#dbeafe' }}>
                              <div className="bg-primary text-white rounded p-2 mb-1 d-inline-block">
                                <Scan size={16} />
                              </div>
                              <div className={styles.textTiny}>Scan Signature</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Row Icons */}
                        <div className="row g-2">
                          <div className="col-4">
                            <div className={`text-center p-2 ${styles.featureCard}`} style={{ backgroundColor: '#dcfce7' }}>
                              <div className="bg-success text-white rounded p-2 mb-1 d-inline-block">
                                <FileText size={16} />
                              </div>
                              <div className={styles.textTiny}>Sign Document</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className={`text-center p-2 ${styles.featureCard}`} style={{ backgroundColor: '#dbeafe' }}>
                              <div className="bg-info text-white rounded p-2 mb-1 d-inline-block">
                                <FolderOpen size={16} />
                              </div>
                              <div className={styles.textTiny}>Gallery</div>
                            </div>
                          </div>
                          
                          <div className="col-4">
                            <div className={`text-center p-2 bg-light rounded ${styles.featureCard}`}>
                              <div className="bg-secondary text-white rounded p-2 mb-1 d-inline-block">
                                <Grid3X3 size={16} />
                              </div>
                              <div className={styles.textTiny}>View All</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Login Button below first phone */}
                <div className="d-flex justify-content-center" style={{ marginTop: '-1.5rem' }}>
                  <button 
                    className={styles.loginButton}
                    onClick={() => window.location.href = 'Coming-soon'}
                  >
                    Login to Z.Sign
                  </button>
                </div>
              </div>

              {/* Second Phone - Draw Signature */}
              <div className={styles.phoneWrapper}>
                <div className="mb-3">
                  <span className={styles.badgeCustom}>Draw Signature</span>
                </div>
                <div className={styles.phoneContainer}>
                  <div className={styles.phoneBorder}>
                    <div 
                      className={styles.phoneScreen}
                      style={{
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                      }}
                    >
                      {/* Header */}
                      <div className={`p-2 d-flex align-items-center justify-content-between border-bottom ${styles.phoneHeader}`}>
                        <ArrowLeft size={16} />
                        <small className="fw-medium">Draw Signature</small>
                        <div className={`${styles.bgPrimaryCustom} text-primary-foreground rounded-circle d-flex align-items-center justify-content-center ${styles.checkMark}`}>
                          <span style={{ fontSize: '10px' }}>✓</span>
                        </div>
                      </div>
                      
                      {/* Drawing Area */}
                      <div className={styles.phoneContent}>
                        <div className={styles.drawingArea}>
                          {/* Signature Drawing */}
                          <svg className="position-absolute w-100 h-100" viewBox="0 0 300 200" style={{ top: '20px' }}>
                            <path
                              d="M30 100 Q60 60 100 80 Q140 100 180 70 Q200 60 230 75"
                              stroke="#1e40af"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                            />
                            <path
                              d="M160 90 Q180 110 200 95 Q220 80 240 100 Q250 110 260 95"
                              stroke="#1e40af"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        
                        {/* Tool Bar */}
                        <div className="d-flex justify-content-center gap-2">
                          <button className={styles.iconContainer}>
                            <PenTool size={16} />
                          </button>
                          <button className={styles.iconContainer}>
                            <span className="bg-dark rounded-circle" style={{ width: '10px', height: '10px' }}></span>
                          </button>
                          <button className={styles.iconContainer}>
                            <span>↻</span>
                          </button>
                          <button className={styles.iconContainer}>
                            <span>🗑</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Phone - Sign on Document */}
              <div className={styles.phoneWrapper}>
                <div className="mb-3">
                  <span className={styles.badgeCustom}>Sign on Document</span>
                </div>
                <div className={styles.phoneContainer}>
                  <div className={styles.phoneBorder}>
                    <div 
                      className={styles.phoneScreen}
                      style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                      }}
                    >
                      {/* Header */}
                      <div className={`p-2 d-flex align-items-center justify-content-between border-bottom ${styles.phoneHeader}`}>
                        <ArrowLeft size={16} />
                        <small className="fw-medium">Sign Document</small>
                        <Share2 size={16} />
                      </div>
                      
                      {/* Document Area */}
                      <div className={styles.phoneContent}>
                        {/* Document Preview */}
                        <div className={`bg-white rounded border-2 flex-fill mb-3 p-3 ${styles.documentPreview}`}>
                          <div className="text-center mb-3">
                            <h6 className="mb-2">Contract Agreement</h6>
                            <hr className="mb-3" />
                          </div>
                          
                          {/* Document Lines */}
                          <div className="mb-4">
                            <div className={`bg-light mb-2 w-100 ${styles.documentLine}`}></div>
                            <div className={`bg-light mb-2 ${styles.documentLine}`} style={{ width: '80%' }}></div>
                            <div className={`bg-light mb-2 w-100 ${styles.documentLine}`}></div>
                            <div className={`bg-light mb-2 ${styles.documentLine}`} style={{ width: '75%' }}></div>
                          </div>
                          
                          {/* Signature Area */}
                          <div className={styles.signatureArea}>
                            <div className="text-center small text-muted mb-2">Signature Required</div>
                            <svg className="w-100" viewBox="0 0 200 40" style={{ height: '32px' }}>
                              <path
                                d="M20 20 Q40 10 60 15 Q80 20 100 12 Q120 8 140 15"
                                stroke="#1e40af"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className={styles.formSection}>
              <div className={styles.formContainer}>
                <h5 className={styles.formTitle}>Secure Digital Signatures for Business Docs</h5>
                <div className={styles.logoContainer}>
                  <img src={signLogo} alt="Z.Sign Logo" className={styles.logoImage} />
                </div>

                <form onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <FiUser className={styles.inputIcon} />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <FiUser className={styles.inputIcon} />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.inputContainer}>
                    <FiMail className={styles.inputIcon} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

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

                  <button type="submit" className={styles.submitButton}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 