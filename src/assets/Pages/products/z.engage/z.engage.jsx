import React, { useState, useEffect } from 'react';
import styles from './z.engage.module.css';
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
      'Track progress visually across stages.',
      'Customize for sales, marketing, or service.',
      'Filter opportunities by criteria.',
      'Collaborate with your team in real-time.',
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
      'Campus events and updates.',
      'Student engagement tools.',
      'Easy club management.',
      'Connect with campus resources.',
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
      'Track your fitness journey.',
      'Join community challenges.',
      'Monitor health stats.',
      'Share achievements.',
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
      'Local community updates.',
      'Neighborhood events.',
      'Connect with residents.',
      'Share resources and info.',
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
      'Volunteer opportunities.',
      'Track your impact.',
      'Connect with NGOs.',
      'Organize events and drives.',
    ],

    iosLink: 'https://apps.apple.com/in/app/youth-for-seva/id6443999296',
    androidLink: 'https://play.google.com/store/apps/details?id=com.youthfor.seva.app&hl=en_IN',
    image: yfsScreen,
    alt: 'Youth for Seva app screenshot',
  },
];

const Zengage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ---- Chips select state ----
  const [selectedTags, setSelectedTags] = useState([]);
  const chipOptions = ['Carelon', 'CampusLife', 'LifeCykul', 'Swagraam', 'Youth for Seva'];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

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
        <div className={styles['carousel-container']}>
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
        <div className={`${styles.contactFormWrapper} mt-3`}>
          <h5 style={{ textAlign: 'center' }}>Begin your Engagement with</h5>
          <img src={engage} alt="Z.Engage Logo" className={styles.logo} />

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
    <textarea name="message" placeholder="Share your engagement requirements" style={{ height: "90px" }} />
  </label>
  <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>
    Submit
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Zengage;
