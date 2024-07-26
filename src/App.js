import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./App.css";
import Home from "./Home";
import "./fonts/stylesheet.css";
import Header from "./component/Header/Index";
import Contact from "./component/Contact/Index";
import Project from "./Project";
import Error from "./Error";
import ProjectDetail from "./ProjectDetail";
import ScrollToTop from "./ScrollToTop";
import Content from "./Content";
import NRI from "./NRI";
import ContactPage from "./ContactPage";
import Media from "./Media";
import AboutHS from "./AboutHS";
import Construction from "./Consturction";
import Adcampaign from "./Adcampaign";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderWithCondition />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home-and-soul" element={<AboutHS />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/projects/:cat" element={<Project />} />
          <Route
            exact
            path="/projects/:cat/:slug"
            element={<ProjectDetail />}
          />
          <Route exact path="/construction/:slug" element={<Construction />} />
          <Route exact path="/:slug" element={<Content />} />
          <Route exact path="/nri" element={<NRI />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/media/ad-campaign" element={<Adcampaign />} />
          <Route exact path="/contact-us" element={<ContactPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

function HeaderWithCondition() {
  const location = useLocation();
  const isSlugPage =
    location.pathname.startsWith("/projects/") &&
    location.pathname.split("/").length === 4;
  const headerClass = isSlugPage ? "proHeaderClass" : "";
  return <Header className={headerClass} />;
}

function Footer() {
  const location = useLocation();
  const excludedPaths = ["/projects", "/contact-us", "/construction"];

  const shouldShowContact = excludedPaths.every(
    (path) => !location.pathname.startsWith(path)
  );

  return shouldShowContact ? <Contact /> : null;
}
export default App;
