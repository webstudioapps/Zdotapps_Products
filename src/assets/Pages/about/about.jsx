import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <main className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>About Z.Apps</h1>
            <p className={styles.heroDescription}>
              At <span className={styles.highlight}>Z.Apps</span>, we empower organizations
to foster collaborative thinking to
further drive workplace innovation. By
closing the loop and leveraging
agile frameworks, we help business
grow organically and foster a consumer
first mindset.
            </p>
            <div className={styles.heroButtons}>
              <a href="/contact" className={styles.primaryBtn}>Talk to us</a>
              <a href="/services" className={styles.secondaryBtn}>Our Services</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroIllustration}>
              <div className={styles.illustrationIcon}></div>
              <h3>Collaborative Innovation</h3>
              <p>Agile ideas. Customer-first outcomes. Organic growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className={styles.mvvSection}>
        <h2>Our Purpose</h2>
        <div className={styles.mvvCardsContainer}>
          <div className={styles.mvvCard}>
            <div className={styles.mvvIcon}>🎯</div>
            <h4 className={styles.mvvTitle}>Our Mission</h4>
            <p className={styles.mvvDescription}>
              To empower teams to experiment, learn, and build meaningful solutions that delight users and drive sustainable growth.
            </p>
          </div>
          <div className={styles.mvvCard}>
            <div className={styles.mvvIcon}>🔮</div>
            <h4 className={styles.mvvTitle}>Our Vision</h4>
            <p className={styles.mvvDescription}>
              A workplace where collaboration fuels continuous innovation, and every process is designed with the customer in mind.
            </p>
          </div>
          <div className={styles.mvvCard}>
            <div className={styles.mvvIcon}>💎</div>
            <h4 className={styles.mvvTitle}>Our Values</h4>
            <ul className={styles.mvvList}>
              <li className={styles.mvvListItem}>Customer-first thinking</li>
              <li className={styles.mvvListItem}>Rapid experimentation</li>
              <li className={styles.mvvListItem}>Open collaboration</li>
              <li className={styles.mvvListItem}>Data-informed decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Work - Redesigned */}
      <section className={styles.howSection}>
        <div className={styles.sectionHeader}>
      
          <h3 className={styles.sectionTitle}>How We Transform Ideas</h3>
          <p className={styles.sectionDescription}>
            We combine agile frameworks with cross-functional collaboration to turn ideas into measurable outcomes. Our process is lightweight, repeatable, and designed to close the loop quickly.
          </p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.howProcessGrid}>
          {/* Step 1: Discover */}
          <div className={styles.howStepCard}>
         
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h4 className={styles.stepTitle}>Discover</h4>
            <p className={styles.stepDescription}>
              Understand user needs and business goals through rapid research and stakeholder alignment.
            </p>
          </div>

          {/* Arrow */}
          <div className={styles.arrow}>→</div>

          {/* Step 2: Build */}
          <div className={styles.howStepCard}>
    
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0-1.4 0L9.4 10.9a1 1 0 0 0 1.4 1.4l3.9-4.6a1 1 0 0 0 0-1.4z" />
                <path d="M18 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M21 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </div>
            <h4 className={styles.stepTitle}>Build</h4>
            <p className={styles.stepDescription}>
              Ship experiments fast using modular design, clear hypotheses, and short iterations.
            </p>
          </div>

          {/* Arrow */}
          <div className={styles.arrow}>→</div>

          {/* Step 3: Learn & Scale */}
          <div className={styles.howStepCard}>
      
            <div className={styles.stepIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v5M12 17v5M5 12h5M19 12h5M8 8l4 4 4-4" />
              </svg>
            </div>
            <h4 className={styles.stepTitle}>Learn & Scale</h4>
            <p className={styles.stepDescription}>
              Measure impact, gather feedback, and scale what works — while pruning what doesn't.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaCard}>
          <h4 className={styles.ctaTitle}>Ready to get started?</h4>
          <p className={styles.ctaDescription}>
            Let’s discuss how we can help transform your ideas into reality.
          </p>
          <a href="/contact" className={styles.ctaBtn}>Get Started</a>
        </div>
      </section>
    </main>
  );
}