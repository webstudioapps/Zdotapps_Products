import React, { useState, useRef } from 'react';
import styles from './kiraaze.module.css';
import videoFile from '../../../images/1sec.mp4';
import kiraaze1Img from '../../../images/1.png';
import kiraaze2Img from '../../../images/2.png';
import kiraaze3Img from '../../../images/3.png';
import kiraaze4Img from '../../../images/4.png';

const Kiraaze = () => {
  const [counter, setCounter] = useState(0);
  const scrollRef = useRef(null);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const challenges = [
    {
      number: 1,
      title: 'Screen transition',
      description:
        'With large data sets in the form of multiple food menus and extensive user base in various countries, achieving quick screen transition was a challenge. Our team with its immaculate planning and use of the right tools ensured a much quicker Pizza Hut delivery app screen transition time.',
    },
    {
      number: 2,
      title: 'Scalability',
      description:
        'Handling a rapidly growing user base and ever-expanding menu options required a highly scalable architecture. We designed a flexible system that could seamlessly accommodate increased load and new features without compromising performance.',
    },
    {
      number: 3,
      title: 'Payment Gateway Integration',
      description:
        'Integrating diverse payment gateways for various regions, each with its own security protocols and compliance requirements, presented a significant hurdle. Our solution ensured secure and smooth transactions for all users globally.',
    },
  ];

  return (
    <div className={styles.kiraazeContainer}>
      {/* Video Section */}
      <div className={styles.videoContainer}>
        <video width="100%" autoPlay muted loop className={styles.kiraazeVideo}>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img src={kiraaze1Img} alt="Image 1" className={styles.image} />
        <img src={kiraaze2Img} alt="Image 2" className={styles.image} />
        <img src={kiraaze3Img} alt="Image 3" className={styles.image} />
        <img src={kiraaze4Img} alt="Image 4" className={styles.image} />
      </div>

      {/* Challenges Section */}
      <div className={styles.challengesContainer}>
        <h1 className={styles.challengesHeading}>Our Project Challenges</h1>
        <div className={styles.challengesWrapper} ref={scrollRef}>
          {challenges.map((challenge) => (
            <div className={styles.challengeItem} key={challenge.number}>
              <div className={styles.challengeNumber}>{challenge.number}</div>
              <div className={styles.challengeContent}>
                <h2 className={styles.challengeTitle}>{challenge.title}</h2>
                <p className={styles.challengeDescription}>
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kiraaze;
