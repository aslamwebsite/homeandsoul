import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { menuSlide, slide} from '../animation';
import Curve from './Curve';
import Logo from '../../../images/400x400.webp';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/home-and-shoul",
  },
  {
    title: "Townships",
    href: "/projects/townships",
  },
  {
    title: "Homes",
    href: "/projects/homes",
  },
  {
    title: "Commercial",
    href: "/projects/commercial",
  },
  {
    title: "Career",
    href: "/career",
  },
  {
    title: "Media",
    href: "/media",
  },
  {
    title: "CSR",
    href: "/csr ",
  },
  {
    title: "NRI",
    href: "/nri",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  }
];

const Nav = ({ setIsActive, toggleMenu, isActive }) => {  
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleNavLinkClick = (href) => {
    setSelectedIndicator(href);
    setIsActive(false); 
  };

  const handleSubChildClick = (e, href) => {
    e.stopPropagation(); 
    setSelectedIndicator(href);
    setIsActive(false);
  };

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={`${styles.body} slideMenu`}>
          <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
            <ul>
            {navItems.map((data, index) => (
              <li
                key={data.href}
                className={styles.link}
                onMouseEnter={() => setSelectedIndicator(data.href)}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
             <NavLink
                  to={data.href}
                  onClick={() => handleNavLinkClick(data.href)}
                >
                  {data.title}
                </NavLink>
              </li>
            ))}
            </ul>
              {/* <ul className={styles.subChildmenu}>
                <li><NavLink to='/contact-us' onClick={(e) => handleSubChildClick(e, '/contact-us')}>Contact Us</NavLink></li>
              </ul> */}
          </div>
        </div>
        <div className='sideLogo'>
            <img src={Logo} alt='Home & Soul'/>
          </div>
        <div className={styles.headerButtonContainer}>
          <div onClick={toggleMenu} className={`${styles.button}`}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>  
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
};

export default Nav;
