import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import './App.css';
import Home from './Home';
import './fonts/stylesheet.css';
import Header from './component/Header/Index';
import Contact from './component/Contact/Index';
import Project from './Project';
import Error from './Error';
import ProjectDetail from "./ProjectDetail";
import ScrollToTop from "./ScrollToTop";

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
          <Route exact path="/projects" element={<Project />} />
          <Route path="/projects/:cat" element={<Project />} />
          <Route exact path="/projects/:cat/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <FooterWithDelay />
      </Router>
    </>
  );
}

function HeaderWithCondition() {
  const location = useLocation();
  const isSlugPage = location.pathname.startsWith('/projects/') && location.pathname.split('/').length === 4;
  const headerClass = isSlugPage ? 'proHeaderClass' : '';
  return <Header className={headerClass} />;
}

function FooterWithDelay() {
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/projects") {
      const timer = setTimeout(() => {
        setShowContact(true);
      }, 1000); 

      return () => clearTimeout(timer); 
    }
  }, [location.pathname]);

  return showContact ? <Contact /> : null;
}

export default App;
