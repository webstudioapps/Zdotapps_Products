import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for React Router v6+
import styles from './z.flow.module.css';
import flowIllustration from '../../../images/flow.png';

// Content blocks for each slide
const cardsData = [
  {
    title: 'Clickstream Analytics',
    bgColor: '#EFC426',
    features: [
      'Track user clickstreams',
      'Map user journeys',
      'View paths in real time',
      'Detect bottlenecks early',
    ],
    image: flowIllustration,
    alt: 'Journey map (Step 1 → Step 2 → Step 3) with arrows, and a highlighted drop-off at Step 2',
  },
  {
    title: 'Optimization Insights',
    bgColor: '#EFC426',
    features: [
      'Optimize workflows',
      'Compare performance',
      'Share insights with teams',
      'Boost efficiency and growth',
    ],
    image: flowIllustration,
    alt: 'Two workflow diagrams side by side: Before (with red bottleneck marker) vs After (smooth flow with green checkmarks)',
  },
  {
    title: 'Analytics Dashboard',
    bgColor: '#EFC426',
    features: [
      'Centralized clickstream data',
      'Customizable reports',
      'Team-friendly sharing',
      'Real-time metrics',
    ],
    image: flowIllustration,
    alt: 'Dashboard cards with Avg. Drop-off Rate, Most Common Workflow Path, Top Bottleneck Step',
  },
];

const ZFlow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();  // Initialize navigate for redirection

  // ---- Chips select state ----
  const [selectedTags, setSelectedTags] = useState([]);
  const chipOptions = [
    'Clickstream Analytics',
    'Optimization Insights',
    'Analytics Dashboard',
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected tags:', selectedTags);
    alert(`Form submitted with interests: ${selectedTags.join(', ')}`);
  };

  // Redirect to the login page
  const handleLoginRedirect = () => {
    navigate('/login');  // Replace '/login' with your actual login page path
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Automate. Track. Optimize your workflows</h1>

      {/* Navigation Tabs */}
      <div className={styles['nav-tabs']}>
        {cardsData.map((card, index) => (
          <button
            key={index}
            className={styles['tab-btn']}
            onClick={() => goToSlide(index)}
            style={{
              backgroundColor: currentIndex === index ? card.bgColor : '#fff',
              color: currentIndex === index ? '#fff' : '#000',
            }}
          >
            {card.title}
          </button>
        ))}
      </div>

      {/* Bootstrap grid layout */}
      <div className="container-fluid my-5">
        <div className="row align-items-stretch">
          {/* Left Carousel */}
          <div className="col-md-8 d-flex">
            <div className={`${styles['carousel-container']} flex-fill`}>
              <div
                className={styles['carousel-wrapper']}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className={styles['feature-card']}
                    style={{
                      backgroundColor: '#fff',
                      color: currentIndex === index ? 'black' : '#000',
                    }}
                  >
                    <div className={styles['feature-text']}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 30,
                          marginTop: 20,
                        }}
                      >
                        <h2
                          className={styles['feature-text-h2']}
                          style={{ margin: 0 }}
                        >
                          {card.title}
                        </h2>
                      </div>
                      <ul>
                        {card.features.map((feature, i) => (
                          <li key={i} className={styles['feature-text-li']}>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Extra button only for Clickstream Analytics */}
                      {card.title === 'Clickstream Analytics' && (
                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '50px', marginBottom: '20px' }} className="ms-5">
                          <button
                            className={`btn btn-warning fw-semibold btn-lg ${styles.loginBtn}`}
                            onClick={handleLoginRedirect}  // Trigger the redirect
                          >
                            Login to Z.flow
                          </button>
                        </div>
                      )}
                    </div>

                    <div className={styles['image-wrapper']}>
                      <img src={card.image} alt={card.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="col-md-4 d-flex">
            <div className={`${styles.contactFormWrapper} flex-fill`}>
              <h5 style={{ textAlign: 'center' }}>Onboard your workflows with</h5>
              <img
                src={flowIllustration}
                alt="Z.Flow Logo"
                className={styles.logo}
              />

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label>
                  First Name
                  <input type="text" name="firstName" placeholder="First Name" required />
                </label>
                <label>
                  Last Name
                  <input type="text" name="lastName" placeholder="Last Name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="Email ID" required />
                </label>
                <label>
                  Message
                  <textarea name="message" placeholder="Tell us about your workflow requirements" style={{ height: "90px" }} />
                </label>
                <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZFlow;
