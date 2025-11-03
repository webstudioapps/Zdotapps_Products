import React from "react";
import styles from "./features.module.css";
import { FaBolt, FaComments, FaFileAlt, FaSyncAlt, FaShieldAlt } from "react-icons/fa";

// Feature data with added 'glowColor' for unique glows
const featuresList = [
  {
    icon: <FaBolt />,
    title: "Instant Summaries",
    description: "Get the gist of any document in seconds. Our AI-powered summaries save you time and effort.",
    glowColor: "#60a5fa" // Vibrant Orange
  },
  {
    icon: <FaComments />,
    title: "Chat with Documents",
    description: "Ask questions and get instant answers from your documents. It's like having a conversation with your files.",
    glowColor: "#60a5fa" // Cool Emerald Green
  },
  {
    icon: <FaFileAlt />,
    title: "Supports Multiple Formats",
    description: "Works seamlessly with PDF, DOCX, and TXT files, with more formats on the way.",
    glowColor: "#60a5fa" // Friendly Blue
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Private",
    description: "Your documents are encrypted and processed securely. We prioritize and respect your privacy.",
    glowColor: "#60a5fa" // Strong Red
  },
  {
    icon: <FaSyncAlt />,
    title: "Continuous Learning",
    description: "Our AI is constantly learning and improving to provide you with more accurate and insightful responses.",
    glowColor: "#60a5fa" // Soft Purple
  }
];

const Features = () => {
  return (
    <section className={`${styles.featuresSection} d-flex align-items-center`}>
      <div className="container text-center">
        <div className="mb-5">
          <h1 className="display-4 fw-bold text-white mb-3">Features</h1>
          <p className="lead text-white-50">
            Unlock the power of your documents with our intelligent tools.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {featuresList.map((feature, index) => (
            <div className="col-lg-4 col-md-6 mb-2" key={index}>
              {/* We pass the glowColor to the CSS via a custom property */}
              <div 
                className={`${styles.card} h-100 p-4`} 
                style={{ '--glow-color': feature.glowColor }}
              >
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className={styles.iconWrapper}>
                        {feature.icon}
                    </div>
                </div>
                <h3 className="fs-4 fw-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white-50 mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="col-lg-4 col-md-6">
            <div className={`${styles.comingSoonCard} h-100 p-4 d-flex flex-column justify-content-center`}>
                 <h3 className="fs-4 fw-bold text-white mb-2">More on the way...</h3>
                <p className="text-white-50 mb-0">We're working hard on new features to make your experience even better. Stay tuned!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;