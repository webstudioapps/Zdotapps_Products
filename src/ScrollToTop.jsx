// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset instantly without animation
    window.history.scrollRestoration = "manual";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"   // 👈 no smooth animation
    });
  }, [pathname]);

  return null;
}
