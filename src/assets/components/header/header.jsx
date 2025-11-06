import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/zdotapps.png";
import styles from "./header.module.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavigate = (path) => {
    navigate(path);
    setActiveDropdown(null); // Close dropdown after navigation
  };

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { 
      label: "Studios", 
      dropdown: [
        { label: "Web Studio", path: "/studios/web" },
        { label: "App Studio", path: "/studios/app_studio" },
        { label: "Agent Studio", path: "/studios/agentic_studio" },
      ]
    },
    { label: "Products", path: "/products" },
    { label: "Pricing", path: "/pricing" },
    { label: "Resources", path: "/resource" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <header
      ref={headerRef}
      className={`navbar navbar-expand-lg navbar-light border-bottom py-3 fixed-top ${styles.glassmorphismHeader}`}
    >
      <div className="container">
        {/* Logo */}
        <a
          href="#"
          className="navbar-brand d-flex align-items-center"
          onClick={() => handleNavigate("/")}
        >
          <img src={logo} alt="Zdotapps" width={110} className="img-fluid" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-6">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`nav-item mx-lg-2 ${
                  item.dropdown ? "dropdown" : ""
                }`}
              >
                {!item.dropdown ? (
                  <a
                    href="#"
                    className={`nav-link ${
                      isActive(item.path) ? "fw-bold" : ""
                    } text-dark`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.path);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    {/* Dropdown Trigger */}
                    <a
                      href="#"
                      className="nav-link dropdown-toggle text-dark"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownToggle(item.label);
                      }}
                    >
                      {item.label}
                    </a>

                    {/* Horizontal Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <ul className={`dropdown-menu border-0 shadow-sm rounded-3 ${styles.horizontalDropdown} ${styles.show}`}>
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label} className={styles.horizontalDropdownItem}>
                            <a
                              href="#"
                              className={`dropdown-item ${styles.yellowHighlight} ${
                                isActive(subItem.path) ? styles.active : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigate(subItem.path);
                              }}
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-warning rounded-pill px-4 py-2 text-dark fw-semibold"
              onClick={() => handleNavigate("/login")}
            >
              Login / Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;