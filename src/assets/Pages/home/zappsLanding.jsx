import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added for WhatWeDo
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
import group1Img from '../../images/Group 1.jpg';
import group2Img from '../../images/Group 2.jpg';
import group3Img from '../../images/Group 3.jpg';
import web1v2Img from '../../images/web1_v2.jpg';
import web2v2Img from '../../images/web2v2.jpg';
import web3v2Img from '../../images/web3_v2.jpg';
import app1Img from '../../images/app1.jpg';
import app3Img from '../../images/app2.jpg';
import app4Img from '../../images/app4.jpg';
import ai1Img from '../../images/ai1.jpg';
import ai2Img from '../../images/ai2.jpg';
import ai3Img from '../../images/ai3.jpg';
import manufacturingImg from '../../images/manufacturing.avif';
import ngoImg from '../../images/ngo.avif';
import lakshminathanImg from '../../images/lakshminathan.jpg';
import ecommerceImg from '../../images/e-commerce.avif';

// Images for WhatWeDo component - Make sure these paths are correct relative to your project structure
import techImage from '../../images/1.webp';
import experienceImage from '../../images/2.webp';
import strategyImage from '../../images/3.webp';
import growthImage from '../../images/4.webp';


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

  html { width: 100%; overflow-x: hidden; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--foreground);
    background-color: var(--background);
    overflow-x: hidden;
  }

  /* Media-safe defaults */
  img, video { max-width: 100%; height: auto; }

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Tame Bootstrap gutter on small screens to avoid accidental overflow */
  @media (max-width: 576px) {
    .row { --bs-gutter-x: 1rem; }
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
  /* WhatWeDo heading alignment: center on mobile, left on md+ */
  .wwd-heading { text-align: center; }
  @media (min-width: 768px) { .wwd-heading { text-align: left; } }

  /* WhatWeDo section: avoid horizontal overflow on mobile */
  .whatwedo { overflow-x: hidden; }
  @media (max-width: 768px) {
    .wwd-right { position: static; top: auto; transform: none; }
    .wwd-right-inner { margin-left: 0 !important; max-width: 100% !important; }
    .wwd-right img { width: 100% !important; height: auto !important; display: block; }
  }

  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
  .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  .py-20 { padding-top: 5rem; padding-bottom: 3rem; }

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
    font-size: 5.3rem; /* Larger font size */
    font-weight: 600;
    line-height: 1;
    color: #ffffffff; /* Yellow for the title */
    // margin-top: 9.5rem;
  }

    .hero-subtitle {
    font-size: 2.3rem; /* Larger font size */
    font-weight: 500;
    line-height: 1.5;
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

  /* Studios: simplify layout for small screens */
  @media (max-width: 768px) {
    .studio-card-container {
      position: static;
      height: auto;
      min-height: auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
    }
    .studio-card {
      position: static;
      left: auto;
      top: auto;
      transform: none !important;
      opacity: 1 !important;
      pointer-events: auto !important;
      width: 100%;
      max-width: 100%;
      height: auto;
      padding: 1.25rem;
      gap: 1rem;
    }
    .studio-content { max-width: 100%; text-align: left; }
    .studio-image { max-width: 100%; height: 220px; }
  }

  a {
    color: #f1efeaff;
    text-decoration: none;
  }

  /* -----------------------FAQ Section Styles---------------- */
  .faq-section {
    background-color: #1C1A1A;
    padding: 10rem 1rem;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  .faq-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
    color: #FFC94A;
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
  @media (max-width: 768px) {
    .faq-list {
      grid-template-columns: 1fr; /* Single column on small screens */
      gap: 12px;
    }
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
    padding: 193px 20px;
    text-align: center;
    background-color: #3f3f3eff; /* Changed to white for category tiles */
    color: #333333ff; /* Changed text color for better contrast on white */
    overflow-x: hidden;
  }

  .hero-text-content {
    margin-bottom: 30px;
  }

  /* Removed .stacked-cards-container and .stacked-card styles
     as they are no longer used for the hero section with category tiles.
     The .tiles-grid and .cat-tile styles will be used instead. */

  :root{
    --tile-h: 12rem;
    --radius: 14px;
    --n1: 10px; --n2: 6px; --n3: 3px;
    --title-x: 24px;
    --title-size: 24px;
  }

  *{ box-sizing:border-box; }
  /* body styles are already handled globally or by the main body rule */

  .tiles-grid { /* Renamed to avoid generic class name conflict */
    max-width: 100%; margin:0 auto;
    display:grid; grid-template-columns: repeat(3, minmax(300px, 1fr)); gap: 16px;
    padding: 0px; /* Added padding */
    margin-top: 70px; /* Added margin-top for spacing */
  }

  .cat-tile{
    position:relative; height:var(--tile-h); width:100%;
    border-radius:var(--radius); border:1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.06); overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,.12);
  }

  /* CLICKABLE title area (covers left side up to the image pane) */
  .cat-title{
    position:absolute;
    left:0;
    right:var(--pane-w,50%);
    top:0; bottom:0;
    display:flex; align-items:center; padding-left:var(--title-x);
    font-size:var(--title-size); letter-spacing:.2px;
    color:#ffffff; text-decoration:none; z-index:2;
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
    position:absolute; top:50%; transform:translateY(-50%);
    width:var(--shot-w,120px); height:auto; aspect-ratio:9/16;
    border-radius:14px; border:1px solid rgba(0,0,0,.08);
    box-shadow:0 6px 16px rgba(0,0,0,.15);
  }
  /* Websites tile should look like desktop windows (no rounded corners on images) */
  .cat-tile.web .shot{ border-radius:4px; }
  .cat-tile.web .pane{ background:#e9e9e9; }
  .shot{
    position:absolute; top:50%; transform:translateY(-50%);
    width:var(--shot-w,120px); height:auto; aspect-ratio:9/16;
    border-radius:14px; border:1px solid rgba(0,0,0,.08);
    box-shadow:0 6px 16px rgba(0,0,0,.15);
    background:#ddd;
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
    /* Use grid to avoid horizontal scroll on tablets/phones */
    .tiles-grid{ display:grid; grid-template-columns: 1fr; gap:18px; padding-bottom:0; }
    .cat-tile{ min-width:100%; }
    .pane{ width: var(--pane-w, 50%); }
    .stack{ --shot-w:140px; --overlap:44px; --peek-right:80px; }
    .cat-title{ padding-left:20px; font-size:20px; }
  }
  /* Very small screens: remove horizontal scroll, use single column grid */
  @media (max-width: 640px) {
    .tiles-grid { display: grid; grid-template-columns: 1fr; gap: 14px; padding-bottom: 0; }
    .cat-tile { min-width: 100%; }
    .pane { width: var(--pane-w, 50%); }
    .stack{ --shot-w:130px; --overlap:40px; --peek-right:70px; }
  }
  /* Small phones */
  @media (max-width: 576px) {
    .tiles-grid { gap: 12px; }
    :root{ --tile-h: 11rem; --title-size: 20px; }
  }
  /* Extra small phones */
  @media (max-width: 420px) {
    :root{ --tile-h: 10rem; --title-size: 18px; }
    .stack{ --shot-w: 96px; --overlap: 22px; --peek-right: 60px; }
    .cat-title{ padding-left: 16px; }
  }
  /* Mobile adjustments for hero and tiles */
  @media (max-width: 768px) {
    .hero-section-main { padding: 120px 16px; }
    .hero-title { font-size: 2.6rem; line-height: 1.1; }
    #flip { height: 60px; }
    #flip > div > div { height: 30px; margin-bottom: 30px; font-size: 18px; }
    .tiles-grid { margin-top: 36px; }
  }
  @media (max-width: 480px) {
    .hero-section-main { padding: 96px 14px; }
    .hero-title { font-size: 2.2rem; }
    #flip { height: 48px; }
    #flip > div > div { height: 24px; margin-bottom: 24px; font-size: 16px; }
  }
  /* Studios section spacing to avoid header overlap */
  .studios-section { padding-top: 7.5rem; }
  @media (max-width: 992px) { .studios-section { padding-top: 9rem; } }
  @media (max-width: 576px) { .studios-section { padding-top: 10rem; } }
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
    height:100px;
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
    padding: 3rem 1rem;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  .industry-solutions h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    color: #FFFFFF;
  }
  /* Testimonial image responsiveness */
  @media (max-width: 576px) {
    .testimonial-img { width: 140px !important; height: 180px !important; }
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
  @media (min-width: 1200px) {
  .fs-1 {
      font-size: 3.8rem !important;
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

/* WhatWeDo.css styles */
.relative {
  position: relative;
}
.isolate {
  isolation: isolate;
}
.bg-black {
  background-color: #000;
}
.text-white {
  color: #fff;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.grid {
  display: grid;
}
.min-h-screen {
  min-height: 100vh;
}
.w-full {
  width: 100%;
}
.max-w-7xl {
  max-width: 80rem; /* 1280px */
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.gap-6 {
  gap: 1.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.sm\:gap-8 {
  gap: 2rem;
}
.sm\:px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.sm\:py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.md\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.md\:gap-12 {
  gap: 3rem;
}
.md\:py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.lg\:py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-zinc-400 {
  color: #a1a1aa;
}
.sm\:text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.mt-4 {
  margin-top: 1rem;
}
.text-3xl {
  font-size: 2.5rem;
  line-height: 2.25rem;
}
.font-semibold {
  font-weight: 600;
}
.leading-\[1\.05\] {
  line-height: 1.05;
}
.text-zinc-50 {
  color: #fafafa;
}
.sm\:mt-6 {
  margin-top: 1.5rem;
}
.sm\:text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.md\:text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.lg\:text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.mt-8 {
  margin-top: 2rem;
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.sm\:mt-12 {
  margin-top: 3rem;
}
.sm\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.rounded-xl {
  border-radius: 0.75rem;
}
.border {
  border-width: 1px;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.sm\:rounded-2xl {
  border-radius: 1rem;
}
.border-white/30 {
  border-color: rgba(255, 255, 255, 0.3);
}
.bg-white/\[0\.02\] {
  background-color: rgba(255, 255, 255, 0.02);
}
.border-white/5 {
  border-color: rgba(255, 255, 255, 0.05);
}
.hover\:border-white/20:hover {
  border-color: rgba(255, 255, 255, 0.2);
}
.active\:border-white/20:active {
  border-color: rgba(255, 255, 255, 0.2);
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.gap-3 {
  gap: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.sm\:gap-4 {
  gap: 1rem;
}
.sm\:p-5 {
  padding: 1.25rem;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.sm\:text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.md\:text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.opacity-70 {
  opacity: 0.7;
}
.sm\:w-4 {
  width: 1rem;
}
.sm\:h-4 {
  height: 1rem;
}
.overflow-hidden {
  overflow: hidden;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.sm\:px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.sm\:pb-6 {
  padding-bottom: 1.5rem;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.gap-4 {
  gap: 1rem;
}
.sm\:gap-6 {
  gap: 1.5rem;
}
.md\:grid-cols-\[1fr\_auto\_1fr\] {
  grid-template-columns: 1fr auto 1fr;
}
.md\:items-start {
  align-items: flex-start;
}
.max-w-prose {
  max-width: 65ch;
}
.leading-relaxed {
  line-height: 1.625;
}
.hidden {
  display: none;
}
.h-full {
  height: 100%;
}
.w-px {
  width: 1px;
}
.bg-white/10 {
  background-color: rgba(255, 255, 255, 0.1);
}
.md\:block {
  display: block;
}
.gap-1\.5 {
  gap: 0.375rem;
}
.sm\:gap-2 {
  gap: 0.5rem;
}
.text-zinc-200 {
  color: #e4e4e7;
}
.relative {
  position: relative;
}
.pl-3 {
  padding-left: 0.75rem;
}
.sm\:pl-4 {
  padding-left: 1rem;
}
.before\:absolute::before {
  position: absolute;
}
.before\:left-0::before {
  left: 0px;
}
.before\:top-1\.5::before {
  top: 0.375rem;
}
.sm\:before\:top-2::before {
  top: 0.5rem;
}
.before\:h-1::before {
  height: 0.25rem;
}
.before\:w-1::before {
  width: 0.25rem;
}
.before\:rounded-full::before {
  border-radius: 9999px;
}
.before\:bg-zinc-500/70::before {
  background-color: rgba(113, 113, 122, 0.7);
}
.order-first {
  order: -9999;
}
.md\:order-last {
  order: 9999;
}
.h-auto {
  height: auto;
}
.rounded-2xl {
  border-radius: 1rem;
}
.sm\:rounded-3xl {
  border-radius: 1.5rem;
}
.md\:rounded-\[48px\] {
  border-radius: 48px;
}
.pointer-events-none {
  pointer-events: none;
}
.absolute {
  position: absolute;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.right-0 {
  right: 0px;
}
.w-24 {
  width: 6rem;
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.from-black {
  --tw-gradient-from: #000;
  --tw-gradient-to: rgba(0, 0, 0, 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
/* End WhatWeDo.css styles */
`;

// CategoryTile Component
const CategoryTile = ({ title_1, images }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/coming-soon');
  };

  const isWebsite = (title_1 || '').toLowerCase() === 'websites';
  return (
    <div className={`cat-tile mt-5 ${isWebsite ? 'web' : ''}`} style={{ '--pane-w': '50%', '--n1': '35px', '--n2': '22px', '--n3': '28px' }}>
      <a
        className="cat-title"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        {title_1}
      </a>
      <div className="pane" aria-hidden="true">
        <div className="stack" style={{ '--shot-w': '110px', '--overlap': '28px', '--peek-right': '90px' }}>
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
        web1v2Img,
        web2v2Img,
        web3v2Img,
      ]
    },
    {
      title_1: "Apps",
      images: [
        app1Img,
        app3Img,
        app4Img,
      ]
    },
    {
      title_1: "Agents",
      images: [
        ai1Img,
        ai2Img,
        ai3Img,
      ]
    }
  ];

  return (
    <section className="hero-section-main bg-black">
      <div className="container">
        {/* <p className="hero-subtitle" style={{ color: '#ffc94a' }}>We've Got You Covered.</p> */}
        <h1 className="hero-title" style={{ color: '#ffffff' }}>Building Today’s</h1>

        <div className="text-center fs-1" id="flip">
          <div>
            <div>AI Solutions</div>
          </div>
          <div>
            <div>World Class Apps</div>
          </div>
          <div>
            <div>Digital Products</div>
          </div>
          <div>
            <div>Tech Ventures</div>
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
    <section className="py-20 px-4 bg-black studios-section" style={{ backgroundColor: '#1C1A1A' }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mt-5" style={{ color: '#FFFFFF' }}>
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
                    <Link to="/coming-soon" className="studio-button primary">
                      Ready to use ↗
                    </Link>
                    <Link to="/coming-soon" className="studio-button secondary">
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const industryData = [
    {
      icon: ecomerceIcon,
      title: 'E-Commerce',
      description: 'Custom online stores with seamless shopping experiences and secure payment gateways.'
    },
    {
      icon: eventsIcon,
      title: 'Events',
      description: 'Event management solutions with ticketing, registration, and attendee engagement tools.'
    },
    {
      icon: hospitalIcon,
      title: 'Healthcare',
      description: 'HIPAA-compliant solutions for hospitals, clinics, and healthcare providers.'
    },
    {
      icon: universityIcon,
      title: 'Education',
      description: 'E-learning platforms and educational institution management systems.'
    },
    {
      icon: hotelIcon,
      title: 'Hospitality',
      description: 'Booking systems and management solutions for hotels and resorts.'
    },
    {
      icon: food_courtIcon,
      title: 'Food & Beverage',
      description: 'Online ordering, delivery, and restaurant management solutions.'
    },
    {
      icon: technologyIcon,
      title: 'Technology',
      description: 'Custom software solutions for tech companies and startups.'
    },
    {
      icon: manufacturingIcon,
      title: 'Manufacturing',
      description: 'Inventory management and production tracking systems.'
    },
    {
      icon: sportsIcon,
      title: 'Sports',
      description: 'Team management and fan engagement platforms.'
    },
    {
      icon: shopIcon,
      title: 'Retail',
      description: 'Point of sale and inventory management for retail businesses.'
    },
    {
      icon: schoolsIcon,
      title: 'Schools',
      description: 'School management and student information systems.'
    },
    {
      icon: child_careIcon,
      title: 'Child Care',
      description: 'Daycare management and parent communication tools.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Split into slides with 8 items each (4 per row x 2 rows)
  const slides = [];
  for (let i = 0; i < industryData.length; i += 8) {
    slides.push(industryData.slice(i, i + 8));
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  // Detect mobile to switch to grid view (no carousel)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section 
      className="industry-solutions" 
      style={{ 
        backgroundColor: 'black', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="fw-bold" style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Solutions for Every <span style={{ color: '#F2C94C' }}>Industry</span>
          </h2>
          <p className="mx-auto" style={{ fontSize: '1.25rem', maxWidth: '42rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            From startups to enterprises, we deliver tailored digital solutions that fit your world.
          </p>
        </div>

        {/* Mobile grid (no carousel) */}
        {isMobile ? (
          <div className="row g-3">
            {industryData.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3 d-flex">
                <div className="industry-card" style={{ width: '100%' }}>
                  <div className="industry-card-content">
                    <div className="industry-icon">
                      <img src={item.icon} alt={`${item.title} Icon`} width="70" />
                    </div>
                    <h3 className="industry-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Carousel */}
            <div className="industry-carousel" style={{ minHeight: '500px' }}>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-slide ${currentSlide === slideIndex ? 'active' : ''}`}
                  style={{
                    display: currentSlide === slideIndex ? 'block' : 'none',
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: currentSlide === slideIndex ? 1 : 0,
                    position: 'absolute',
                    width: '100%',
                    left: 0,
                    top: 0
                  }}
                >
                  <div className="row g-4">
                    {slide.slice(0, 4).map((item, index) => (
                      <div key={`${slideIndex}-${index}`} className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                        <div className="industry-card">
                          <div className="industry-card-content">
                            <div className="industry-icon">
                              <img src={item.icon} alt={`${item.title} Icon`} width="80" />
                            </div>
                            <h3 className="industry-title">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row g-4 mt-4">
                    {slide.slice(4, 8).map((item, index) => (
                      <div key={`${slideIndex}-${index + 4}`} className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                        <div className="industry-card">
                          <div className="industry-card-content">
                            <div className="industry-icon">
                              <img src={item.icon} alt={`${item.title} Icon`} width="80" />
                            </div>
                            <h3 className="industry-title">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="carousel-dots" style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
              gap: '0.75rem',
              padding: '0 1rem',
              position: 'relative',
              zIndex: 10
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    backgroundColor: currentSlide === index ? '#F2C94C' : 'rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .industry-carousel {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 500px;
        }

        .carousel-slide {
          transition: opacity 0.5s ease-in-out;
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          opacity: 0;
        }

        .carousel-slide.active {
          opacity: 1;
          position: relative;
        }

        .industry-card {
          width: 100%;
          height: 100%;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
          background: #333;
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border-color: rgba(242, 201, 76, 0.5);
        }

        .industry-icon {
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .industry-card:hover .industry-icon {
          transform: scale(1.1);
        }

        .industry-title {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0.5rem 0 0;
          text-align: center;
          transition: color 0.3s ease;
        }

        .industry-card:hover .industry-title {
          color: #F2C94C;
        }

        @media (max-width: 1199px) {
          .industry-card {
            min-height: 180px;
            padding: 1.25rem;
          }
          
          .industry-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 991px) {
          .industry-solutions {
            padding: 3rem 0;
          }
          
          .industry-card {
            min-height: 160px;
          }
        }

        @media (max-width: 767px) {
          .industry-solutions h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .industry-solutions p {
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .industry-card {
            min-height: 140px;
            padding: 1rem 0.75rem;
          }
          
          .industry-title {
            font-size: 0.95rem;
          }
          
          .industry-icon img {
            width: 50px;
            height: 50px;
          }
        }
        
        @media (max-width: 575px) {
          .industry-solutions {
            padding: 2rem 0;
          }
          
          .industry-solutions h2 {
            font-size: 1.75rem;
          }
          
          .industry-card {
            min-height: 120px;
          }
          
          .industry-title {
            font-size: 0.9rem;
          }
          
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 0;
        }

        .industry-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          background: #3a3a3a;
          z-index: 2;
        }

        .industry-card-content {
          text-align: center;
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5px;
        }

        .industry-icon {
          margin-bottom: 12px;
          transition: all 0.3s ease;
          transform-origin: center center;
        }

        .industry-icon img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .industry-title {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 10px 0 0;
          transition: all 0.3s ease;
          text-align: center;
          line-height: 1.3;
        }

        .industry-card:hover .industry-icon {
          transform: scale(1.15);
        }

        .industry-card:hover .industry-title {
          color: #F2C94C;
          transform: translateY(0);
        }

        .industry-title {
          transform: translateY(0);
          transition: all 0.3s ease;
          padding: 0 5px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #555;
          margin: 0 6px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .carousel-dot.active {
          background: #F2C94C;
          width: 30px;
          border-radius: 5px;
        }

        .carousel-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .carousel-slide.active {
          opacity: 1;
          position: relative;
        }

        @media (max-width: 1200px) {
          .industry-card {
            min-height: 180px;
            padding: 15px 10px;
          }

          .industry-icon {
            margin-bottom: 10px;
          }

          .industry-icon img {
            width: 50px;
            height: 50px;
          }

          .industry-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 992px) {
          .industry-card {
            height: 180px;
          }

          .industry-icon img {
            width: 60px;
            height: 60px;
          }

          .industry-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .industry-card {
            height: 160px;
            padding: 20px 15px;
          }

          .industry-icon {
            margin-bottom: 15px;
          }

          .industry-icon img {
            width: 55px;
            height: 55px;
          }

          .industry-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .industry-card {
            height: 140px;
            padding: 15px 10px;
          }

          .industry-icon {
            margin-bottom: 12px;
          }

          .industry-icon img {
            width: 50px;
            height: 50px;
          }

          .industry-title {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

// WhatWeDo Component (Copied from your previous input)
function WhatWeDo() {
  const sections = [
    {
      no: '01',
      key: 'technology',
      title: 'Technology',
      blurb:
        'We are a leader in building cutting‑edge mobile and web applications that are AI‑driven and intuitive. We push boundaries and solve complex challenges to drive real impact.',
      services: [
        'Mobile App Development',
        'Web Development',
        'AI & Innovation',
        'Backend & Infrastructure',
        'Emerging Technology',
      ],
      img: techImage,
    },
    {
      no: '02',
      key: 'experience',
      title: 'Experience',
      blurb:
        'Our best‑in‑class Product Designers and Strategists create smart, clear product experiences that keep people engaged through carefully crafted UX, UI, and interaction design.',
      services: [
        'Product Vision',
        'User Research',
        'UX Design',
        'Visual Design',
        'Design Systems',
      ],
      img: experienceImage,
    },
    {
      no: '03',
      key: 'strategy',
      title: 'Strategy',
      blurb:
        'We surround clients with leaders from product, design, data, and engineering with relentless focus on product‑market fit, growth potential, monetization, and technical opportunities.',
      services: [
        'Digital Transformation',
        'Product Validation',
        'AI Strategy',
        'Planning & Roadmapping',
        'Technical Audits',
      ],
      img: strategyImage,
    },
    {
      no: '04',
      key: 'growth',
      title: 'Growth',
      blurb:
        'Our PMs, Data Scientists, and Growth Marketers partner to evolve and adopt the product—prioritizing business goals via rapid releases, feedback cycles, and data‑driven experimentation.',
      services: [
        'Ongoing Management',
        'Data & Experimentation',
        'User Acquisition',
        'User Retention',
        'Staff Augmentation',
      ],
      img: growthImage,
    },
  ]

  const [active, setActive] = useState(0) // Set to 0 to have Technology section open by default
  const activeSection = sections[active]

  // Immediate transitions for smooth, responsive feel
  const hoverTimer = useRef(null)
  const onEnter = (i) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
    setActive(i)
  }
  const onLeave = () => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
  }

  // Touch support for mobile
  const handleTouchStart = (i) => {
    setActive(i)
  }

  return (
    <section className="whatwedo relative isolate bg-black text-white min-h-screen flex items-center py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start h-full">
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
            <h2 className="wwd-heading text-4xl font-semibold leading-tight text-zinc-50 md:text-5xl mb-8">
              <span className="block">Elegant solutions</span>
              <span className="block">built on proven</span>
              <span className="block">methodologies.</span>
            </h2>

            <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-4 list-none" onMouseLeave={onLeave} style={{ listStyle: 'none', paddingLeft: 0 }}>
              {sections.map((s, i) => {
                const open = active !== null && i === active
                return (
                  <li
                    key={s.key}
                    onMouseEnter={() => onEnter(i)}
                    onTouchStart={() => handleTouchStart(i)}
                    onFocus={() => setActive(i)}
                    className={`rounded-xl border transition-all duration-300 sm:rounded-2xl ${
                      open ? 'border-white/30 bg-white/[0.02]' : 'border-white/5 hover:border-white/20 active:border-white/20'
                    }`}
                    tabIndex={0}
                  >
                    {/* Header row */}
                    <div className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                      <span className="font-mono text-xs text-zinc-400 sm:text-sm">{s.no}</span>
                      <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl">
                        <span>{s.title}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-70 sm:w-4 sm:h-4"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </div>
                    </div>

                    {/* Inline expanding content */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
                            opacity: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
                          }}
                          style={{ overflow: 'hidden' }}
                          className="px-4 pb-4 sm:px-5 sm:pb-6"
                        >
                          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start">
                            <p className="max-w-prose text-sm leading-relaxed text-zinc-400">{s.blurb}</p>
                            <span className="hidden h-full w-px bg-white/10 md:block" aria-hidden />
                            <ul className="grid gap-2 text-xs text-zinc-300">
                              {s.services.map((x) => (
                                <li key={x} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-400">
                                  {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Image on the right */}
          <div className="wwd-right w-full md:w-1/3 sticky top-1/2 transform -translate-y-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                <div className="wwd-right-inner relative w-100 max-w-md ms-5 mx-auto">
                  <img
                    src={activeSection.img}
                    alt={`${activeSection.title} hero`}
                    className="w-100 h-auto rounded-xl shadow-2xl mt-2"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black md:block"></div>
      </div>
    </section>
  );
}

// Process Flow Component - Solutions for Every Industry
const ProcessFlow = () => {
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate('/coming-soon');
  };

  return (
    <>
      {/* "Discover How We Deliver Outstanding Results" section */}
      <section className="d-flex bg-black align-items-center" style={{ 
        minHeight: '100vh',
        padding: '4rem 0'
      }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ 
            color: '#ffffff',
            fontSize: '2.5rem',
            marginBottom: '3rem'
          }}>
            Discover How We Deliver <span style={{ color: '#F2C94C' }}>Outstanding Results</span>
          </h2>
          
          <div className="row g-5 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex flex-column">
                <div 
                  onClick={() => handleClick('/coming-soon')} 
                  style={{ 
                    cursor: 'pointer',
                    flex: '1 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={ecommerceImg}
                    alt="E-commerce case study"
                    className="img-fluid w-100"
                    style={{ 
                      borderRadius: '24px', 
                      height: '320px', 
                      objectFit: 'cover',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div style={{ color: '#F2C94C', fontWeight: 600, fontSize: '1.1rem' }}>
                    <span>Case study</span>
                    <span className="mx-2">•</span>
                    <span>E-commerce</span>
                  </div>
                  <h3 className="fw-bold mt-2" style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    How We Achieved Results for<br />
                    E-commerce Business
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex flex-column">
                <div 
                  onClick={() => handleClick('/kiraaze')} 
                  style={{ 
                    cursor: 'pointer',
                    flex: '1 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={ngoImg}
                    alt="NGO case study"
                    className="img-fluid w-100"
                    style={{ 
                      borderRadius: '24px', 
                      height: '320px', 
                      objectFit: 'cover',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div style={{ color: '#F2C94C', fontWeight: 600, fontSize: '1.1rem' }}>
                    <span>Case study</span>
                    <span className="mx-2">•</span>
                    <span>NGO</span>
                  </div>
                  <h3 className="fw-bold mt-2" style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    How We Delivered Impact for<br />
                    Non-Profit Organization
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="h-100 d-flex flex-column">
                <div 
                  onClick={() => handleClick('/kiraaze')} 
                  style={{ 
                    cursor: 'pointer',
                    flex: '1 0 auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <img
                    src={manufacturingImg}
                    alt="Manufacturing case study"
                    className="img-fluid w-100"
                    style={{ 
                      borderRadius: '24px', 
                      height: '320px', 
                      objectFit: 'cover',
                      marginBottom: '1.5rem'
                    }}
                  />
                  <div style={{ color: '#F2C94C', fontWeight: 600, fontSize: '1.1rem' }}>
                    <span>Case study</span>
                    <span className="mx-2">•</span>
                    <span>Manufacturing</span>
                  </div>
                  <h3 className="fw-bold mt-2" style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    lineHeight: '1.3'
                  }}>
                    How We Transformed a<br />
                    Manufacturing Business
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't just take our words section */}
      <section className="py-5" style={{ 
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="text-center mb-2" style={{ color: '#F2C94C' }}>3940+ Happy Z.apps users</div>
          <h2 className="fw-bold text-center mb-5" style={{ color: '#ffffff' }}>Don't just take our <span style={{ color: '#F2C94C' }}>words</span></h2>

          <div className="position-relative" style={{ zIndex: 2 }}>
            {(() => {
              const testimonials = [
                { 
                  img: phaniImg, 
                  quote: "We love Z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
                  name: 'Sri Phani', 
                  title: 'Managing Director & CEO',
                  company: 'Ecomall' 
                },
                { 
                  img: srinivasImg, 
                  quote: "We love z.apps! Our designers were using it for their projects, so we already knew what kind of design they want.", 
                  name: 'Srinivas', 
                  title: 'Managing Director & CEO',
                  company: 'Fusion Street' 
                },
                { 
                  img: lakshminathanImg, 
                  quote: "Outstanding quality and great flexibility. It helped our team move much faster.", 
                  name: 'Mr. Lakshminathan Manickshaw', 
                  title: 'Managing Director & CEO',
                  company: 'Kryon' 
                }
              ];

              const [index, setIndex] = useState(0);
              const left = testimonials[index % testimonials.length];
              const right = testimonials[(index + 1) % testimonials.length];
              const StarRow = () => (
                <div className="mb-3" style={{ 
                  color: '#F2C94C',
                  fontSize: '1.2rem',
                  letterSpacing: '2px'
                }}>
                  ★★★★★
                </div>
              );

              return (
                <>
                  <div className="row g-5 align-items-center justify-content-center">
                    {[left, right].map((t, i) => (
                      <div key={i} className="col-md-5">
                        <div className="d-flex gap-4 align-items-center">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="rounded testimonial-img"
                            style={{
                              width: t.name === 'Mr. Lakshminathan Manickshaw' ? 210 : 230,
                              height: 290,
                              objectFit: 'cover'
                            }}
                          />
                          <div className="text-start">
                            <StarRow />
                            <p className="mb-3" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520 }}>
                              "{t.quote}"
                            </p>
                            <div className="fw-bold" style={{ color: '#ffffff' }}>{t.name}</div>
                            {t.title && <div className="small" style={{ color: 'rgba(255,255,255,0.75)' }}>{t.title}</div>}
                            {t.company && <div className="mt-1" style={{ color: '#F2C94C', fontWeight: 600 }}>{t.company}</div>}
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
                          onClick={() => setIndex(d)}
                          style={{
                            display: 'inline-block',
                            width: 10,
                            height: 10,
                            margin: '0 6px',
                            borderRadius: '50%',
                            backgroundColor: index % testimonials.length === d ? '#F2C94C' : 'rgba(255,255,255,0.25)',
                            cursor: 'pointer'
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
    {
      question: 'How do you handle project management for software development projects?',
      answer: 'At the core of our operations is a robust project management approach that guarantees not only timely deliveries but also complete transparency. Each project benefits from having a dedicated manager, your go-to person for updates, queries, and coordination across different teams. The manager keeps you in the loop from start to finish, making sure that every phase of the project adheres to high standards for quality and aligns with your goals. Our project managers utilize the latest tools to meticulously monitor progress and resource allocation, enabling us to tackle challenges effectively and keep your project on track and within budget.'
    },
    {
      question: 'Can you integrate AI into my existing legacy software?',
      answer: 'Yes, and you probably don\'t need to replace everything you\'re already using. We\'ve integrated AI into systems that companies have been running for decades without breaking what already works. Most clients see measurable improvements within a few months without the disruption and expense of rebuilding their entire technology stack.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle FAQ visibility
  };

  return (
    <section className="faq-section bg-black">
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
    padding: '5rem 1rem',
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
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)', overflowX: 'hidden' }}>
        <HeroSection />
        <StudiosSection />
        <IndustryCards />
        <WhatWeDo /> {/* Replaced ScrollingCards with WhatWeDo */}
        <ProcessFlow />
        <FAQSection /> {/* Added FAQ Section here */}
        <FinalCTASection />

      </div>
    </>
  );
}