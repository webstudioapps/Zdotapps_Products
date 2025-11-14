import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import zdotLogo from "../../images/zdot_logo.png";
//import Zdotapps_Style_Guide from "/Zdotapps_Style_Guide.pdf";

function Footer() {
  const year = new Date().getFullYear();
  const [showDown, setShowDown] = useState(true);

  // Scroll functions
  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  // ✅ Download Style Guide PDF only
  const handleStyleGuideClick = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "Zdotapps_Style_Guide.pdf"; // public path
    link.download = "Zdotapps_Style_Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Hide down arrow when at bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const height = document.body.scrollHeight;
      setShowDown(scrolled < height);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Section Navigator */}
      <div id="section-navigator" className={styles.sectionNavigator}>
        <button id="scroll-up-btn" title="Previous Section" onClick={scrollUp}>
          <i className="fas fa-arrow-up"></i>
        </button>
        {showDown && (
          <button id="scroll-down-btn" title="Next Section" onClick={scrollDown}>
            <i className="fas fa-arrow-down"></i>
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className={`${styles.footer} pt-5 pb-4`}>
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-12 col-lg-6 d-flex align-items-center">
              <img
                src={zdotLogo}
                alt="Z.apps"
                width={540}
              />
            </div>

            {/* Links */}
            <div className="col-12 col-lg-6">
              <div className="row gx-5">
                <div className="col-6 text-start">
                  <h6 className="text-white fw-bold mb-3">Quick Links</h6>
                  <ul className="list-unstyled m-0">
                    <li className="mb-2"><a href="#" className={styles.link}>Home</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>About Us</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Contact Support</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Privacy Policy</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Terms of Service</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Help Center</a></li>
                  </ul>
                </div>
                <div className="col-6 text-start">
                  <h6 className="text-white fw-bold mb-3">Support</h6>
                  <ul className="list-unstyled m-0">
                    <li className="mb-2"><a href="#" className={styles.link}>FAQ</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Live Chat</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Feedback</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Contact Us</a></li>
                    <li className="mb-2"><a href="#" className={styles.link}>Company Info</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-4 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="small text-white-50 mb-2 mb-md-0">
              © {year} ZdotApps. All rights reserved.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className={styles.link}>Privacy Policy</a>
              <a href="#" className={styles.link}>Terms of Service</a>
              <a href="#" className={styles.link}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
