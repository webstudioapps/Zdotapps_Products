import React, { useState, useRef, useEffect } from 'react';
import studioImage from '../../images/img_studio.png'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';
// Removed unused image imports for cleanliness
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
import schoolsIcon from '../../images/child_care.png';
// import readyImg from "../../images/ready.png";
// import customImg from "../../images/custom.png";
// import fastImg from "../../images/fast.png";
// import retailImg from "../../images/retail.png";
// import updated_logoIcon from '../../images/updated_logo.png';
import websiteImage from '../../images/websites.png';
import child_careIcon from '../../images/child_care.png';
import kiraaze_appImg from '../../images/kiraaze_app.png';
import life_2Img from '../../images/life_2.png';
import campusImg from '../../images/campus.png';
import mall360Img from '../../images/mall360.jpeg';
import apexaImg from '../../images/apexa.jpeg';
import factopsImg from '../../images/factops.jpeg';
import agentsImg from '../../images/agents.png';
import agent2Img from '../../images/agent2.jpeg';
import agent3Img from '../../images/agent3.jpeg';
import phaniImg from '../../images/phani.png';
import srinivasImg from '../../images/srinivas.png';
import kiraaze_casestudyImg from '../../images/kiraaze_casestudy.png';
import { Link } from 'react-router-dom';




import {
  Globe,
  Smartphone,
  Bot,
  ShoppingCart,
  Palette,
  Code,
  Rocket,
  CreditCard,
  Zap,
  Wrench,
  CheckCircle,
  Clock,
  Star,
  Search,
  Plus,
  Minus
} from 'lucide-react';

// Embedded CSS styles
const styles = `
  :root {
    --font-size: 16px;
    --background: #ffffff;
    --foreground: #333333; /* Dark Grey */
    --card: #ffffff;
    --card-foreground: #333333;
    --popover: #ffffff;
    --popover-foreground: #333333;
    --primary: #333333;
    --primary-foreground: #ffffff;
    --secondary: #FFC94A; /* Yellow */
    --secondary-foreground: #ffffff;
    --muted: #F3F3F3; /* Extra Light Grey */
    --muted-foreground: #1C1A1A; /* Dark Grey (Text) */
    --accent: #F3F3F3; /* Use Extra Light Grey instead of lavender to avoid blue */
    --accent-foreground: #333333;
    --destructive: #d4183d;
    --destructive-foreground: #ffffff;
    --border: #CCCCCC; /* Light Grey */
    --input: transparent;
    --input-background: #F3F3F3; /* Extra Light Grey */
    --switch-background: #CCCCCC; /* Light Grey */
    --font-weight-medium: 500;
    --font-weight-normal: 400;
    --ring: #FFC94A;
    --radius: 0.625rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--foreground);
    background-color: var(--background);
    overflow-x: hidden;
  }

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;
  }


  .card {
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;

    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 0px 20px rgba(255, 202, 58, 0.938);

  }

  .text-center { text-align: center; }
  .text-left { text-align: left; }

  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
  .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  .py-20 { padding-top: 5rem; padding-bottom: 5rem; }

  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .p-6 { padding: 1.5rem; }

  h1 { font-size: 3rem; font-weight: 700; line-height: 1.2; margin-bottom: 1rem; }
  h2 { font-size: 2.5rem; font-weight: 600; line-height: 1.3; margin-bottom: 1rem; }
  h3 { font-size: 2rem; font-weight: 600; line-height: 1.4; margin-bottom: 0.75rem; }
  h4 { font-size: 1.5rem; font-weight: 500; line-height: 1.4; margin-bottom: 0.5rem; }

  /* Hero Section Specific Styles */
  .hero-section {
    background-color: #1C1A1A; /* Dark background from image */
    color: #FFFFFF;
    padding: 12.5rem 1rem; /* Adjust padding for better visual match */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px; /* Ensure sufficient height */

  }

  .hero-title {
    font-size: 3.3rem; /* Larger font size */
    font-weight: 600;
    line-height: 1;
    color: #ffffffff; /* Yellow for the title */
    // margin-top: 9.5rem;
  }

    .hero-subtitle {
    font-size: 2.3rem; /* Larger font size */
    font-weight: 500;
    line-height: 1.5;
    margin-top: 9.5rem;
    color: #FFC94A; /* Yellow for the title */
    text-align: center;
  }

  /* -------------------Studios Section Styles---------------------------- */
  .studios-header {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .studio-tab {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    transition: all .3s ease;
    color: #888888;
    font-size: 1.25rem; /* Larger font for tabs */
  }

  .studio-tab.active {
    color: #FFFFFF; 
    background-color: #444444; 
    border: 1px solid #FFC94A;
    font-weight: 700; 
  }

  /* Container for stacking cards */
  .studio-card-container {
    position: relative;
    width: 100%;
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: flex-start; 
    margin-top: 3rem;
  }

  /* Card Styles */
.studio-card {
  background: linear-gradient(135deg, #181716ff 0%, #755d15ff 100%);
  border: 1px solid #FFC94A;
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  box-shadow: 0 4px 20px rgba(255, 201, 74, 0.1);
  width: 90%;
  max-width: 1200px;
  height: 35rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s ease, transform 0.5s ease;
  overflow: hidden;
}


  /* Hover Effects (only for the active card) */
  .studio-card.active:hover {
    box-shadow: 0 0px 40px rgba(255, 202, 58, 0.938); /* More pronounced shadow */
    transform: translateX(-50%) translateY(-10px); /* Lift more on hover */
  }

  /* Studio Content */
  .studio-content {
    flex: 1;
    max-width: 55%; /* Slightly more space for content */
  }

  .studio-title {
    font-size: 3.5rem; /* Larger title */
    font-weight: 700;
    color: #FFC94A;
  }

  .studio-description {
    font-size: 1.6rem; /* Larger description font */
    color: #F3F3F3;
    line-height: 1.6;
    margin-top: 2.5rem; /* Adjusted margin */
  }

  .studio-buttons {
    display: flex;
    gap: 1.5rem; /* Increased gap between buttons */
    margin-top: 3.5rem; /* Adjusted margin */
  }

  .studio-button {
    padding: 1rem 2rem; /* Larger buttons */
    border-radius: 0.6rem; /* Slightly more rounded */
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem; /* Increased gap for icon/text */
    font-size: 1.1rem; /* Larger button text */
  }

  .studio-button.primary {
    background-color: #FFC94A;
    color: #1C1A1A;
  }

  .studio-button.secondary {
    background-color: transparent;
    color: #FFFFFF;
    border: 1px solid #FFC94A;
  }

  .studio-button:hover {
    transform: translateY(-4px); /* More pronounced lift */
  }

  .studio-button.primary:hover {
    background-color: #E6B842;
  }

  .studio-button.secondary:hover {
    background-color: #333333;
  }

  /* Studio Image */
  .studio-image {
    flex: 1;
    max-width: 35%; /* Slightly larger image area */
    border-radius: 1.5rem;
    overflow: hidden;
    height: 400px; /* Consistent image height */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .studio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem; /* Rounded corners for the image itself */
  }

  /* Media Queries for responsiveness */
  @media (max-width: 1024px) {
    .studio-card {
      flex-direction: column;
      height: auto;
      padding: 2rem;
      gap: 2rem;
    }
    .studio-content {
      max-width: 100%;
      text-align: center;
    }
    .studio-buttons {
      justify-content: center;
    }
    .studio-image {
      max-width: 70%;
      height: 300px;
    }
    .studio-card-container {
      height: auto;
      min-height: 800px; /* Ensure enough height on smaller screens for stacking */
      align-items: center; /* Center cards vertically in container */
    }
    .studio-title {
      font-size: 2.8rem;
    }
    .studio-description {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    .studio-tab {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
    .studio-title {
      font-size: 2.2rem;
    }
    .studio-description {
      font-size: 1.1rem;
    }
    .studio-button {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
    .studio-image {
      height: 250px;
    }
    .studio-card-container {
      min-height: 700px;
    }
  }

  @media (max-width: 480px) {
    .studios-header {
      gap: 1rem;
    }
    .studio-tab {
      font-size: 0.9rem;
      padding: 0.3rem 0.6rem;
    }
    .studio-card {
      padding: 1.5rem;
      width: 95%;
    }
    .studio-title {
      font-size: 1.8rem;
    }
    .studio-description {
      font-size: 1rem;
    }
    .studio-buttons {
      flex-direction: column;
      gap: 0.8rem;
    }
    .studio-image {
      height: 200px;
    }
    .studio-card-container {
      min-height: 600px;
    }
  }

  .studio-card-container {
    min-height: 600px;
  }

  a {
    color: #f1efeaff;
    text-decoration: none;
  }

  /* -----------------------FAQ Section Styles---------------- */
  .faq-section {
    background-color: #1C1A1A;
    padding: 5rem 1rem;
    color: #FFFFFF;
  }

  .faq-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
    color: #FFFFFF;
  }

  .faq-item {
    background-color: #333333;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    overflow: hidden;
    padding: 5px;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 500;
    color: #FFFFFF;
  }

  .faq-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    gap: 20px; /* Adjust the gap between items as needed */
  }

  .faq-answer {
    padding: 0 1.5rem 1.5rem 1.5rem;
    font-size: 1rem;
    color: #B0B0B0;
    display: none;  /* Hide answers by default */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  }

  .faq-answer.open {
    display: block; /* Display the answer when it's open */
    max-height: 200px; /* Adjust based on expected content length */
    padding: 0 1.5rem 1.5rem 1.5rem;
    transition: max-height 0.5s ease-in, padding 0.3s ease-in;
  }

  .faq-item.active .faq-question {
    color: #FFC94A; /* Highlight active question */
  }

  .faq-item.active .faq-question svg {
    color: #FFC94A;
  }

  /* Plus/Minus Icon Styling */
  .faq-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease; /* Smooth rotation */
  }

  .faq-icon.open {
    transform: rotate(180deg); /* Rotate to minus when open */
  }

  .faq-item.active .faq-question .faq-icon {
    color: #FFC94A; /* Highlight icon color when active */
  }

  /* hero section---------------------------------- */

  .hero-section-main { /* Renamed to avoid conflict with studio-card container */
    padding: 50px 20px;
    text-align: center;
    background-color: #3f3f3eff; /* Changed to white for category tiles */
    color: #333333ff; /* Changed text color for better contrast on white */
  }

  .hero-text-content {
    margin-bottom: 30px;
  }

  /* Removed .stacked-cards-container and .stacked-card styles
     as they are no longer used for the hero section with category tiles.
     The .tiles-grid and .cat-tile styles will be used instead. */

  :root{
    --tile-h: 14rem;
    --radius: 14px;
    --n1: 10px; --n2: 6px; --n3: 3px;
    --title-x: 24px;
    --title-size: 24px;
  }

  *{ box-sizing:border-box; }
  /* body styles are already handled globally or by the main body rule */

  .tiles-grid { /* Renamed to avoid generic class name conflict */
    max-width:900rem; margin:0 auto;
    display:grid; grid-template-columns:repeat(3,1fr); gap:26px;
    padding: 28px; /* Added padding */
    margin-top: 100px; /* Added margin-top for spacing */
  }

  .cat-tile{
    position:relative; height:var(--tile-h); width:100%;
    border-radius:var(--radius); border:1px solid #333;
    background:#333; overflow:hidden; box-shadow:0 2px 14px rgba(0,0,0,.06);
  }

  /* CLICKABLE title area (covers left side up to the image pane) */
  .cat-title{
    position:absolute; 
    left:0; 
    right:var(--pane-w,50%); 
    top:0; bottom:0;
    display:flex; align-items:center; padding-left:var(--title-x);
    font-size:var(--title-size); letter-spacing:.2px;
    color:#ffc94a; text-decoration:none; z-index:2;
  }
  .cat-title:hover{ filter:brightness(0.95); }
  .cat-title:focus-visible{
    outline:2px solid #6aa9ff; outline-offset:4px; border-radius:10px;
  }

  .pane{
    top:0; right:0; bottom:0; width:var(--pane-w,50%);
    background:#f6f6f6; overflow:hidden;
    border-top-right-radius:var(--radius); border-bottom-right-radius:var(--radius);
  }
  .pane::before{
    content:""; position:absolute; left:0; top:0; bottom:0; width:12%;

    pointer-events:none; z-index:3;
  }

  .stack{
    --shot-w:120px; --shot-r:12px; --overlap:46px; --peek-right:60px;
    position:absolute; top:50%;
    right:calc(var(--peek-right) - var(--shot-w));
    height:100%; width:calc(3*var(--shot-w) - 2*var(--overlap));
    transform:translateY(-50%); z-index:1;
  }
  .shot{
    position:absolute; top:50%; width:var(--shot-w); height:100%;
    transform:translateY(-50%); object-fit:cover; border-radius:var(--shot-r);
    box-shadow:0 6px 18px rgba(0,0,0,.18); background:#ddd;
    transition:transform .26s cubic-bezier(.22,.61,.36,1); will-change:transform;

  }
  .shot-3{ right:0; z-index:1; }
  .shot-2{ right:calc(var(--shot-w) - var(--overlap)); z-index:2; }
  .shot-1{ right:calc(2*(var(--shot-w) - var(--overlap))); z-index:3; }

  .cat-tile:hover .shot-1, .cat-tile:focus-within .shot-1{
    transform:translateY(-50%) translateX(calc(-1 * var(--n1)));
  }
  .cat-tile:hover .shot-2, .cat-tile:focus-within .shot-2{
    transform:translateY(-50%) translateX(calc(-1 * var(--n2)));
  }
  .cat-tile:hover .shot-3, .cat-tile:focus-within .shot-3{
    transform:translateY(-50%) translateX(calc(-1 * var(--n3)));
  }
  .shot-2{ transition-delay:12ms; } .shot-3{ transition-delay:20ms; }

  @media (max-width:1024px){
    .tiles-grid{ grid-template-columns:repeat(2,1fr); }
  }
  @media (max-width:820px){
    .tiles-grid{ display:flex; overflow-x:auto; gap:18px; scroll-snap-type:x mandatory;
            -webkit-overflow-scrolling:touch; padding-bottom:6px; }
    .cat-tile{ min-width:88vw; scroll-snap-align:center; }
    .pane{ width:52%; }
    .stack{ --shot-w:110px; --overlap:42px; --peek-right:55px; }
    .cat-title{ padding-left:20px; font-size:20px; }
  }
  /*--------------------------------------------------------------------------------------- */
  @import url('https://fonts.googleapis.com/css?family=Roboto:700');

  body {
    margin:0px;
    font-family:'Roboto';
    text-align:center;
  }

  #containerr {
    color:#999;
    text-transform: uppercase;
    font-size:36px;
    font-weight:bold;
    padding-top:200px;  
    position:fixed;
    width:100%;
    bottom:64%;
    display:block;
  }

  #flip {
    height:60px;
    overflow:hidden;
    text-align: center;
  }

  #flip > div > div {
    color:#ffc94a;
    padding:4px 12px;
    height:45px;
    margin-bottom:45px;
    display:inline-block;
  }

  #flip div:first-child {
    animation: show 6s linear infinite;
  }

  @keyframes show {
    0% {margin-top:-270px;}
    5% {margin-top:-180px;}
    33% {margin-top:-180px;}
    38% {margin-top:-90px;}
    66% {margin-top:-90px;}
    71% {margin-top:0px;}
    99.99% {margin-top:0px;}
    100% {margin-top:-270px;}
  }

   /* -------------------Solutions for Every Industry Section--------------------- */
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

   /* -------------Automatic scrolling------------------- */

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
`;

// CategoryTile Component
const CategoryTile = ({ title_1, images }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Define your custom redirects based on the title_1
    switch (title_1.toLowerCase()) {
      case 'websites':
        navigate('/studios/web');
        break;
      case 'apps':
        navigate('/studios/app_studio');
        break;
      case 'agents':
        navigate('/agent');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="cat-tile" style={{ '--pane-w': '50%', '--n1': '10px', '--n2': '6px', '--n3': '3px' }}>
      <a
        className="cat-title"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        {title_1}
      </a>
      <div className="pane" aria-hidden="true">
        <div className="stack" style={{ '--shot-w': '120px', '--overlap': '46px', '--peek-right': '60px' }}>
          {images.map((image, index) => (
            <img
              key={index}
              className={`shot shot-${index + 1}`}
              src={image}
              alt={`Screenshot of ${title_1} project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// HeroSection Component
const HeroSection = () => {
  const categories = [
    {
      title_1: "Websites",
      images: [
        mall360Img,
        apexaImg,
        factopsImg,
      ]
    },
    {
      title_1: "Apps",
      images: [
        kiraaze_appImg,
        life_2Img,
        campusImg,
      ]
    },
    {
      title_1: "Agents",
      images: [
        agentsImg,
        agent2Img,
        agent3Img,
      ]
    }
  ];

  return (
    <section className="hero-section-main">
      <div className="container">
        <p className="hero-subtitle" style={{ color: '#ffc94a' }}>We've Got You Covered.</p>
        <h1 className="hero-title" style={{ color: '#ffffff' }}>Pick a Template or Build Your Own</h1>

        <div className="text-center fs-1" id="flip">
          <div>
            <div>Websites</div>
          </div>
          <div>
            <div>Apps</div>
          </div>
          <div>
            <div>Agents</div>
          </div>
        </div>

        <div className="tiles-grid">
          {categories.map((category, index) => (
            <CategoryTile
              key={index}
              title_1={category.title_1}
              images={category.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Studios Section Component
const StudiosSection = () => {
  const [activeStudio, setActiveStudio] = useState('web'); // Default to 'web'

  const studios = {
    web: {
      id: 'web',
      title: 'Web Studio',
      description: 'Create stunning, fully responsive websites with a wide range of ready-to-use templates. Effortlessly customize layouts, colors, and features to perfectly align with your brand\'s identity, vision, and business goals.',
      imageUrl: studioImage,
      link: '/studios/web',
    },
    app: {
      id: 'app',
      title: 'App Studio',
      description: 'Develop innovative mobile applications for iOS and Android platforms. Our experts guide you from concept to launch, ensuring a seamless user experience and robust performance across all devices.',
      imageUrl: studioImage,
      link: '/studios/app',
    },
    agent: {
      id: 'agent',
      title: 'Agentic Studio',
      description: 'Leverage the power of AI with custom-built intelligent agents and automation solutions. From chatbots to complex AI workflows, we help you integrate cutting-edge AI into your business operations.',
      imageUrl: studioImage,
      link: '/studios/agent',
    }
  };

  const handleTabClick = (studioId) => {
    setActiveStudio(studioId);
  };

  const studioOrder = ['web', 'app', 'agent']; // Define the order for stacking

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#1C1A1A' }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
            Your problem-Our <span style={{ color: '#FFC94A' }}>studios</span> for solutions.
          </h2>
          <p className="mx-auto" style={{ fontSize: '1.125rem', maxWidth: '42rem', color: '#888888' }}>
            Our three studios are designed to build and scale your businesses.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="studios-header">
          {studioOrder.map((studioId) => (
            <div
              key={studioId}
              className={`studio-tab ${activeStudio === studioId ? 'active' : ''}`}
              onClick={() => handleTabClick(studioId)}
            >
              {studios[studioId].title}
            </div>
          ))}
        </div>

        {/* Studio Card Container */}
        <div className="studio-card-container">
          {studioOrder.map((studioKey, index) => {
            const studio = studios[studioKey];
            const isActive = activeStudio === studio.id;

            const activeIndex = studioOrder.indexOf(activeStudio);
            const currentCardIndex = index;

            let cardsToShowWhenActive = 1;
            if (activeStudio === 'app') {
              cardsToShowWhenActive = 2;
            } else if (activeStudio === 'agent') {
              cardsToShowWhenActive = 3;
            }
            // Determine if the current card should be visible in the stack
            const isVisibleInStack = currentCardIndex >= (activeIndex - (cardsToShowWhenActive - 1)) && currentCardIndex <= activeIndex;
            let zIndex = 1;
            let translateY = 60; // Default hidden position
            let scale = 0.8;
            let opacity = 0;
            let pointerEvents = 'none';

            if (isActive) {
              zIndex = 10;
              translateY = 0;
              scale = 1;
              opacity = 1;
              pointerEvents = 'auto';
            } else if (isVisibleInStack) {
              const offsetFromActive = activeIndex - currentCardIndex; // How many positions behind the active card
              if (offsetFromActive > 0) { // If it's a card behind the active one
                zIndex = 10 - offsetFromActive;
                translateY = offsetFromActive * -25; // Move down
                scale = 1 - (offsetFromActive * 0.05); // Smaller
                opacity = 1 - (offsetFromActive * 0.2); // More transparent
                opacity = Math.max(0.3, opacity); // Ensure minimum visibility
              }
            }

            const cardStyle = {
              zIndex: zIndex,
              transform: `translateX(-50%) translateY(${translateY}px) scale(${scale})`,
              opacity: opacity,
              pointerEvents: pointerEvents,
            };

            return (
              <Link
                to={studio.link}
                key={studio.id}
                className={`studio-card ${isActive ? 'active' : ''}`}
                style={cardStyle}
              >
                <div className="studio-content">
                  <h3 className="studio-title">{studio.title}</h3>
                  <p className="studio-description">{studio.description}</p>
                  <div className="studio-buttons">
                    <Link to="/ready" className="studio-button primary">
                      Ready to use ↗
                    </Link>
                    <Link to={studio.link} className="studio-button secondary">
                      Customize ↗
                    </Link>
                  </div>
                </div>
                <div className="studio-image">
                  <img src={studio.imageUrl} alt={`${studio.title} illustration`} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
const IndustryCards = () => {

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
                 <h3 className="industry-title">Hotels</h3>
               </div>
             </div>

             <div className="col-lg-2 col-md-4 col-sm-6 col-12">
               <div className="industry-card">
                 <div className="industry-icon">
                   <img src={food_courtIcon} alt="Food-Court Icon" width="60" />
                 </div>
                 <h3 className="industry-title">Food Court</h3>
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
                 <h3 className="industry-title">Retail</h3>
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

const ScrollingCards = () => {
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);

  return (
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

  );
};


// Process Flow Component - Solutions for Every Industry
const ProcessFlow = () => {
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* "Discover How We Deliver Outstanding Results" section */}
      <section className="py-5" style={{ backgroundColor: '#222222ff' }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>
            Discover How We Deliver <span style={{ color: '#F2C94C' }}>Outstanding Results</span>
          </h2>
          <div className="row g-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <div onClick={() => handleClick('/kiraaze')} style={{ cursor: 'pointer' }}>
                  <img
                    src={kiraaze_casestudyImg}
                    alt="Case study 1"
                    className="img-fluid w-100"
                    style={{ borderRadius: 18, height: 240, objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span>
                  <span className="mx-2" style={{ color: '#F2C94C' }}>•</span>
                  <span style={{ color: '#F2C94C' }}>kirazee</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for<br />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <div onClick={() => handleClick('/kiraaze')} style={{ cursor: 'pointer' }}>
                  <img
                    src={kiraaze_casestudyImg}
                    alt="Case study 1"
                    className="img-fluid w-100"
                    style={{ borderRadius: 18, height: 240, objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span>
                  <span className="mx-2" style={{ color: '#F2C94C' }}>•</span>
                  <span style={{ color: '#F2C94C' }}>kirazee</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for<br />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100">
                <div onClick={() => handleClick('/kiraaze')} style={{ cursor: 'pointer' }}>
                  <img
                    src={kiraaze_casestudyImg}
                    alt="Case study 1"
                    className="img-fluid w-100"
                    style={{ borderRadius: 18, height: 240, objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-3" style={{ color: '#F2C94C', fontWeight: 600 }}>
                  <span>Case study</span>
                  <span className="mx-2" style={{ color: '#F2C94C' }}>•</span>
                  <span style={{ color: '#F2C94C' }}>kirazee</span>
                </div>
                <div className="fw-bold mt-2" style={{ color: '#ffffff' }}>
                  How We Achieved Results for<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't just take our word for it section */}
      <section className="py-5" style={{ backgroundColor: '#2b2a2aff', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

          {(() => {
            const testimonials = [
              { img: phaniImg , quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Jenny Wilson', company: 'Grower.io' }, 
              { img: srinivasImg , quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", name: 'Devon Lane', company: 'DLDesign.co' }, 
              { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60', quote: "Outstanding quality and great flexibility. It helped our team move much faster.", name: 'Courtney Henry', company: 'Stark Ltd' }
            ];

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
                        <img src={t.img} alt={t.name} className="rounded" style={{ width: 230, height: 290, objectFit: 'cover' }} />
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
    <span
      key={d}
      onClick={() => setIndex(d)} // This will set the index to the clicked circle
      style={{
        display: 'inline-block',
        width: 10,
        height: 10,
        margin: '0 6px',
        borderRadius: '50%',
        backgroundColor: index % testimonials.length === d ? '#F2C94C' : 'rgba(255,255,255,0.25)',
        cursor: 'pointer' // This will make the circles appear clickable
      }}
    />
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
    </>
  );
};
// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // Initially no FAQ is open

  const faqs = [
    {
      question: 'What is Z.DotApps?',
      answer: 'Z.DotApps is a digital platform that offers ready-to-use and custom-built solutions for websites, apps, and AI agents — helping businesses launch faster with minimal effort.',
    },
    {
      question: 'What is Web Studio?',
      answer: 'Z.DotApps is a digital platform that offers ready-to-use and custom-built solutions for websites, apps, and AI agents — helping businesses launch faster with minimal effort.',
    },
    {
      question: 'What is App Studio?',
      answer: 'Our App Studio allows you to develop innovative mobile applications for both iOS and Android platforms, focusing on seamless user experiences and high performance.',
    },
    {
      question: 'What is Agentic Studio?',
      answer: 'Agentic Studio leverages AI to create custom intelligent agents and automation solutions, streamlining operations and enhancing customer service.',
    },
    {
      question: 'What services does Z.DotApps offer?',
      answer: 'We offer a comprehensive suite of services including web development, mobile app development (iOS/Android), and AI agent creation and integration.',
    },
    {
      question: 'How many days does it take to build a website?',
      answer: 'The timeline for website development varies depending on complexity, but our streamlined process aims for rapid deployment, often delivering an MVP in 4-8 weeks.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle FAQ visibility
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  {openIndex === index ? '↑' : '↑'}
                </span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// Final CTA Section Component
const FinalCTASection = () => {
  const containerStyle = {
    background: '#FFC94A',
    padding: '4rem 1rem',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1C1A1A',
    marginBottom: '1rem',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    color: '#1C1A1A',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  };

  const primaryButtonStyle = {
    background: '#1C1A1A',
    color: '#FFC94A',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const secondaryButtonStyle = {
    background: 'transparent',
    color: '#1C1A1A',
    border: '2px solid #1C1A1A',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const featuresContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
  };

  const featureBoxStyle = {
    textAlign: 'center',
    maxWidth: '200px',
  };

  const featureTitleStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1C1A1A',
    marginBottom: '0.5rem',
  };

  const featureDescStyle = {
    fontSize: '0.875rem',
    color: '#1C1A1A',
    lineHeight: '1.4',
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Ready to Build the Future?</h2>
      <p style={subheadingStyle}>
        World Class Apps, Built to Last.
      </p>
      <div style={buttonsContainerStyle}>
        <a href="#" style={primaryButtonStyle}>
          Get In Touch →
        </a>
        {/* <a href="#" style={secondaryButtonStyle}>
          View Our Work
        </a> */}
      </div>
      <div style={featuresContainerStyle}>
        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>Free Consultation</h3>
          <p style={featureDescStyle}>30-minute strategy call</p>
        </div>
        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>Fast Delivery</h3>
          <p style={featureDescStyle}>MVP in 4-8 weeks</p>
        </div>
        <div style={featureBoxStyle}>
          <h3 style={featureTitleStyle}>Full Support</h3>
          <p style={featureDescStyle}>Launch & maintenance included</p>
        </div>
      </div>
    </section>
  );
};
// Main Page Component
export default function ZappsLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
        <HeroSection />
        <StudiosSection />
        <IndustryCards />
        <ScrollingCards />
        <ProcessFlow />
        <FAQSection /> {/* Added FAQ Section here */}
        <FinalCTASection />
  
      </div>
    </>
  );
}