import React, { useState, useEffect } from 'react';
import styles from './z.engage.module.css';
import flowForm from '../z.flow/z.flow.module.css';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import carelonLogo from './images/carelon_logo.png';
import campusLifeLogo from './images/campus_life_logo.png';
import lifeLogo from './images/life_logo.png';
import swagramLogo from './images/swagram_logo.png';
import yfsLogo from './images/yfs_logo.png';
import iosBadge from './images/ios.png';
import playstoreBadge from './images/playstore.png';
import carelonScreen from './images/carelon.webp';
import campuslifeScreen from './images/campus_life.webp';
import lifecykulScreen from './images/life.webp';
import swagraamScreen from './images/swagram.png';
import yfsScreen from './images/yfs.png';
import engage from '../../../images/engage.png';
import appstore from './images/appstore.svg';
import googlePlay from './images/googles_store.svg';

// Example features and images for each card
const cardsData = [
  {
    title: 'Carelon',
    bgColor: '#7952E0',
    logo: carelonLogo,
    features: [
      'All-in-one engagement hub.',
      'Fun, gamified activities & events.',
      'Wellness + learning boost.',
      'Real-time insights.',
      'Rewards & fun recognition.',
    ],
    iosLink: 'https://apps.apple.com/in/app/carelon-engage/id1668110764',
    androidLink: 'https://play.google.com/store/apps/details?id=com.carelon.service.app',
    
    image: carelonScreen,
    alt: 'Carelon app screenshot',
  },
  {
    title: 'CampusLife',
    bgColor: '#5009B5',
    logo: campusLifeLogo,
    features: [
      'Campus events at your fingertips.',
      'Tools to boost student engagement.',
      'Simple and smart club management.',
      'Easy access to campus resources.',
      'Engage, Experience and Excel.',
    ],
    iosLink: 'https://apps.apple.com/in/app/campus-life/id6737402090',
    androidLink: 'https://play.google.com/store/apps/details?id=com.campus.life.app&hl=en_IN',
    image: campuslifeScreen,
    alt: 'CampusLife app screenshot',
  },
  {
    title: 'LifeCykul',
    bgColor: '#32a739',
    logo: lifeLogo,
    features: [
      'Real-Time Activity Tracking.',
      'Engagement & Social Interaction.',
      'Seamless Event & Campaign Execution.',
      'Smart Analytics & Health Insights.',
      'Rewards & Recognition System.',  
    ],
    iosLink: 'https://apps.apple.com/in/app/life-cykul/id1410238739',
    androidLink: 'https://play.google.com/store/apps/details?id=life.cykul.com.lifeCykul&hl=en_IN',
    image: lifecykulScreen,
    alt: 'LifeCykul app screenshot',
  },
  {
    title: 'Swagraam',
    bgColor: '#fe7200',
    logo: swagramLogo,
    features: [
      'Digital archive of local culture.',
      'Connecting villagers and youth.',
      'Uniting people through shared roots.',
      'Preserving every village’s heritage.',
      'Our village, our pride.',
    ],
    iosLink: 'https://apps.apple.com/',
    androidLink: 'https://play.google.com/store/apps/details?id=com.swagraam.service.app&hl=en_IN',
    image: swagraamScreen,
    alt: 'Swagraam app screenshot',
  },
  {
    title: 'Youth for Seva',
    bgColor: '#8b0205',
    logo: yfsLogo,
    features: [
      'Empowering youth to transform society.',
      'Volunteer today, build a better tomorrow.',
      'Inspire action, serve with purpose.',
      'Where compassion meets commitment.',
      'Early service, lifelong change.',
    ],

    iosLink: 'https://apps.apple.com/in/app/youth-for-seva/id6443999296',
    androidLink: 'https://play.google.com/store/apps/details?id=com.youthfor.seva.app&hl=en_IN',
    image: yfsScreen,
    alt: 'Youth for Seva app screenshot',
  },
];

const Zengage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ---- Chips select state ----
  const [selectedTags, setSelectedTags] = useState([]);
  const chipOptions = ['Carelon', 'CampusLife', 'LifeCykul', 'Swagraam', 'Youth for Seva'];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause auto-scroll when manually changing slides
    setIsPaused(true);
    // Resume auto-scroll after a delay if not already resumed by user interaction
    setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
      }
    }, 5000);
  };

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true);
  // Resume auto-scroll when mouse leaves
  const handleMouseLeave = () => setIsPaused(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can collect other form inputs as well
    console.log('Selected tags:', selectedTags);
    alert(`Form submitted with tags: ${selectedTags.join(', ')}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>One Platform for all your engagements</h1>
   

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

      {/* Side-by-side layout */}
      <div className={styles['side-by-side']}>
        {/* Carousel */}
        <div 
          className={styles['carousel-container']}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsPaused(true)}
        >
          <div
            className={styles['carousel-wrapper']}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={styles['feature-card']}
                style={{
                  backgroundColor: currentIndex === index ? card.bgColor : '#fffdf2',
                }}
              >
                <div className={styles['feature-text']}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', marginLeft: '0' }}>
                    <img
                      src={card.logo}
                      alt={`${card.title} logo`}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 16,
                        background: '#fff',
                        flexShrink: 0,
                        marginLeft: 0
                      }}
                    />
                    <h2 className={styles['feature-text-h2']} style={{ margin: 0, textAlign: 'left' }}>
                      {card.title}
                    </h2>
                  </div>
                <ul className={styles['tick-list']}>
  {card.features.map((feature, i) => (
    <li key={i} className={styles['feature-text-li']}>
      {feature}
    </li>
  ))}
</ul>


                  <div className={styles.storeBadges}>
                    {card.iosLink && (
                      <a href={card.iosLink} target="_blank" rel="noopener noreferrer">
                        <img src={appstore} alt="Download on the App Store" />
                      </a>
                    )}
                    {card.androidLink && (
                      <a href={card.androidLink} target="_blank" rel="noopener noreferrer">
                        <img src={googlePlay} alt="Get it on Google Play" />
                      </a>
                    )}
                  </div>
                    <div className={styles.dots}>
            {cardsData.map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`${styles.dot} ${currentIndex === dotIdx ? styles.active : ''}`}
                onClick={() => goToSlide(dotIdx)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
                </div>

                <div className={styles['image-wrapper']}>
                  <img src={card.image} alt={card.alt} />
                </div>
                
              </div>
            ))}
          </div>
          {/* Carousel dots */}
       
        </div>

        {/* Contact form with chips select */}
        <div className={`${flowForm.formWrapper}`}>
          <h5 className="text-black" style={{ textAlign: 'center' }}>Begin your Engagement with</h5>
          <div className={flowForm.logoContainer}>
            <img src={engage} alt="Z.Engage Logo" className={flowForm.logoImage} />
          </div>

<form className={`${flowForm.contactForm}`} onSubmit={handleSubmit}>
  <div className={flowForm.formGroup}>
    <div className={flowForm.inputContainer}>
      <FiUser className={flowForm.inputIcon} />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        className={flowForm.formInput}
      />
    </div>
  </div>

  <div className={flowForm.formGroup}>
    <div className={flowForm.inputContainer}>
      <FiUser className={flowForm.inputIcon} />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
        className={flowForm.formInput}
      />
    </div>
  </div>

  <div className={flowForm.formGroup}>
    <div className={flowForm.inputContainer}>
      <FiMail className={flowForm.inputIcon} />
      <input
        type="email"
        name="email"
        placeholder="Email ID"
        required
        className={flowForm.formInput}
      />
    </div>
  </div>

  <div className={flowForm.formGroup}>
    <div className={flowForm.inputContainer}>
      <FiMessageSquare className={`${flowForm.inputIcon} ${flowForm.textareaIcon}`} />
      <textarea
        name="message"
        placeholder="Share your engagement requirements"
        className={flowForm.formTextarea}
        rows="4"
      />
    </div>
  </div>

  <button type="submit" className={flowForm.submitButton}>
    Submit
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Zengage;
