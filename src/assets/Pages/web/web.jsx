import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Import your existing images
// import updated_logoImage from '../../images/updated_logo.png';
// import updated_k_logoImage from '../../images/updated_k_logo.png';
// import ecomerceImage from '../../images/ecomerce.png';
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
// --- (ACTION REQUIRED) ---
// 1. Import the 8 images for your new services section here.
// Example:
// import bespokeWebsitesImage from '../../images/services/bespoke-websites.jpg';
// import uiUxImage from '../../images/services/ui-ux.jpg';
// import seoImage from '../../images/services/seo.jpg';
// import maintenanceImage from '../../images/services/maintenance.jpg';
// import digitalOptimizationImage from '../../images/services/digital-optimization.jpg';
// import securityImage from '../../images/services/security.jpg';
// import multiLanguageImage from '../../images/services/multi-language.jpg';
// import scalingImage from '../../images/services/scaling.jpg';

// --- (ACTION REQUIRED) ---
// 2. Import the 12 icon images for the "Solutions for Every Industry" section.
//    Replace these placeholder paths with your actual image locations.
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

// --- NEW SECTION COMPONENT ---
const ProcessFlow = () => {
  return (
  <section className="industry-solutions py-5" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#ffffff', fontSize: 40 }}>Solutions for Every <span style={{ color: '#F2C94C' }}>Industry</span></h2>
          <p className="mx-auto" style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            From startups to enterprises, we deliver tailored digital solutions that fit your world.
          </p>
        </div>
        <div className="row g-4 industry-cards">
          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={ecomerceIcon} alt="E-Commerce Icon" width="60" />
              </div>
              <h3 className="industry-title">E-Commerce</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={eventsIcon} alt="Events Icon" width="60" />
              </div>
              <h3 className="industry-title">Events</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={hospitalIcon} alt="Hospital Icon" width="60" />
              </div>
              <h3 className="industry-title">Hospital</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={universityIcon} alt="University Icon" width="60" />
              </div>
              <h3 className="industry-title">University</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={hotelIcon} alt="Resorts & Hotels Icon" width="60" />
              </div>
              <h3 className="industry-title">Resorts & Hotels</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={food_courtIcon} alt="Food-Court Icon" width="60" />
              </div>
              <h3 className="industry-title">Food-Court</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={technologyIcon} alt="Technology Icon" width="60" />
              </div>
              <h3 className="industry-title">Technology</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={manufacturingIcon} alt="Manufacturing Icon" width="60" />
              </div>
              <h3 className="industry-title">Manufacturing</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={sportsIcon} alt="Sports Icon" width="60" />
              </div>
              <h3 className="industry-title">Sports</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={shopIcon} alt="Retail Shop Icon" width="60" />
              </div>
              <h3 className="industry-title">Retail Shop</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={schoolsIcon} alt="Schools Icon" width="60" />
              </div>
              <h3 className="industry-title">Schools</h3>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-12">
            <div className="industry-card">
              <div className="industry-icon">
                <img src={child_careIcon} alt="Child Care Icon" width="60" />
              </div>
              <h3 className="industry-title">Child Care</h3>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};


function App() {
  const navigate = useNavigate();
  const [flipReady, setFlipReady] = useState(false);
  const [flipCustom, setFlipCustom] = useState(false);

  // --- NEW --- State to control the scrolling animation pause
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  // --- Data for the new "Services That Power Your Growth" section ---
  const servicesData = [
    {
      title: 'Bespoke Websites',
      // Replace placeholder with your imported image, e.g., image: bespokeWebsitesImage
      image: bespokeImage,
    },
    {
      title: 'UI/UX',
      image: ui_uxImage,
    },
    {
      title: 'SEO',
      image: seoImage,
    },
    {
      title: 'Maintenance',
      image: maintanceImage,
    },
    {
      title: 'Digital Optimization',
      image: digitalImage,
    },
    {
      title: 'Performance & Security',
      image: performanceImage,
    },
    {
      title: 'Multi Language Support',
      image: multi_languageImage,
    },
    {
      title: 'Scaling',
      image: scalingImage,
    },
  ];

  return (
    <div className="App" style={{ backgroundColor: '#212529', color: '#ffffff' }}>

      {/* Hero: centered title + left text/right flip cards in one section */}
      <section className="position-relative" style={{ minHeight: '100vh',backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="position-absolute w-100 text-center mt-5 py-5">
          <h1 className="fw-bold mt-5" style={{ color: '#F2C94C', fontSize: 50, lineHeight: 1.10, marginBottom: 1 }}>
            Web Studio
            <br/> <span style={{ fontSize: 40, }}>We Engineer Your Web vision</span>
          </h1>
          <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 25 }}>
            We create powerful digital platforms that help you launch faster and grow smarter.
          </p>
        </div>
        <div className="container" style={{ paddingTop: 320 }}>
          <div className="row align-items-center">
            {/* Left Column: Text and Button */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mt-5 pt-5 py-2" style={{ color: '#ffffff', fontSize: 40 }}>
                Built for your needs:
              </h2>
              <div className="fw-bold" style={{ color: '#F2C94C', fontSize: 30 }}>
                Quick, reliable, and ready to launch.
              </div>
              <p className="mt-3" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.25rem' }}>
                Choose a template or get a custom project tailored to your brand.
              </p>
              <button className="btn btn-lg rounded-pill px-4" style={{ backgroundColor: '#F2C94C', color: '#0b0b0b', border: 'none' }} onClick={() => navigate('/studios/web/custom-build')}>
                Start Your Project <FaArrowRight style={{ marginLeft: 6 }} />
              </button>
            </div>

            {/* Right Column: Flipping Cards */}
            <div className="col-lg-6 mb-5 pb-5 pb-lg-5 mb-lg-5">
              <div className="row g-4 justify-content-center"> {/* Center cards within the column */}
                {/* Card 1: Ready to use (Flip) */}
                <div className="col-12 col-md-6"> {/* Cards take full width on small, half on medium+ */}
                  <div
                    className={`flip-card h-100 ${flipReady ? "flipped" : ""}`}
                    onClick={() => setFlipReady((v) => !v)}
                    role="button"
                    aria-label="Ready to use"
                  >
                    <div className="flip-card-inner">
                      <div
                        className="flip-card-front d-flex flex-column justify-content-end text-white h-100"
                        style={{
                          borderRadius: "24px",
                          padding: "2.5rem",
                          minHeight: "350px", // Adjusted minHeight for better fit with image
                          background: `url(${ready_to_useImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <h3 className="fw-bold mb-3" style={{ color: "#F2C94C", fontSize: "1.5rem" }}>Ready to use</h3> {/* Adjusted font size */}
                        <p className="mb-5" style={{ fontSize: "1rem", maxWidth: "480px" }}> {/* Adjusted font size */}
                          Pick from our library of templates and launch your website in minutes — fully customizable and responsive.
                        </p>
                        <span className="fw-bold" style={{ color: "#F2C94C", fontSize: "1rem" }}>tap to explore ↺</span> {/* Adjusted font size */}
                      </div>
                      <div
                        className="flip-card-back d-flex flex-column justify-content-center align-items-center text-white h-100"
                        style={{
                          borderRadius: "24px",
                          padding: "2.5rem",
                          minHeight: "350px", // Adjusted minHeight
                          background: "#1e1e1e",
                        }}
                      >
                        <h4 className="fw-bold mb-4" style={{ color: "#F2C94C" }}>Explore</h4>
                        <div className="d-flex gap-3 justify-content-center" style={{ flexWrap: 'nowrap' }}>
                          <button
                            className="btn btn-lg rounded-pill px-4"
                            style={{ backgroundColor: "#F2C94C", color: "#0b0b0b", border: "none", fontSize: "0.9rem" }} // Adjusted font size
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ready?cat=products`);
                            }}
                          >
                            Products
                          </button>
                          <button
                            className="btn btn-outline-light btn-lg rounded-pill px-4"
                            style={{ borderColor: "#F2C94C", color: "#F2C94C", fontSize: "0.9rem" }} // Adjusted font size
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ready?cat=services`);
                            }}
                          >
                            Services
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Custom Build (Flip) */}
                <div className="col-12 col-md-6"> {/* Cards take full width on small, half on medium+ */}
                  <div
                    className={`flip-card h-100 ${flipCustom ? "flipped" : ""}`}
                    onClick={() => setFlipCustom((v) => !v)}
                    role="button"
                    aria-label="Custom Build"
                  >
                    <div className="flip-card-inner">
                      <div
                        className="flip-card-front d-flex flex-column justify-content-end text-white h-100"
                        style={{
                          borderRadius: "24px",
                          padding: "2.5rem",
                          minHeight: "350px", // Adjusted minHeight
                          background: `url(${custom_buildImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <h3 className="fw-bold mb-3" style={{ color: "#F2C94C", fontSize: "1.5rem" }}>Custom Build</h3> {/* Adjusted font size */}
                        <p className="mb-4" style={{ fontSize: "1rem", maxWidth: "480px" }}> {/* Adjusted font size */}
                          We craft websites from scratch to match your exact needs — designed, developed, and optimized for impact.
                        </p>
                        <span className="fw-bold" style={{ color: "#F2C94C", fontSize: "1rem" }}>tap to explore ↺</span> {/* Adjusted font size */}
                      </div>
                      <div
                        className="flip-card-back d-flex flex-column justify-content-center align-items-center text-white h-100"
                        style={{
                          borderRadius: "24px",
                          padding: "2.5rem",
                          minHeight: "350px", // Adjusted minHeight
                          background: "#1e1e1e",
                        }}
                      >
                        <h4 className="fw-bold mb-4" style={{ color: "#F2C94C" }}>Explore</h4>
                        <div className="d-flex gap-3 justify-content-center" style={{ flexWrap: 'nowrap' }}>
                          <button
                            className="btn btn-lg rounded-pill px-4"
                            style={{ backgroundColor: "#F2C94C", color: "#0b0b0b", border: "none", fontSize: "0.9rem" }} // Adjusted font size
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/studios/web/custom-build?cat=products`);
                            }}
                          >
                            Products
                          </button>
                          <button
                            className="btn btn-outline-light btn-lg rounded-pill px-4"
                            style={{ borderColor: "#F2C94C", color: "#F2C94C", fontSize: "0.9rem" }} // Adjusted font size
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/studios/web/custom-build?cat=services`);
                            }}
                          >
                            Services
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      {/* Services That Power Your Growth section - UPDATED */}
      <section className="py-5" style={{ backgroundColor: '#343434' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
            Services That Power <span style={{ color: '#F2C94C' }}>Your Growth</span>
          </h2>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
   <div
  className="d-flex align-items-center justify-content-center text-center p-3 h-100"
  style={{
    backgroundImage: `url(${service.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '16px',
    minHeight: '220px',
    color: '#F2C94C',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Adding box-shadow transition
    cursor: 'pointer',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 0px 20px rgba(255, 202, 58, 0.938)'; // Box shadow on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none'; // Remove box shadow when not hovering
  }}
>
  <h4 className="fw-bold m-0 mt-5">{service.title}</h4>
</div>

              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- NEW SECTION INSERTED HERE --- */}
      <ProcessFlow />

{/* We Don't Just Say It, We Deliver section -- FULLY CORRECTED */}
<section className="py-5" style={{ backgroundColor: '#0f0f0f' }}>
  <div className="container">
    <h2 className="fw-bold text-center mb-4" style={{ color: '#ffffff' }}>
      We Don’t Just Say It, <span style={{ color: '#F2C94C' }}>We Deliver</span>
    </h2>
    <div className="row g-4 align-items-stretch">
      <div className="col-lg-6">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=60"
          alt="Support team"
          className="img-fluid w-100"
          style={{ borderRadius: 20, height: 420, objectFit: 'cover' }}
        />
      </div>
      <div className="col-lg-6 d-flex flex-column gap-3">
        <div
          className="scroll-container"
          style={{
            height: '410px',
            overflowY: 'hidden',
            position: 'relative',
          }}
          // --- CHANGE 1: Added event handlers ---
          onMouseEnter={() => setIsScrollingPaused(true)}
          onMouseLeave={() => setIsScrollingPaused(false)}
        >
          <div
            className="scroll-content"
            style={{
              // --- CHANGE 2: Added animationPlayState controlled by state ---
              animation: 'scroll 11s linear infinite',
              animationPlayState: isScrollingPaused ? 'paused' : 'running',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Original cards */}
            {[
              {
                title: 'Quick around Cycles',
                text: 'We understand the importance of speed and efficiency. Our quick turnovers ensure a seamless, hassle-free experience every time.',
              },
              {
                title: 'Built for Scale',
                text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.',
              },
              {
                title: 'Reliable Support',
                text: 'Get expert guidance whenever you need it, ensuring smooth operations and seamless support for your business at every step.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-4"
                style={{
                  background: 'rgba(21,21,21,0.85)',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.45)',
                  marginTop: '20px', // Add margin between cards
                }}
              >
                <h4 className="fw-bold mb-2" style={{ color: '#ffffff' }}>
                  {card.title}
                </h4>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {card.text}
                </p>
              </div>
            ))}
            
            {/* Cloned cards for infinite loop */}
            {[
              {
                title: 'Quick around Cycles',
                text: 'We understand the importance of speed and efficiency. Our quick turnovers ensure a seamless, hassle-free experience every time.',
              },
              {
                title: 'Built for Scale',
                text: 'Our teams work at godspeed to deliver results for scaling businesses, ensuring fast, efficient, and hassle-free solutions every time.',
              },
              {
                title: 'Reliable Support',
                text: 'Get expert guidance whenever you need it, ensuring smooth operations and seamless support for your business at every step.',
              },
            ].map((card, idx) => (
              <div
                key={idx + 3} // Ensure unique keys
                className="p-4"
                style={{
                  background: 'rgba(21,21,21,0.85)',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.45)',
                  marginTop: '20px', // Add margin between cards
                }}
              >
                <h4 className="fw-bold mb-2" style={{ color: '#ffffff' }}>
                  {card.title}
                </h4>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Keyframes for scrolling animation */}
<style>
  {`
    @keyframes scroll { 
      0% { transform: translateY(0); } 
      100% { transform: translateY(-50%); } 
    }

    /* --- CHANGE 3: Removed the non-working :hover rule --- */
    /*
    .scroll-container:hover .scroll-content { 
      animation-play-state: paused; 
    }
    */

    /* The fade effect remains the same */
    .scroll-container::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        #0f0f0f 0%,
        rgba(15, 15, 15, 0) 20%,
        rgba(15, 15, 15, 0) 80%,
        #0f0f0f 100%
      );
      pointer-events: none;
    }
    
  `}
</style>


      {/* Discover How We Deliver Outstanding Results section */}
      <section className="py-5" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
            Discover How We Deliver <span style={{ color: '#F2C94C' }}>Outstanding Results</span>
          </h2>
          <div className="row g-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60" alt="Case study 1" className="img-fluid w-100" style={{ borderRadius: 18, height: 240, objectFit: 'cover' }} />
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span><span className="mx-2" style={{ color: '#F2C94C' }}>•</span><span style={{ color: '#F2C94C' }}>E-Commerce</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for<br />[Project Name]
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60" alt="Case study 2" className="img-fluid w-100" style={{ borderRadius: 18, height: 240, objectFit: 'cover' }} />
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span><span className="mx-2" style={{ color: '#F2C94C' }}>•</span><span style={{ color: '#F2C94C' }}>Health care</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We really achieved Results for<br />[Project Name]
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60" alt="Case study 3" className="img-fluid w-100" style={{ borderRadius: 18, height: 240, objectFit: 'cover' }} />
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span><span className="mx-2" style={{ color: '#F2C94C' }}>•</span><span style={{ color: '#F2C94C' }}>Tech</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for<br />[Project Name]
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn rounded-pill px-4 py-2" style={{ borderColor: '#F2C94C', color: '#F2C94C', borderWidth: 2, borderStyle: 'solid', background: 'transparent' }}>
              View all <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Don't just take our word for it section */}
      <section className="py-5" style={{ backgroundColor: '#0b0b0b', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

          {(() => {
            const testimonials = [{ img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60', quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Jenny Wilson', company: 'Grower.io', }, { img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop&q=60', quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Devon Lane', company: 'DLDesign.co', }, { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60', quote: "Outstanding quality and great flexibility. It helped our team move much faster.", name: 'Courtney Henry', company: 'Stark Ltd', }, ];
            const [index, setIndex] = useState(0);
            const left = testimonials[index % testimonials.length];
            const right = testimonials[(index + 1) % testimonials.length];
            const StarRow = () => (<div className="mb-3" style={{ color: '#F2C94C' }}>★★★★★</div>);

            return (
              <>
                <div className="row g-5 align-items-center justify-content-center">
                  {[left, right].map((t, i) => (
                    <div key={i} className="col-md-6">
                      <div className="d-flex gap-4 align-items-center">
                        <img src={t.img} alt={t.name} className="rounded" style={{ width: 230, height: 230, objectFit: 'cover' }} />
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
                      <span key={d} style={{ display: 'inline-block', width: 10, height: 10, margin: '0 6px', borderRadius: '50%', backgroundColor: index % testimonials.length === d ? '#F2C94C' : 'rgba(255,255,255,0.25)' }} />
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
      </section>

      {/* Ready to Build the Future? section */}
      <section className="py-5 text-dark text-center" style={{ backgroundColor: '#F2C94C' }}>
        <div className="container py-4">
   
          <h2 className="fw-bold mb-3" style={{ fontSize: 42 }}>Ready to Build the Future?</h2>
          <p className="mb-4" style={{ maxWidth: 760, margin: '0 auto' }}>
            Let's transform your ideas into powerful applications that drive real business results. Our team is ready to make it happen.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
            <button className="btn btn-dark rounded-pill px-4 py-2">Get In Touch →</button>
            {/* <button className="btn btn-outline-dark rounded-pill px-4 py-2" style={{ borderWidth: 2 }}>View Our Work</button> */}
          </div>
          <div className="row g-4 justify-content-center text-start" style={{ maxWidth: 900, margin: '0 auto' }}>
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

      {/* Added Styles */}
      <style>{`
        .flip-card { perspective: 1200px; cursor: pointer; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform .7s ease; }
        .flip-card.flipped .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .flip-card-back { transform: rotateY(180deg); }

        /* Remove any dark default shadows */
        .flip-card, .flip-card-front, .flip-card-back { box-shadow: none !important; }

        /* Yellow glow on hover */
        .flip-card:hover .flip-card-front,
        .flip-card:hover .flip-card-back {
          box-shadow: 0 16px 40px rgba(255, 191, 0, 0.35), 0 0 0 1px rgba(242, 201, 76, 0.5) inset;
          border-radius: 24px;
        }
         /* Solutions for Every Industry Section */
  .industry-solutions {
    background-color: #1C1A1A;
    padding: 5rem 1rem;
    color: #FFFFFF;
  }
  
  .industry-solutions h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    color: #FFFFFF;
  }
  
  .industry-solutions h2 span {
    color: #FFC94A;
  }
  
  .industry-solutions p {
    font-size: 1.125rem;
    text-align: center;
    max-width: 42rem;
    margin: 0 auto 2rem;
    color: #F3F3F3;
  }
  
.industry-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0rem; /* ✅ spacing between cards */
}

  
.industry-card {
  background-color: #333333;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%; 
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

  
  .industry-card:hover {
    transform: translateY(-4px);
    background-color: #444444;
     box-shadow: 0 0px 20px rgba(255, 202, 58, 0.938);
  }
  
  .industry-icon {
    // width: 60rem;
    height: 60px;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .industry-icon svg {
    width: 30px;
    height: 30px;
    color: #1C1A1A;
  }
  
  .industry-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #FFFFFF;
  }
      `}</style>

    </div>
  );
}

export default App;