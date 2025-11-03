import React from "react";
import styles from "./pricing.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <div className="container text-center">
        <div className="mb-5 pb-3">
          <h1 className="display-4 fw-bold text-white mb-3">Pricing Plans</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            Choose the plan that’s right for you. Simple, transparent pricing to unlock your productivity.
          </p>
        </div>

        <div className="row justify-content-center align-items-center g-4">

          {/* Free Plan */}
          <div className="col-lg-4 col-md-6">
            <div className={`${styles.card} h-100 p-4 p-md-5 d-flex flex-column`}>
              <div className="mb-4">
                <h3 className="fw-bold text-white">Free</h3>
                <p className={styles.cardSubtitle}>For individuals starting out.</p>
                <div className="my-4">
                  <span className={styles.priceText}>$0</span>
                  <span className={styles.pricePeriod}>/mo</span>
                </div>
              </div>
              <ul className="list-unstyled text-start mb-5">
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> 5 Document Summaries/mo
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> Chat with 3 Documents
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> PDF, DOCX, TXT Support
                </li>
              </ul>
              <div className="mt-auto">
                <button className={`${styles.ghostButton} w-100`}>Get Started</button>
              </div>
            </div>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="col-lg-4 col-md-6">
            <div className={`${styles.card} ${styles.highlightedCard} h-100 p-4 p-md-5 d-flex flex-column`}>
               <div className={styles.popularBadge}>Most Popular</div>
              <div className="mb-4">
                <h3 className="fw-bold text-white">Pro</h3>
                <p className={styles.cardSubtitle}>For professionals and small teams.</p>
                <div className="my-4">
                  <span className={styles.priceText}>$10</span>
                  <span className={styles.pricePeriod}>/mo</span>
                </div>
              </div>
              <ul className="list-unstyled text-start mb-5">
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.highlightedCheck} /> Unlimited Summaries
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.highlightedCheck} /> Chat with Unlimited Docs
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.highlightedCheck} /> Priority Support
                </li>
                 <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.highlightedCheck} /> Early Access to New Features
                </li>
              </ul>
              <div className="mt-auto">
                <button className={`${styles.solidButton} w-100`}>Upgrade to Pro</button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-lg-4 col-md-6">
            <div className={`${styles.card} h-100 p-4 p-md-5 d-flex flex-column`}>
              <div className="mb-4">
                <h3 className="fw-bold text-white">Enterprise</h3>
                <p className={styles.cardSubtitle}>For large organizations.</p>
                <div className="my-4">
                  <span className={styles.priceText}>Custom</span>
                </div>
              </div>
              <ul className="list-unstyled text-start mb-5">
                 <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> All Pro Features
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> Dedicated Onboarding
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> Advanced Security & SSO
                </li>
                <li className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} /> Custom Integrations
                </li>
              </ul>
              <div className="mt-auto">
                <button className={`${styles.ghostButton} w-100`}>Contact Sales</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;