import React from "react";
import styles from "./resource.module.css";
import { FaArrowRight } from "react-icons/fa";

// Mock data for your resources. You can easily replace this with real data from a CMS or API.
// Mock data for your resources with corrected, more thematic image links.
const resourcesList = [
  {
    category: "GUIDE",
    title: "Getting Started with Z-Dot Apps",
    description: "A comprehensive walkthrough of all the features to get you up and running in no time.",
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    category: "ARTICLE",
    title: "The Power of AI in Document Summarization",
    description: "Explore how artificial intelligence is revolutionizing the way we interact with large documents.",
    // Corrected Link: A more relevant image representing abstract AI / neural networks.
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    category: "TIPS & TRICKS",
    title: "5 Advanced Queries for Chatting with Your Docs",
    description: "Unlock deeper insights by learning how to ask the right questions to our document chat AI.",
    // Corrected Link: An image that better represents data, queries, and insights.
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

const Resource = () => {
  return (
    <section className={styles.resourceSection}>
      <div className="container">
        <div className="text-center mb-5 pb-3">
          <h1 className="display-4 fw-bold text-white mb-3">Resources</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            Guides, articles, and insights to help you get the most out of our platform.
          </p>
        </div>

        <div className="row g-4">
          {resourcesList.map((resource, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <a href={resource.link} className={styles.cardLink}>
                <div className={`${styles.card} h-100 d-flex flex-column`}>
                  <img
                    src={resource.imageUrl}
                    alt={resource.title}
                    className={styles.cardImage}
                  />
                  <div className={`${styles.cardBody} d-flex flex-column`}>
                    <p className={styles.cardCategory}>{resource.category}</p>
                    <h3 className={styles.cardTitle}>{resource.title}</h3>
                    <p className={styles.cardDescription}>{resource.description}</p>
                    <div className={`${styles.readMoreLink} mt-auto`}>
                      Read More <FaArrowRight className="ms-2" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resource;