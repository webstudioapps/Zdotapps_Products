import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import { useNavigate } from "react-router-dom";

// Import images
import giderImage from "../../images/gider_black.png";
import zengageImage from "../../images/engage.png";
import zflowImage from "../../images/flow.png";
import zhireImage from "../../images/hire.png";
import zmeritImage from "../../images/merit.png";
import zgamesImage from "../../images/games.png";
import zauthImage from "../../images/auth.png";
import kiraazee from "../../images/kirazee_new.png";
import quiImage from "../../images/qui.png";
import signImage from "../../images/sign.png";
import formsImage from "../../images/forms.png";
import boxImage from "../../images/box.png";

// Product list
const productList = [
  {
    name: "z.engage",
    desc: "Engagement app for everyone's requirements",
    img: zengageImage,
    btn: "Know More",
    link: "/z.engage",
  },
  {
    name: "z.flow",
    desc: "Streamlined workflow and project management solutions",
    img: zflowImage,
    btn: "Know More",
    link: "/z.flow",
  },
  {
    name: "z.hire",
    desc: "Hiring platform for smarter recruitment",
    img: zhireImage,
    btn: "Know More",
    link: "/z.hire",
  },
  {
    name: "z.merit",
    desc: "Skill testing and evaluation made simple",
    img: zmeritImage,
    btn: "Know More",
    link: "/z.merit",
  },
  {
    name: "z.games",
    desc: "Interactive social games for individuals and teams",
    img: zgamesImage,
    btn: "Know More",
    link: "/z.games",
  },
  {
    name: "z.auth",
    desc: "Secure authentication for enterprises",
    img: zauthImage,
    btn: "Know More",
    link: "/z.auth",
  },
  {
    name: "Kirazee",
    desc: "Unified Platform for Kirana Stores",
    img: kiraazee,
    btn: "Know More",
    link: "/z.iot",
  },
  {
    name: "giDER",
    desc: "Project execution app for tangible results",
    img: giderImage,
    btn: "Know More",
    link: "/giDER",
  },
  {
    name: "z.qui",
    desc: "Quizzes for instant engagement",
    img: quiImage,
    btn: "Know More",
    link: "/z.qui",
  },
  {
    name: "Z.SIGN",
    desc: "Secure digital signatures on business documents",
    img: signImage,
    btn: "Know More",
    link: "/z.sign",
  },
  {
    name: "z.forms",
    desc: "Interactive online forms for businesses",
    img: formsImage,
    btn: "Know More",
    link: "/z.form",
  },
  {
    name: "Z.Box",
    desc: "Secure file storage and collaboration platform",
    img: boxImage,
    btn: "Know More",
    link: "/z.box",
  },
];

// ✅ Category Mapping — Custom logic you specified
const categoryMap = {
  Engagement: ["z.engage"],
  Productivity: ["z.flow", "giDER"],
  Merit: ["z.merit", "z.hire"],
  Hiring: ["z.hire", "z.merit"],
  Security: ["Z.Box", "z.sign"],
  Business: ["z.forms", "Kirazee"],
  "E-Commerce": ["Kirazee"],
};

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const navigate = useNavigate();

  const categories = ["All", ...Object.keys(categoryMap)];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let current = productList;

    // Apply category filter
    if (filterCategory !== "All") {
      const productsInCategory = categoryMap[filterCategory] || [];
      current = current.filter((p) => productsInCategory.includes(p.name));
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      current = current.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(current);
  }, [searchTerm, filterCategory]);

  const handleClick = (product) => {
    if (!product.link) {
      alert(`${product.name} Coming Soon!`);
      return;
    }

    if (product.link.startsWith("http")) {
      window.location.href = product.link;
    } else {
      navigate(product.link);
    }
  };

  return (
    <section className={styles.productsSection}>
      {/* Hero Section */}
      <section className={styles.homeSection}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-md-11">
              <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
                The AI suite that powers your{" "}
                <span className={styles.highlightText}>business</span>
              </h1>
              <div className={styles.underline}></div>

              {/* Search + Filter */}
              <div className={styles.controlsContainer}>
                <div className={styles.searchBox}>
                  <i
                    className={`fa fa-search ${styles.searchIcon}`}
                    aria-hidden="true"
                  ></i>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  className={styles.filterSelect}
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="container">
        <div className="row g-4 justify-content-center py-5">
          <div className="col-12 text-center">
            <h1 className={`${styles.homeTitle} display-3 fw-bold mb-4`}>
              Explore our <span className={styles.highlightText}>products</span>
            </h1>
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
                key={product.name}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
                onClick={() => handleClick(product)}
              >
                <article
                  className={`${styles.card} h-100 d-flex flex-column align-items-center text-center`}
                >
                  <div className={styles.cardInner}>
                    {product.img && (
                      <div className={styles.imageContainer}>
                        <img
                          src={product.img}
                          className={styles.productImage}
                          alt={product.name}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://cdn-icons-png.flaticon.com/512/1178/1178475.png";
                          }}
                        />
                      </div>
                    )}
                    <p className={styles.description}>{product.desc}</p>

                    <div className={styles.ctaWrapper}>
                      <button
                        className={styles.ctaCircle}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClick(product);
                        }}
                      >
                        <span
                          style={{ color: "#EFC426" }}
                          className={`${styles.icon} ${styles.arrow}`}
                        ></span>
                      </button>

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleClick(product);
                        }}
                        className={styles.tryNowTextLink}
                      >
                        Try Now
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className={styles.noResults}>
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
