import React, { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from './app_studio.module.css'; // Import the CSS module

// Import your existing images
import custom_buildImage from '../../images/custom_build.png';
import ready_to_useImage from '../../images/ready_to_use.png';
import com_leftImage from '../../images/com_left.jpg';
import bespokeImage from '../../images/bespoke.png';
import ui_uxImage from '../../images/ui_ux.png';
import seoImage from '../../images/seo.png';
import maintanceImage from '../../images/maintenance.png';
import digitalImage from '../../images/digital.png';
import performanceImage from '../../images/performance.png';
import multi_languageImage from '../../images/multi_language.png';
import scalingImage from '../../images/scaling.png';

// Import the 12 icon images for the "Solutions for Every Industry" section.
import ecomerceIcon from '../../images/ecomerce.png';
import eventsIcon from '../../images/events.png';
import hospitalIcon from '../../images/hospital.png';
import universityIcon from '../../images/university.png';
import hotelIcon from '../../images/hotel.png';
import food_courtIcon from '../../images/food_court.png';
import technologyIcon from '../../images/technology.png';
import manufacturingIcon from '../../images/manufacturing.png';
import sportsIcon from '../../images/sports.png';
import shopIcon from '../../images/shop.png';
import schoolsIcon from '../../images/schools.png';
import child_careIcon from '../../images/child_care.png';

import kiraaze1Img from '../../images/1.png';
import kiraaze2Img from '../../images/2.png';
import kiraaze3Img from '../../images/3.png';

// --- SEARCH COMPONENT ---
const StudioSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [studioSelected, setStudioSelected] = useState(false);
  const navigate = useNavigate();

  const studios = ["Ready to use", "Custom Build"];

  const handleSelectStudio = (studio) => {
    setSearchTerm(studio);
    setStudioSelected(studio);
    setIsFocused(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 150);
  };

  const renderButtons = (studio) => {
    if (studio === "Ready to use") {
      return (
        <div className={`${styles.studioButtonsContainer} ${styles.readyToUse}`}>
          <button className={styles.studioButton} onClick={() => navigate('/ready')}>Products</button>
          <button className={styles.studioButton} onClick={() => navigate('/ready')}>Services</button>
        </div>
      );
    }
    if (studio === "Custom Build") {
      return (
        <div className={styles.studioButtonsContainer}>
          <button className={styles.studioButton} onClick={() => navigate('/studios/web/custom-build')}>Products</button>
          <button className={styles.studioButton} onClick={() => navigate('/studios/web/custom-build')}>Services</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.studioSearchWrapper}>
      <div className={styles.studioSearchBar}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (studioSelected) setStudioSelected(false);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder="Search Studio..."
          className={styles.studioSearchInput}
        />
        <button className={styles.studioSearchButton}>
          Search
        </button>
      </div>

      {isFocused && !studioSelected && (
        <div className={styles.studioSuggestionsDropdown}>
          {studios
            .filter(studio => studio.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(studio => (
              <div
                key={studio}
                onMouseDown={() => handleSelectStudio(studio)}
                className={styles.suggestionItem}
              >
                {studio}
              </div>
            ))}
        </div>
      )}
      {studioSelected && renderButtons(studioSelected)}
    </div>
  );
};


// --- INDUSTRY SOLUTIONS SECTION ---
const IndustrySolutions = () => {
  const industries = [
    { icon: ecomerceIcon, title: 'E-Commerce' }, { icon: eventsIcon, title: 'Events' },
    { icon: hospitalIcon, title: 'Hospital' }, { icon: universityIcon, title: 'University' },
    { icon: hotelIcon, title: 'Resorts & Hotels' }, { icon: food_courtIcon, title: 'Food-Court' },
    { icon: technologyIcon, title: 'Technology' }, { icon: manufacturingIcon, title: 'Manufacturing' },
    { icon: sportsIcon, title: 'Sports' }, { icon: shopIcon, title: 'Retail Shop' },
    { icon: schoolsIcon, title: 'Schools' }, { icon: child_careIcon, title: 'Child Care' },
  ];

  return (
    <section className={`${styles.industrySolutions} py-5`}>
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitleLight}>Solutions for Every <span className={styles.textAccent}>Industry</span></h2>
          <p className={`${styles.sectionSubtitleLight} mx-auto`}>
            From startups to enterprises, we deliver tailored digital solutions that fit your world.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-6">
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>
                  <img src={item.icon} alt={`${item.title} Icon`} width="60" />
                </div>
                <h3 className={styles.industryTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Helper component for Testimonials ---
const StarRow = () => (<div className={`mb-3 ${styles.textAccent}`}>★★★★★</div>);

// --- TESTIMONIALS SECTION ---
const Testimonials = () => {
  const testimonials = [
    { img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60', quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Jenny Wilson', company: 'Grower.io' },
    { img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop&q=60', quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Devon Lane', company: 'DLDesign.co' },
    { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60', quote: "Outstanding quality and great flexibility. It helped our team move much faster.", name: 'Courtney Henry', company: 'Stark Ltd' },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const left = testimonials[index % testimonials.length];
  const right = testimonials[(index + 1) % testimonials.length];

  return (
    <>
      <div className="row g-5 align-items-center justify-content-center">
        {[left, right].map((t, i) => (
          <div key={i} className="col-md-6">
            <div className="d-flex gap-4 align-items-center">
              <img src={t.img} alt={t.name} className={`${styles.testimonialImg} rounded`} />
              <div className="text-start">
                <StarRow />
                <p className={`${styles.testimonialQuote} mb-3`}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>{t.name} <span className={`ms-2 ${styles.textAccent}`}>{t.company}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <button className={styles.testimonialNavBtn} onClick={handlePrev} aria-label="Previous">←</button>
        <div className={styles.testimonialDots}>
          {testimonials.map((_, dotIndex) => (
            <span key={dotIndex} className={`${styles.dot} ${index === dotIndex ? styles.active : ''}`} />
          ))}
        </div>
        <button className={styles.testimonialNavBtn} onClick={handleNext} aria-label="Next">→</button>
      </div>
    </>
  );
};


// --- MAIN APPSTUDIO COMPONENT ---
function AppStudio() {
  const navigate = useNavigate();

  const servicesData = [
    { title: 'Bespoke Websites', image: bespokeImage }, { title: 'UI/UX', image: ui_uxImage },
    { title: 'SEO', image: seoImage }, { title: 'Maintenance', image: maintanceImage },
    { title: 'Digital Optimization', image: digitalImage }, { title: 'Performance & Security', image: performanceImage },
    { title: 'Multi Language Support', image: multi_languageImage }, { title: 'Scaling', image: scalingImage },
  ];

  return (
    <div className={styles.appStudioPage}>

      {/* Hero Section */}
      <section className={styles.appStudioSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>App Studio</p>
            <h1 className={styles.sectionTitle}>Apps for every need</h1>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Ready to use</h2>
              <p className={styles.cardDescription}>
                Pick from our library of App templates and launch your Apps in minutes — fully customizable and responsive.
              </p>
              <div className={styles.appScreensWrapper}>
                <img src={kiraaze1Img} alt="App Splash Screen" className={`${styles.appScreen} ${styles.screen1}`} />
                <img src={kiraaze2Img} alt="App Product List" className={`${styles.appScreen} ${styles.screen2}`} />
                <img src={kiraaze3Img} alt="App Product Detail" className={`${styles.appScreen} ${styles.screen3}`} />
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Custom build</h2>
              <p className={styles.cardDescription}>
                We craft Apps from scratch to match your exact needs — designed, developed, and optimised for impact.
              </p>
              <div className={styles.appScreensWrapper}>
                <img src={kiraaze1Img} alt="App Splash Screen" className={`${styles.appScreen} ${styles.screen1}`} />
                <img src={kiraaze1Img} alt="App Product List" className={`${styles.appScreen} ${styles.screen2}`} />
                <img src="https://i.imgur.com/pYvjL1Z.png" alt="App Product Detail" className={`${styles.appScreen} ${styles.screen3}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Website Section */}
      <section className={`py-5 ${styles.bgDarkGray}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitleLight} text-center mb-5`}>
            Choose the Website <span className={styles.textAccent}>That Works for You</span>
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={com_leftImage} alt="Designer choosing a website template" className="img-fluid rounded-4" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h3 className={styles.featureTitle}>
                From startups to enterprises <br />
                <span className={`fw-bold ${styles.textAccent}`}>we've got a template for every need.</span>
              </h3>
              <ul className="list-unstyled mt-4">
                {["Basic Websites", "Corporate Websites", "E-Commerce Websites", "Content Management Websites"].map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-3 fs-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="me-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-5 ${styles.bgMediumGray}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitleLight} text-center mb-5`}>
            Services That Power <span className={styles.textAccent}>Your Growth</span>
          </h2>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className={styles.serviceCard} style={{ backgroundImage: `url(${service.image})` }}>
                  <h4 className="fw-bold m-0 mt-5">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <IndustrySolutions />

      {/* We Deliver Section */}
      <section className={`py-5 ${styles.bgOffBlack}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitleLight} text-center mb-4`}>
            We Don’t Just Say It, <span className={styles.textAccent}>We Deliver</span>
          </h2>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=60" alt="Support team" className={`img-fluid w-100 ${styles.deliverImg}`} />
            </div>
            <div className="col-lg-6 d-flex flex-column gap-3">
              <div className={styles.scrollContainer}>
                <div className={styles.scrollContent}>
                  {[...Array(2)].flatMap(() => [
                    { title: 'Quick around Cycles', text: 'We understand the importance of speed and efficiency. Our quick turnovers ensure a seamless, hassle-free experience every time.' },
                    { title: 'Built for Scale', text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.' },
                    { title: 'Reliable Support', text: 'Get expert guidance whenever you need it, ensuring smooth operations and seamless support for your business at every step.' }
                  ]).map((card, idx) => (
                    <div key={idx} className={styles.deliverCard}>
                      <h4 className="fw-bold mb-2">{card.title}</h4>
                      <p className="mb-0 text-white">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className={`py-5 ${styles.bgOffBlack}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitleLight} text-center mb-5`}>
            Discover How We Deliver <span className={styles.textAccent}>Outstanding Results</span>
          </h2>
          <div className="row g-5 justify-content-center">
            {[
              { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60", cat: "E-Commerce", title: "How We Achieved Results for [Project Name]" },
              { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=60", cat: "Health care", title: "How We really achieved Results for [Project Name]" },
              { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60", cat: "Tech", title: "How We Achieved Results for [Project Name]" }
            ].map((card, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="h-100">
                  <img src={card.img} alt={`Case study ${index + 1}`} className={styles.caseStudyImg} />
                  <div className={`${styles.caseStudyMeta} mt-3`}>
                    <span>Case study</span><span className="mx-2">•</span><span>{card.cat}</span>
                  </div>
                  <div className={`${styles.caseStudyTitle} fw-bold mt-2`}>{card.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className={styles.btnOutlineAccent}>
              View all <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-5 ${styles.bgDarkest}`}>
        <div className="container">
          <div className={`text-center mb-2 ${styles.textAccent}`}>3940+ Happy Z.apps users</div>
          <h2 className={`${styles.sectionTitleLight} text-center mb-5`}>Don't just take our <span className={styles.textAccent}>words</span></h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-5 text-dark text-center ${styles.ctaSection}`}>
        <div className="container py-4">
          <h2 className={styles.ctaTitle}>Ready to Build the Future?</h2>
          <p className={styles.ctaSubtitle}>World Class Apps, Built to Last.</p>
          <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
            <button className="btn btn-dark rounded-pill px-4 py-2">Get In Touch →</button>
          </div>
          <div className={`row g-4 justify-content-center text-start ${styles.ctaFeatures}`}>
            <div className="col-12 col-md-4">
              <div className="fw-bold">Free Consultation</div>
              <div className="text-muted">30–minute strategy call</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="fw-bold">Fast Delivery</div>
              <div className="text-muted">MVP in 4–8 weeks</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="fw-bold">Full Support</div>
              <div className="text-muted">Launch & maintenance included</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AppStudio;