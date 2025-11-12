import React from "react";
import styles from "./welcomeSoon.module.css";
import { useNavigate } from "react-router-dom";
// Import all logos
import flowLogo from "../../../images/flow.png";
import hireLogo from "../../../images/hire.png";
import meritLogo from "../../../images/merit.png";
import authLogo from "../../../images/auth.png";
import kirazeeLogo from "../../../images/kirazee_new.png";
import giderLogo from "../../../images/gider_black.png";
import quiLogo from "../../../images/qui.png";
import signLogo from "../../../images/sign.png";
import boxLogo from "../../../images/box.png";
import formsLogo from "../../../images/forms.png";

const WelcomeSoon = () => {
  const navigate = useNavigate();
  
  const products = [
    { name: "Z.Flow", logo: flowLogo },
    { name: "Z.Hire", logo: hireLogo },
    { name: "Z.Merit", logo: meritLogo },
    { name: "Z.Auth", logo: authLogo },
    { name: "Kirazee", logo: kirazeeLogo },
    { name: "GiDER", logo: giderLogo },
    { name: "Z.Qui", logo: quiLogo },
    { name: "Z.Sign", logo: signLogo },
    { name: "Z.Box", logo: boxLogo },
    { name: "Z.Forms", logo: formsLogo }
  ];

  const handleContactUs = () => {
    navigate("/dev/zdotapps_products/contact");
  };

  return (
    <div className={styles.container}>
      {/* Logos Section - Horizontal Scrolling */}
      <section className={styles.logosSection}>
        <div className={styles.logosContainer}>
          <div className={styles.logosScroll}>
            {products.map((product, index) => (
              <div key={index} className={styles.logoItem}>
                <img 
                  src={product.logo} 
                  alt={`${product.name} Logo`} 
                  className={styles.productLogo}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {products.map((product, index) => (
              <div key={`duplicate-${index}`} className={styles.logoItem}>
                <img 
                  src={product.logo} 
                  alt={`${product.name} Logo`} 
                  className={styles.productLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heading Section */}
      <section className={styles.headingSection}>
        <div className={styles.headingContent}>
          <h1 className={styles.mainTitle}>
            Launching <span className={styles.soonText}>Soon</span>
          </h1>
          <p className={styles.subtitle}>
            Get ready for an amazing suite of products designed to transform your digital experience
          </p>
          
          {/* Contact Us Button */}
          <button className={styles.contactButton} onClick={handleContactUs}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSoon;