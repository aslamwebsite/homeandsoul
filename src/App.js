import './App.css';
import Home from './Home'
import './fonts/stylesheet.css'
import Header from './component/Header/Index'
import Contact from './component/Contact/Index'
import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <Router>
    <Header />
      <Home />
      <Contact />
      </Router >
    </>
  );
}

export default App;
