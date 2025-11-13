import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./assets/components/header/header";
import ScrollToTop from "./ScrollToTop";
import Home1 from "./assets/Pages/home/section1/home";
import Home2 from "./assets/Pages/home/section2/home";
import Home3 from "./assets/Pages/home/section3/home";
import Home4 from "./assets/Pages/home/section4/home";
import Home5 from "./assets/Pages/home/section5/home";
import Home6 from "./assets/Pages/home/section6/home";
import Features from "./assets/Pages/features/features";
import Footer from "./assets/components/footer/footer";
import Products from "./assets/Pages/products/products";
import Login from "./assets/Pages/login/login";
import ZFlow from "./assets/Pages/products/z.flow/z.flow";
import Zhire from "./assets/Pages/products/z.hire/hire";
import Resource from "./assets/Pages/resource/resource";
import About from "./assets/Pages/about/about";
import Careers from "./assets/Pages/careers/careers";
import JobDetails from "./assets/Pages/details/details";
import Zengage from "./assets/Pages/products/z.engage/z.engage";
import Ziot from "./assets/Pages/products/z.iot/z.iot";
import Zmerit from "./assets/Pages/products/z.merit/z.merit";
import Zqui from "./assets/Pages/products/z.qui/z.qui";
import Zgames from "./assets/Pages/products/z.games/z.games";
import Zauth from "./assets/Pages/products/z.auth/z.auth";
import GiDER from "./assets/Pages/products/giDER/giDER";
import Zsign from "./assets/Pages/products/z.sign/z.sign";
import Zform from "./assets/Pages/products/z.form/z.form";
import Zbox from "./assets/Pages/products/z.box/z.box";
import ZappsLanding from "./assets/Pages/home/zappsLanding";
import ContactPage from "./assets/Pages/contact/ContactPage";
import Kiraaze from "./assets/Pages/home/kiraaze/kiraaze";
import Ready from "./assets/Pages/ready/ready"
import WebStudio from "./assets/Pages/web/web";
import CustomUse from "./assets/Pages/customized_use/custom_use";
import AppStudio from "./assets/Pages/app_studio/app_studio";
import AgenticStudio from "./assets/Pages/agentic_studio/agentic_studio";
import WelcomeSoon from "./assets/Pages/products/welcomesoon/welcomesoon";

// ✅ Wrapper to show header/footer everywhere except login page
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname.endsWith("/login");
  const isDetailsPage = location.pathname.includes("/careers/details");

  if (isLoginPage || isDetailsPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router basename="/dev/zdotapps_products/">
      <div className="App">
        <LayoutWrapper>
          <ScrollToTop />
          <Routes>
            {/* Home */}
            <Route path="/" element={<ZappsLanding />} />
            
            <Route path="features" element={<Features />} />
            <Route path="products" element={<Products />} />
            <Route path="resource" element={<Resource />} />
            <Route path="careers" element={<Careers />} />
            <Route path="careers/details" element={<JobDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="z.engage" element={<Zengage />} />
            <Route path="z.merit" element={<Zmerit />} />
            <Route path="z.iot" element={<Ziot />} />
            <Route path="z.flow" element={<ZFlow />} />
            <Route path="z.games" element={<Zgames />} />
            <Route path="z.auth" element={<Zauth />} />
            <Route path="z.hire" element={<Zhire />} />
            <Route path="giDER" element={<GiDER />} />
            <Route path="z.sign" element={<Zsign />} />
            <Route path="z.qui" element={<Zqui />} />
            <Route path="z.form" element={<Zform />} />
            <Route path="z.box" element={<Zbox />} />
            <Route path="zapps" element={<ZappsLanding />} />
            <Route path="kiraaze" element={<Kiraaze />} />
            <Route path="ready" element={<Ready/>}/>
            <Route path="studios/web" element={<WelcomeSoon />} />
            <Route path="studios/web/custom-build" element={<CustomUse />} />
            <Route path="studios/app_studio" element={<WelcomeSoon />} />
            <Route path="studios/agentic-studio" element={<AgenticStudio />} />
            <Route path="studios/agentic_studio" element={<AgenticStudio />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="coming-soon" element={<WelcomeSoon />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </Router>
  );
}

export default App;
