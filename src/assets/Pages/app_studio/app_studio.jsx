import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from './app_studio.module.css';

// Import images
import kiraaze1Img from '../../images/1.png';
import kiraaze2Img from '../../images/2.png';
import kiraaze3Img from '../../images/3.png';
import phaniImg from '../../images/phani.png';
import srinivasImg from '../../images/srinivas.png';
import forFormImg from '../../../assets/images/For_Form1.jpg';

// App Template Selection Section
const AppTemplateSection = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  const templates = [
    { id: 1, title: 'E-Commerce', image: kiraaze1Img },
    { id: 2, title: 'Health care', image: kiraaze2Img },
    { id: 3, title: 'Food', image: kiraaze3Img },
    { id: 4, title: 'Manufacturing', image: kiraaze1Img },
    { id: 5, title: 'Technology', image: kiraaze2Img },
    { id: 6, title: 'Edu tech', image: kiraaze3Img },
    { id: 7, title: 'Finance', image: kiraaze1Img },
    { id: 8, title: 'Portfolios', image: kiraaze2Img },
    { id: 9, title: 'Fashion', image: kiraaze3Img }
  ];

  return (
    <section className={styles.templateSection}>
      <div className="container">
        <div className={styles.templateHeader}>
          <h2 className={styles.templateTitle}>
            Choose a App <span className={styles.textAccent}>template</span>
          </h2>
          <p className={styles.templateSubtitle}>
            Explore the best templates, highly-rated amongst users.
          </p>
        </div>
        
        <div className={styles.templatesGrid}>
          {templates.map((template) => (
            <div 
              key={template.id}
              className={`${styles.templateCard} ${hoveredTemplate === template.id ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <div className={styles.templatePhoneContainer}>
                <div className={styles.templatePhone}>
                  <div className={styles.phoneScreen}>
                    <img 
                      src={template.image} 
                      alt={`${template.title} Template`}
                      className={styles.phoneScreenImage}
                    />
                  </div>
                </div>
              </div>
              <h3 className={styles.templateCardTitle}>{template.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Two-stage scroll animation section
const ScrollExpandSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay to show initial state first
          setTimeout(() => {
            setIsExpanded(true);
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.scrollExpandSection}>
      {/* Stage 1: Initial text with small image */}
      <div className={`${styles.initialStage} ${isExpanded ? styles.stageHidden : ''}`}>
        <div className={styles.initialContent}>
          <h2 className={styles.initialTitle}>
            We are{' '}
            <div className={styles.smallImageContainer}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=80" 
                alt="Zdotapps" 
                className={styles.smallImage}
              />
            </div>
            {' '}Zdotapps
          </h2>
        </div>
      </div>

      {/* Stage 2: Expanded background with new content */}
      <div className={`${styles.expandedStage} ${isExpanded ? styles.stageVisible : ''}`}>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80" 
          alt="App Development Team" 
          className={styles.expandedBackgroundImage}
        />
        <div className={styles.expandOverlay}></div>
        <div className={`${styles.expandContent} ${isExpanded ? styles.contentVisible : ''}`}>
          <h2 className={styles.expandTitle}>We Build Apps for your need</h2>
          <button className={styles.expandButton}>
            Get Started <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Services Section with auto-scrolling text
const ServicesSection = () => {
  const services = [
    {
      title: "UI/UX",
      description: "At Z.DotApps, we create intuitive and engaging user experiences that blend functionality with visual appeal. Our design process focuses on understanding user needs and business goals to craft clean, user-friendly interfaces for websites, apps, and digital platforms."
    },
    {
      title: "SEO",
      description: "At Z.DotApps, we create intuitive and engaging user experiences that blend functionality with visual appeal. Our design process focuses on understanding user needs and business goals to craft clean, user-friendly interfaces for websites, apps, and digital platforms."
    },
    {
      title: "Maintenance",
      description: "At Z.DotApps, we create intuitive and engaging user experiences that blend functionality with visual appeal. Our design process focuses on understanding user needs and business goals to craft clean, user-friendly interfaces for websites, apps, and digital platforms."
    },
    {
      title: "Digital Optimization",
      description: "At Z.DotApps, we create intuitive and engaging user experiences that blend functionality with visual appeal. Our design process focuses on understanding user needs and business goals to craft clean, user-friendly interfaces for websites, apps, and digital platforms."
    },
    {
      title: "Performance & Security",
      description: "At Z.DotApps, we create intuitive and engaging user experiences that blend functionality with visual appeal. Our design process focuses on understanding user needs and business goals to craft clean, user-friendly interfaces for websites, apps, and digital platforms."
    },
    {
      title: "Multi Language Support",
      description: "At Z.DotApps, we create intuitive and engaging user experiences that blend functionality with visual appeal. Our design process focuses on understanding user needs and business goals to craft clean, user-friendly interfaces for websites, apps, and digital platforms."
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Header and Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className={styles.servicesLeft}>
              <h2 className={styles.servicesTitle}>
                Services That Power <span className={styles.textAccent}>Your Growth</span>
              </h2>
              <p className={styles.servicesSubtitle}>
                End-to-end digital solutions designed to accelerate your business performance and scale with confidence.
              </p>
              <div className={styles.servicesImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80" 
                  alt="Team working together" 
                  className={styles.servicesImage}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Auto-scrolling Services */}
          <div className="col-lg-6">
            <div className={styles.servicesRight}>
              <div className={styles.autoScrollContainer}>
                <div className={styles.scrollingContent}>
                  {/* Duplicate services for seamless loop */}
                  {[...services, ...services].map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Discover Section with case studies
const DiscoverSection = () => {
  const caseStudies = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&auto=format&fit=crop&q=80",
      category: "E-Commerce",
      title: "How We Achieved Results for [Project Name]"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&auto=format&fit=crop&q=80",
      category: "Health care",
      title: "How We Achieved Results for [Project Name]"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      category: "Tech",
      title: "How We Achieved Results for [Project Name]"
    }
  ];

  return (
    <section className={styles.discoverSection}>
      <div className="container">
        <div className={styles.discoverHeader}>
          <h2 className={styles.discoverTitle}>
            Discover How We Deliver <span className={styles.textAccent}>Outstanding Results</span>
          </h2>
        </div>
        
        <div className="row g-4 mb-5">
          {caseStudies.map((study) => (
            <div key={study.id} className="col-lg-4 col-md-6">
              <div className={styles.caseStudyCard}>
                <div className={styles.caseStudyImageContainer}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className={styles.caseStudyImage}
                  />
                </div>
                <div className={styles.caseStudyContent}>
                  <div className={styles.caseStudyMeta}>
                    <span className={styles.caseStudyLabel}>Case study</span>
                    <span className={styles.caseStudyCategory}>● {study.category}</span>
                  </div>
                  <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.discoverFooter}>
          <button className={styles.viewAllButton}>
            View all <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section - Exact implementation
const TestimonialsSection = () => {
  const testimonials = [
    { 
      img: phaniImg, 
      quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
      name: 'Jenny Wilson', 
      company: 'Grower.io' 
    }, 
    { 
      img: srinivasImg, 
      quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
      name: 'Devon Lane', 
      company: 'DLDesign.co' 
    }, 
    { 
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60', 
      quote: "Outstanding quality and great flexibility. It helped our team move much faster.", 
      name: 'Courtney Henry', 
      company: 'Stark Ltd' 
    }
  ];

  const [index, setIndex] = useState(0);
  const left = testimonials[index % testimonials.length];
  const right = testimonials[(index + 1) % testimonials.length];
  const StarRow = () => (<div className="mb-3" style={{ color: '#F2C94C' }}>★★★★★</div>);

  return (
    <section className="py-5" style={{ backgroundColor: '#2b2a2aff', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
        <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

        <div className="row g-5 align-items-center justify-content-center">
          {[left, right].map((t, i) => (
            <div key={i} className="col-md-6">
              <div className="d-flex gap-4 align-items-center">
                <img src={t.img} alt={t.name} className="rounded" style={{ width: 230, height: 290, objectFit: 'cover' }} />
                <div className="text-start">
                  <StarRow />
                  <p className="mb-3" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}>
                    "{t.quote}"
                  </p>
                  <div className="fw-bold" style={{ color: '#ffffff' }}>{t.name} <span className="ms-2" style={{ color: '#F2C94C' }}>{t.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <button className="btn rounded-circle" onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} style={{ width: 44, height: 44, border: '2px solid #F2C94C', color: '#F2C94C' }} aria-label="Previous">
            ←
          </button>
          <div>
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                onClick={() => setIndex(d)}
                style={{
                  display: 'inline-block',
                  width: 10,
                  height: 10,
                  margin: '0 6px',
                  borderRadius: '50%',
                  backgroundColor: index % testimonials.length === d ? '#F2C94C' : 'rgba(255,255,255,0.25)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
          <button className="btn rounded-circle" onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)} style={{ width: 44, height: 44, border: '2px solid #F2C94C', color: '#F2C94C' }} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

// Get in Touch Section
const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    select: '',
    phone: '',
    message: '',
    agreeToPolicy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={`${styles.getInTouchSection} d-flex align-items-center`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Contact Form */}
          <div className="col-lg-6">
            <div className={styles.contactFormContainer}>
              <h2 className={styles.contactTitle}>Get in touch</h2>
              <p className={styles.contactSubtitle}>Our friendly team would love to hear from you.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label className={styles.formLabel}>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className={styles.formInput}
                    />
                  </div>
                  <div className="col-6">
                    <label className={styles.formLabel}>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className={styles.formInput}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className={styles.formLabel}>Select</label>
                  <div className={styles.selectContainer}>
                    <select
                      name="select"
                      value={formData.select}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                    >
                      <option value="">Tell us what you're looking for</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="consultation">Consultation</option>
                    </select>
                    <span className={styles.selectIcon}>⌄</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className={styles.formLabel}>Phone number</label>
                  <div className={styles.phoneInputContainer}>
                    <select className={styles.countryCode}>
                      <option value="+91">IN</option>
                      <option value="+1">US</option>
                      <option value="+44">UK</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 (555) 000-0000"
                      className={styles.phoneInput}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className={styles.formLabel}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={styles.formTextarea}
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="agreeToPolicy"
                      checked={formData.agreeToPolicy}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxText}>You agree to our friendly privacy policy.</span>
                  </label>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6">
            <div className={styles.contactImageContainer}>
              <div className={styles.contactImageWrapper}>
                <img 
                  src={forFormImg}
                  alt="Contact us" 
                  className={styles.contactImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is Z.DotApps?",
      answer: "Z.DotApps is a comprehensive digital solutions platform that provides web development, app development, and digital services to help businesses grow and succeed in the digital landscape."
    },
    {
      id: 2,
      question: "What is Web Studio?",
      answer: "Web Studio is our web development service that creates modern, responsive websites tailored to your business needs with cutting-edge technology and design principles."
    },
    {
      id: 3,
      question: "What is App Studio?",
      answer: "App Studio is our mobile and web application development service that builds custom applications for various platforms including iOS, Android, and web applications."
    },
    {
      id: 4,
      question: "What is Agentic Studio?",
      answer: "Agentic Studio is our AI-powered development service that creates intelligent agents and automated solutions to streamline business processes and enhance productivity."
    },
    {
      id: 5,
      question: "What services does Z.DotApps offer?",
      answer: "We offer comprehensive digital services including web development, mobile app development, UI/UX design, SEO optimization, digital marketing, maintenance & support, and AI-powered solutions."
    },
    {
      id: 6,
      question: "How many days does it take to build a website?",
      answer: "The timeline varies based on project complexity. Simple websites take 1-2 weeks, while complex applications can take 4-12 weeks. We provide detailed timelines during project consultation."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        </div>
        
        <div className={styles.faqGrid}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={`${styles.faqIcon} ${openFAQ === faq.id ? styles.faqIconOpen : ''}`}>
                  +
                </span>
              </div>
              {openFAQ === faq.id && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Studio Component
function AppStudio() {
  return (
    <div className={styles.appStudioPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>App Studio</p>
            <h1 className={styles.sectionTitle}>Apps for every need</h1>
          </div>
          <div className={styles.cardsContainer}>
            {/* Ready to use Card */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Ready to use</h2>
              <p className={styles.cardDescription}>
                Pick from our library of App templates and launch your Apps in minutes — fully customizable and responsive.
              </p>
              <div className={styles.appScreensWrapper}>
                <img src={kiraaze1Img} alt="App Screen 1" className={`${styles.appScreen} ${styles.screen1}`} />
                <img src={kiraaze2Img} alt="App Screen 2" className={`${styles.appScreen} ${styles.screen2}`} />
                <img src={kiraaze3Img} alt="App Screen 3" className={`${styles.appScreen} ${styles.screen3}`} />
              </div>
            </div>
            
            {/* Custom build Card */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Custom build</h2>
              <p className={styles.cardDescription}>
                We craft Apps from scratch to match your exact needs — designed, developed, and optimised for impact.
              </p>
              <div className={styles.appScreensWrapper}>
                <img src={kiraaze1Img} alt="App Screen 1" className={`${styles.appScreen} ${styles.screen1}`} />
                <img src={kiraaze2Img} alt="App Screen 2" className={`${styles.appScreen} ${styles.screen2}`} />
                <img src={kiraaze3Img} alt="App Screen 3" className={`${styles.appScreen} ${styles.screen3}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Expand Section */}
      <ScrollExpandSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Discover Section */}
      <DiscoverSection />

      {/* Testimonials Carousel Section */}
      <TestimonialsSection />

      {/* Get in Touch Section */}
      <GetInTouchSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

export default AppStudio;