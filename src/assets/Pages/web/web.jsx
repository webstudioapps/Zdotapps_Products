import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import styles from './web.module.css';

// Import images
// Import images
import kiraaze1Img from '../../../assets/images/1.png';
import kiraaze2Img from '../../../assets/images/2.png';
import kiraaze3Img from '../../../assets/images/3.png';
import phaniImg from '../../../assets/images/phani.png';
import srinivasImg from '../../../assets/images/srinivas.png';
import techImage from '../../../assets/images/1.webp';
import experienceImage from '../../../assets/images/2.webp';
import strategyImage from '../../../assets/images/3.webp';
import growthImage from '../../../assets/images/4.webp';
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

// WhatWeDo Component (Copied from your previous input)
function WhatWeDo() {
  const sections = [
    {
      no: '01',
      key: 'technology',
      title: 'Technology',
      blurb:
        'We are a leader in building cutting‑edge mobile and web applications that are AI‑driven and intuitive. We push boundaries and solve complex challenges to drive real impact.',
      services: [
        'Mobile App Development',
        'Web Development',
        'AI & Innovation',
        'Backend & Infrastructure',
        'Emerging Technology',
      ],
      img: techImage,
    },
    {
      no: '02',
      key: 'experience',
      title: 'Experience',
      blurb:
        'Our best‑in‑class Product Designers and Strategists create smart, clear product experiences that keep people engaged through carefully crafted UX, UI, and interaction design.',
      services: [
        'Product Vision',
        'User Research',
        'UX Design',
        'Visual Design',
        'Design Systems',
      ],
      img: experienceImage,
    },
    {
      no: '03',
      key: 'strategy',
      title: 'Strategy',
      blurb:
        'We surround clients with leaders from product, design, data, and engineering with relentless focus on product‑market fit, growth potential, monetization, and technical opportunities.',
      services: [
        'Digital Transformation',
        'Product Validation',
        'AI Strategy',
        'Planning & Roadmapping',
        'Technical Audits',
      ],
      img: strategyImage,
    },
    {
      no: '04',
      key: 'growth',
      title: 'Growth',
      blurb:
        'Our PMs, Data Scientists, and Growth Marketers partner to evolve and adopt the product—prioritizing business goals via rapid releases, feedback cycles, and data‑driven experimentation.',
      services: [
        'Ongoing Management',
        'Data & Experimentation',
        'User Acquisition',
        'User Retention',
        'Staff Augmentation',
      ],
      img: growthImage,
    },
  ]

  const [active, setActive] = useState(0)
  const activeSection = sections[active]

  // Immediate transitions for smooth, responsive feel
  const hoverTimer = useRef(null)
  const onEnter = (i) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
    setActive(i)
  }
  const onLeave = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
  }
  
  // Touch support for mobile
  const handleTouchStart = (i) => {
    setActive(i)
  }

  return (
    <section className="relative isolate bg-black text-white min-h-screen flex items-center py-16">
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start h-full">
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
                    <h2 className="text-center text-4xl font-semibold leading-tight text-zinc-50 md:text-5xl mb-8">
                      <span className="block">Elegant solutions</span>
                      <span className="block">built on proven</span>
                      <span className="block">methodologies.</span>
                    </h2>

                  <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-4 list-none" onMouseLeave={onLeave} style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {sections.map((s, i) => {
                      const open = active !== null && i === active
                      return (
                        <li
                          key={s.key}
                          onMouseEnter={() => onEnter(i)}
                          onTouchStart={() => handleTouchStart(i)}
                          onFocus={() => setActive(i)}
                          className={`rounded-xl border transition-all duration-300 sm:rounded-2xl ${
                            open ? 'border-white/30 bg-white/[0.02]' : 'border-white/5 hover:border-white/20 active:border-white/20'
                          }`}
                          tabIndex={0}
                        >
                          {/* Header row */}
                          <div className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                            <span className="font-mono text-xs text-zinc-400 sm:text-sm">{s.no}</span>
                            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl">
                              <span>{s.title}</span>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-70 sm:w-4 sm:h-4"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            </div>
                          </div>
        
                          {/* Inline expanding content */}
                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  height: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
                                  opacity: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                                }}
                                style={{ overflow: 'hidden' }}
                                className="px-4 pb-4 sm:px-5 sm:pb-6"
                              >
                                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start">
                                  <p className="max-w-prose text-sm leading-relaxed text-zinc-400">{s.blurb}</p>
                                  <span className="hidden h-full w-px bg-white/10 md:block" aria-hidden />
                                  <ul className="grid gap-2 text-xs text-zinc-300">
                                    {s.services.map((x) => (
                                      <li key={x} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-400">
                                        {x}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      )
                    })}
                  </ul>
                  </div>

        {/* RIGHT: image swaps while left expands inline */}
        <div className="w-full md:w-1/3 sticky top-1/2 transform -translate-y-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                <div className="relative w-100 max-w-md ms-5 mx-auto">
                  <img
                    src={activeSection.img}
                    alt={`${activeSection.title} hero`}
                    className="w-100 h-auto rounded-xl shadow-2xl mt-2"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black md:block"></div>
    </section>
  )
}


// Process Flow Component - Solutions for Every Industry
const ProcessFlow = () => {
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* "Discover How We Deliver Outstanding Results" section */}
      <section className="d-flex align-items-center" style={{ 
        backgroundColor: '#222222ff', 
        minHeight: '100vh',
        padding: '4rem 0'
      }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ 
            color: '#ffffff',
            fontSize: '2.5rem',
            marginBottom: '3rem'
          }}>
            Discover How We Deliver <span style={{ color: '#F2C94C' }}>Outstanding Results</span>
          </h2>
          
          <div className="row g-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex flex-column">
                <div 
                  onClick={() => handleClick('/kiraaze')} 
                  style={{ 
                    cursor: 'pointer',
                    flex: '1 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={kiraaze_casestudyImg}
                    alt="E-commerce case study"
                    className="img-fluid w-100"
                    style={{ 
                      borderRadius: '24px', 
                      height: '320px', 
                      objectFit: 'cover',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div style={{ color: '#F2C94C', fontWeight: 600, fontSize: '1.1rem' }}>
                    <span>Case study</span>
                    <span className="mx-2">•</span>
                    <span>E-commerce</span>
                  </div>
                  <h3 className="fw-bold mt-2" style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    How We Achieved Results for<br />
                    E-commerce Business
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex flex-column">
                <div 
                  onClick={() => handleClick('/kiraaze')} 
                  style={{ 
                    cursor: 'pointer',
                    flex: '1 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={kiraaze_casestudyImg}
                    alt="NGO case study"
                    className="img-fluid w-100"
                    style={{ 
                      borderRadius: '24px', 
                      height: '320px', 
                      objectFit: 'cover',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div style={{ color: '#F2C94C', fontWeight: 600, fontSize: '1.1rem' }}>
                    <span>Case study</span>
                    <span className="mx-2">•</span>
                    <span>NGO</span>
                  </div>
                  <h3 className="fw-bold mt-2" style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    How We Delivered Impact for<br />
                    Non-Profit Organization
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex flex-column">
                <div 
                  onClick={() => handleClick('/kiraaze')} 
                  style={{ 
                    cursor: 'pointer',
                    flex: '1 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={kiraaze_casestudyImg}
                    alt="Manufacturing case study"
                    className="img-fluid w-100"
                    style={{ 
                      borderRadius: '24px', 
                      height: '320px', 
                      objectFit: 'cover',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div style={{ color: '#F2C94C', fontWeight: 600, fontSize: '1.1rem' }}>
                    <span>Case study</span>
                    <span className="mx-2">•</span>
                    <span>Manufacturing</span>
                  </div>
                  <h3 className="fw-bold mt-2" style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    How We Transformed a<br />
                    Manufacturing Business
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't just take our words section */}
      <section className="py-5" style={{ 
        backgroundColor: '#2b2a2aff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

          <div className="position-relative" style={{ zIndex: 2 }}>
            {(() => {
              const testimonials = [
                { 
                  img: phaniImg, 
                  quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
                  name: 'Sri Phani', 
                  company: 'Ecomall' 
                },
                { 
                  img: srinivasImg, 
                  quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
                  name: 'Srinivas', 
                  company: 'Fusion Street' 
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
              const StarRow = () => (
                <div className="mb-3" style={{ 
                  color: '#F2C94C',
                  fontSize: '1.2rem',
                  letterSpacing: '2px'
                }}>
                  ★★★★★
                </div>
              );

              return (
                <>
                  <div className="row g-5 align-items-center justify-content-center">
                    {[left, right].map((t, i) => (
                      <div key={i} className="col-md-5">
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
                </>
              );
            })()}
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Get in Touch Section */}
      <GetInTouchSection />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    { 
      img: phaniImg, 
      quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
      name: 'Sri Phani', 
      company: 'Ecomall' 
    },
    { 
      img: srinivasImg, 
      quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
      name: 'Srinivas', 
      company: 'Fusion Street' 
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
  const StarRow = () => (
    <div className="mb-3" style={{ 
      color: '#F2C94C',
      fontSize: '1.2rem',
      letterSpacing: '2px'
    }}>
      ★★★★★
    </div>
  );

  return (
    <section className="py-5" style={{ 
      backgroundColor: '#2b2a2aff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
        <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

        <div className="position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center justify-content-center">
            {[left, right].map((t, i) => (
              <div key={i} className="col-md-5">
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

      <WhatWeDo /> {/* Replaced ScrollingCards with WhatWeDo */}

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